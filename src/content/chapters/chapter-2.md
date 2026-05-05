# Chapter 2: Testing Throughout the Software Development Lifecycle / Chương 2: Kiểm thử trong Vòng đời Phát triển Phần mềm

> **ISTQB CTFL v4.0.1** · **130 minutes** / **130 phút** giảng dạy tối thiểu (theo giáo trình chính thức).

## Keywords / Từ khóa

acceptance testing, black-box testing, component integration testing, component testing, confirmation testing, functional testing, integration testing, maintenance testing, non-functional testing, regression testing, shift left, system integration testing, system testing, test level, test object, test type, white-box testing

kiểm thử chấp nhận, kiểm thử hộp đen, kiểm thử tích hợp thành phần, kiểm thử thành phần, kiểm thử xác nhận, kiểm thử chức năng, kiểm thử tích hợp, kiểm thử bảo trì, kiểm thử phi chức năng, kiểm thử hồi quy, dịch chuyển sang trái (shift left), kiểm thử tích hợp hệ thống, kiểm thử hệ thống, mức độ kiểm thử, đối tượng kiểm thử, loại kiểm thử, kiểm thử hộp trắng

## Learning Objectives for Chapter 2 / Mục tiêu học tập Chương 2

### 2.1 Testing in the Context of a Software Development Lifecycle / Kiểm thử trong Ngữ cảnh SDLC

* **FL-2.1.1 (K2)** Explain the impact of the chosen software development lifecycle on testing / **FL-2.1.1 (K2)** Giải thích tác động của SDLC đã chọn lên kiểm thử
* **FL-2.1.2 (K1)** Recall good testing practices that apply to all software development lifecycles / **FL-2.1.2 (K1)** Ghi nhớ thực hành kiểm thử tốt áp dụng cho mọi SDLC
* **FL-2.1.3 (K1)** Recall the examples of test-first approaches to development / **FL-2.1.3 (K1)** Ghi nhớ ví dụ về cách tiếp cận test-first trong phát triển
* **FL-2.1.4 (K2)** Summarize how DevOps might have an impact on testing / **FL-2.1.4 (K2)** Tóm tắt DevOps có thể ảnh hưởng thế nào đến kiểm thử
* **FL-2.1.5 (K2)** Explain shift left / **FL-2.1.5 (K2)** Giải thích shift left
* **FL-2.1.6 (K2)** Explain how retrospectives can be used as a mechanism for process improvement / **FL-2.1.6 (K2)** Giải thích cách dùng retrospective để cải tiến quy trình

### 2.2 Test Levels and Test Types / Mức độ và Loại Kiểm thử

* **FL-2.2.1 (K2)** Distinguish the different test levels / **FL-2.2.1 (K2)** Phân biệt các mức độ kiểm thử
* **FL-2.2.2 (K2)** Distinguish the different test types / **FL-2.2.2 (K2)** Phân biệt các loại kiểm thử
* **FL-2.2.3 (K2)** Distinguish confirmation testing from regression testing / **FL-2.2.3 (K2)** Phân biệt kiểm thử xác nhận và kiểm thử hồi quy

### 2.3 Maintenance Testing / Kiểm thử Bảo trì

* **FL-2.3.1 (K2)** Summarize maintenance testing and its triggers / **FL-2.3.1 (K2)** Tóm tắt kiểm thử bảo trì và các yếu tố kích hoạt

---

## 2.1 Testing in the Context of a Software Development Lifecycle (SDLC) / Kiểm thử trong Ngữ cảnh Vòng đời Phát triển Phần mềm (SDLC)

A software development lifecycle (SDLC) model is an abstract representation of the software development process. It defines how the different stages and activities relate to each other.

Mô hình vòng đời phát triển phần mềm (SDLC) là một biểu diễn trừu tượng của quy trình phát triển phần mềm. Nó định nghĩa cách các giai đoạn và hoạt động khác nhau liên quan đến nhau.

Examples have included spiral, prototyping, V-model, incremental, **Unified Process (RUP)**, and agile methods such as **Scrum**, **Kanban**, **XP**, **DSDM**, plus approaches built on **acceptance test-driven development (ATDD)**, **behavior-driven development (BDD)**, **test-driven development (TDD)**, and **domain-driven design (DDD)**.

