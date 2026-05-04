# Chapter 5: Managing the Test Activities / Chương 5: Quản lý các Hoạt động Kiểm thử

## 5.1 Test Planning / 5.1 Lập kế hoạch Kiểm thử

Test planning defines the test objectives and the approach for meeting the objectives within constraints.
Lập kế hoạch kiểm thử xác định các mục tiêu kiểm thử và cách tiếp cận để đáp ứng các mục tiêu đó trong các ràng buộc.

### 5.1.1 Purpose and Content of a Test Plan / 5.1.1 Mục đích và Nội dung của Kế hoạch Kiểm thử

A test plan serves as a communication vehicle with stakeholders and provides a guide for the test team. Typical content includes:
Kế hoạch kiểm thử đóng vai trò là phương tiện giao tiếp với các bên liên quan và cung cấp hướng dẫn cho nhóm kiểm thử. Nội dung điển hình bao gồm:

* Test scope and objectives.
* Phạm vi và mục tiêu kiểm thử.
* Stakeholders and their responsibilities.
* Các bên liên quan và trách nhiệm của họ.
* Test levels and test types.
* Các mức độ kiểm thử và loại kiểm thử.
* Test approach (including techniques and tools).
* Cách tiếp cận kiểm thử (bao gồm kỹ thuật và công cụ).
* Test environment and test data requirements.
* Yêu cầu về môi trường kiểm thử và dữ liệu kiểm thử.
* Test schedule and budget.
* Lịch trình và ngân sách kiểm thử.
* Risks and contingencies.
* Rủi ro và các phương án dự phòng.
* Exit criteria.
* Tiêu chí kết thúc.

### 5.1.2 Tester’s Contribution to Iteration and Release Planning / 5.1.2 Đóng góp của Người kiểm thử vào Lập kế hoạch Vòng lặp và Phát hành

In Agile development, testers contribute to:
Trong phát triển Agile, người kiểm thử đóng góp vào:

* Identifying testable features and defining acceptance criteria.
* Xác định các tính năng có thể kiểm thử và định nghĩa tiêu chí chấp nhận.
* Estimating the test effort for each user story.
* Ước lượng nỗ lực kiểm thử cho mỗi user story.
* Identifying risks and planning for their mitigation.
* Xác định rủi ro và lập kế hoạch giảm thiểu rủi ro.

### 5.1.3 Entry Criteria and Exit Criteria / 5.1.3 Tiêu chí Bắt đầu và Tiêu chí Kết thúc

* **Entry criteria**: define the preconditions for starting a test activity (e.g., availability of test environment, test basis).
  **Tiêu chí bắt đầu**: định nghĩa các điều kiện tiên quyết để bắt đầu một hoạt động kiểm thử (ví dụ: sự sẵn có của môi trường kiểm thử, cơ sở kiểm thử).
* **Exit criteria**: define the conditions that must be met to complete a test activity (e.g., coverage achieved, no high-priority defects remaining).
  **Tiêu chí kết thúc**: định nghĩa các điều kiện phải được thỏa mãn để hoàn thành một hoạt động kiểm thử (ví dụ: độ bao phủ đạt được, không còn khiếm khuyết ưu tiên cao nào sót lại).

### 5.1.4 Estimation Techniques / 5.1.4 Các Kỹ thuật Ước lượng

* **Estimation based on ratios**: using historical data from similar projects.
  **Ước lượng dựa trên tỷ lệ**: sử dụng dữ liệu lịch sử từ các dự án tương tự.
* **Extrapolation**: using data from the early stages of the current project.
  **Ngoại suy (Extrapolation)**: sử dụng dữ liệu từ các giai đoạn đầu của dự án hiện tại.
* **Wideband Delphi** (e.g., Planning Poker): a consensus-based approach involving the whole team.
  **Wideband Delphi** (ví dụ: Planning Poker): một cách tiếp cận dựa trên sự đồng thuận với sự tham gia của toàn đội.
* **Three-point estimation**: using optimistic, pessimistic, and most likely estimates.
  **Ước lượng ba điểm**: sử dụng các ước lượng lạc quan, bi quan và có khả năng xảy ra nhất.

