/**
 * Generates 500 bilingual MCQs for ISTQB CT-AI v2.0 practice (MiniQuiz + Exam).
 * Pedagogical themes align with syllabus chapters 1–7; wording is original practice material,
 * inspired by topics covered in `ISTQB_CTAI_V2.0_SampleExam-Questions.md` (not copied verbatim).
 *
 * Run: node scripts/gen-ctai-quiz-bank.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "src", "data", "questions");

/** Mulberry32 PRNG */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rnd) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Build QuizQuestion with options shuffled deterministically */
function buildQ(seed, { questionEn, questionVi, correct, wrongs, explanation }) {
  const rnd = mulberry32(seed);
  const opts = shuffle([correct, ...wrongs], rnd);
  return {
    questionEn,
    questionVi,
    options: opts.map((o) => ({ en: o.en, vi: o.vi })),
    correctEn: correct.en,
    correctVi: correct.vi,
    explanation,
  };
}

const intros = [
  { en: "Which of the following statements is MOST accurate?", vi: "Phát biểu nào sau đây là CHÍNH XÁC NHẤT?" },
  { en: "Which statement BEST matches ISTQB CT-AI syllabus concepts?", vi: "Phát biểu nào NHẤT phù hợp với khái niệm trong giáo trình ISTQB CT-AI?" },
  { en: "Select the BEST answer.", vi: "Chọn đáp án TỐT NHẤT." },
  { en: "Which option is TRUE regarding AI-based systems and testing?", vi: "Ý nào ĐÚNG về hệ thống dựa trên AI và kiểm thử?" },
];

function pickIntro(rnd) {
  return intros[Math.floor(rnd() * intros.length)];
}

function explainSimple(topicEn, topicVi) {
  return `* **Đúng / Correct:** Aligns with ${topicEn}.\n* **Ôn / Study:** ${topicVi}`;
}

/**
 * Template: returns base question fields; intros applied per variant seed.
 * wrongs: exactly 3 distractors.
 */
