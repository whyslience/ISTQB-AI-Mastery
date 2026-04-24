**Chapter 2: Testing Throughout the Software Development Lifecycle**

**Chương 2: Kiểm thử trong suốt Vòng đời Phát triển Phần mềm**

## 1. Overview / Tổng quan
This chapter explains how testing fits into different software development lifecycles (SDLCs). It covers the impact of SDLC choices on testing, good testing practices applicable to all models, test-first approaches, DevOps, shift left, retrospectives, test levels, test types, and maintenance testing. Understanding these relationships is critical for aligning test activities with development contexts.

Chương này giải thích cách kiểm thử phù hợp với các vòng đời phát triển phần mềm (SDLC) khác nhau. Nội dung bao gồm tác động của lựa chọn SDLC đến kiểm thử, các thực tiễn kiểm thử tốt áp dụng cho mọi mô hình, các phương pháp kiểm thử trước, DevOps, dịch chuyển sang trái, họp rút kinh nghiệm, các mức độ kiểm thử, loại kiểm thử và kiểm thử bảo trì. Hiểu rõ các mối quan hệ này là then chốt để điều chỉnh hoạt động kiểm thử phù hợp với ngữ cảnh phát triển.

**Syllabus Alignment:** FL-BO6
**Training Time:** 130 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi
### 2.1 SDLC Models and Their Impact on Testing / Các mô hình SDLC và Tác động đến Kiểm thử
- **Sequential Models / Mô hình Tuần tự:** Waterfall, V-model. Testers participate in requirement reviews early, but dynamic testing occurs only after code is produced in later phases.

- **Iterative Models / Mô hình Lặp:** Spiral, Prototyping. Each iteration delivers a working prototype; both static and dynamic testing may occur at all test levels within each iteration.

- **Incremental Models / Mô hình Tăng dần:** Unified Process. Frequent delivery of increments requires fast feedback and extensive regression testing.

- **Agile Methods / Phương pháp Agile:** Scrum, Kanban, XP, Lean IT. Favor lightweight documentation, extensive test automation, and experience-based techniques due to constant change.

- **Tác động của SDLC đến Kiểm thử:**

  - Scope and timing of test activities / Phạm vi và thời điểm hoạt động kiểm thử

  - Level of detail of test documentation / Mức độ chi tiết tài liệu kiểm thử

  - Choice of test techniques and approach / Lựa chọn kỹ thuật và phương pháp kiểm thử

  - Extent of test automation / Mức độ tự động hóa kiểm thử

  - Role and responsibilities of a tester / Vai trò và trách nhiệm của kiểm thử viên

**Good Testing Practices (Universal) / Thực tiễn Kiểm thử Tốt (Phổ quát)**

- For every development activity, there is a corresponding test activity.

- Different test levels have specific, different objectives to avoid redundancy.

- Test analysis and design for a given level begins during the corresponding development phase.

- Testers review work products as soon as drafts are available.

### 2.2 Testing as a Driver for Development / Kiểm thử là Động lực cho Phát triển
**Table**


| **Approach / Phương pháp** | **Mechanism / Cơ chế** | **Key Trait / Đặc điểm chính** |
| --- | --- | --- |
| **TDD** | Write tests first, then code to satisfy them, then refactor / Viết kiểm thử trước, sau đó code để đáp ứng, rồi tái cấu trúc | Directs coding through test cases / Điều hướng coding qua ca kiểm thử |
| **ATDD** | Derive tests from acceptance criteria before development / Suy ra kiểm thử từ tiêu chí chấp nhận trước phát triển | Part of system design / Là một phần thiết kế hệ thống |
| **BDD** | Express behavior in natural language (Given/When/Then) / Diễn đạt hành vi bằng ngôn ngữ tự nhiên | Stakeholder-readable; should auto-translate to executable tests / Dễ đọc cho bên liên quan; nên tự động chuyển thành kiểm thử thực thi được |


All three support iterative development and shift left. Tests may persist as automated regression tests.

### 2.3 DevOps and Shift Left / DevOps và Dịch chuyển Sang Trái
**DevOps** bridges development and operations. From a testing perspective:

- Fast feedback on code quality.

- CI promotes shift left by encouraging component tests and static analysis with code submission.

- Automated CI/CD pipelines establish stable test environments.

- Increased visibility on non-functional characteristics.

- Reduced repetitive manual testing; minimized regression risk.

**Risks / Rủi ro:** Pipeline must be established; tools require maintenance; test automation demands additional resources.

**Shift Left / Dịch chuyển Sang Trái**

- Testing performed earlier in the SDLC.

- Does **not** mean eliminating later testing.