### 5.1.5 Test Case Prioritization / 5.1.5 Ưu tiên Ca kiểm thử

Test cases should be prioritized to focus on the most important areas first. Factors include:
Các ca kiểm thử nên được ưu tiên để tập trung vào các khu vực quan trọng nhất trước. Các yếu tố bao gồm:

* Risk level.
* Mức độ rủi ro.
* Business importance.
* Tầm quan trọng đối với kinh doanh.
* Complexity.
* Độ phức tạp.
* Dependencies between test cases.
* Sự phụ thuộc giữa các ca kiểm thử.

### 5.1.6 Test Pyramid / 5.1.6 Mô hình Kim tự tháp Kiểm thử (Test Pyramid)

The test pyramid shows that there should be a large number of low-level tests (e.g., unit tests) and a smaller number of high-level tests (e.g., UI tests).
Kim tự tháp kiểm thử chỉ ra rằng nên có một số lượng lớn các bài kiểm thử mức thấp (ví dụ: kiểm thử đơn vị) và một số lượng nhỏ hơn các bài kiểm thử mức cao (ví dụ: kiểm thử giao diện người dùng - UI).

* Lower levels: more granular, more isolated, faster, cheaper.
  Mức thấp hơn: chi tiết hơn, cô lập hơn, nhanh hơn, rẻ hơn.
* Higher levels: less granular, less isolated, slower, more expensive.
  Mức cao hơn: ít chi tiết hơn, ít cô lập hơn, chậm hơn, tốn kém hơn.

### 5.1.7 Testing Quadrants / 5.1.7 Các Góc phần tư Kiểm thử (Testing Quadrants)

Testing quadrants categorize test types based on their focus:
Các góc phần tư kiểm thử phân loại các loại kiểm thử dựa trên trọng tâm của chúng:

* **Q1**: Technology facing, support the team (e.g., unit tests).
  **Q1**: Hướng kỹ thuật, hỗ trợ đội ngũ (ví dụ: kiểm thử đơn vị).
* **Q2**: Business facing, support the team (e.g., functional tests, story tests).
  **Q2**: Hướng kinh doanh, hỗ trợ đội ngũ (ví dụ: kiểm thử chức năng, kiểm thử story).
* **Q3**: Business facing, critique the product (e.g., exploratory testing, UAT).
  **Q3**: Hướng kinh doanh, đánh giá sản phẩm (ví dụ: kiểm thử khám phá, UAT).
* **Q4**: Technology facing, critique the product (e.g., non-functional tests like performance, security).
  **Q4**: Hướng kỹ thuật, đánh giá sản phẩm (ví dụ: kiểm thử phi chức năng như hiệu năng, bảo mật).

## 5.2 Risk Management / 5.2 Quản lý Rủi ro

Risk involves the possibility of an event occurring with negative consequences.
Rủi ro liên quan đến khả năng xảy ra một sự kiện với những hậu quả tiêu cực.

### 5.2.1 Risk Level / 5.2.1 Mức độ Rủi ro

Risk level = Likelihood of occurrence * Impact of consequences.
Mức độ rủi ro = Khả năng xảy ra * Tác động của hậu quả.

### 5.2.2 Project Risks and Product Risks / 5.2.2 Rủi ro Dự án và Rủi ro Sản phẩm

* **Project risks**: risks related to the management and control of the project (e.g., lack of skills, budget cuts, delays).
  **Rủi ro dự án**: các rủi ro liên quan đến việc quản lý và kiểm soát dự án (ví dụ: thiếu kỹ năng, cắt giảm ngân sách, chậm trễ).
* **Product risks**: risks related to the quality characteristics of the software (e.g., incorrect functionality, poor performance, security vulnerabilities).
  **Rủi ro sản phẩm**: các rủi ro liên quan đến các đặc tính chất lượng của phần mềm (ví dụ: chức năng không chính xác, hiệu năng kém, lỗ hổng bảo mật).

### 5.2.3 Product Risk Analysis / 5.2.3 Phân tích Rủi ro Sản phẩm