Các ví dụ đã gồm xoắn ốc, nguyên mẫu hóa, mô hình chữ V, gia tăng, **Unified Process (RUP)** và các phương pháp linh hoạt như **Scrum**, **Kanban**, **XP**, **DSDM**, cùng cách tiếp cận xây trên **ATDD**, **BDD**, **TDD** và **DDD**.

### 2.1.1 Impact of the SDLC on Testing / Tác động của SDLC đối với Kiểm thử

The way testing is organized depends on the chosen SDLC model. SDLC models can be categorized into sequential development models and iterative/incremental development models.

Cách tổ chức kiểm thử phụ thuộc vào mô hình SDLC được chọn. Các mô hình SDLC có thể được phân loại thành các mô hình phát triển tuần tự và các mô hình phát triển lặp/tăng trưởng.

* **Sequential development models** (e.g., Waterfall model, V-model): the development process is a linear flow of activities. Testing is often seen as a separate phase that follows the development phase.
  **Các mô hình phát triển tuần tự** (ví dụ: mô hình Thác nước, mô hình chữ V): quy trình phát triển là một dòng chảy tuyến tính của các hoạt động. Kiểm thử thường được coi là một giai đoạn riêng biệt tiếp sau giai đoạn phát triển.
* **Iterative and incremental development models** (e.g., Scrum, Kanban): the development process is a series of short cycles (iterations). Each iteration involves planning, design, development, and testing, and results in a working increment of the software.
  **Các mô hình phát triển lặp và tăng trưởng** (ví dụ: Scrum, Kanban): quy trình phát triển là một chuỗi các chu kỳ ngắn (vòng lặp). Mỗi vòng lặp bao gồm lập kế hoạch, thiết kế, phát triển và kiểm thử, và dẫn đến một phần tăng trưởng (increment) hoạt động được của phần mềm.

The choice of SDLC model impacts:

Việc lựa chọn mô hình SDLC tác động đến:

* The scope and timing of test activities.
* Phạm vi và thời điểm của các hoạt động kiểm thử.
* The level of detail of test documentation.
* Mức độ chi tiết của tài liệu kiểm thử.
* The selection of test techniques and test tools.
* Việc lựa chọn các kỹ thuật và công cụ kiểm thử.
* The organization of the test team and the roles involved.
* Việc tổ chức nhóm kiểm thử và các vai trò liên quan.

### 2.1.2 Software Development Lifecycle and Good Testing Practices / Vòng đời Phát triển Phần mềm và Thực hành Kiểm thử Tốt

Good testing practices, independent of the chosen SDLC model, include the following:

Các thực hành kiểm thử tốt, bất kể mô hình SDLC được chọn, bao gồm:

* For every software development activity, there is a corresponding test activity, so that all development activities are subject to quality control.
* Đối với mọi hoạt động phát triển phần mềm, có một hoạt động kiểm thử tương ứng, nhằm đặt mọi hoạt động phát triển dưới kiểm soát chất lượng.
* Different test levels (see section 2.2.1) have specific and different test objectives, which allows testing to be appropriately comprehensive while avoiding redundancy.
* Các mức độ kiểm thử khác nhau (xem mục 2.2.1) có mục tiêu kiểm thử riêng và khác biệt, giúp kiểm thử đủ toàn diện đồng thời tránh dư thừa.
* Test analysis and design for a given test level begins during the corresponding development phase of the SDLC, so that testing can adhere to the principle of early testing (see section 1.3).
* Phân tích và thiết kế kiểm thử cho một mức độ nhất định bắt đầu trong giai đoạn phát triển tương ứng của SDLC, để kiểm thử tuân thủ nguyên tắc kiểm thử sớm (xem mục 1.3).
* Testers are involved in reviewing work products as soon as drafts are available, so that earlier testing and defect detection support shift left (see section 2.1.5).
* Người kiểm thử tham gia đánh giá sản phẩm làm việc khi có bản nháp, để kiểm thử và phát hiện khiếm khuyết sớm hỗ trợ shift left (xem mục 2.1.5).

### 2.1.3 Testing as a Driver for Software Development / Kiểm thử là Động lực cho Phát triển Phần mềm

Some development approaches use testing as a way to drive the development process.

Một số cách tiếp cận phát triển sử dụng kiểm thử như một cách để thúc đẩy quy trình phát triển.

