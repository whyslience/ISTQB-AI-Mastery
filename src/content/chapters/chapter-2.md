
## 1. Overview / Tổng quan

### Overview / Tổng quan

This chapter explains how testing fits into different software development lifecycles (SDLCs). It covers the impact of SDLC choices on testing, good testing practices applicable to all models, test-first approaches, DevOps, shift left, retrospectives, test levels, test types, and maintenance testing. Understanding these relationships is critical for aligning test activities with development contexts.

Chương này giải thích cách kiểm thử phù hợp với các vòng đời phát triển phần mềm (SDLC) khác nhau. Nội dung bao gồm tác động của lựa chọn SDLC đến kiểm thử, các thực tiễn kiểm thử tốt áp dụng cho mọi mô hình, các phương pháp kiểm thử trước, DevOps, dịch chuyển sang trái, họp rút kinh nghiệm, các mức độ kiểm thử, loại kiểm thử và kiểm thử bảo trì. Hiểu rõ các mối quan hệ này là then chốt để điều chỉnh hoạt động kiểm thử phù hợp với ngữ cảnh phát triển.

**Syllabus Alignment / Phạm vi Giáo trình:** FL-BO6
**Training Time / Thời gian Đào tạo:** 130 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi

### 2.1 SDLC Models and Their Impact on Testing / Các mô hình SDLC và Tác động đến Kiểm thử

#### Sequential Models / Mô hình Tuần tự

Waterfall, V-model. Testers participate in requirement reviews early, but dynamic testing occurs only after code is produced in later phases.

Waterfall, V-model. Kiểm thử viên tham gia đánh giá yêu cầu sớm, nhưng kiểm thử động chỉ diễn ra sau khi code được tạo ra ở các giai đoạn sau.

#### Iterative Models / Mô hình Lặp

Spiral, Prototyping. Each iteration delivers a working prototype; both static and dynamic testing may occur at all test levels within each iteration.

Spiral, Prototyping. Mỗi lần lặp cung cấp một bản mẫu hoạt động; cả kiểm thử tĩnh và động có thể diễn ra ở mọi mức độ kiểm thử trong mỗi lần lặp.

#### Incremental Models / Mô hình Tăng dần

Unified Process. Frequent delivery of increments requires fast feedback and extensive regression testing.

Unified Process. Việc cung cấp các phần tăng trưởng thường xuyên đòi hỏi phản hồi nhanh và kiểm thử hồi quy sâu rộng.

#### Agile Methods / Phương pháp Agile

Scrum, Kanban, XP, Lean IT. Favor lightweight documentation, extensive test automation, and experience-based techniques due to constant change.

Scrum, Kanban, XP, Lean IT. Ưu tiên tài liệu nhẹ nhàng, tự động hóa kiểm thử sâu rộng và các kỹ thuật dựa trên kinh nghiệm do sự thay đổi liên tục.

### 2.2 Testing as a Driver for Development / Kiểm thử là Động lực cho Phát triển

#### TDD (Test-Driven Development) / TDD (Phát triển hướng kiểm thử)

Write tests first, then code to satisfy them, then refactor. Directs coding through test cases.

Viết kiểm thử trước, sau đó code để đáp ứng, rồi tái cấu trúc. Điều hướng việc viết code thông qua các ca kiểm thử.

#### ATDD (Acceptance Test-Driven Development) / ATDD (Phát triển hướng kiểm thử chấp nhận)

Derive tests from acceptance criteria before development. Part of system design.

Suy ra các bài kiểm thử từ tiêu chí chấp nhận trước khi phát triển. Là một phần của thiết kế hệ thống.

#### BDD (Behavior-Driven Development) / BDD (Phát triển hướng hành vi)

Express behavior in natural language (Given/When/Then). Stakeholder-readable; should auto-translate to executable tests.