const CHAPTER_TEMPLATES = [
  // ----- Chapter 1: Introduction to AI -----
  [
    {
      topicEn: "conventional vs AI-based systems",
      topicVi: "hệ thống truyền thống so với hệ dựa trên AI",
      correct: {
        en: "AI-based systems often learn patterns from data and may behave probabilistically, while conventional systems typically follow explicit deterministic logic.",
        vi: "Hệ dựa trên AI thường học quy luật từ dữ liệu và có thể hành xử xác suất, còn hệ truyền thống thường theo logic tường minh và deterministic.",
      },
      wrongs: [
        {
          en: "Conventional systems always learn from operational logs exactly like supervised ML models.",
          vi: "Hệ truyền thống luôn học từ log vận hành giống hệt mô hình ML có giám sát.",
        },
        {
          en: "AI-based systems must always be fully explainable by inspecting each line of imperative source code.",
          vi: "Hệ AI luôn phải giải thích đầy đủ chỉ bằng cách đọc từng dòng mã mệnh lệnh.",
        },
        {
          en: "Probabilistic reasoning applies only to conventional transaction systems, never to ML components.",
          vi: "Suy luận xác suất chỉ áp dụng cho hệ giao dịch truyền thống, không bao giờ cho thành phần ML.",
        },
      ],
    },
    {
      topicEn: "narrow, general, and super AI",
      topicVi: "narrow AI, general AI và super AI",
      correct: {
        en: "Narrow AI targets specific tasks; general AI remains theoretical today; super AI describes hypothetical superintelligence beyond humans.",
        vi: "Narrow AI phục vụ nhiệm vụ cụ thể; general AI hiện vẫn mang tính lý thuyết; super AI mô tả siêu trí thông minh giả thuyết vượt con người.",
      },
      wrongs: [
        {
          en: "General AI is deployed widely today in every production LLM without restrictions.",
          vi: "General AI đã triển khai rộng rãi hôm nay trong mọi LLM production không hạn chế.",
        },
        {
          en: "Super AI is synonymous with narrow AI used for spam filtering.",
          vi: "Super AI đồng nghĩa với narrow AI dùng để lọc spam.",
        },
        {
          en: "Frontier GenAI proves general AI already passes every human intellectual task reliably.",
          vi: "GenAI frontier chứng minh general AI đã vượt mọi nhiệm trí tuệ của người một cách tin cậy.",
        },
      ],
    },
    {
      topicEn: "AI technology hierarchy (AI ⊃ ML ⊃ DL)",
      topicVi: "phân cấp công nghệ AI ⊃ ML ⊃ DL",
      correct: {
        en: "Machine learning is a branch of AI; deep learning is typically a subset of ML using deep neural networks.",
        vi: "Học máy là nhánh của AI; học sâu thường là tập con của ML dùng mạng nơ-ron sâu.",
      },
      wrongs: [
        {
          en: "Deep learning is the outer umbrella that fully replaces AI and ML as separate fields.",
          vi: "Deep learning là ô lớn nhất thay thế hoàn toàn AI và ML như các lĩnh vực riêng.",
        },
        {
          en: "AI and ML are interchangeable labels with identical scope in the syllabus.",
          vi: "AI và ML là nhãn hoán đổi được với phạm vi giống hệt trong giáo trình.",
        },
        {
          en: "Unsupervised clustering cannot be considered part of machine learning.",
          vi: "Phân cụm không giám sát không được xem là một phần của học máy.",
        },
      ],
    },
    {
      topicEn: "generative AI (GenAI)",
      topicVi: "generative AI (GenAI)",
      correct: {
        en: "GenAI systems learn from data to synthesize new content (text, images, audio, video) similar in nature to training examples.",
        vi: "Hệ GenAI học từ dữ liệu để tổng hợp nội dung mới (văn bản, hình, âm thanh, video) có bản chất tương tự ví dụ huấn luyện.",
      },
      wrongs: [
        {
          en: "GenAI only performs deterministic sorting of legacy relational tables.",
          vi: "GenAI chỉ thực hiện sắp xếp deterministic các bảng quan hệ cũ.",
        },
        {
          en: "GenAI cannot support classification or prediction tasks by design.",
          vi: "GenAI theo thiết kế không thể hỗ trợ phân loại hay dự đoán.",
        },
        {
          en: "Diffusion models and transformers play no role in modern GenAI pipelines.",
          vi: "Mô hình diffusion và transformer không đóng vai trò trong pipeline GenAI hiện đại.",
        },
      ],
    },
    {
      topicEn: "hardware for ML workloads",
      topicVi: "phần cứng cho khối lượng công việc ML",
      correct: {
        en: "GPUs accelerate parallel tensor math common in training and inference of neural networks; CPUs remain useful for general orchestration.",
        vi: "GPU tăng tốc phép toán tensor song song thường gặp khi huấn luyện và suy luận mạng nơ-ron; CPU vẫn hữu ích cho điều phối chung.",
      },
      wrongs: [
        {
          en: "CPUs are universally faster than GPUs for every large neural network training job.",
          vi: "CPU luôn nhanh hơn GPU cho mọi tác vụ huấn luyện mạng nơ-ron lớn.",
        },
        {
          en: "ASICs are mandated for every exploratory Jupyter notebook on a laptop.",
          vi: "ASIC bắt buộc cho mọi notebook Jupyter khám phá trên laptop.",
        },
        {
          en: "Edge devices never run quantized or distilled ML models.",
          vi: "Thiết biện không bao giờ chạy mô hình ML đã lượng tử hóa hay distill.",
        },
      ],
    },
    {
      topicEn: "development and hosting options",
      topicVi: "phương án phát triển và hosting",
      correct: {
        en: "Hybrid approaches may keep sensitive preprocessing on-premises while scaling training or serving in controlled cloud environments.",
        vi: "Cách tiếp cận hybrid có thể giữ tiền xử lý nhạy cảm on-prem trong khi mở rộng huấn luyện hoặc phục vụ trên cloud có kiểm soát.",
      },
      wrongs: [
        {
          en: "Public cloud hosting mathematically guarantees identical security posture for every dataset without governance.",
          vi: "Hosting đám công cộng đảm bảo toán học cùng mức an toàn cho mọi tập dữ liệu không cần quản trị.",
        },
        {
          en: "Hybrid models forbid any use of cloud GPUs under all regulatory regimes.",
          vi: "Mô hình hybrid cấm mọi việc dùng GPU cloud trong mọi khung quy định.",
        },
        {
          en: "Local laptops alone remove the need for reproducible experiment tracking.",
          vi: "Chỉ laptop cục bộ là loại bỏ nhu cầu theo dõi thí nghiệm có thể tái lập.",
        },
      ],
    },
    {
      topicEn: "ML frameworks",
      topicVi: "framework ML",
      correct: {
        en: "Major frameworks provide tensor APIs, automatic differentiation, data loaders, and integrations for training and exporting models.",
        vi: "Framework lớn cung cấp API tensor, vi phân tự động, bộ nạp dữ liệu và tích hợp huấn luyện/xuất mô hình.",
      },
      wrongs: [
        {
          en: "Frameworks replace the need for validation datasets and independent testing.",
          vi: "Framework thay thế nhu cầu tập validation và kiểm thử độc lập.",
        },
        {
          en: "Framework choice eliminates regulatory obligations such as traceability or documentation.",
          vi: "Chọn framework loại bỏ nghĩa vụ quy định như truy xuất hay tài liệu hóa.",
        },
        {
          en: "All frameworks enforce identical hyperparameter defaults optimal for every domain.",
          vi: "Mọi framework áp mặc định siêu tham số giống nhau và tối ưu cho mọi miền.",
        },
      ],
    },
    {
      topicEn: "regulations and standards affecting AI testing",
      topicVi: "quy định và chuẩn ảnh hưởng kiểm thử AI",
      correct: {
        en: "Regulations and standards influence evidence expectations: documentation, risk class, transparency, logging, and lifecycle controls.",
        vi: "Quy định và chuẩn ảnh hưởng kỳ vọng bằng chứng: tài liệu, phân loại rủi ro, minh bạch, logging và kiểm soát vòng đời.",
      },
      wrongs: [
        {
          en: "EU AI Act concepts remove the need for statistical acceptance criteria.",
          vi: "Khái niệm EU AI Act loại bỏ nhu cầu tiêu chí nghiệm thu thống kê.",
        },
        {
          en: "ISO/IEC 23894 forbids any adversarial or metamorphic testing technique.",
          vi: "ISO/IEC 23894 cấm mọi kỹ thuật kiểm thử đối kháng hay biến hình.",
        },
        {
          en: "Risk-based testing becomes irrelevant once a model achieves high accuracy on validation data.",
          vi: "Kiểm thử theo rủi ro trở nên không liên quan khi mô hình đạt độ chính xác cao trên validation.",
        },
      ],
    },
  ],
  // ----- Chapter 2: Quality characteristics -----
  [
    {
      topicEn: "ISO/IEC 25059 AI functional correctness",
      topicVi: "ISO/IEC 25059 — AI functional correctness",
      correct: {
        en: "AI functional correctness accepts bounded incorrect outputs using thresholds appropriate to probabilistic ML behaviour.",
        vi: "AI functional correctness chấp nhận đầu ra sai trong ngưỡng phù hợp hành vi ML xác suất.",
      },
      wrongs: [
        {
          en: "AI functional correctness demands mathematically perfect outputs for every inference call.",
          vi: "AI functional correctness đòi đầu ra hoàn hảo toán học cho mọi lần suy luận.",
        },
        {
          en: "Thresholds are forbidden when discussing ISO/IEC 25059 acceptance.",
          vi: "Không được dùng ngưỡng khi bàn nghiệm thu ISO/IEC 25059.",
        },
        {
          en: "Functional correctness ignores operational misuse scenarios entirely.",
          vi: "Đúng chức năng bỏ qua hoàn toàn kịch bản lạm dụng vận hành.",
        },
      ],
    },
    {
      topicEn: "functional adaptability",
      topicVi: "functional adaptability",
      correct: {
        en: "Functional adaptability reflects autonomous adjustment of an AI-based system after deployment to shifting operational conditions.",
        vi: "Functional adaptability phản ánh khả năng điều chỉnh tự trị sau triển khai khi điều kiện vận hành thay đổi.",
      },
      wrongs: [
        {
          en: "Functional adaptability means humans rewrite every rule weekly without automation.",
          vi: "Functional adaptability nghĩa là con người viết lại mọi quy tắc hàng tuần không tự động.",
        },
        {
          en: "Adaptability removes monitoring obligations once accuracy exceeds 95%.",
          vi: "Khả năng thích ứng loại bỏ nghĩa vụ giám sát khi độ chính xác > 95%.",
        },
        {
          en: "Adaptability only applies to hardware firmware, never ML policies.",
          vi: "Thích ứng chỉ áp dụng firmware phần cứng, không cho chính sách ML.",
        },
      ],
    },
    {
      topicEn: "user controllability vs intervenability",
      topicVi: "user controllability và intervenability",
      correct: {
        en: "User controllability supports timely human override of AI behaviour; intervenability (security-related) focuses on preventing harm via operator intervention.",
        vi: "User controllability hỗ trợ con người ghi đè kịp thời hành AI; intervenability (góc an ninh) tập trung ngăn hại qua can thiệp vận hành.",
      },
      wrongs: [
        {
          en: "Intervenability implies testers never document rollback paths.",
          vi: "Intervenability có nghĩa kiểm thử không bao giờ tài liệu hóa đường rollback.",
        },
        {
          en: "User controllability forbids kill switches during inference.",
          vi: "User controllability cấm kill switch trong suy luận.",
        },
        {
          en: "Both terms refer exclusively to GPU thermal throttling metrics.",
          vi: "Cả hai thuật ngữ chỉ chỉ số thermal throttle của GPU.",
        },
      ],
    },
    {
      topicEn: "AI robustness",
      topicVi: "AI robustness",
      correct: {
        en: "AI robustness addresses maintaining acceptable correctness under noisy inputs, adversarial perturbations, interference, or misuse attempts.",
        vi: "AI robustness giữ mức đúng chấp nhận được khi đầu vào nhiễu, nhiễu đối kháng, can thiệp hoặc lạm dụng.",
      },
      wrongs: [
        {
          en: "Robustness testing should ignore invalid or malformed inputs entirely.",
          vi: "Kiểm thử robustness nên bỏ qua hoàn toàn đầu vào không hợp lệ.",
        },
        {
          en: "Robustness is identical to meeting accessibility contrast ratios only.",
          vi: "Robustness đồng nhất chỉ với đạt tỷ lệ tương phản accessibility.",
        },
        {
          en: "Adversarial inputs are hypothetical and never appear after deployment.",
          vi: "Đầu vào đối kháng chỉ là giả thuyết và không xuất hiện sau triển khai.",
        },
      ],
    },
    {
      topicEn: "transparency",
      topicVi: "transparency",
      correct: {
        en: "Transparency requires communicating adequate model and data provenance information to stakeholders commensurate with risk.",
        vi: "Transparency đòi cung cấp đủ thông tin về mô hình và nguồn gốc dữ liệu cho bên liên quan, tương xứng rủi ro.",
      },
      wrongs: [
        {
          en: "Transparency means publishing every training weight publicly without redaction.",
          vi: "Transparency nghĩa là công khai mọi trọng số huấn luyện không che.",
        },
        {
          en: "Transparency eliminates statistical testing because dashboards replace experiments.",
          vi: "Transparency loại kiểm thử thống kê vì dashboard thay thí nghiệm.",
        },
        {
          en: "Transparency applies only to marketing slogans, not engineering artefacts.",
          vi: "Transparency chỉ cho khẩu hiệu marketing, không cho artefact kỹ thuật.",
        },
      ],
    },
    {
      topicEn: "societal and ethical risk mitigation",
      topicVi: "giảm thiểu rủi ro xã hội và đạo đức",
      correct: {
        en: "Mitigation spans fairness, accountability, privacy, human oversight, sustainability expectations tied to quality-in-use.",
        vi: "Giảm thiểu gồm công bằng, trách nhiệm, riêng tư, giám sát con người, kỳ vọng bền vững gắn chất lượng khi dùng.",
      },
      wrongs: [
        {
          en: "Fairness metrics are optional whenever latency budgets are tight.",
          vi: "Metric công bằng là tuỳ chọn khi ngân sách độ trễ chặt.",
        },
        {
          en: "Ethical risk mitigation stops after model approval sign-off.",
          vi: "Giảm thiểu rủi ro đạo đức dừng sau ký duyệt mô hình.",
        },
        {
          en: "Privacy testing conflicts with bias testing and must never be combined.",
          vi: "Kiểm thử riêng tư xung đột kiểm thử bias và không được kết hợp.",
        },
      ],
    },
    {
      topicEn: "AI safety challenges",
      topicVi: "thách thức an toàn khi dùng AI",
      correct: {
        en: "Safety-related AI faces vague goals encoded indirectly in data, non-determinism, self-learning drift away from tested baselines, and evolving regulations.",
        vi: "AI liên quan an toàn gặp mục tiêu mơ hồ qua dữ liệu, không deterministic, drift học lệch baseline đã kiểm thử, và quy định đổi.",
      },
      wrongs: [
        {
          en: "Safety-critical ML never exhibits non-deterministic behaviour once frozen.",
          vi: "ML an toàn không bao giờ không deterministic sau khi đóng băng.",
        },
        {
          en: "Explainability concerns disappear automatically for models under 1M parameters.",
          vi: "Lo giải thích biến mất tự động với mô hình dưới 1M tham số.",
        },
        {
          en: "Self-learning systems cannot change behaviour post-deployment by definition.",
          vi: "Hệ tự học theo định nghĩa không đổi hành vi sau triển khai.",
        },
      ],
    },
    {
      topicEn: "acceptance criteria examples",
      topicVi: "ví dụ tiêu chí nghiệm thu",
      correct: {
        en: "Acceptance criteria often include probabilistic targets (accuracy/recall), latency under faults, fairness thresholds, or operational intervention times.",
        vi: "Tiêu chí nghiệm thu thường có mục tiêu xác suất (accuracy/recall), độ trễ khi lỗi, ngưỡng công bằng, hoặc thời gian can thiệp vận hành.",
      },
      wrongs: [
        {
          en: "ISO/IEC 25059 forbids expressing acceptance criteria using percentages.",
          vi: "ISO/IEC 25059 cấm diễn đạt tiêu chí nghiệm thu bằng phần trăm.",
        },
        {
          en: "Operational dashboards replace acceptance criteria entirely.",
          vi: "Dashboard vận hành thay thế hoàn toàn tiêu chí nghiệm thu.",
        },
        {
          en: "Acceptance criteria must be identical for batch and streaming inference.",
          vi: "Tiêu chí nghiệm thu phải giống hệt cho batch và streaming inference.",
        },
      ],
    },
  ],
  // ----- Chapter 3: Machine Learning -----
  [
    {
      topicEn: "supervised vs unsupervised vs reinforcement learning",
      topicVi: "học có giám sát / không giám sát / tăng cường",
      correct: {
        en: "Supervised learning uses labeled targets; unsupervised learning finds structure without labels; reinforcement learning learns via rewards from environment interaction.",
        vi: "Học có giám sát dùng nhãn mục tiêu; học không giám sát tìm cấu trúc không nhãn; học tăng cường học qua phần thưởng tương tác môi trường.",
      },
      wrongs: [
        {
          en: "Clustering always requires externally supplied ground-truth labels for every point.",
          vi: "Phân cụm luôn cần nhãn chuẩn cho mọi điểm.",
        },
        {
          en: "Reinforcement learning learns exclusively from static CSV files without feedback loops.",
          vi: "Học tăng cường chỉ học từ CSV tĩnh không vòng phản hồi.",
        },
        {
          en: "ML regression in CT-AI denotes classical CTFL regression testing scope.",
          vi: "ML regression trong CT-AI chỉ phạm vi regression testing cổ điển của CTFL.",
        },
      ],
    },
    {
      topicEn: "train / validation / test splits",
      topicVi: "tách train / validation / test",
      correct: {
        en: "Validation supports tuning; an independent test set estimates generalization and detects leakage from overfitting to validation iterations.",
        vi: "Validation hỗ trợ tinh chỉnh; tập test độc lập ước lượng khái quát và phát hiện rò do overfit quá nhiều vòng validation.",
      },
      wrongs: [
        {
          en: "Test set rows may be reused freely each epoch to maximize accuracy.",
          vi: "Hàng test có thể tái dùng tự do mỗi epoch để tối đa accuracy.",
        },
        {
          en: "Validation labels should always be merged into training immediately.",
          vi: "Nhãn validation luôn phải gộp ngay vào train.",
        },
        {
          en: "Leakage concerns apply only to spreadsheets, not pipelines.",
          vi: "Lo rò chỉ áp dụng bảng tính, không áp pipeline.",
        },
      ],
    },
    {
      topicEn: "ML workflow phases",
      topicVi: "các giai đoạn quy trình ML",
      correct: {
        en: "Typical workflow spans objectives, framework selection, algorithm choice, data preparation & validation, training, evaluation, tuning, independent testing, deployment, monitoring.",
        vi: "Quy trình điển hình gồm mục tiêu, chọn framework, thuật toán, chuẩn bị & kiểm tra dữ liệu, huấn luyện, đánh giá, tinh chỉnh, kiểm thử độc lập, triển khai, giám sát.",
      },
      wrongs: [
        {
          en: "Data preparation may be skipped once GPU memory is sufficient.",
          vi: "Có thể bỏ chuẩn bị dữ liệu khi đủ VRAM GPU.",
        },
        {
          en: "Deployment automatically guarantees absence of drift.",
          vi: "Triển khai tự động đảm bảo không drift.",
        },
        {
          en: "Hyperparameters never interact with algorithm convergence behaviour.",
          vi: "Siêu tham số không tương tác hội tụ thuật toán.",
        },
      ],
    },
    {
      topicEn: "confusion-matrix metrics",
      topicVi: "metric từ ma trận nhầm lẫn",
      correct: {
        en: "Recall emphasizes catching positives (minimizing false negatives), while precision emphasizes correctness among predicted positives.",
        vi: "Recall nhấn bắt đủ dương (giảm false negative), precision nhấn độ tin cậy trong các dự đoán dương.",
      },
      wrongs: [
        {
          en: "Accuracy alone is always sufficient for imbalanced safety-critical classifiers.",
          vi: "Accuracy một mình luôn đủ cho phân loại mất cân bằng an toàn.",
        },
        {
          en: "Specificity ignores true negatives entirely.",
          vi: "Specificity bỏ qua hoàn toàn true negative.",
        },
        {
          en: "F1-score cannot combine precision and recall considerations.",
          vi: "F1 không thể kết hợp precision và recall.",
        },
      ],
    },
    {
      topicEn: "neural network coverage ideas",
      topicVi: "ý tưởng độ bao phủ mạng nơ-ron",
      correct: {
        en: "Structural coverage concepts (e.g., neuron coverage variants) complement outcome-based testing by exercising internal activation regions.",
        vi: "Khái niệm bao phủ cấu trúc (ví dụ neuron coverage) bổ sung kiểm thử dựa đầu ra bằng cách kích hoạt vùng nội bộ.",
      },
      wrongs: [
        {
          en: "Neuron coverage replaces dataset representativeness analysis.",
          vi: "Neuron coverage thay phân tích đại diện tập dữ liệu.",
        },
        {
          en: "Coverage guarantees semantic correctness of outputs.",
          vi: "Coverage đảm bảo đúng ngữ nghĩa đầu ra.",
        },
        {
          en: "Backpropagation graphs forbid incremental testing strategies.",
          vi: "Đồ thị lan truyền ngược cấm chiến lược kiểm thử gia tăng.",
        },
      ],
    },
    {
      topicEn: "pretrained models, fine-tuning, RAG",
      topicVi: "mô hình tiền huấn luyện, fine-tuning, RAG",
      correct: {
        en: "Pretraining accelerates delivery but inherits biases; fine-tuning adapts weights; RAG augments generation with retrieved documents requiring retrieval quality tests.",
        vi: "Tiền huấn luyện rút ngắn thời gian nhưng kế thừa thiên kiếm; fine-tuning thích nghi trọng số; RAG bổ sung tài liệu truy hồi và cần kiểm tra chất lượng truy hồi.",
      },
      wrongs: [
        {
          en: "RAG eliminates factual hallucinations without further testing.",
          vi: "RAG loại hallucination thực tế không cần kiểm thử thêm.",
        },
        {
          en: "Fine-tuning removes obligation to version datasets.",
          vi: "Fine-tuning loại nghĩa vụ phiên bản hóa dataset.",
        },
        {
          en: "Pretrained weights never encode legally sensitive correlations.",
          vi: "Trọng số tiền huấn luyện không bao giờ mã hóa tương quan nhạy pháp lý.",
        },
      ],
    },
    {
      topicEn: "data preparation importance",
      topicVi: "tầm quan trọng chuẩn bị dữ liệu",
      correct: {
        en: "Garbage labels or skewed sampling undermine every downstream metric; testers validate pipelines, constraints, and leakage guards early.",
        vi: "Nhãn rác hoặc mẫu lệch làm hỏng mọi metric phía dưới; kiểm thử pipeline, ràng buộc và chống rò sớm.",
      },
      wrongs: [
        {
          en: "EDA is decorative and never influences acceptance thresholds.",
          vi: "EDA mang tính trang trí và không ảnh hưởng ngưỡng nghiệm thu.",
        },
        {
          en: "Feature scaling guarantees fairness parity across demographic slices.",
          vi: "Scale đặc trưng đảm bảo công bằng nhân khẩu học.",
        },
        {
          en: "Synthetic augmentation removes privacy review responsibilities.",
          vi: "Tăng cường tổng hợp loại bỏ trách nhiệm rà soát riêng tư.",
        },
      ],
    },
    {
      topicEn: "model hyperparameters vs algorithm hyperparameters",
      topicVi: "siêu tham số mô hình vs thuật toán",
      correct: {
        en: "Model hyperparameters define architecture capacity (e.g., layers); algorithm hyperparameters steer optimisation loops (e.g., iterations, learning rate schedules).",
        vi: "Siêu tham số mô hình định nghĩa dung lượng kiến trúc (lớp…); siêu tham số thuật toán điều khiển vòng tối ưu (vòng lặp, lịch learning rate…).",
      },
      wrongs: [
        {
          en: "Learning rate belongs exclusively to dataset schema design.",
          vi: "Learning rate chỉ thuộc thiết kế schema dataset.",
        },
        {
          en: "Architecture depth has no influence on overfitting tendency.",
          vi: "Độ sâu kiến trúc không ảnh hưởng xu hướng overfit.",
        },
        {
          en: "Hyperparameter tuning invalidates independent test sets.",
          vi: "Tinh chỉnh siêu tham số làm mất hiệu lực tập test độc lập.",
        },
      ],
    },
  ],
  // ----- Chapter 4: Testing AI-based systems -----
  [
    {
      topicEn: "locked vs adaptive AI systems",
      topicVi: "hệ AI khóa so với thích ứng",
      correct: {
        en: "Locked models freeze behaviour between releases; adaptive systems continue learning online and require monitoring, guardrails, and revalidation triggers.",
        vi: "Mô hình khóa đóng băng hành vi giữa các phát hành; hệ thích ứng học trực tuyến và cần giám sát, rào chắn, kích hoạt thẩm định lại.",
      },
      wrongs: [
        {
          en: "Adaptive systems never drift because gradients disappear automatically.",
          vi: "Hệ thích ứng không drift vì gradient biến mất tự động.",
        },
        {
          en: "Locked systems forbid controlled versioned updates entirely.",
          vi: "Hệ khóa cấm mọi cập nhật có phiên bản có kiểm soát.",
        },
        {
          en: "Monitoring is redundant once training accuracy plateaus.",
          vi: "Giám sát thừa khi độ chính xác huấn luyện bão hòa.",
        },
      ],
    },
    {
      topicEn: "statistical testing rationale",
      topicVi: "cơ sở kiểm thử thống kê",
      correct: {
        en: "Huge input domains and stochastic behaviour favor sampling, confidence estimation, repeated trials, and operational telemetry—not exhaustive enumeration.",
        vi: "Miền đầu vào lớn và ngẫu nhiên ưu tiên lấy mẫu, ước lượng tin cậy, thử lặp và telemetry—không liệt kê vét kiệt.",
      },
      wrongs: [
        {
          en: "Exhaustive enumeration is practical for every LLM prompt space.",
          vi: "Liệt kê vét kiệt khả thi cho mọi không gian prompt LLM.",
        },
        {
          en: "Single deterministic seeds remove variability concerns permanently.",
          vi: "Một seed deterministic loại vĩnh viễn lo biến thiên.",
        },
        {
          en: "Confidence intervals are unrelated to risk-based prioritisation.",
          vi: "Khoảng tin cậy không liên quan ưu tiên theo rủi ro.",
        },
      ],
    },
    {
      topicEn: "test oracles for AI",
      topicVi: "oracle kiểm thử cho AI",
      correct: {
        en: "Oracles may include metamorphic relations, reference models, probabilistic thresholds, human evaluation rubrics, or safety constraints.",
        vi: "Oracle có thể là quan hệ biến hình, mô hình tham chiếu, ngưỡng xác suất, rubric đánh giá con người hoặc ràng buộc an toàn.",
      },
      wrongs: [
        {
          en: "Expected exact strings always exist for creative GenAI outputs.",
          vi: "Luôn có chuỗi mong đợi chính xác cho đầu ra GenAI sáng tạo.",
        },
        {
          en: "Metamorphic testing forbids comparing outputs across related inputs.",
          vi: "Kiểm thử biến hình cấm so đầu ra giữa đầu vào liên quan.",
        },
        {
          en: "Human evaluation is prohibited under agile MLS delivery.",
          vi: "Đánh giá con người bị cấm trong giao MLS agile.",
        },
      ],
    },
    {
      topicEn: "testing LLMs / GenAI concerns",
      topicVi: "kiểm thử LLM / GenAI",
      correct: {
        en: "Test design covers grounding/factuality, toxicity, bias, privacy leakage, prompt injection, tool-use safety, latency, and versioning of prompts/models.",
        vi: "Thiết kế kiểm thử gồm neo thực/tính đúng, độc, bias, rò riêng tư, prompt injection, an toàn tool, độ trễ, phiên bản prompt/mô hình.",
      },
      wrongs: [
        {
          en: "Prompt injection is purely a database indexing issue.",
          vi: "Prompt injection chỉ là vấn đề chỉ mục CSDL.",
        },
        {
          en: "Latency budgets ignore streaming token partial outputs.",
          vi: "Ngân sách độ trễ bỏ qua token streaming một phần.",
        },
        {
          en: "Grounding tests replace security penetration testing entirely.",
          vi: "Kiểm thử grounding thay hoàn toàn pentest.",
        },
      ],
    },
    {
      topicEn: "red teaming",
      topicVi: "red teaming",
      correct: {
        en: "Red teaming systematically probes models/prompts to surface harmful or policy-violating behaviour, often with quantitative acceptance gates.",
        vi: "Red teaming thử có hệ thống để gợi hành vi có hại/vi phạm chính sách, thường có cổng nghiệm thu định lượng.",
      },
      wrongs: [
        {
          en: "Red teaming replaces independent validation datasets.",
          vi: "Red teaming thay tập validation độc lập.",
        },
        {
          en: "Successful red-team sessions prove regulatory compliance alone.",
          vi: "Phiên red-team thành công chứng minh tuân thủ quy định một mình.",
        },
        {
          en: "Red teaming applies only to relational databases, not LLMs.",
          vi: "Red teaming chỉ cho CSDL quan hệ, không cho LLM.",
        },
      ],
    },
    {
      topicEn: "test levels for MLS",
      topicVi: "mức kiểm thử cho MLS",
      correct: {
        en: "MLS testing aligns component, integration, system, and operational views across data pipelines, training code, serving stacks, monitoring, and rollback paths.",
        vi: "Kiểm thử MLS căn chỉnh thành phần, tích hợp, hệ thống và vận hành trên pipeline dữ liệu, mã huấn luyện, serving, giám sát, rollback.",
      },
      wrongs: [
        {
          en: "Unit tests on transforms absolve need for production shadow evaluation.",
          vi: "Unit test biến đổi miễn trừ đánh giá shadow production.",
        },
        {
          en: "Operational monitoring only captures GPU temperature curves.",
          vi: "Giám sát vận hành chỉ thu đường nhiệt GPU.",
        },
        {
          en: "Integration testing forbids stubbing external APIs during MLS CI.",
          vi: "Kiểm thử tích hợp cấm stub API ngoài trong CI MLS.",
        },
      ],
    },
    {
      topicEn: "risk-based MLS testing",
      topicVi: "kiểm thử MLS theo rủi ro",
      correct: {
        en: "Risk-based prioritisation allocates depth where impact × likelihood is highest, combining functional ML metrics with misuse and safety scenarios.",
        vi: "Ưu tiên theo rủi ro phân bổ độ sâu nơi tác động × khả năng cao, kết hợp metric ML và kịch bản lạm dụng/an toàn.",
      },
      wrongs: [
        {
          en: "Equal effort per line of Python is mandated regardless of risk.",
          vi: "Công sức đều cho mỗi dòng Python bất kể rủi ro.",
        },
        {
          en: "Low-impact scenarios deserve exhaustive combinatorial matrices first.",
          vi: "Kịch bản tác động thấp ưu tiên ma trận tổ hợp vét kiệt trước.",
        },
        {
          en: "Risk registers cannot reference regulatory classifications.",
          vi: "Sổ đăng ký rủi ro không được tham chiếu phân loại quy định.",
        },
      ],
    },
    {
      topicEn: "exploratory LLM testing mindset",
      topicVi: "tư duy kiểm thử khám phá LLM",
      correct: {
        en: "Exploratory sessions blend charters, time-boxing, note-taking on surprising behaviours, and traceability to prompts/models under test.",
        vi: "Phiên khám phá kết hợp charter, giới hạn thời gian, ghi chú hành vi lạ và truy xuất prompt/mô hình đang thử.",
      },
      wrongs: [
        {
          en: "Exploratory testing forbids documenting reproduction steps.",
          vi: "Khám phá cấm ghi bước tái hiện.",
        },
        {
          en: "Charters eliminate learning objectives alignment.",
          vi: "Charter loại căn chỉnh mục tiêu học.",
        },
        {
          en: "Only scripted tests may observe probabilistic variance.",
          vi: "Chỉ test kịch bản được quan sát biến thiên xác suất.",
        },
      ],
    },
  ],
  // ----- Chapter 5: Input data testing -----
  [
    {
      topicEn: "input data risks",
      topicVi: "rủi ro dữ liệu đầu vào",
      correct: {
        en: "Biased sampling, label noise, leakage across splits, pipeline defects, and poisoning corrupt MLS conclusions before model testing matters.",
        vi: "Mẫu thiên kiến, nhãn nhiễu, rò giữa tách tập, lỗi pipeline và đầu độc làm hỏng kết luận MLS trước khi kiểm thử mô hình.",
      },
      wrongs: [
        {
          en: "Clean validation curves prove dataset integrity automatically.",
          vi: "Đường validation sạch chứng minh tự động toàn vẹn dataset.",
        },
        {
          en: "Pipeline YAML removes need for schema evolution tests.",
          vi: "YAML pipeline loại kiểm thử tiến hóa schema.",
        },
        {
          en: "Poisoned rows always crash training jobs visibly.",
          vi: "Dòng đầu độc luôn làm crash huấn luyện rõ ràng.",
        },
      ],
    },
    {
      topicEn: "bias testing",
      topicVi: "kiểm thử bias",
      correct: {
        en: "Bias testing slices metrics across demographic or operational cohorts and validates mitigations do not unfairly harm other cohorts’ accuracy.",
        vi: "Kiểm thử bias xẻ metric theo nhóm nhân khẩu/vận hành và xác nhận giảm thiểu không làm tổn hại oan độ chính xác nhóm khác.",
      },
      wrongs: [
        {
          en: "Fairness can be proven by a single global accuracy score.",
          vi: "Công bằng chứng minh bằng một accuracy toàn cục.",
        },
        {
          en: "Mitigations never require regression checks on non-target slices.",
          vi: "Giảm thiểu không cần kiểm tra hồi quy trên lát không phải mục tiêu.",
        },
        {
          en: "Synthetic fairness labels replace stakeholder review.",
          vi: "Nhãn fairness tổng hợp thay stakeholder review.",
        },
      ],
    },
    {
      topicEn: "data pipeline testing",
      topicVi: "kiểm thử pipeline dữ liệu",
      correct: {
        en: "Automated checks validate transforms (ranges, idempotence where needed), joins, replay of production samples, and failure alarms.",
        vi: "Kiểm tra tự động xác nhận biến đổi (miền giá trị, idempotent khi cần), join, phát lại mẫu production và báo động lỗi.",
      },
      wrongs: [
        {
          en: "Manual spot checks once per year suffice for regulated MLS.",
          vi: "Kiểm tra tay một lần/năm đủ cho MLS chịu quy định.",
        },
        {
          en: "Ordering of transforms has no effect on downstream leakage.",
          vi: "Thứ tự biến đổi không ảnh hưởng rò phía dưới.",
        },
        {
          en: "Replay tests duplicate production traffic illegally by definition.",
          vi: "Phát lại traffic production luôn bất hợp pháp theo định nghĩa.",
        },
      ],
    },
    {
      topicEn: "representativeness",
      topicVi: "đại diện",
      correct: {
        en: "Operational score distributions should match training assumptions; drift detectors compare live batches against reference profiles.",
        vi: "Phân phối điểm vận hành nên khớp giả định huấn luyện; detector drift so batch live với profile tham chiếu.",
      },
      wrongs: [
        {
          en: "Representativeness only matters for image pixels, not tabular features.",
          vi: "Đại diện chỉ cho pixel ảnh, không cho đặc trưng bảng.",
        },
        {
          en: "Weekend traffic may be ignored when training weekday-only models without disclosure.",
          vi: "Traffic cuối tuần có thể bỏ qua khi huấn luyện chỉ ngày làm không cần tiết lộ.",
        },
        {
          en: "Concept drift never interacts with business KPI acceptance.",
          vi: "Concept drift không tương tác KPI nghiệm thu.",
        },
      ],
    },
    {
      topicEn: "dataset constraint testing",
      topicVi: "kiểm thử ràng buộc tập dữ liệu",
      correct: {
        en: "Documented constraints (freshness, cardinality, legal categories) become executable assertions in CI and monitoring hooks.",
        vi: "Ràng buộc tài liệu hóa (độ mới, bản số, danh mục pháp lý) thành assertion trong CI và hook giám sát.",
      },
      wrongs: [
        {
          en: "Constraints belong exclusively to marketing consent banners.",
          vi: "Ràng buộc chỉ thuộc banner đồng ý marketing.",
        },
        {
          en: "Automated assertions slow science and must be avoided.",
          vi: "Assertion tự động làm chậm khoa học nên tránh.",
        },
        {
          en: "Legal categories never influence sampling quotas.",
          vi: "Danh mục pháp lý không ảnh hưởng quota mẫu.",
        },
      ],
    },
    {
      topicEn: "label correctness",
      topicVi: "đúng nhãn",
      correct: {
        en: "Label QA uses audits, adjudication rules, inter-rater reliability, correction workflows, and fuzz checks on encoding conventions.",
        vi: "QA nhãn dùng audit, quy tắc phân xử, độ tin cậy giữa người gán nhãn, quy trình sửa và fuzz quy ước mã hóa.",
      },
      wrongs: [
        {
          en: "Majority vote among interns removes gold-standard requirements.",
          vi: "Biểu quyết đông thực tập sinh loại chuẩn vàng.",
        },
        {
          en: "Label bugs surface only during inference GPU profiling.",
          vi: "Lỗi nhãn chỉ lộ khi profiling GPU inference.",
        },
        {
          en: "Inter-rater metrics are irrelevant for subjective labels.",
          vi: "Metric giữa người gán không liên quan nhãn chủ quan.",
        },
      ],
    },
    {
      topicEn: "historical / sampling bias",
      topicVi: "thiên kiến lịch sử / mẫu",
      correct: {
        en: "Historical bias encodes past inequities into training corpora; sampling bias arises when collection excludes critical segments of the operational population.",
        vi: "Thiên kiến lịch sử mã hóa bất công quá khứ vào corpus; thiên kiến mẫu khi thu thập loại bỏ phân khúc quan trọng của quần thể vận hành.",
      },
      wrongs: [
        {
          en: "Bias disappears when datasets exceed one terabyte.",
          vi: "Bias biến mất khi dataset > 1TB.",
        },
        {
          en: "Random shuffling removes need for domain stratification.",
          vi: "Xáo trộn ngẫu nhiên loại stratification miền.",
        },
        {
          en: "Sampling bias affects batch norm layers only.",
          vi: "Thiên kiến mẫu chỉ ảnh hưởng lớp batch norm.",
        },
      ],
    },
    {
      topicEn: "data leakage between splits",
      topicVi: "rò rỉ giữa các tách dữ liệu",
      correct: {
        en: "Leakage occurs when duplicate entities, future information, or preprocessing computed on full datasets contaminates train/test separation.",
        vi: "Rò xảy ra khi thực thể trùng, thông tin tương lai hoặc tiền xử lý trên toàn bộ dữ liệu làm nhiễu tách train/test.",
      },
      wrongs: [
        {
          en: "Scaling fit on train+test together is always acceptable practice.",
          vi: "Fit scaler trên train+test luôn được phép.",
        },
        {
          en: "Leakage detection belongs solely to compliance officers.",
          vi: "Phát hiện rò chỉ thuộc compliance officer.",
        },
        {
          en: "Temporal splits eliminate every leakage pathway automatically.",
          vi: "Tách thời gian loại mọi đường rò tự động.",
        },
      ],
    },
  ],
  // ----- Chapter 6: Model testing -----
  [
    {
      topicEn: "model documentation review",
      topicVi: "đánh giá tài liệu mô hình",
      correct: {
        en: "Review verifies model cards/datasheets align with deployed weights, thresholds, monitoring hooks, and declared limitations.",
        vi: "Đánh giá xác nhận model card/datasheet khớp trọng số triển khai, ngưỡng, hook giám sát và hạn chế khai báo.",
      },
      wrongs: [
        {
          en: "Documentation accuracy is optional after MVP launch.",
          vi: "Độ chính xác tài liệu tuỳ chọn sau MVP.",
        },
        {
          en: "Limitations sections must remain empty for competitive reasons.",
          vi: "Mục hạn chế phải để trống vì cạnh tranh.",
        },
        {
          en: "Change logs conflict with agile cadence and should be avoided.",
          vi: "Change log xung đột agile nên tránh.",
        },
      ],
    },
    {
      topicEn: "ML functional performance testing",
      topicVi: "kiểm thử hiệu năng chức năng ML",
      correct: {
        en: "Independent test sets evaluate agreed metrics; large gaps versus validation signal leakage, overfitting, or evaluation bugs.",
        vi: "Tập test độc lập đánh giá metric đã thống nhất; lệch lớn so validation báo rò, overfit hoặc lỗi đánh giá.",
      },
      wrongs: [
        {
          en: "Validation metrics alone certify regulatory readiness.",
          vi: "Chỉ metric validation chứng nhận sẵn sàng quy định.",
        },
        {
          en: "Test accuracy higher than validation always indicates better generalisation.",
          vi: "Test accuracy cao hơn validation luôn là khái quát tốt hơn.",
        },
        {
          en: "Probabilistic calibration charts replace scenario testing.",
          vi: "Biểu đồ calibration thay kiểm thử kịch bản.",
        },
      ],
    },
    {
      topicEn: "adversarial testing",
      topicVi: "kiểm thử đối kháng",
      correct: {
        en: "Adversarial campaigns craft perturbations or leverage attack libraries to probe boundary behaviour and monitor novel threats in production.",
        vi: "Chiến dịch đối kháng tạo nhiễu hoặc dùng thư viện tấn công để thăm dò biên và giám sát đe dọa mới trên production.",
      },
      wrongs: [
        {
          en: "Adversarial testing guarantees elimination of all ML vulnerabilities.",
          vi: "Kiểm thử đối kháng đảm bảo loại mọi lỗ hổng ML.",
        },
        {
          en: "FGSM perturbations only apply to relational schemas.",
          vi: "Nhiễu FGSM chỉ cho schema quan hệ.",
        },
        {
          en: "Production monitors never ingest adversarial telemetry.",
          vi: "Monitor production không nhận telemetry đối kháng.",
        },
      ],
    },
    {
      topicEn: "metamorphic testing",
      topicVi: "kiểm thử biến hình",
      correct: {
        en: "Metamorphic relations expect predictable output transformations under input transformations when precise oracles are unavailable.",
        vi: "Quan hệ biến hình kỳ vọng biến đổi đầu ra có quy luật khi biến đổi đầu vào nếu thiếu oracle chính xác.",
      },
      wrongs: [
        {
          en: "Metamorphic testing forbids comparing logits across runs.",
          vi: "Metamorphic cấm so logits giữa các lần chạy.",
        },
        {
          en: "Relations must always preserve exact softmax probabilities bit-for-bit.",
          vi: "Quan hệ phải giữ xác suất softmax bit-by-bit.",
        },
        {
          en: "MT only applies to handcrafted rule engines.",
          vi: "MT chỉ cho rule engine thủ công.",
        },
      ],
    },
    {
      topicEn: "drift testing",
      topicVi: "kiểm thử drift",
      correct: {
        en: "Drift testing compares live data or performance profiles against baselines; triggers may retrain, rollback, or tighten safeguards.",
        vi: "Kiểm thử drift so dữ liệu live hoặc profile hiệu năng với baseline; kích hoạt có thể huấn luyện lại, rollback hoặc siết rào.",
      },
      wrongs: [
        {
          en: "Drift detectors must ignore seasonality by policy.",
          vi: "Detector drift phải bỏ qua tính thời vụ.",
        },
        {
          en: "Silent drift improves customer trust automatically.",
          vi: "Drift âm thầm tăng tin cậy khách hàng tự động.",
        },
        {
          en: "Rollback triggers are incompatible with blue/green deploys.",
          vi: "Kích hoạt rollback không tương thích blue/green.",
        },
      ],
    },
    {
      topicEn: "overfitting vs underfitting signals",
      topicVi: "dấu hiệu overfitting và underfitting",
      correct: {
        en: "Overfitting shows strong validation but weak generalisation; underfitting exhibits high bias with simplistic decision boundaries.",
        vi: "Overfitting validation mạnh nhưng khái quát yếu; underfitting bias cao với biên quyết định quá đơn giản.",
      },
      wrongs: [
        {
          en: "Training loss near zero always proves deployment readiness.",
          vi: "Training loss gần 0 luôn chứng minh sẵn sàng triển khai.",
        },
        {
          en: "Underfitting disappears automatically after GPU upgrade.",
          vi: "Underfitting biến mất sau nâng GPU.",
        },
        {
          en: "Cross-validation is unrelated to diagnosing split misuse.",
          vi: "Cross-validation không liên quan chẩn đoán lạm dụng tách tập.",
        },
      ],
    },
    {
      topicEn: "A/B testing",
      topicVi: "kiểm thử A/B",
      correct: {
        en: "A/B compares candidate models or prompts using guarded traffic splits with statistical power analysis and safety rails.",
        vi: "A/B so mô hình hoặc prompt dùng chia traffic có bảo vệ, phân tích lực thống kê và rào an toàn.",
      },
      wrongs: [
        {
          en: "A/B decisions require exactly one request sample.",
          vi: "Quyết định A/B cần đúng một mẫu request.",
        },
        {
          en: "Safety rails violate experimentation purity and must be disabled.",
          vi: "Rào an toàn vi phạm độ tinh khiết thí nghiệm nên tắt.",
        },
        {
          en: "A/B applies exclusively to CSS themes, not MLS.",
          vi: "A/B chỉ cho CSS theme, không MLS.",
        },
      ],
    },
    {
      topicEn: "back-to-back testing",
      topicVi: "kiểm thử back-to-back",
      correct: {
        en: "Back-to-back feeds identical inputs to baseline and candidate models to expose regressions across outputs or latencies.",
        vi: "Back-to-back đưa cùng đầu vào cho baseline và ứng viên để lộ hồi quy đầu ra hoặc độ trễ.",
      },
      wrongs: [
        {
          en: "Inputs must differ randomly to prove robustness during back-to-back runs.",
          vi: "Đầu vào phải khác ngẫu nhiên khi back-to-back để chứng minh robust.",
        },
        {
          en: "Back-to-back replaces monitoring after canary promotion.",
          vi: "Back-to-back thay giám sát sau promotion canary.",
        },
        {
          en: "Regression detection forbids comparing probability distributions.",
          vi: "Phát hiện hồi quy cấm so phân phối xác suất.",
        },
      ],
    },
  ],
  // ----- Chapter 7: MLS development testing -----
  [
    {
      topicEn: "MLS development risks",
      topicVi: "rủi ro phát triển MLS",
      correct: {
        en: "Risks include irreproducible experiments, poor secret isolation, weak CI gates for data/models, and skipping independent test evidence before promotion.",
        vi: "Rủi ro gồm thí nghiệm không tái lập, cô lập bí mật kém, CI yếu cho dữ liệu/mô hình và bỏ bằng chứng test độc lập trước promotion.",
      },
      wrongs: [
        {
          en: "Notebook-only workflows satisfy audit controls by default.",
          vi: "Quy trình chỉ notebook đáp ứng kiểm soát audit mặc định.",
        },
        {
          en: "Secrets may live in training repos if encrypted with ROT13.",
          vi: "Bí mật có thể trong repo huấn luyện nếu ROT13.",
        },
        {
          en: "Independent tests slow CI and should run quarterly only.",
          vi: "Test độc lập làm chậm CI chỉ chạy quý.",
        },
      ],
    },
    {
      topicEn: "mitigations in MLS engineering",
      topicVi: "giảm thiểu trong kỹ thuật MLS",
      correct: {
        en: "Mitigations include versioning datasets/models, peer-reviewed configs, automated data validation gates, and predefined rollback criteria.",
        vi: "Giảm thiểu gồm phiên bản dataset/mô hình, cấu hình peer review, cổng kiểm tra dữ liệu tự động và tiêu chí rollback định trước.",
      },
      wrongs: [
        {
          en: "Git tags alone guarantee lineage without hashes.",
          vi: "Git tag một mình đảm bảo lineage không cần hash.",
        },
        {
          en: "Rollback criteria should be decided only after outage.",
          vi: "Tiêu chí rollback chỉ quyết định sau sự cố.",
        },
        {
          en: "Peer review blocks automation and must be skipped overnight.",
          vi: "Peer review cản tự động nên bỏ qua ban đêm.",
        },
      ],
    },
    {
      topicEn: "deployment testing for MLS",
      topicVi: "kiểm thử triển khai MLS",
      correct: {
        en: "Deployment tests validate packaging, inference latency under load, autoscaling, feature-store contracts, canaries, kill switches, and service compatibility.",
        vi: "Kiểm thử triển khai xác nhận đóng gói, độ trễ suy luận dưới tải, autoscale, hợp đồng feature store, canary, kill switch và tương thích dịch vụ.",
      },
      wrongs: [
        {
          en: "Kill switches are discouraged because they confuse dashboards.",
          vi: "Kill switch không khuyến khích vì làm rối dashboard.",
        },
        {
          en: "Feature stores never drift from training feature definitions.",
          vi: "Feature store không bao giờ lệch định nghĩa huấn luyện.",
        },
        {
          en: "Latency SLAs ignore cold-start container behaviour.",
          vi: "SLA độ trễ bỏ qua cold-start container.",
        },
      ],
    },
    {
      topicEn: "connecting lifecycle chapters",
      topicVi: "liên kết các chương vòng đời",
      correct: {
        en: "Development testing closes gaps between data preparation (Ch5), model-level evidence (Ch6), operational strategy (Ch4), and ML workflow foundations (Ch3).",
        vi: "Kiểm thử phát triển khép khoảng trống giữa chuẩn bị dữ liệu (Ch5), bằng chứng mô hình (Ch6), chiến lược vận hành (Ch4) và nền quy trình ML (Ch3).",
      },
      wrongs: [
        {
          en: "Chapter boundaries forbid traceability between artefacts.",
          vi: "Ran giới chương cấm truy xuất artefact.",
        },
        {
          en: "Deployment testing overrides every earlier quality gate.",
          vi: "Kiểm thử triển khai ghi đè mọi cổng chất lượng trước.",
        },
        {
          en: "Monitoring replaces independent datasets permanently.",
          vi: "Giám sát thay dataset độc lập vĩnh viễn.",
        },
      ],
    },
    {
      topicEn: "production monitoring hooks",
      topicVi: "hook giám sát production",
      correct: {
        en: "Hooks capture latency, error codes, data distributions, model versions, and alert paths integrating incident response playbooks.",
        vi: "Hook thu độ trễ, mã lỗi, phân phối dữ liệu, phiên bản mô hình và lối cảnh báo tích hợp playbook ứng phòng sự cố.",
      },
      wrongs: [
        {
          en: "Monitoring dashboards must omit model identifiers for mystique.",
          vi: "Dashboard giám sát phải bỏ định danh mô hình.",
        },
        {
          en: "Alerts should route exclusively to single laptops without redundancy.",
          vi: "Cảnh báo chỉ gửi một laptop không dự phòng.",
        },
        {
          en: "Incident playbooks conflict with MLS governance.",
          vi: "Playbook sự cố xung đột quản trị MLS.",
        },
      ],
    },
    {
      topicEn: "environment parity",
      topicVi: "đồng nhất môi trường",
      correct: {
        en: "Parity checks align dependency locks, accelerator drivers, batch sizes, and regional endpoints between staging and production slices.",
        vi: "Kiểm tra đồng nhất căn chỉnh khóa phụ thuộc, driver GPU, batch size và endpoint vùng giữa staging và production.",
      },
      wrongs: [
        {
          en: "Staging may omit privacy controls to speed iteration.",
          vi: "Staging được bỏ kiểm soát riêng tư để nhanh.",
        },
        {
          en: "Different CUDA versions never affect numerical outputs.",
          vi: "CUDA khác phiên bản không ảnh hưởng đầu ra số.",
        },
        {
          en: "Regional endpoints are irrelevant to GDPR considerations.",
          vi: "Endpoint vùng không liên quan GDPR.",
        },
      ],
    },
    {
      topicEn: "artifact signing & promotion",
      topicVi: "ký artefact và promotion",
      correct: {
        en: "Signed model blobs with checksum manifests reduce tampering risk during promotion across environments.",
        vi: "Blob mô hình có ký kèm manifest checksum giảm rủi ro can thiệp khi promotion giữa môi trường.",
      },
      wrongs: [
        {
          en: "Checksums are cosmetic because object stores are always trusted.",
          vi: "Checksum chỉ trang trí vì object store luôn tin cậy.",
        },
        {
          en: "Promotion pipelines never require human approval for high-risk MLS.",
          vi: "Pipeline promotion không cần phê duyệt người cho MLS rủi ro cao.",
        },
        {
          en: "Signing slows throughput and should be disabled in regulated domains.",
          vi: "Ký làm chậm throughput nên tắt ở miền chịu quy định.",
        },
      ],
    },
    {
      topicEn: "hand-off to operations",
      topicVi: "bàn giao cho vận hành",
      correct: {
        en: "Hand-offs bundle runbooks, SLO/SLI definitions, rollback drills, owner contacts, and linkage to model risk assessments.",
        vi: "Bàn giao gồm runbook, định nghĩa SLO/SLI, diễn tập rollback, chủ sở hữu và liên kết đánh giá rủi ro mô hình.",
      },
      wrongs: [
        {
          en: "Operations learns architecture exclusively via hallway conversations.",
          vi: "Vận hành chỉ học kiến trúc qua trò chuyện hành lang.",
        },
        {
          en: "Runbooks violate agile principles and should not exist.",
          vi: "Runbook vi phạm agile không nên tồn tại.",
        },
        {
          en: "SLIs duplicate marketing KPIs without distinction.",
          vi: "SLI trùng KPI marketing không phân biệt.",
        },
      ],
    },
  ],
];