* **Test-Driven Development (TDD)**: writing tests before writing the code. The code is then developed to pass the tests.
  **Phát triển Hướng Kiểm thử (TDD)**: viết các bài kiểm thử trước khi viết mã nguồn. Sau đó, mã nguồn được phát triển để vượt qua các bài kiểm thử đó.
* **Acceptance Test-Driven Development (ATDD)**: deriving tests from acceptance criteria as part of the system design process.
  **Phát triển Hướng Kiểm thử Chấp nhận (ATDD)**: xây dựng các bài kiểm thử từ các tiêu chí chấp nhận như một phần của quy trình thiết kế hệ thống.
* **Behavior-Driven Development (BDD)**: defining the desired behavior of the system using a natural language-like format (e.g., Given/When/Then).
  **Phát triển Hướng Hành vi (BDD)**: định nghĩa hành vi mong muốn của hệ thống bằng định dạng giống ngôn ngữ tự nhiên (ví dụ: Given/When/Then).

### 2.1.4 DevOps and Testing / DevOps và Kiểm thử

DevOps is an organizational approach aiming for synergy between development (including testing) and operations. It requires a cultural shift, promotes team autonomy, fast feedback, integrated toolchains, and practices such as CI/CD so teams can build, test, and release quality code faster through a delivery pipeline.

DevOps là cách tiếp cận tổ chức nhằm tạo hiệp lực giữa phát triển (gồm kiểm thử) và vận hành. Nó đòi hỏi thay đổi văn hóa, thúc đẩy tự chủ nhóm, phản hồi nhanh, chuỗi công cụ tích hợp và thực hành như CI/CD để nhóm có thể xây dựng, kiểm thử và phát hành mã chất lượng nhanh hơn qua pipeline giao hàng.

From the testing perspective, some benefits include:

Từ góc nhìn kiểm thử, một số lợi ích gồm:

* Fast feedback on code quality and whether changes adversely affect existing code.
* Phản hồi nhanh về chất lượng mã và việc thay đổi có ảnh hưởng xấu tới mã hiện có hay không.
* CI promotes shift left in testing (see section 2.1.5) by encouraging developers to submit quality code with component tests and static analysis.
* CI thúc đẩy shift left trong kiểm thử (xem 2.1.5) nhờ khuyến khích nộp mã chất lượng kèm kiểm thử thành phần và phân tích tĩnh.
* Automated CI/CD helps establish stable test environments.
* CI/CD tự động hỗ trợ thiết lập môi trường kiểm thử ổn định.
* Visibility of non-functional quality (e.g., performance efficiency, reliability) increases.
* Khả năng quan sát chất lượng phi chức năng (ví dụ hiệu năng, độ tin cậy) tăng lên.
* Pipeline automation reduces repetitive manual testing and supports broad automated regression.
* Tự động hóa pipeline giảm kiểm thử thủ công lặp lại và hỗ trợ hồi quy tự động rộng.

Challenges include defining the pipeline, maintaining CI/CD tools, and the cost of building and sustaining test automation.

Thách thức gồm phải định nghĩa pipeline, duy trì công cụ CI/CD và chi phí xây dựng, duy trì tự động hóa kiểm thử.

Although DevOps relies heavily on automation, manual testing—especially from the user’s perspective—remains necessary.

Mặc DevOps dựa nhiều vào tự động hóa, kiểm thử thủ công—đặc biệt từ góc nhìn người dùng—vẫn cần thiết.

### 2.1.5 Shift Left / Dịch trái (Shift Left)

Early testing (see section 1.3) is sometimes called **shift left** because testing is performed earlier in the SDLC. Shift left does **not** mean neglecting testing later in the lifecycle.

Kiểm thử sớm (mục 1.3) đôi khi gọi là **shift left** vì kiểm thử được làm sớm hơn trong SDLC. Shift left **không** có nghĩa là bỏ qua kiểm thử ở các giai đoạn sau.

Good practices that illustrate shift left include:

Các thực hành minh họa shift left gồm:

