import sys
import glob
import os
import re
import json
from html.parser import HTMLParser

class StandardDocParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.blocks = []
        self.cur_block = None
        self.cur_tag = None
        self.cur_opt = None

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        cls = d.get('class', '')
        if 'qblock' in cls or 'qtext' in cls:
            if self.cur_block and self.cur_block['title']:
                self.blocks.append(self.cur_block)
            self.cur_block = {'title': [], 'opts': [], 'explain': []}
            self.cur_tag = 'title'
        elif 'opt' in cls and self.cur_block:
            self.cur_tag = 'opt'
            self.cur_opt = {'cls': cls, 'text': []}
            self.cur_block['opts'].append(self.cur_opt)
        elif 'explain' in cls and self.cur_block:
            self.cur_tag = 'explain'

    def handle_data(self, data):
        data = data.strip()
        if not data or not self.cur_block:
            return
        if self.cur_tag == 'title':
            self.cur_block['title'].append(data)
        elif self.cur_tag == 'opt' and self.cur_opt:
            self.cur_opt['text'].append(data)
        elif self.cur_tag == 'explain':
            self.cur_block['explain'].append(data)

    def close(self):
        super().close()
        if self.cur_block and self.cur_block['title']:
            self.blocks.append(self.cur_block)

def parse_doc_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        p = StandardDocParser()
        p.feed(f.read())
        p.close()
        return p.blocks

def clean_text(text):
    return re.sub(r'\s+', ' ', text).strip()

def clean_title(title_list):
    full = clean_text(' '.join(title_list))
    full = re.sub(r'^(Câu\s+hỏi\s+\d+|Câu\s+\d+:?|Question\s+\d+:?)\s*', '', full, flags=re.IGNORECASE)
    return full.strip()

def process_question(b):
    title = clean_title(b['title'])
    if not title:
        return None
        
    opts = []
    correct_idx = -1
    for opt in b['opts']:
        cls = opt['cls']
        raw = ' '.join(opt['text'])
        is_corr = ('correct' in cls or 'selectedright' in cls or bool(re.search(r'\[(Đáp án đúng|DAP AN DUNG|BAN DA CHON - DUNG)\]', raw, re.IGNORECASE)))
        cleaned = re.sub(r'^\s*[a-dA-D1-4][\.\)]\s*', '', raw)
        cleaned = re.sub(r'\s*\[(Thí sinh đã chọn|Đáp án đúng|DAP AN DUNG|BAN DA CHON - DUNG|BAN DA CHON - SAI)\]', '', cleaned, flags=re.IGNORECASE)
        cleaned = clean_text(cleaned)
        if is_corr and correct_idx == -1:
            correct_idx = len(opts)
        opts.append(cleaned)
        
    explain = clean_text(' '.join(b['explain']))
    explain = re.sub(r'^(Lời\s+giải:\s*|Loi\s+giai:\s*)', '', explain, flags=re.IGNORECASE).strip()
    
    if len(opts) != 4 or correct_idx == -1 or correct_idx >= 4:
        return None
        
    # Extract Vietnamese question translation if embedded in explanation
    q_vi = title
    m_vi = re.search(r'(?:refer\s+\d+\.\d+(?:\.\d+)?\s+)?([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬĐÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴ].*?\?)', explain)
    if m_vi:
        extracted = m_vi.group(1).strip()
        if len(extracted) > 15:
            q_vi = extracted

    return {
        'questionEn': title,
        'questionVi': q_vi,
        'options': [{'en': o, 'vi': o} for o in opts],
        'correctEn': opts[correct_idx],
        'correctVi': opts[correct_idx],
        'explanation': explain
    }

def normalize_key(title):
    return re.sub(r'[^a-zA-Z0-9]', '', title).lower()[:100]

def classify_by_keyword(text):
    t = text.lower()
    ch_scores = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    if re.search(r'\b(test objective|fundamental test|test principle|why is testing necessary|error, defect|failure|test role|tester independence|quality control|quality assurance|debugging|test process)\b', t): ch_scores[1] += 2
    if re.search(r'\b(sdlc|v-model|agile|component test|integration test|system test|acceptance test|functional test|non-functional|maintenance test|confirmation test|regression|shift-left|tdd|atdd|bdd)\b', t): ch_scores[2] += 2
    if re.search(r'\b(static test|review|inspection|walkthrough|informal review|technical review|static analysis|reviewer|moderator|scribe|author|peer review)\b', t): ch_scores[3] += 2
    if re.search(r'\b(equivalence partition|boundary value|decision table|state transition|statement coverage|branch coverage|white-box|black-box|experience-based|exploratory|error guessing|checklist-based|use case testing)\b', t): ch_scores[4] += 2
    if re.search(r'\b(test plan|test estimation|risk|product risk|project risk|entry criteria|exit criteria|test metric|defect management|configuration management|test summary report|test progress)\b', t): ch_scores[5] += 2
    if re.search(r'\b(test tool|tool support|test automation|execution tool|management tool|performance testing tool|test comparator|monitoring tool)\b', t): ch_scores[6] += 2
    best_ch = max(ch_scores, key=ch_scores.get)
    return best_ch if ch_scores[best_ch] > 0 else 1

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dataset_dir = os.path.join(root_dir, 'ISTQB 8.2026_2')
    out_dir = os.path.join(root_dir, 'src', 'data', 'questions')
    
    seen_keys = set()
    chapter_questions = {1: [], 2: [], 3: [], 4: [], 5: [], 6: []}

    # 1. Process De theo chuong
    chuong_files = sorted(glob.glob(os.path.join(dataset_dir, 'F2026_ Đề theo chương', '*.doc')))
    for f in chuong_files:
        m = re.search(r'chuong_?(\d)|chapter_?(\d)', os.path.basename(f), re.IGNORECASE)
        ch_num = int(m.group(1) or m.group(2)) if m else 1
        blocks = parse_doc_file(f)
        for b in blocks:
            q = process_question(b)
            if q:
                k = normalize_key(q['questionEn'])
                if k not in seen_keys:
                    seen_keys.add(k)
                    chapter_questions[ch_num].append(q)

    # 2. Process De thi tong hop
    tonghop_files = sorted(glob.glob(os.path.join(dataset_dir, 'F 2026_ Đề thi tổng hợp', '*.doc')))
    for f in tonghop_files:
        blocks = parse_doc_file(f)
        for b in blocks:
            q = process_question(b)
            if q:
                k = normalize_key(q['questionEn'])
                if k not in seen_keys:
                    seen_keys.add(k)
                    exp = q['explanation']
                    full_text = q['questionEn'] + ' ' + exp
                    m = re.search(r'(?:refer|chapter|chương|chuong|ch)\s*\.?\s*([1-6])[\s\.\:\,\-]', exp, re.IGNORECASE)
                    if not m:
                        m = re.search(r'FL-?([1-6])\.', exp, re.IGNORECASE)
                    if m:
                        ch_num = int(m.group(1))
                    else:
                        ch_num = classify_by_keyword(full_text)
                    chapter_questions[ch_num].append(q)

    total_count = 0
    os.makedirs(out_dir, exist_ok=True)
    
    for ch in range(1, 7):
        q_list = chapter_questions[ch]
        total_count += len(q_list)
        file_path = os.path.join(out_dir, f'chapter-{ch}.json')
        with open(file_path, 'w', encoding='utf-8') as fp:
            json.dump(q_list, fp, ensure_ascii=False, indent=2)
        print(f'Wrote chapter-{ch}.json: {len(q_list)} questions')

    print(f'Total questions imported: {total_count}')

if __name__ == '__main__':
    main()