Diễn đạt hành vi bằng ngôn ngữ tự nhiên (Given/When/Then). Dễ đọc cho các bên liên quan; nên tự động chuyển thành các bài kiểm thử thực thi được.

### 2.3 DevOps and Shift Left / DevOps và Dịch chuyển Sang Trái

#### DevOps / DevOps

Bridges development and operations. Provides fast feedback on code quality. CI promotes shift left by encouraging component tests and static analysis with code submission. Automated CI/CD pipelines establish stable test environments.

Kết nối giữa phát triển và vận hành. Cung cấp phản hồi nhanh về chất lượng code. CI thúc đẩy dịch chuyển sang trái bằng cách khuyến khích kiểm thử thành phần và phân tích tĩnh khi nộp code. Các đường ống CI/CD tự động thiết lập môi trường kiểm thử ổn định.

#### Shift Left / Dịch chuyển Sang Trái

Testing performed earlier in the SDLC. Does **not** mean eliminating later testing. Practices include reviewing specifications from a tester's perspective, writing test cases before code, and using static analysis before dynamic testing.

Kiểm thử được thực hiện sớm hơn trong SDLC. **Không** có nghĩa là loại bỏ các bài kiểm thử sau này. Các thực tiễn bao gồm đánh giá đặc tả từ góc nhìn kiểm thử viên, viết ca kiểm thử trước khi viết code và sử dụng phân tích tĩnh trước khi kiểm thử động.

## 3. Test Levels / Các Mức độ Kiểm thử

### Component Testing / Kiểm thử Thành phần

Focuses on components in isolation; requires harnesses/frameworks. Typically performed by developers.

Tập trung vào các thành phần độc lập; yêu cầu khung/harness. Thường được thực hiện bởi lập trình viên.

### Component Integration Testing / Kiểm thử Tích hợp Thành phần

Focuses on interfaces and interactions between components. Typically performed by developers.

Tập trung vào giao diện và tương tác giữa các thành phần. Thường được thực hiện bởi lập trình viên.

### System Testing / Kiểm thử Hệ thống

Evaluates overall behavior of entire system; includes functional and non-functional testing. Typically performed by an independent test team.

Đánh giá hành vi tổng thể của toàn bộ hệ thống; bao gồm kiểm thử chức năng và phi chức năng. Thường được thực hiện bởi nhóm kiểm thử độc lập.

### Acceptance Testing / Kiểm thử Chấp nhận

Focuses on **validation** and readiness for deployment based on business needs. Typically performed by intended users.

Tập trung vào **xác thực** và sự sẵn sàng triển khai dựa trên nhu cầu kinh doanh. Thường được thực hiện bởi người dùng dự kiến.

## 4. Key Terminology / Thuật ngữ Quan trọng

* **Shift Left / Dịch chuyển Sang Trái**: Approach where testing is performed earlier in the SDLC.
* **Shift Left / Dịch chuyển Sang Trái**: Phương pháp kiểm thử được thực hiện sớm hơn trong SDLC.
* **Confirmation Testing / Kiểm thử Xác nhận**: Testing to confirm that a **defect** has been successfully fixed.
* **Kiểm thử Xác nhận**: Kiểm thử để xác nhận **khiếm khuyết** đã được sửa thành công.
* **Regression Testing / Kiểm thử Hồi quy**: Testing to confirm that changes have not caused adverse consequences.
* **Kiểm thử Hồi quy**: Kiểm thử để xác nhận các thay đổi không gây ra hậu quả bất lợi.
* **Component Testing / Kiểm thử Thành phần**: Testing of individual components in isolation.
* **Kiểm thử Thành phần**: Kiểm thử từng thành phần riêng lẻ một cách độc lập.
* **Acceptance Testing / Kiểm thử Chấp nhận**: Testing focused on **validation** and readiness for deployment.
* **Kiểm thử Chấp nhận**: Kiểm thử tập trung vào **xác thực** và sự sẵn sàng triển khai.