- Practices: reviewing specifications from a tester's perspective; writing test cases before code; using CI/CD; static analysis before dynamic testing; non-functional testing at component level where possible.

- Requires stakeholder buy-in; may increase early costs but reduces later costs.

### 2.4 Retrospectives / Họp Rút kinh nghiệm
Held at project/iteration/release milestones. Participants discuss:

- What was successful and should be retained? / Điều gì thành công và nên giữ lại?

- What was not successful and could be improved? / Điều gì không thành công và có thể cải thiện?

- How to incorporate improvements? / Làm thế nào để áp dụng cải tiến?

Results feed into the test completion report. Benefits: increased effectiveness/efficiency, better testware quality, team bonding, improved test basis, better cooperation.

### 2.5 Test Levels / Các Mức độ Kiểm thử
**Table**


| **Level / Mức độ** | **Focus / Tập trung** | **Typical Performer / Người thực hiện** |
| --- | --- | --- |
| **Component Testing** / Kiểm thử Thành phần | Components in isolation; requires harnesses/frameworks / Thành phần độc lập; cần khung/harness | Developers / Lập trình viên |
| **Component Integration Testing** / Kiểm thử Tích hợp Thành phần | Interfaces and interactions between components / Giao diện và tương tác giữa các thành phần | Developers / Lập trình viên |
| **System Testing** / Kiểm thử Hệ thống | Overall behavior of entire system; functional and non-functional / Hành vi tổng thể hệ thống; chức năng và phi chức năng | Independent test team / Nhóm kiểm thử độc lập |
| **System Integration Testing** / Kiểm thử Tích hợp Hệ thống | Interfaces with other systems and external services / Giao diện với hệ thống khác và dịch vụ bên ngoài | Independent test team / Nhóm kiểm thử độc lập |
| **Acceptance Testing** / Kiểm thử Chấp nhận | Validation and readiness for deployment; business needs / Xác thực và sẵn sàng triển khai; nhu cầu kinh doanh | Intended users / Người dùng dự kiến |


**Forms of Acceptance Testing / Các hình thức Kiểm thử Chấp nhận:** User acceptance (UAT), operational acceptance, contractual acceptance, regulatory acceptance, alpha testing, beta testing.

**Distinguishing Attributes / Các thuộc tính phân biệt:** Test object, objectives, test basis, defects/failures, approach, and responsibilities.

### 2.6 Test Types / Các Loại Kiểm thử
- **Functional Testing / Kiểm thử Chức năng:** Evaluates "what" the system should do. Objectives: functional completeness, correctness, appropriateness.

- **Non-functional Testing / Kiểm thử Phi chức năng:** Evaluates "how well" the system behaves. Based on ISO 25010: performance efficiency, compatibility, usability (interaction capability), reliability, security, maintainability, portability (flexibility), safety. Should start early where possible.

- **Black-box Testing / Kiểm thử Hộp đen:** Specification-based; derives tests from documentation unrelated to internal structure.

- **White-box Testing / Kiểm thử Hộp trắng:** Structure-based; derives tests from internal structure (code, architecture, flows).

All four test types can be applied at all test levels, though focus differs.

### 2.7 Confirmation and Regression Testing / Kiểm thử Xác nhận và Hồi quy
- **Confirmation Testing / Kiểm thử Xác nhận:** Confirms an original defect has been fixed. Execute previously failed tests or add new tests covering the fix.

- **Regression Testing / Kiểm thử Hồi quy:** Confirms no adverse consequences were caused by a change (including fixes). Checks same component, other components, or connected systems. Impact analysis identifies scope. Strong candidate for automation.

Both are needed at all test levels when defects are fixed or changes are made.

### 2.8 Maintenance Testing / Kiểm thử Bảo trì
Triggered by:

- **Modifications / Sửa đổi:** Planned enhancements, corrective changes, hot fixes.

- **Upgrades/Migrations / Nâng cấp/Chuyển đổi:** New platforms, operational environment changes, data conversion.

- **Retirement / Ngừng sử dụng:** Data archiving, restore/retrieval procedures.

Scope depends on risk of change, size of existing system, and size of change. Includes evaluating the change implementation and checking for regressions in unchanged parts.

## 3. Key Terminology / Thuật ngữ Quan trọng
- **Shift Left / Dịch chuyển Sang Trái:** Approach where testing is performed earlier in the SDLC.

  - **Dịch chuyển Sang Trái:** Phương pháp kiểm thử được thực hiện sớm hơn trong SDLC.

- **Confirmation Testing / Kiểm thử Xác nhận:** Testing to confirm that a defect has been successfully fixed.

  - **Kiểm thử Xác nhận:** Kiểm thử để xác nhận khiếm khuyết đã được sửa thành công.