* Reviewing specifications from a tester perspective (finding ambiguities, incompleteness, inconsistencies).
* Đánh giá đặc tả từ góc nhìn kiểm thử (tìm mơ hồ, thiếu sót, mâu thuẫn).
* Writing tests before code and running code in a test harness during implementation.
* Viết bài kiểm thử trước mã và chạy mã trong test harness khi lập trình.
* Using CI/CD for fast feedback and automated component tests with submissions to the repository.
* Dùng CI/CD để phản hồi nhanh và kiểm thử thành phần tự động kèm commit.
* Completing static analysis before dynamic testing or as part of automation.
* Hoàn thành phân tích tĩnh trước kiểm thử động hoặc trong quy trình tự động.
* Performing non-functional testing at component level where possible (often done later when a full system exists).
* Thực hiện kiểm thử phi chức năng ở mức thành phần khi có thể.

Shift left may increase early effort or cost but is expected to save effort or cost later. Stakeholders need to buy into the concept.

Shift left có thể tăng nỗ lực/chi phí sớm nhưng kỳ vọng tiết kiệm sau. Các bên liên quan cần đồng thuận với hướng tiếp cận này.

### 2.1.6 Retrospectives and Process Improvement / Các buổi họp Rút kinh nghiệm và Cải tiến Quy trình

Retrospectives are often held at the end of a project or iteration, at a release milestone, or when needed. Participants (not only testers—e.g., developers, architects, product owners, business analysts) discuss:

Các buổi retrospective thường tổ chức cuối dự án hoặc iteration, tại mốc phát hành, hoặc khi cần. Người tham gia (không chỉ kiểm thử—ví dụ lập trình viên, kiến trúc sư, PO, BA) thảo luận:

* What was successful and should be retained?
* Điều gì thành công và nên giữ?
* What was not successful and could be improved?
* Điều gì chưa tốt và có thể cải thiện?
* How to incorporate improvements and retain successes?
* Làm thế nào đưa cải tiến vào và duy trì điểm mạnh?

Results are normally recorded and are part of the test completion report (see section 5.3.2). Retrospectives support continuous improvement; follow-up on actions matters.

Kết quả thường được ghi lại và là một phần báo cáo kết thúc kiểm thử (mục 5.3.2). Retrospective hỗ trợ cải tiến liên tục; việc theo dõi hành động sau họp rất quan trọng.

Typical benefits for testing include:

Lợi ích điển hình cho kiểm thử gồm:

* Increased test effectiveness and efficiency (e.g., process improvements).
* Tăng hiệu quả và hiệu suất kiểm thử (ví dụ cải tiến quy trình).
* Higher quality testware (e.g., joint review of test processes).
* Chất lượng testware cao hơn (ví dụ cùng rà soát quy trình kiểm thử).
* Team bonding and learning.
* Gắn kết nhóm và học tập.
* Improved test basis quality.
* Chất lượng cơ sở kiểm thử tốt hơn.
* Better cooperation between development and testing.
* Hợp tác tốt hơn giữa phát triển và kiểm thử.

Testers should contribute by:

Người kiểm thử cần đóng góp bằng cách:

* Providing feedback on the test process.
* Cung cấp phản hồi về quy trình kiểm thử.
* Suggesting improvements to development and test practices.
* Đề xuất cải tiến cho thực hành phát triển và kiểm thử.
* Sharing lessons learned with the team.
* Chia sẻ bài học kinh nghiệm với nhóm.

## 2.2 Test Levels and Test Types / Các Mức độ và Loại Kiểm thử

### 2.2.1 Test Levels / Các Mức độ Kiểm thử

Test levels are groups of test activities that are organized and managed together. Each test level has its own objectives, test basis, and test object. Common test levels are:

Các mức độ kiểm thử là các nhóm hoạt động kiểm thử được tổ chức và quản lý cùng nhau. Mỗi mức độ kiểm thử có các mục tiêu, cơ sở kiểm thử và đối tượng kiểm thử riêng. Các mức độ kiểm thử phổ biến là:

* **Component testing** (also called unit or module testing): focuses on individual hardware or software components in isolation.
  **Kiểm thử thành phần** (còn gọi là kiểm thử đơn vị hoặc kiểm thử mô-đun): tập trung vào các thành phần phần cứng hoặc phần mềm riêng lẻ trong sự cô lập.
* **Component integration testing**: focuses on the interactions and interfaces between components.
  **Kiểm thử tích hợp thành phần**: tập trung vào các tương tác và giao diện giữa các thành phần.
