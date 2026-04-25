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
    "id": "chapter-1",
    "chapterNumber": 1,
    "titleEn": "Fundamentals of Testing",
    "titleVi": "Các Khái Niệm Cơ Bản về Kiểm Thử",
    "descriptionEn": "Bilingual study guide for Chapter 1",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 1",
    "teacherAdviceEn": "Top 5 Exam Traps",
    "teacherAdviceVi": "5 Bẫy Thi Hàng đầu: Kiểm thử chứng minh không có bug là sai. Hãy nhớ Nguyên tắc 1: hiện diện, không phải vắng mặt.",
    "hasMindmaps": true,
    "quiz": [
      {
        "questionEn": "Which of the following is a typical test objective?",
        "questionVi": "Mục tiêu nào sau đây là mục tiêu kiểm thử điển hình?",
        "options": [
          { "en": "To prove the absence of defects", "vi": "Để chứng minh sự vắng mặt của khiếm khuyết" },
          { "en": "To cause failures and find defects", "vi": "Để gây ra thất bại và tìm khiếm khuyết" },
          { "en": "To replace quality assurance", "vi": "Để thay thế đảm bảo chất lượng" },
          { "en": "To perform debugging", "vi": "Để thực hiện gỡ lỗi" }
        ],
        "correctEn": "To cause failures and find defects",
        "correctVi": "Để gây ra thất bại và tìm khiếm khuyết",
        "explanation": "* **b) Correct**\n* **b) Đúng**\n\"Causing failures and finding defects\" is explicitly listed as a typical test objective in the syllabus.\n\"Gây ra thất bại và tìm khiếm khuyết\" được liệt kê rõ ràng là một mục tiêu kiểm thử điển hình trong giáo trình.\n\n* **a) Incorrect**\n* **a) Sai**\nTesting shows the presence, not the absence of defects (Principle 1).\nKiểm thử cho thấy sự hiện diện, không phải sự vắng mặt của khiếm khuyết (Nguyên tắc 1).\n\n* **c) Incorrect**\n* **c) Sai**\nTesting does not replace QA; testing is a form of QC, while QA is process-oriented.\nKiểm thử không thay thế QA; kiểm thử là một hình thức QC, trong khi QA định hướng quy trình.\n\n* **d) Incorrect**\n* **d) Sai**\nDebugging is a separate activity from testing.\nGỡ lỗi là một hoạt động riêng biệt với kiểm thử."
      },
      {
        "questionEn": "What is the main difference between testing and debugging?",
        "questionVi": "Sự khác biệt chính giữa kiểm thử và gỡ lỗi là gì?",
        "options": [
          { "en": "Testing finds the root cause; debugging removes defects", "vi": "Kiểm thử tìm nguyên nhân gốc rễ; gỡ lỗi loại bỏ khiếm khuyết" },
          { "en": "Testing triggers failures and finds defects; debugging diagnoses and fixes defects", "vi": "Kiểm thử kích hoạt thất bại và tìm khiếm khuyết; gỡ lỗi chẩn đoán và sửa khiếm khuyết" },
          { "en": "Testing is performed by developers; debugging by testers", "vi": "Kiểm thử được thực hiện bởi lập trình viên; gỡ lỗi bởi kiểm thử viên" },
          { "en": "They are the same activity with different names", "vi": "Chúng là cùng một hoạt động với các tên gọi khác nhau" }
        ],
        "correctEn": "Testing triggers failures and finds defects; debugging diagnoses and fixes defects",
        "correctVi": "Kiểm thử kích hoạt thất bại và tìm khiếm khuyết; gỡ lỗi chẩn đoán và sửa khiếm khuyết",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nTesting discovers defects (often by triggering failures), while debugging is the process of reproducing, diagnosing, and fixing the underlying defect.\nKiểm thử phát hiện khiếm khuyết (thường bằng cách kích hoạt thất bại), trong khi gỡ lỗi là quá trình tái hiện, chẩn đoán và sửa chữa khiếm khuyết cơ bản.\n\n* **a) Incorrect**\n* **a) Sai**\nRoot cause analysis is part of debugging, not testing.\nPhân tích nguyên nhân gốc rễ là một phần của gỡ lỗi, không phải kiểm thử.\n\n* **c) Incorrect**\n* **c) Sai**\nBoth activities can involve testers and developers; role is not the differentiator.\nCả hai hoạt động đều có thể liên quan đến kiểm thử viên và lập trình viên; vai trò không phải là yếu tố phân biệt.\n\n* **d) Incorrect**\n* **d) Sai**\nThey are explicitly defined as separate activities in the syllabus.\nChúng được định nghĩa rõ ràng là các hoạt động riêng biệt trong giáo trình."
      },
      {
        "questionEn": "Which sequence correctly describes the chain from human mistake to system malfunction?",
        "questionVi": "Trình tự nào sau đây mô tả đúng chuỗi từ sai lầm của con người đến trục trặc hệ thống?",
        "options": [
          { "en": "Defect → Error → Failure", "vi": "Khiếm khuyết → Lỗi → Thất bại" },
          { "en": "Error → Defect → Failure", "vi": "Lỗi → Khiếm khuyết → Thất bại" },
          { "en": "Failure → Defect → Error", "vi": "Thất bại → Khiếm khuyết → Lỗi" },
          { "en": "Error → Failure → Defect", "vi": "Lỗi → Thất bại → Khiếm khuyết" }
        ],
        "correctEn": "Error → Defect → Failure",
        "correctVi": "Lỗi → Khiếm khuyết → Thất bại",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nHumans make **errors** (mistakes), which create **defects** (faults in work products), which may cause **failures** when executed.\nCon người tạo ra **lỗi** (sai sót), từ đó tạo ra **khiếm khuyết** (khuyết điểm trong sản phẩm làm việc), và có thể gây ra **thất bại** khi thực thi.\n\n* The other options reverse the causal chain.\n* Các lựa chọn khác đảo ngược chuỗi nhân quả."
      },
      {
        "questionEn": "Which principle states that testing everything is not feasible except in trivial cases?",
        "questionVi": "Nguyên tắc nào phát biểu rằng việc kiểm thử mọi thứ là không khả thi trừ những trường hợp tầm thường?",
        "options": [
          { "en": "Early testing saves time and money", "vi": "Kiểm thử sớm tiết kiệm thời gian và tiền bạc" },
          { "en": "Defects cluster together", "vi": "Khiếm khuyết tập trung cùng nhau" },
          { "en": "Exhaustive testing is impossible", "vi": "Kiểm thử toàn diện là không thể" },
          { "en": "Tests wear out", "vi": "Các bài kiểm thử bị mòn" }
        ],
        "correctEn": "Exhaustive testing is impossible",
        "correctVi": "Kiểm thử toàn diện là không thể",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nPrinciple 2 explicitly states that exhaustive testing is impossible except in trivial cases.\nNguyên tắc 2 nêu rõ rằng kiểm thử toàn diện là không thể trừ các trường hợp tầm thường.\n\n* **a) Incorrect**\n* **a) Sai**\nThis is Principle 3, about cost of quality.\nĐây là Nguyên tắc 3, về chi phí chất lượng.\n\n* **b) Incorrect**\n* **b) Sai**\nThis is Principle 4, about the Pareto distribution of defects.\nĐây là Nguyên tắc 4, về phân phối Pareto của các khiếm khuyết.\n\n* **d) Incorrect**\n* **d) Sai**\nThis is Principle 5, about the decreasing effectiveness of repeated tests.\nĐây là Nguyên tắc 5, về sự giảm hiệu quả của các bài kiểm thử lặp lại."
      },
      {
        "questionEn": "Which test activity answers the question \"How to test?\"",
        "questionVi": "Hoạt động kiểm thử nào trả lời câu hỏi \"Kiểm thử như thế nào?\"",
        "options": [
          { "en": "Test Analysis", "vi": "Phân tích kiểm thử" },
          { "en": "Test Design", "vi": "Thiết kế kiểm thử" },
          { "en": "Test Implementation", "vi": "Triển khai kiểm thử" },
          { "en": "Test Execution", "vi": "Thực thi kiểm thử" }
        ],
        "correctEn": "Test Design",
        "correctVi": "Thiết kế kiểm thử",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nTest design elaborates test conditions into test cases and defines how to test.\nThiết kế kiểm thử chi tiết hóa các điều kiện kiểm thử thành các ca kiểm thử và xác định cách kiểm thử.\n\n* **a) Incorrect**\n* **a) Sai**\nTest analysis answers \"What to test?\"\nPhân tích kiểm thử trả lời câu hỏi \"Kiểm thử cái gì?\"\n\n* **c) Incorrect**\n* **c) Sai**\nImplementation prepares the testware and environment for execution.\nTriển khai chuẩn bị tài liệu kiểm thử và môi trường để thực thi.\n\n* **d) Incorrect**\n* **d) Sai**\nExecution runs the tests and compares results.\nThực thi chạy các bài kiểm thử và so sánh kết quả."
      },
      {
        "questionEn": "What is a key benefit of maintaining traceability between the test basis and testware?",
        "questionVi": "Lợi ích chính của việc duy trì khả năng truy xuất nguồn gốc giữa cơ sở kiểm thử và tài liệu kiểm thử là gì?",
        "options": [
          { "en": "It eliminates the need for regression testing", "vi": "Nó loại bỏ nhu cầu kiểm thử hồi quy" },
          { "en": "It helps evaluate coverage and assess the impact of changes", "vi": "Nó giúp đánh giá độ bao phủ và tác động của thay đổi" },
          { "en": "It replaces the test plan", "vi": "Nó thay thế kế hoạch kiểm thử" },
          { "en": "It guarantees the absence of defects", "vi": "Nó đảm bảo sự vắng mặt của khiếm khuyết" }
        ],
        "correctEn": "It helps evaluate coverage and assess the impact of changes",
        "correctVi": "Nó giúp đánh giá độ bao phủ và tác động của thay đổi",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nTraceability supports coverage evaluation and impact analysis, as stated in the syllabus.\nKhả năng truy xuất nguồn gốc hỗ trợ đánh giá độ bao phủ và phân tích tác động, như đã nêu trong giáo trình.\n\n* **a) Incorrect**\n* **a) Sai**\nTraceability does not eliminate regression testing.\nKhả năng truy xuất nguồn gốc không loại bỏ kiểm thử hồi quy.\n\n* **c) Incorrect**\n* **c) Sai**\nTraceability complements but does not replace a test plan.\nKhả năng truy xuất nguồn gốc bổ sung nhưng không thay thế kế hoạch kiểm thử.\n\n* **d) Incorrect**\n* **d) Sai**\nNo activity can guarantee the absence of defects (Principle 1).\nKhông có hoạt động nào có thể đảm bảo sự vắng mặt của khiếm khuyết (Nguyên tắc 1)."
      },
      {
        "questionEn": "Which of the following is a drawback of high independence in testing?",
        "questionVi": "Hạn chế nào sau đây là của tính độc lập cao trong kiểm thử?",
        "options": [
          { "en": "Testers may verify assumptions made by stakeholders", "vi": "Kiểm thử viên có thể xác minh các giả định của các bên liên quan" },
          { "en": "Testers may be isolated from the development team", "vi": "Kiểm thử viên có thể bị cô lập khỏi nhóm phát triển" },
          { "en": "Testers find fewer defects than developers", "vi": "Kiểm thử viên tìm thấy ít khiếm khuyết hơn lập trình viên" },
          { "en": "Testers improve team dynamics", "vi": "Kiểm thử viên cải thiện động lực nhóm" }
        ],
        "correctEn": "Testers may be isolated from the development team",
        "correctVi": "Kiểm thử viên có thể bị cô lập khỏi nhóm phát triển",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nIsolation from the development team is an explicitly listed drawback of independence.\nSự cô lập khỏi nhóm phát triển là một hạn chế được liệt kê rõ ràng của tính độc lập.\n\n* **a) Incorrect**\n* **a) Sai**\nVerifying assumptions is a benefit, not a drawback.\nXác minh các giả định là một lợi ích, không phải hạn chế.\n\n* **c) Incorrect**\n* **c) Sai**\nIndependent testers typically find different defects, not necessarily fewer.\nKiểm thử viên độc lập thường tìm thấy các khiếm khuyết khác nhau, không nhất thiết là ít hơn.\n\n* **d) Incorrect**\n* **d) Sai**\nIsolation can harm, not improve, team dynamics.\nSự cô lập có thể gây hại, không phải cải thiện, động lực nhóm."
      },
      {
        "questionEn": "The whole team approach is a practice originating from:",
        "questionVi": "Phương pháp tiếp cận toàn nhóm (whole team approach) là một thực tiễn bắt nguồn từ:",
        "options": [
          { "en": "Scrum", "vi": "Scrum" },
          { "en": "Extreme Programming (XP)", "vi": "Lập trình cực hạn (XP)" },
          { "en": "Waterfall", "vi": "Thác nước" },
          { "en": "V-Model", "vi": "Mô hình chữ V" }
        ],
        "correctEn": "Extreme Programming (XP)",
        "correctVi": "Lập trình cực hạn (XP)",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nThe syllabus explicitly states the whole team approach comes from Extreme Programming (XP).\nGiáo trình nêu rõ rằng phương pháp tiếp cận toàn nhóm đến từ Lập trình cực hạn (XP).\n\n* **a/c/d) Incorrect**\n* **a/c/d) Sai**\nWhile Scrum uses cross-functional teams, the \"whole team approach\" as a specific practice originates from XP.\nMặc dù Scrum sử dụng các nhóm liên chức năng, \"phương pháp tiếp cận toàn nhóm\" như một thực tiễn cụ thể bắt nguồn từ XP."
      }
    ]
  },
  {
    "id": "chapter-2",
    "chapterNumber": 2,
    "titleEn": "Testing Throughout the Software Development Lifecycle",
    "titleVi": "Kiểm thử trong suốt Vòng đời Phát triển Phần mềm",
    "descriptionEn": "Bilingual study guide for Chapter 2",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 2",
    "teacherAdviceEn": "Shift left adds early testing; late testing remains.",
    "teacherAdviceVi": "Dịch chuyển sang trái bổ sung kiểm thử sớm nhưng không loại bỏ kiểm thử giai đoạn sau. TDD, ATDD và BDD là các phương pháp khác nhau về trọng tâm (đơn vị, chấp nhận, hành vi).",
    "hasMindmaps": false,
    "quiz": [
      {
        "questionEn": "Which of the following is a good testing practice that applies to all SDLCs?",
        "questionVi": "Thực tiễn kiểm thử tốt nào sau đây áp dụng cho tất cả các SDLC?",
        "options": [
          { "en": "Test documentation must be exhaustive regardless of the SDLC", "vi": "Tài liệu kiểm thử phải toàn diện bất kể SDLC nào" },
          { "en": "Test analysis for a given test level should begin during the corresponding development phase", "vi": "Phân tích kiểm thử cho một mức độ kiểm thử nhất định nên bắt đầu trong giai đoạn phát triển tương ứng" },
          { "en": "Only one test level should be used to avoid redundancy", "vi": "Chỉ nên sử dụng một mức độ kiểm thử để tránh dư thừa" },
          { "en": "Dynamic testing should only begin after system deployment", "vi": "Kiểm thử động chỉ nên bắt đầu sau khi triển khai hệ thống" }
        ],
        "correctEn": "Test analysis for a given test level should begin during the corresponding development phase",
        "correctVi": "Phân tích kiểm thử cho một mức độ kiểm thử nhất định nên bắt đầu trong giai đoạn phát triển tương ứng",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nThe syllabus explicitly states this as a universal good practice supporting early testing.\nGiáo trình nêu rõ đây là một thực tiễn tốt phổ quát hỗ trợ kiểm thử sớm.\n\n* **a) Incorrect**\n* **a) Sai**\nAgile favors lightweight documentation.\nAgile ưu tiên tài liệu nhẹ nhàng.\n\n* **c) Incorrect**\n* **c) Sai**\nMultiple test levels with different objectives avoid redundancy while ensuring comprehensiveness.\nNhiều mức độ kiểm thử với các mục tiêu khác nhau giúp tránh dư thừa trong khi đảm bảo tính toàn diện.\n\n* **d) Incorrect**\n* **d) Sai**\nDynamic testing begins when executable code is available, not after deployment.\nKiểm thử động bắt đầu khi có mã thực thi, không phải sau khi triển khai."
      },
      {
        "questionEn": "In Behavior-Driven Development (BDD), test cases are typically written in:",
        "questionVi": "Trong Phát triển hướng hành vi (BDD), các ca kiểm thử thường được viết bằng:",
        "options": [
          { "en": "Machine code", "vi": "Mã máy" },
          { "en": "SQL queries", "vi": "Các câu truy vấn SQL" },
          { "en": "A simple form of natural language (Given/When/Then)", "vi": "Một dạng ngôn ngữ tự nhiên đơn giản (Given/When/Then)" },
          { "en": "UML diagrams only", "vi": "Chỉ các sơ đồ UML" }
        ],
        "correctEn": "A simple form of natural language (Given/When/Then)",
        "correctVi": "Một dạng ngôn ngữ tự nhiên đơn giản (Given/When/Then)",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nBDD uses natural language (Given/When/Then) to express desired behavior.\nBDD sử dụng ngôn ngữ tự nhiên (Given/When/Then) để thể hiện hành vi mong muốn.\n\n* The other options are not characteristic of BDD.\n* Các lựa chọn khác không phải là đặc điểm của BDD."
      },
      {
        "questionEn": "Which test level focuses on testing the interfaces between components?",
        "questionVi": "Mức độ kiểm thử nào tập trung vào việc kiểm thử các giao diện giữa các thành phần?",
        "options": [
          { "en": "Component testing", "vi": "Kiểm thử thành phần" },
          { "en": "Component integration testing", "vi": "Kiểm thử tích hợp thành phần" },
          { "en": "System testing", "vi": "Kiểm thử hệ thống" },
          { "en": "Acceptance testing", "vi": "Kiểm thử chấp nhận" }
        ],
        "correctEn": "Component integration testing",
        "correctVi": "Kiểm thử tích hợp thành phần",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nComponent integration testing explicitly focuses on interfaces and interactions between components.\nKiểm thử tích hợp thành phần tập trung rõ ràng vào các giao diện và tương tác giữa các thành phần.\n\n* **a) Incorrect**\n* **a) Sai**\nComponent testing focuses on components in isolation.\nKiểm thử thành phần tập trung vào các thành phần riêng lẻ.\n\n* **c) Incorrect**\n* **c) Sai**\nSystem testing focuses on the entire system.\nKiểm thử hệ thống tập trung vào toàn bộ hệ thống.\n\n* **d) Incorrect**\n* **d) Sai**\nAcceptance testing focuses on business readiness.\nKiểm thử chấp nhận tập trung vào sự sẵn sàng về mặt kinh doanh."
      },
      {
        "questionEn": "Which of the following is a non-functional quality characteristic according to ISO 25010?",
        "questionVi": "Đặc tính chất lượng phi chức năng nào sau đây theo tiêu chuẩn ISO 25010?",
        "options": [
          { "en": "Functional completeness", "vi": "Tính đầy đủ chức năng" },
          { "en": "Functional correctness", "vi": "Tính đúng đắn chức năng" },
          { "en": "Performance efficiency", "vi": "Hiệu quả hiệu suất" },
          { "en": "Functional appropriateness", "vi": "Tính phù hợp chức năng" }
        ],
        "correctEn": "Performance efficiency",
        "correctVi": "Hiệu quả hiệu suất",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nPerformance efficiency is explicitly listed as a non-functional quality characteristic.\nHiệu quả hiệu suất được liệt kê rõ ràng là một đặc tính chất lượng phi chức năng.\n\n* **a, b, d) Incorrect**\n* **a, b, d) Sai**\nThese are functional testing objectives.\nĐây là các mục tiêu kiểm thử chức năng."
      },
      {
        "questionEn": "What is the primary purpose of regression testing?",
        "questionVi": "Mục đích chính của kiểm thử hồi quy là gì?",
        "options": [
          { "en": "To confirm that a defect has been fixed", "vi": "Để xác nhận rằng một khiếm khuyết đã được sửa" },
          { "en": "To check for adverse consequences caused by a change", "vi": "Để kiểm tra các hậu quả bất lợi gây ra bởi một thay đổi" },
          { "en": "To evaluate work products before execution", "vi": "Để đánh giá các sản phẩm làm việc trước khi thực thi" },
          { "en": "To perform static analysis on source code", "vi": "Để thực hiện phân tích tĩnh trên mã nguồn" }
        ],
        "correctEn": "To check for adverse consequences caused by a change",
        "correctVi": "Để kiểm tra các hậu quả bất lợi gây ra bởi một thay đổi",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nRegression testing confirms no adverse consequences in unchanged or related areas after a change.\nKiểm thử hồi quy xác nhận không có hậu quả bất lợi nào trong các khu vực không thay đổi hoặc có liên quan sau một thay đổi.\n\n* **a) Incorrect**\n* **a) Sai**\nThat is confirmation testing.\nĐó là kiểm thử xác nhận.\n\n* **c/d) Incorrect**\n* **c/d) Sai**\nThese describe static testing activities.\nĐây là mô tả các hoạt động kiểm thử tĩnh."
      },
      {
        "questionEn": "Which of the following best describes \"shift left\"?",
        "questionVi": "Điều nào sau đây mô tả đúng nhất về \"dịch chuyển sang trái\"?",
        "options": [
          { "en": "Eliminating all testing activities after code implementation", "vi": "Loại bỏ tất cả các hoạt động kiểm thử sau khi triển khai mã" },
          { "en": "Moving testing activities to earlier phases of the SDLC", "vi": "Di chuyển các hoạt động kiểm thử sang các giai đoạn sớm hơn của SDLC" },
          { "en": "Transferring testers to the left side of the office", "vi": "Chuyển các kiểm thử viên sang phía bên trái của văn phòng" },
          { "en": "Using only manual testing in early phases", "vi": "Chỉ sử dụng kiểm thử thủ công trong các giai đoạn đầu" }
        ],
        "correctEn": "Moving testing activities to earlier phases of the SDLC",
        "correctVi": "Di chuyển các hoạt động kiểm thử sang các giai đoạn sớm hơn của SDLC",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nShift left means testing earlier in the SDLC, not removing later testing.\nDịch chuyển sang trái có nghĩa là kiểm thử sớm hơn trong SDLC, không phải loại bỏ kiểm thử sau này.\n\n* **a) Incorrect**\n* **a) Sai**\nLater testing is not eliminated.\nKiểm thử giai đoạn sau không bị loại bỏ.\n\n* **c) Incorrect**\n* **c) Sai**\nThis is a literal misinterpretation.\nĐây là một cách hiểu sai theo nghĩa đen.\n\n* **d) Incorrect**\n* **d) Sai**\nShift left includes automated static analysis and component tests.\nDịch chuyển sang trái bao gồm phân tích tĩnh tự động và kiểm thử thành phần."
      },
      {
        "questionEn": "Which test level is ideally performed by the intended users?",
        "questionVi": "Mức độ kiểm thử nào lý tưởng nhất được thực hiện bởi người dùng dự kiến?",
        "options": [
          { "en": "System testing", "vi": "Kiểm thử hệ thống" },
          { "en": "Component testing", "vi": "Kiểm thử thành phần" },
          { "en": "Acceptance testing", "vi": "Kiểm thử chấp nhận" },
          { "en": "Component integration testing", "vi": "Kiểm thử tích hợp thành phần" }
        ],
        "correctEn": "Acceptance testing",
        "correctVi": "Kiểm thử chấp nhận",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nAcceptance testing ideally involves the intended users to validate business needs.\nKiểm thử chấp nhận lý tưởng nhất là liên quan đến người dùng dự kiến để xác thực các nhu cầu kinh doanh.\n\n* The other levels are typically performed by developers or independent test teams.\n* Các mức độ khác thường được thực hiện bởi lập trình viên hoặc các nhóm kiểm thử độc lập."
      },
      {
        "questionEn": "Which of the following is a trigger for maintenance testing?",
        "questionVi": "Điều nào sau đây là yếu tố kích hoạt cho kiểm thử bảo trì?",
        "options": [
          { "en": "Initial development of a new system", "vi": "Phát triển ban đầu một hệ thống mới" },
          { "en": "Retirement of an application", "vi": "Ngừng hoạt động một ứng dụng" },
          { "en": "Writing the first user story", "vi": "Viết user story đầu tiên" },
          { "en": "Creating the project charter", "vi": "Tạo hiến chương dự án" }
        ],
        "correctEn": "Retirement of an application",
        "correctVi": "Ngừng hoạt động một ứng dụng",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nRetirement is explicitly listed as a trigger for maintenance testing (archiving, retrieval procedures).\nNgừng hoạt động được liệt kê rõ ràng là yếu tố kích hoạt kiểm thử bảo trì (lưu trữ, quy trình khôi phục).\n\n* **a/c/d) Incorrect**\n* **a/c/d) Sai**\nThese are new project activities, not maintenance triggers.\nĐây là các hoạt động dự án mới, không phải yếu tố kích hoạt bảo trì."
      }
    ]
  },
  {
    "id": "chapter-3",
    "chapterNumber": 3,
    "titleEn": "Static Testing",
    "titleVi": "Kiểm thử Tĩnh",
    "descriptionEn": "Bilingual study guide for Chapter 3",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 3",
    "teacherAdviceEn": "Static testing also finds code defects like unreachable code and complexity.",
    "teacherAdviceVi": "Kiểm thử tĩnh có thể phát hiện các khiếm khuyết trong code như mã không thể thực thi. Lưu ý rằng không phải tất cả bất thường đều là khiếm khuyết.",
    "hasMindmaps": false,
    "quiz": [
      {
        "questionEn": "Which of the following is a typical defect easier to find through static testing than dynamic testing?",
        "questionVi": "Khiếm khuyết điển hình nào sau đây dễ tìm thấy qua kiểm thử tĩnh hơn là kiểm thử động?",
        "options": [
          { "en": "Incorrect calculation result during execution", "vi": "Kết quả tính toán sai trong quá trình thực thi" },
          { "en": "Slow response time under load", "vi": "Thời gian phản hồi chậm khi có tải" },
          { "en": "Unreachable code in the source", "vi": "Mã không thể thực thi trong mã nguồn" },
          { "en": "Memory leak during runtime", "vi": "Rò rỉ bộ nhớ trong quá trình chạy" }
        ],
        "correctEn": "Unreachable code in the source",
        "correctVi": "Mã không thể thực thi trong mã nguồn",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nUnreachable code is explicitly listed as a defect detectable by static analysis but not by dynamic testing (since it never executes).\nMã không thể thực thi được liệt kê rõ ràng là khiếm khuyết có thể phát hiện bằng phân tích tĩnh nhưng không bằng kiểm thử động (vì nó không bao giờ thực thi).\n\n* **a/b/d) Incorrect**\n* **a/b/d) Sai**\nThese require execution and are found through dynamic testing.\nNhững điều này yêu cầu thực thi và được tìm thấy qua kiểm thử động."
      },
      {
        "questionEn": "In the review process, during which activity are anomalies analyzed and their status decided?",
        "questionVi": "Trong quy trình đánh giá, hoạt động nào thực hiện phân tích các bất thường và quyết định trạng thái của chúng?",
        "options": [
          { "en": "Planning", "vi": "Lập kế hoạch" },
          { "en": "Individual review", "vi": "Đánh giá cá nhân" },
          { "en": "Communication and analysis", "vi": "Giao tiếp và phân tích" },
          { "en": "Fixing and reporting", "vi": "Sửa chữa và báo cáo" }
        ],
        "correctEn": "Communication and analysis",
        "correctVi": "Giao tiếp và phân tích",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nThe communication and analysis activity involves analyzing anomalies and deciding status, ownership, and actions.\nHoạt động giao tiếp và phân tích bao gồm việc phân tích các bất thường và quyết định trạng thái, quyền sở hữu và hành động.\n\n* **a) Incorrect**\n* **a) Sai**\nPlanning defines scope, not anomaly status.\nLập kế hoạch xác định phạm vi, không phải trạng thái bất thường.\n\n* **b) Incorrect**\n* **b) Sai**\nIndividual review identifies anomalies; analysis happens later.\nĐánh giá cá nhân xác định các bất thường; phân tích diễn ra sau đó.\n\n* **d) Incorrect**\n* **d) Sai**\nFixing occurs after analysis and decision-making.\nSửa chữa diễn ra sau khi phân tích và đưa ra quyết định."
      },
      {
        "questionEn": "Which role is responsible for ensuring effective running of review meetings?",
        "questionVi": "Vai trò nào chịu trách nhiệm đảm bảo việc điều hành hiệu quả các cuộc họp đánh giá?",
        "options": [
          { "en": "Author", "vi": "Tác giả" },
          { "en": "Manager", "vi": "Quản lý" },
          { "en": "Moderator", "vi": "Người điều phối" },
          { "en": "Review leader", "vi": "Trưởng nhóm đánh giá" }
        ],
        "correctEn": "Moderator",
        "correctVi": "Người điều phối",
        "explanation": "* **c) Correct**\n* **c) Đúng**\nThe moderator ensures effective meetings, mediation, time management, and a safe environment.\nNgười điều phối đảm bảo các cuộc họp hiệu quả, hòa giải, quản lý thời gian và môi trường an toàn.\n\n* **a) Incorrect**\n* **a) Sai**\nThe author creates/fixes the work product.\nTác giả tạo ra/sửa chữa sản phẩm làm việc.\n\n* **b) Incorrect**\n* **b) Sai**\nThe manager provides resources.\nQuản lý cung cấp nguồn lực.\n\n* **d) Incorrect**\n* **d) Sai**\nThe review leader organizes the review but the moderator runs the meeting.\nTrưởng nhóm đánh giá tổ chức cuộc đánh giá nhưng người điều phối điều hành cuộc họp."
      },
      {
        "questionEn": "Which review type is the most formal and collects metrics to improve the SDLC?",
        "questionVi": "Loại đánh giá nào là hình thức nhất và thu thập các số liệu để cải thiện SDLC?",
        "options": [
          { "en": "Informal review", "vi": "Đánh giá không chính thức" },
          { "en": "Walkthrough", "vi": "Duyệt qua" },
          { "en": "Technical review", "vi": "Đánh giá kỹ thuật" },
          { "en": "Inspection", "vi": "Thanh tra" }
        ],
        "correctEn": "Inspection",
        "correctVi": "Thanh tra",
        "explanation": "* **d) Correct**\n* **d) Đúng**\nInspection is the most formal type and explicitly collects metrics for process improvement.\nThanh tra là loại hình thức nhất và thu thập các số liệu rõ ràng để cải thiện quy trình.\n\n* **c) Incorrect**\n* **c) Sai**\nTechnical review is formal but does not emphasize metrics collection as its primary goal.\nĐánh giá kỹ thuật là hình thức nhưng không nhấn mạnh vào việc thu thập số liệu như mục tiêu chính.\n\n* **a/b) Incorrect**\n* **a/b) Sai**\nThese are less formal.\nĐây là các hình thức ít chính thức hơn."
      }
    ]
  },
  {
    "id": "chapter-4",
    "chapterNumber": 4,
    "titleEn": "Test Analysis and Design",
    "titleVi": "Phân tích và Thiết kế Kiểm thử",
    "descriptionEn": "Bilingual study guide for Chapter 4",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 4",
    "teacherAdviceEn": "Partitions must be disjoint and non-empty. Branch coverage is stronger than statement coverage.",
    "teacherAdviceVi": "Các phân vùng tương đương phải không chồng chéo và không để trống. Bao phủ nhánh luôn mạnh hơn bao phủ câu lệnh.",
    "hasMindmaps": false,
    "quiz": [
      {
        "questionEn": "In equivalence partitioning, which of the following is true about partitions?",
        "questionVi": "Trong phân vùng tương đương, điều nào sau đây là đúng về các phân vùng?",
        "options": [
          { "en": "They may overlap to ensure thorough testing", "vi": "Chúng có thể chồng chéo để đảm bảo kiểm thử kỹ lưỡng" },
          { "en": "They must be non-empty and must not overlap", "vi": "Chúng phải không rỗng và không được chồng chéo" },
          { "en": "They should only include valid values", "vi": "Chúng chỉ nên bao gồm các giá trị hợp lệ" },
          { "en": "They are only applicable to output data", "vi": "Chúng chỉ áp dụng cho dữ liệu đầu ra" }
        ],
        "correctEn": "They must be non-empty and must not overlap",
        "correctVi": "Chúng phải không rỗng và không được chồng chéo",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nThe syllabus explicitly states partitions must not overlap and must be non-empty.\nGiáo trình nêu rõ các phân vùng không được chồng chéo và phải không rỗng.\n\n* **a) Incorrect**\n* **a) Sai**\nOverlapping violates EP rules.\nChồng chéo vi phạm quy tắc EP.\n\n* **c) Incorrect**\n* **c) Sai**\nBoth valid and invalid partitions must be identified.\nCả phân vùng hợp lệ và không hợp lệ đều phải được xác định.\n\n* **d) Incorrect**\n* **d) Sai**\nEP applies to inputs, outputs, configuration, internal values, time, and interface parameters.\nEP áp dụng cho đầu vào, đầu ra, cấu hình, giá trị nội bộ, thời gian và các tham số giao diện."
      }
    ]
  },
  {
    "id": "chapter-5",
    "chapterNumber": 5,
    "titleEn": "Managing the Test Activities",
    "titleVi": "Quản lý Các Hoạt động Kiểm thử",
    "descriptionEn": "Bilingual study guide for Chapter 5",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 5",
    "teacherAdviceEn": "Entry criteria are start conditions; exit criteria are done conditions.",
    "teacherAdviceVi": "Tiêu chí đầu vào là điều kiện bắt đầu; tiêu chí đầu ra là điều kiện kết thúc. Rủi ro được tính bằng khả năng xảy ra nhân với tác động.",
    "hasMindmaps": false,
    "quiz": [
      {
        "questionEn": "Which of the following is typically included in a test plan?",
        "questionVi": "Điều nào sau đây thường được bao gồm trong một kế hoạch kiểm thử?",
        "options": [
          { "en": "Detailed code implementation", "vi": "Triển khai mã chi tiết" },
          { "en": "Test approach and risk register", "vi": "Phương pháp tiếp cận kiểm thử và sổ đăng ký rủi ro" },
          { "en": "Marketing strategy for the product", "vi": "Chiến lược tiếp thị cho sản phẩm" },
          { "en": "End-user training materials", "vi": "Tài liệu đào tạo người dùng cuối" }
        ],
        "correctEn": "Test approach and risk register",
        "correctVi": "Phương pháp tiếp cận kiểm thử và sổ đăng ký rủi ro",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nTest approach and risk register are explicitly listed as typical test plan contents.\nPhương pháp tiếp cận kiểm thử và sổ đăng ký rủi ro được liệt kê rõ ràng là nội dung kế hoạch kiểm thử điển hình.\n\n* **a/c/d) Incorrect**\n* **a/c/d) Sai**\nThese are outside the scope of a test plan.\nNhững điều này nằm ngoài phạm vi của một kế hoạch kiểm thử."
      }
    ]
  },
  {
    "id": "chapter-6",
    "chapterNumber": 6,
    "titleEn": "Test Tools",
    "titleVi": "Công cụ Kiểm thử",
    "descriptionEn": "Bilingual study guide for Chapter 6",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 6",
    "teacherAdviceEn": "Automation supports testers and frees them for deeper work.",
    "teacherAdviceVi": "Tự động hóa hỗ trợ con người chứ không thay thế hoàn toàn. Mã nguồn mở luôn đi kèm rủi ro về việc bị bỏ rơi hoặc cập nhật quá thường xuyên.",
    "hasMindmaps": false,
    "quiz": [
      {
        "questionEn": "Which of the following is a potential benefit of test automation?",
        "questionVi": "Lợi ích tiềm năng nào của tự động hóa kiểm thử sau đây?",
        "options": [
          { "en": "Eliminating the need for test planning", "vi": "Loại bỏ nhu cầu lập kế hoạch kiểm thử" },
          { "en": "Reducing test execution times and providing faster feedback", "vi": "Giảm thời gian thực thi kiểm thử và cung cấp phản hồi nhanh hơn" },
          { "en": "Removing all human involvement from testing", "vi": "Loại bỏ tất cả sự tham gia của con người vào kiểm thử" },
          { "en": "Guaranteeing the absence of defects", "vi": "Đảm bảo sự vắng mặt của khiếm khuyết" }
        ],
        "correctEn": "Reducing test execution times and providing faster feedback",
        "correctVi": "Giảm thời gian thực thi kiểm thử và cung cấp phản hồi nhanh hơn",
        "explanation": "* **b) Correct**\n* **b) Đúng**\nFaster execution and feedback are explicitly listed benefits.\nThực thi nhanh hơn và phản hồi nhanh hơn là các lợi ích được liệt kê rõ ràng.\n\n* **a) Incorrect**\n* **a) Sai**\nPlanning remains essential.\nLập kế hoạch vẫn là thiết yếu.\n\n* **c) Incorrect**\n* **c) Sai**\nHuman critical thinking is still required.\nTư duy phản biện của con người vẫn cần thiết.\n\n* **d) Incorrect**\n* **d) Sai**\nNo activity guarantees absence of defects.\nKhông có hoạt động nào đảm bảo vắng mặt khiếm khuyết."
      }
    ]
  }
];