- **Regression Testing / Kiểm thử Hồi quy:** Testing to confirm that changes have not caused adverse consequences.

  - **Kiểm thử Hồi quy:** Kiểm thử để xác nhận thay đổi không gây hậu quả bất lợi.

- **Component Testing / Kiểm thử Thành phần:** Testing of individual components in isolation (also called unit testing).

  - **Kiểm thử Thành phần:** Kiểm thử từng thành phần độc lập (còn gọi là kiểm thử đơn vị).

- **Acceptance Testing / Kiểm thử Chấp nhận:** Testing focused on validation and readiness for deployment.

  - **Kiểm thử Chấp nhận:** Kiểm thử tập trung vào xác thực và sẵn sàng triển khai.

- **Black-box Testing / Kiểm thử Hộp đen:** Specification-based testing without reference to internal structure.

  - **Kiểm thử Hộp đen:** Kiểm thử dựa trên đặc tả không tham chiếu cấu trúc nội bộ.

- **White-box Testing / Kiểm thử Hộp trắng:** Structure-based testing derived from internal implementation.

  - **Kiểm thử Hộp trắng:** Kiểm thử dựa trên cấu trúc suy ra từ triển khai nội bộ.

- **DevOps / DevOps:** Organizational approach creating synergy between development and operations.

  - **DevOps:** Phương pháp tổ chức tạo sự cộng hưởng giữa phát triển và vận hành.

## 4. Deep Understanding / Hiểu Sâu
**TDD vs ATDD vs BDD**

- **TDD** is developer-focused, driving unit-level code design.

- **ATDD** involves the whole team deriving acceptance tests from criteria before coding.

- **BDD** uses natural language to express behavior for stakeholder understanding; often becomes the automated acceptance test.

**Why Shift Left is Not "Only Left"** Shift left means testing earlier, not eliminating later testing. System-level and end-to-end testing still occur. The goal is to find defects when they are cheapest to fix.

**Test Levels in Agile vs Waterfall**

- In Waterfall, levels are sequential: exit criteria of one level feed into entry criteria of the next.

- In Agile, levels may overlap within iterations; component and integration tests are automated and run continuously, while system and acceptance tests may occur at feature completion.

**Common Mistake:** Confusing test levels with test types. Levels are *when* (phase); types are *what* (quality characteristic).

## 5. Chapter Summary / Tóm tắt Chương
- SDLC models (sequential, iterative, incremental) determine scope, timing, documentation, automation, and tester roles.

- Universal good practices: parallel test activities, distinct test level objectives, early test analysis, and early reviews.

- TDD, ATDD, and BDD are test-first approaches supporting shift left and iterative development.

- DevOps promotes CI/CD, fast feedback, and automation; manual user-perspective testing still remains necessary.

- Shift left means earlier testing, not replacing later testing.

- Retrospectives drive continuous improvement and feed into test completion reports.

- Five test levels: Component, Component Integration, System, System Integration, Acceptance.

- Four test types: Functional, Non-functional, Black-box, White-box. Applicable at all levels.

- Confirmation testing verifies fixes; regression testing detects unintended side effects.

- Maintenance testing is triggered by modifications, upgrades/migrations, and retirement.

## 6. Quick Review / Ôn tập Nhanh
**SDLC Models / Mô hình SDLC**

- Sequential: Waterfall, V-model / Tuần tự

- Iterative: Spiral, Prototyping / Lặp

- Incremental: Unified Process / Tăng dần

- Agile: Scrum, Kanban, XP, Lean IT, FDD, DDD / Linh hoạt

**Test-First Approaches / Phương pháp Kiểm thử trước**

- TDD: Tests direct coding / Kiểm thử điều hướng coding

- ATDD: Tests from acceptance criteria / Kiểm thử từ tiêu chí chấp nhận

- BDD: Given/When/Then natural language / Ngôn ngữ tự nhiên

**5 Test Levels / 5 Mức độ**

1.  Component (Unit) / Thành phần (Đơn vị)

2.  Component Integration / Tích hợp Thành phần

3.  System / Hệ thống

4.  System Integration / Tích hợp Hệ thống

5.  Acceptance / Chấp nhận

**4 Test Types / 4 Loại**

1.  Functional / Chức năng

2.  Non-functional / Phi chức năng

3.  Black-box / Hộp đen

4.  White-box / Hộp trắng

**Maintenance Triggers / Tác nhân Bảo trì**

- Modifications (enhancements, fixes) / Sửa đổi

- Upgrades/Migrations / Nâng cấp/Chuyển đổi

- Retirement / Ngừng sử dụng