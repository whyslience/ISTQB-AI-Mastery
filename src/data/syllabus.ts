import quizChapter1 from "./questions/chapter-1.json";
import quizChapter2 from "./questions/chapter-2.json";
import quizChapter3 from "./questions/chapter-3.json";
import quizChapter4 from "./questions/chapter-4.json";
import quizChapter5 from "./questions/chapter-5.json";
import quizChapter6 from "./questions/chapter-6.json";

export interface QuizQuestion {
  questionEn: string;
  questionVi: string;
  options: { en: string; vi: string }[];
  correctEn: string;
  correctVi: string;
  explanation: string;
}

export interface SyllabusChapter {
  id: string;
  chapterNumber: number;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  teacherAdviceEn: string;
  teacherAdviceVi: string;
  hasMindmaps?: boolean;
  quiz: QuizQuestion[];
}

export const syllabusData: SyllabusChapter[] = [
  {
    id: "chapter-0",
    chapterNumber: 0,
    titleEn: "Syllabus Introduction (Official)",
    titleVi: "Giới thiệu Giáo trình (Chính thức)",
    descriptionEn:
      "Copyright, revision history, acknowledgements, and ISTQB CTFL v4.0.1 introduction (not examinable).",
    descriptionVi:
      "Bản quyền, lịch sử phiên bản, lời cảm ơn và phần giới thiệu ISTQB CTFL v4.0.1 (không dùng để ra đề).",
    teacherAdviceEn:
      "Introduction and appendices are out of exam scope; use them for context only.",
    teacherAdviceVi:
      "Phần giới thiệu và phụ lục không thuộc phạm vi thi; chỉ dùng để nắm ngữ cảnh.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "chapter-1",
    chapterNumber: 1,
    titleEn: "Fundamentals of Testing",
    titleVi: "Các Khái Niệm Cơ Bản về Kiểm Thử",
    descriptionEn: "Bilingual study guide for Chapter 1",
    descriptionVi: "Hướng dẫn học tập song ngữ cho Chương 1",
    teacherAdviceEn: "Top 5 Exam Traps",
    teacherAdviceVi:
      "5 Bẫy Thi Hàng đầu: Kiểm thử chứng minh không có bug là sai. Hãy nhớ Nguyên tắc 1: hiện diện, không phải vắng mặt.",
    hasMindmaps: true,
    quiz: quizChapter1 as QuizQuestion[],
  },
  {
    id: "chapter-2",
    chapterNumber: 2,
    titleEn: "Testing Throughout the Software Development Lifecycle",
    titleVi: "Kiểm thử trong suốt Vòng đời Phát triển Phần mềm",
    descriptionEn: "Bilingual study guide for Chapter 2",
    descriptionVi: "Hướng dẫn học tập song ngữ cho Chương 2",
    teacherAdviceEn: "Shift left adds early testing; late testing remains.",
    teacherAdviceVi:
      "Dịch chuyển sang trái bổ sung kiểm thử sớm nhưng không loại bỏ kiểm thử giai đoạn sau. TDD, ATDD và BDD là các phương pháp khác nhau về trọng tâm (đơn vị, chấp nhận, hành vi).",
    hasMindmaps: false,
    quiz: quizChapter2 as QuizQuestion[],
  },
  {
    id: "chapter-3",
    chapterNumber: 3,
    titleEn: "Static Testing",
    titleVi: "Kiểm thử Tĩnh",
    descriptionEn: "Bilingual study guide for Chapter 3",
    descriptionVi: "Hướng dẫn học tập song ngữ cho Chương 3",
    teacherAdviceEn:
      "Static testing also finds code defects like unreachable code and complexity.",
    teacherAdviceVi:
      "Kiểm thử tĩnh có thể phát hiện các khiếm khuyết trong code như mã không thể thực thi. Lưu ý rằng không phải tất cả bất thường đều là khiếm khuyết.",
    hasMindmaps: false,
    quiz: quizChapter3 as QuizQuestion[],
  },
  {
    id: "chapter-4",
    chapterNumber: 4,
    titleEn: "Test Analysis and Design",
    titleVi: "Phân tích và Thiết kế Kiểm thử",
    descriptionEn: "Bilingual study guide for Chapter 4",
    descriptionVi: "Hướng dẫn học tập song ngữ cho Chương 4",
    teacherAdviceEn:
      "Partitions must be disjoint and non-empty. Branch coverage is stronger than statement coverage.",
    teacherAdviceVi:
      "Các phân vùng tương đương phải không chồng chéo và không để trống. Bao phủ nhánh luôn mạnh hơn bao phủ câu lệnh.",
    hasMindmaps: false,
    quiz: quizChapter4 as QuizQuestion[],
  },
  {
    id: "chapter-5",
    chapterNumber: 5,
    titleEn: "Managing the Test Activities",
    titleVi: "Quản lý Các Hoạt động Kiểm thử",
    descriptionEn: "Bilingual study guide for Chapter 5",
    descriptionVi: "Hướng dẫn học tập song ngữ cho Chương 5",
    teacherAdviceEn:
      "Entry criteria are start conditions; exit criteria are done conditions.",
    teacherAdviceVi:
      "Tiêu chí đầu vào là điều kiện bắt đầu; tiêu chí đầu ra là điều kiện kết thúc. Rủi ro được tính bằng khả năng xảy ra nhân với tác động.",
    hasMindmaps: false,
    quiz: quizChapter5 as QuizQuestion[],
  },
  {
    id: "chapter-6",
    chapterNumber: 6,
    titleEn: "Test Tools",
    titleVi: "Công cụ Kiểm thử",
    descriptionEn: "Bilingual study guide for Chapter 6",
    descriptionVi: "Hướng dẫn học tập song ngữ cho Chương 6",
    teacherAdviceEn:
      "Automation supports testers and frees them for deeper work.",
    teacherAdviceVi:
      "Tự động hóa hỗ trợ con người chứ không thay thế hoàn toàn. Mã nguồn mở luôn đi kèm rủi ro về việc bị bỏ rơi hoặc cập nhật quá thường xuyên.",
    hasMindmaps: false,
    quiz: quizChapter6 as QuizQuestion[],
  },
  {
    id: "appendices",
    chapterNumber: 7,
    titleEn: "Appendices",
    titleVi: "Phụ lục",
    descriptionEn:
      "Appendix A (K-levels), B (traceability to official PDF), C (release notes), and index pointers — not examinable.",
    descriptionVi:
      "Phụ lục A (mức K), B (truy vết — xem PDF gốc), C (ghi chú phát hành) và chỉ mục — không dùng để ra đề.",
    teacherAdviceEn:
      "For the full BO matrix and index, use the official ISTQB PDF alongside this app.",
    teacherAdviceVi:
      "Để có ma trận BO và chỉ mục đầy đủ, hãy dùng PDF chính thức của ISTQB cùng app này.",
    hasMindmaps: false,
    quiz: [],
  },
];