* **System testing**: focuses on the overall behavior and capabilities of a whole system or product.
  **Kiểm thử hệ thống**: tập trung vào hành vi tổng thể và khả năng của toàn bộ hệ thống hoặc sản phẩm.
* **System integration testing**: focuses on the interactions and interfaces between systems and with external services.
  **Kiểm thử tích hợp hệ thống**: tập trung vào các tương tác và giao diện giữa các hệ thống và với các dịch vụ bên ngoài.
* **Acceptance testing**: focuses on the readiness of the system for deployment and use by the users and other stakeholders. Types include User Acceptance Testing (UAT), Operational Acceptance Testing (OAT), and Alpha/Beta testing.
  **Kiểm thử chấp nhận**: tập trung vào sự sẵn sàng của hệ thống để triển khai và sử dụng bởi người dùng và các bên liên quan khác. Các loại bao gồm Kiểm thử chấp nhận của người dùng (UAT), Kiểm thử chấp nhận vận hành (OAT), và kiểm thử Alpha/Beta.

### 2.2.2 Test Types / Các Loại Kiểm thử

A test type is a group of test activities focused on specific test objectives.

Một loại kiểm thử là một nhóm các hoạt động kiểm thử tập trung vào các mục tiêu kiểm thử cụ thể.

* **Functional testing**: testing focused on what the system should do (functional requirements).
  **Kiểm thử chức năng**: kiểm thử tập trung vào những gì hệ thống nên làm (yêu cầu chức năng).
* **Non-functional testing**: testing focused on how well the system behaves (non-functional requirements, e.g., performance, security, usability, reliability).
  **Kiểm thử phi chức năng**: kiểm thử tập trung vào việc hệ thống hoạt động tốt như thế nào (yêu cầu phi chức năng, ví dụ: hiệu năng, bảo mật, tính khả dụng, độ tin cậy).
* **Black-box testing**: testing based on an analysis of the test basis (e.g., requirements, design) without knowledge of the internal structure.
  **Kiểm thử hộp đen**: kiểm thử dựa trên phân tích cơ sở kiểm thử (ví dụ: yêu cầu, thiết kế) mà không cần biết về cấu trúc bên trong.
* **White-box testing**: testing based on an analysis of the internal structure and implementation (e.g., code, architecture).
  **Kiểm thử hộp trắng**: kiểm thử dựa trên phân tích cấu trúc bên trong và việc triển khai (ví dụ: mã nguồn, kiến trúc).

### 2.2.3 Confirmation Testing and Regression Testing / Kiểm thử Xác nhận và Kiểm thử Hồi quy

* **Confirmation testing** (re-testing): performed after a defect is fixed to confirm that the fix is successful.
  **Kiểm thử xác nhận** (kiểm thử lại): được thực hiện sau khi một khiếm khuyết được sửa để xác nhận rằng việc sửa chữa đã thành công.
* **Regression testing**: performed after changes to the software to ensure that the changes have not caused failures in unchanged parts.
  **Kiểm thử hồi quy**: được thực hiện sau khi có những thay đổi đối với phần mềm để đảm bảo rằng những thay đổi đó không gây ra lỗi ở các phần không thay đổi.

## 2.3 Maintenance Testing / Kiểm thử Bảo trì

Maintenance testing is performed on an existing operational system. It is triggered by:

Kiểm thử bảo trì được thực hiện trên một hệ thống đang vận hành hiện có. Nó được kích hoạt bởi:

* Modifications (e.g., planned enhancements, corrective changes).
* Các sửa đổi (ví dụ: các cải tiến theo kế hoạch, các thay đổi mang tính khắc phục).
* Upgrades or migrations to new environments.
* Nâng cấp hoặc di chuyển sang môi trường mới.
* Retirement of a system (e.g., data migration testing).
* Ngừng hoạt động của một hệ thống (ví dụ: kiểm thử di chuyển dữ liệu).

The scope of maintenance testing depends on the risk of the change, the size of the existing system, and the size of the change. Impact analysis is used to determine the scope of maintenance testing.

Phạm vi của kiểm thử bảo trì phụ thuộc vào rủi ro của sự thay đổi, kích thước của hệ thống hiện tại và kích thước của sự thay đổi. Phân tích tác động được sử dụng để xác định phạm vi kiểm thử bảo trì.