Product risk analysis identifies the risks and assesses their levels. The results are used to:
Phân tích rủi ro sản phẩm xác định các rủi ro và đánh giá mức độ của chúng. Kết quả được sử dụng để:

* Determine the test scope.
* Xác định phạm vi kiểm thử.
* Prioritize tests.
* Ưu tiên các bài kiểm thử.
* Select appropriate test techniques.
* Lựa chọn kỹ thuật kiểm thử phù hợp.

### 5.2.4 Product Risk Mitigation / 5.2.4 Giảm thiểu Rủi ro Sản phẩm

Mitigation involves taking actions to reduce the risk level (likelihood or impact). Testing is a major way to mitigate product risks.
Giảm thiểu rủi ro bao gồm việc thực hiện các hành động để giảm mức độ rủi ro (khả năng hoặc tác động). Kiểm thử là một cách chính để giảm thiểu rủi ro sản phẩm.

## 5.3 Test Monitoring, Test Control and Test Completion / 5.3 Theo dõi, Kiểm soát và Kết thúc Kiểm thử

### 5.3.1 Test Metrics / 5.3.1 Các Chỉ số Kiểm thử (Test Metrics)

Metrics are used to monitor the progress and quality of the testing. Examples:
Các chỉ số được sử dụng để theo dõi tiến độ và chất lượng của việc kiểm thử. Ví dụ:

* Percentage of test cases executed.
* Tỷ lệ phần trăm các ca kiểm thử đã thực thi.
* Number of defects found, fixed, and remaining.
* Số lượng khiếm khuyết được tìm thấy, đã sửa và còn lại.
* Coverage achieved (e.g., requirements coverage).
* Độ bao phủ đạt được (ví dụ: độ bao phủ yêu cầu).
* Test effort and cost.
* Nỗ lực và chi phí kiểm thử.

### 5.3.2 Test Reports / 5.3.2 Báo cáo Kiểm thử

* **Test progress reports**: provided during the project to show the status of testing.
  **Báo cáo tiến độ kiểm thử**: được cung cấp trong suốt dự án để cho biết trạng thái của việc kiểm thử.
* **Test completion reports**: provided at the end of a test level or project to summarize the results and evaluate the quality.
  **Báo cáo kết thúc kiểm thử**: được cung cấp vào cuối một mức độ kiểm thử hoặc dự án để tóm tắt kết quả và đánh giá chất lượng.

### 5.3.3 Test Control / 5.3.3 Kiểm soát Kiểm thử

Test control involves taking corrective actions based on the monitoring data to meet the test objectives.
Kiểm soát kiểm thử bao gồm việc thực hiện các hành động khắc phục dựa trên dữ liệu theo dõi để đáp ứng các mục tiêu kiểm thử.

## 5.4 Configuration Management / 5.4 Quản lý Cấu hình

Configuration management ensures that all work products (test objects, testware) are identified, version-controlled, and tracked. It supports testing by ensuring that the correct versions of the software and tests are used.
Quản lý cấu hình đảm bảo rằng tất cả các sản phẩm làm việc (đối tượng kiểm thử, tài liệu kiểm thử) được xác định, kiểm soát phiên bản và được theo dõi. Nó hỗ trợ kiểm thử bằng cách đảm bảo rằng các phiên bản chính xác của phần mềm và các bài kiểm thử được sử dụng.

## 5.5 Defect Management / 5.5 Quản lý Khiếm khuyết

Defect management is a process for logging, analyzing, classifying, and tracking defects to closure. A defect report should include:
Quản lý khiếm khuyết là một quy trình ghi nhật ký, phân tích, phân loại và theo dõi các khiếm khuyết cho đến khi đóng lại. Một báo cáo khiếm khuyết nên bao gồm:

* Identifier.
* Mã định danh (ID).
* Title and description.
* Tiêu đề và mô tả.
* Steps to reproduce.
* Các bước để tái hiện.
* Expected and actual results.
* Kết quả mong đợi và kết quả thực tế.
* Severity and priority.
* Mức độ nghiêm trọng và mức độ ưu tiên.
* Status.
* Trạng thái.
* Author and assignee.
* Người tạo và người được giao xử lý.