/** Per-chapter target counts (sum = 500) */
const COUNTS = [72, 72, 72, 71, 71, 71, 71];

function expandChapter(chapterIndex) {
  const templates = CHAPTER_TEMPLATES[chapterIndex];
  const target = COUNTS[chapterIndex];
  const out = [];
  let seq = 0;
  const baseSeed = (chapterIndex + 1) * 1_000_000;

  while (out.length < target) {
    const tpl = templates[out.length % templates.length];
    const variantRound = Math.floor(out.length / templates.length);
    const rnd = mulberry32(baseSeed + out.length * 997 + variantRound);
    const intro = pickIntro(rnd);

    let questionEn;
    if (seq % 3 === 0) {
      questionEn = `${intro.en}\nRegarding ${tpl.topicEn}, pick the option that matches ISTQB CT-AI guidance.`;
    } else if (seq % 3 === 1) {
      questionEn = `${intro.en}\nTopic focus: ${tpl.topicEn}.`;
    } else {
      questionEn = `${intro.en}\nConsider MLS testing practice for: ${tpl.topicEn}.`;
    }

    const questionVi =
      seq % 3 === 0
        ? `${intro.vi}\nVới chủ đề **${tpl.topicVi}**, chọn phương án phù hợp giáo trình ISTQB CT-AI.`
        : seq % 3 === 1
          ? `${intro.vi}\nTrọng tâm: **${tpl.topicVi}**.`
          : `${intro.vi}\nÁp dụng thực hành kiểm thử MLS cho: **${tpl.topicVi}**.`;

    const explanation = explainSimple(tpl.topicEn, tpl.topicVi);

    const q = buildQ(baseSeed + seq, {
      questionEn,
      questionVi,
      correct: tpl.correct,
      wrongs: tpl.wrongs,
      explanation,
    });

    out.push(q);
    seq++;
  }

  return out;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let total = 0;
  for (let ch = 0; ch < 7; ch++) {
    const questions = expandChapter(ch);
    total += questions.length;
    const filename = path.join(OUT_DIR, `ctai-chapter-${ch + 1}.json`);
    fs.writeFileSync(filename, JSON.stringify(questions, null, 2), "utf8");
    console.log(`Wrote ${questions.length} questions -> ${filename}`);
  }
  console.log(`Total CT-AI questions: ${total}`);
}

main();
