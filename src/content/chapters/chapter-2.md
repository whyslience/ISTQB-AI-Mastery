# Chapter 2: Testing Throughout the Software Development Lifecycle / Chương 2: Kiểm thử trong Vòng đời Phát triển Phần mềm

## 2.1 Testing in the Context of a Software Development Lifecycle (SDLC) / 2.1 Kiểm thử trong Ngữ cảnh Vòng đời Phát triển Phần mềm (SDLC)

A software development lifecycle (SDLC) model is an abstract representation of the software development process. It defines how the different stages and activities relate to each other.
Mô hình vòng đời phát triển phần mềm (SDLC) là một biểu diễn trừu tượng của quy trình phát triển phần mềm. Nó định nghĩa cách các giai đoạn và hoạt động khác nhau liên quan đến nhau.

### 2.1.1 Impact of the SDLC on Testing / 2.1.1 Tác động của SDLC đối với Kiểm thử

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

### 2.1.2 Testing as a Driver for Software Development / 2.1.2 Kiểm thử là Động lực cho Phát triển Phần mềm

Some development approaches use testing as a way to drive the development process.
Một số cách tiếp cận phát triển sử dụng kiểm thử như một cách để thúc đẩy quy trình phát triển.

* **Test-Driven Development (TDD)**: writing tests before writing the code. The code is then developed to pass the tests.
  **Phát triển Hướng Kiểm thử (TDD)**: viết các bài kiểm thử trước khi viết mã nguồn. Sau đó, mã nguồn được phát triển để vượt qua các bài kiểm thử đó.
* **Acceptance Test-Driven Development (ATDD)**: deriving tests from acceptance criteria as part of the system design process.
  **Phát triển Hướng Kiểm thử Chấp nhận (ATDD)**: xây dựng các bài kiểm thử từ các tiêu chí chấp nhận như một phần của quy trình thiết kế hệ thống.
* **Behavior-Driven Development (BDD)**: defining the desired behavior of the system using a natural language-like format (e.g., Given/When/Then).
  **Phát triển Hướng Hành vi (BDD)**: định nghĩa hành vi mong muốn của hệ thống bằng định dạng giống ngôn ngữ tự nhiên (ví dụ: Given/When/Then).

### 2.1.3 DevOps and Testing / 2.1.3 DevOps và Kiểm thử

DevOps is an organizational culture that aims for synergy between development (including testing) and operations. DevOps promotes:
DevOps là một văn hóa tổ chức hướng tới sự hiệp lực giữa phát triển (bao gồm cả kiểm thử) và vận hành. DevOps thúc đẩy:

* Continuous integration and continuous delivery (CI/CD).
* Tích hợp liên tục và chuyển giao liên tục (CI/CD).
* Fast feedback on the quality of the software.
* Phản hồi nhanh chóng về chất lượng phần mềm.
* Shift left (performing testing earlier in the SDLC).
* Dịch trái (thực hiện kiểm thử sớm hơn trong SDLC).
* High levels of test automation.
* Mức độ tự động hóa kiểm thử cao.

### 2.1.4 Shift Left / 2.1.4 Dịch trái (Shift Left)

The shift-left approach means performing test activities earlier in the SDLC. Benefits of shift left include:
Cách tiếp cận dịch trái có nghĩa là thực hiện các hoạt động kiểm thử sớm hơn trong SDLC. Lợi ích của dịch trái bao gồm:

* Finding defects earlier when they are cheaper to fix.
* Tìm thấy khiếm khuyết sớm hơn khi chúng còn rẻ để sửa chữa.
* Preventing defects from being introduced into later stages.
* Ngăn chặn khiếm khuyết bị đưa vào các giai đoạn sau.
* Improving the quality of the work products created early in the SDLC.
* Cải thiện chất lượng của các sản phẩm làm việc được tạo ra sớm trong SDLC.

### 2.1.5 Retrospectives and Process Improvement / 2.1.5 Các buổi họp Rút kinh nghiệm và Cải tiến Quy trình

Retrospectives are meetings held at the end of an iteration or a project to discuss what went well and what could be improved. Testers should participate in retrospectives to:
Các buổi họp rút kinh nghiệm (retrospectives) là các cuộc họp được tổ chức vào cuối một vòng lặp hoặc một dự án để thảo luận về những gì đã làm tốt và những gì có thể cải tiến. Người kiểm thử nên tham gia vào các buổi họp này để:

* Provide feedback on the test process.
* Cung cấp phản hồi về quy trình kiểm thử.
* Suggest improvements to the development and test practices.
* Đề xuất các cải tiến cho các thực hành phát triển và kiểm thử.
* Share lessons learned with the team.
* Chia sẻ các bài học kinh nghiệm với nhóm.

## 2.2 Test Levels and Test Types / 2.2 Các Mức độ và Loại Kiểm thử

### 2.2.1 Test Levels / 2.2.1 Các Mức độ Kiểm thử

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

### 2.2.2 Test Types / 2.2.2 Các Loại Kiểm thử

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

### 2.2.3 Confirmation Testing and Regression Testing / 2.2.3 Kiểm thử Xác nhận và Kiểm thử Hồi quy

* **Confirmation testing** (re-testing): performed after a defect is fixed to confirm that the fix is successful.
  **Kiểm thử xác nhận** (kiểm thử lại): được thực hiện sau khi một khiếm khuyết được sửa để xác nhận rằng việc sửa chữa đã thành công.
* **Regression testing**: performed after changes to the software to ensure that the changes have not caused failures in unchanged parts.
  **Kiểm thử hồi quy**: được thực hiện sau khi có những thay đổi đối với phần mềm để đảm bảo rằng những thay đổi đó không gây ra lỗi ở các phần không thay đổi.

## 2.3 Maintenance Testing / 2.3 Kiểm thử Bảo trì

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