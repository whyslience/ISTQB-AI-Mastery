import type { SyllabusChapter } from "./syllabus";

/**
 * ISTQB Certified Tester AI Testing (CT-AI) v2.0 GA — study track metadata.
 * Chapter prose lives under `src/content/chapters-ai/`. Canonical syllabus wording:
 * `src/content/ISTQB-_CTAI_Syllabus_v2.0_Release.md` (and official ISTQB release).
 */
export const ctaiSyllabusData: SyllabusChapter[] = [
  {
    id: "ctai-0",
    chapterNumber: 0,
    titleEn: "Introduction (Syllabus context)",
    titleVi: "Giới thiệu (Ngữ cảnh giáo trình)",
    descriptionEn:
      "Purpose, certification, exam, accreditation, and how the syllabus is organized — context only.",
    descriptionVi:
      "Mục đích, chứng chỉ, kỳ thi, công nhận và cách tổ chức giáo trình — chủ yếu để nắm ngữ cảnh.",
    teacherAdviceEn:
      "Read the official v2.0 syllabus for exact exam rules and learning objectives (K-levels).",
    teacherAdviceVi:
      "Đọc giáo trình v2.0 chính thức để nắm quy tắc thi và mục tiêu học tập (mức K) chính xác.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-1",
    chapterNumber: 1,
    titleEn: "Introduction to Artificial Intelligence",
    titleVi: "Giới thiệu Trí tuệ Nhân tạo",
    descriptionEn: "AI vs conventional systems, AI types, technologies, GenAI, hardware, hosting, frameworks, regulations.",
    descriptionVi:
      "Hệ AI so với hệ thống truyền thống, các dạng AI, công nghệ, GenAI, phần cứng, triển khai, framework, quy định.",
    teacherAdviceEn:
      "Narrow AI is what we deploy today; distinguish ML, DL, GenAI, and frontier vs general vs super AI.",
    teacherAdviceVi:
      "Narrow AI là thực tế triển khai hôm nay; phân biệt ML, DL, GenAI và frontier so với general/super AI.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-2",
    chapterNumber: 2,
    titleEn: "Quality Characteristics for AI-Based Systems",
    titleVi: "Đặc tính Chất lượng cho Hệ thống Dựa trên AI",
    descriptionEn: "ISO/IEC 25059 quality model extensions, safety challenges, acceptance criteria.",
    descriptionVi:
      "Mở rộng mô hình chất lượng ISO/IEC 25059, thách thức an toàn, tiêu chí nghiệm thu.",
    teacherAdviceEn:
      "Acceptance criteria are often statistical or threshold-based, not purely binary pass/fail.",
    teacherAdviceVi:
      "Tiêu chí nghiệm thu thường mang tính thống kê hoặc ngưỡng, không chỉ đạt/không đạt nhị phân.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-3",
    chapterNumber: 3,
    titleEn: "Machine Learning",
    titleVi: "Học Máy (Machine Learning)",
    descriptionEn: "ML forms, workflow, data, metrics, neural networks, coverage measures.",
    descriptionVi:
      "Các dạng ML, quy trình, dữ liệu, chỉ số hiệu năng, mạng nơ-ron, độ đo bao phủ.",
    teacherAdviceEn:
      "ML regression in this syllabus means predicting numeric values — not CTFL regression testing.",
    teacherAdviceVi:
      "Thuật ngữ ML regression ở đây là hồi quy dự đoán giá trị số — không phải regression testing trong CTFL.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-4",
    chapterNumber: 4,
    titleEn: "Testing AI-Based Systems",
    titleVi: "Kiểm thử Hệ thống Dựa trên AI",
    descriptionEn: "Locked vs adaptive systems, statistics, oracles, GenAI/LLM testing, red teaming, test levels, risk.",
    descriptionVi:
      "Hệ khóa so với thích ứng, thống kê, oracle, kiểm thử GenAI/LLM, red teaming, mức kiểm thử, rủi ro.",
    teacherAdviceEn:
      "Many AI behaviours need statistical testing and explicit test oracles beyond simple expected results.",
    teacherAdviceVi:
      "Nhiều hành vi AI cần kiểm thử thống kê và oracle rõ ràng, không chỉ kết quả mong đợi đơn giản.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-5",
    chapterNumber: 5,
    titleEn: "Input Data Testing for Machine Learning Systems",
    titleVi: "Kiểm thử Dữ liệu Đầu vào cho Hệ Học Máy",
    descriptionEn: "Data risks, bias, pipeline, representativeness, constraints, labels, hands-on.",
    descriptionVi:
      "Rủi ro dữ liệu, thiên kiến, pipeline, đại diện, ràng buộc tập dữ liệu, nhãn, bài tập thực hành.",
    teacherAdviceEn:
      "Bad data early in the pipeline invalidates later model testing — test data and transforms first.",
    teacherAdviceVi:
      "Dữ liệu sai sớm trong pipeline làm mất giá trị kiểm thử model sau — kiểm tra dữ liệu và biến đổi trước.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-6",
    chapterNumber: 6,
    titleEn: "Model Testing for Machine Learning Systems",
    titleVi: "Kiểm thử Mô hình cho Hệ Học Máy",
    descriptionEn: "Documentation, performance, adversarial, metamorphic, drift, over/underfitting, A/B, back-to-back.",
    descriptionVi:
      "Tài liệu, hiệu năng, đối kháng, metamorphic, drift, over/underfitting, A/B, back-to-back.",
    teacherAdviceEn:
      "Metamorphic testing helps when no single oracle exists — relate outputs across transformed inputs.",
    teacherAdviceVi:
      "Kiểm thử biến hình (metamorphic) hữu ích khi không có oracle đơn — liên hệ đầu ra qua đầu vào biến đổi.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-7",
    chapterNumber: 7,
    titleEn: "Machine Learning Development Testing",
    titleVi: "Kiểm thử Phát triển Hệ Học Máy",
    descriptionEn: "Development risks, mitigations, deployment testing for MLS.",
    descriptionVi: "Rủi ro phát triển MLS, giảm thiểu, kiểm thử triển khai.",
    teacherAdviceEn:
      "Short chapter — connect MLS lifecycle risks to deployment and monitoring in production.",
    teacherAdviceVi:
      "Chương ngắn — liên kết rủi ro vòng đời MLS với triển khai và giám sát production.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-reference",
    chapterNumber: 8,
    titleEn: "Abbreviations, Terms, References, Trademarks",
    titleVi: "Viết tắt, Thuật ngữ, Tài liệu tham khảo, Nhãn hiệu",
    descriptionEn: "Pointers to syllabus sections 8–11 for quick lookup while studying.",
    descriptionVi: "Tham chiếu mục 8–11 trong giáo trình để tra cứu nhanh khi ôn.",
    teacherAdviceEn:
      "Use the official syllabus glossary for definitions required for the exam.",
    teacherAdviceVi:
      "Dùng bảng thuật ngữ chính thức trong giáo trình cho các định nghĩa cần cho kỳ thi.",
    hasMindmaps: false,
    quiz: [],
  },
  {
    id: "ctai-appendices",
    chapterNumber: 9,
    titleEn: "Appendices (Learning objectives, BO matrix, Release notes, Index)",
    titleVi: "Phụ lục (Mục tiêu học tập, ma trận BO, Ghi chú phát hành, Chỉ mục)",
    descriptionEn: "Appendix A–C and index — traceability and release context; use official PDF for full tables.",
    descriptionVi:
      "Phụ lục A–C và chỉ mục — truy vết và ngữ cảnh phát hành; dùng PDF chính thức cho bảng đầy đủ.",
    teacherAdviceEn:
      "Appendix B links business outcomes to learning objectives — ideal for gap-checking before the exam.",
    teacherAdviceVi:
      "Phụ lục B liên kết business outcomes với mục tiêu học — nên dùng để rà soát trước khi thi.",
    hasMindmaps: false,
    quiz: [],
  },
];
