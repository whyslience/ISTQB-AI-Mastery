# Chapter 5: Managing the Test Activities / Chương 5: Quản lý các Hoạt động Kiểm thử

> **ISTQB CTFL v4.0.1** · **335 minutes** / **335 phút** giảng dạy tối thiểu (theo giáo trình chính thức).

## Keywords / Từ khóa

defect management, defect report, entry criteria, exit criteria, product risk, project risk, risk, risk analysis, risk assessment, risk control, risk identification, risk level, risk management, risk mitigation, risk monitoring, risk-based testing, test approach, test completion report, test control, test monitoring, test plan, test planning, test progress report, test pyramid, test strategy, testing quadrants

quản lý khiếm khuyết, báo cáo khiếm khuyết, tiêu chí đầu vào, tiêu chí đầu ra, rủi ro sản phẩm, rủi ro dự án, rủi ro, phân tích rủi ro, đánh giá rủi ro, kiểm soát rủi ro, nhận diện rủi ro, mức rủi ro, quản lý rủi ro, giảm thiểu rủi ro, giám sát rủi ro, kiểm thử dựa trên rủi ro, phương pháp kiểm thử, báo cáo kết thúc kiểm thử, kiểm soát kiểm thử, giám sát kiểm thử, kế hoạch kiểm thử, lập kế hoạch kiểm thử, báo cáo tiến độ kiểm thử, tháp kiểm thử (test pyramid), chiến lược kiểm thử, bốn góc phần tư kiểm thử (testing quadrants)

## Learning Objectives for Chapter 5 / Mục tiêu học tập Chương 5

### 5.1 Test Planning / Lập kế hoạch Kiểm thử

* **FL-5.1.1 (K2)** Exemplify the purpose and content of a test plan / **FL-5.1.1 (K2)** Minh họa mục đích và nội dung của kế hoạch kiểm thử
* **FL-5.1.2 (K1)** Recognize how a tester adds value to iteration and release planning / **FL-5.1.2 (K1)** Nhận diện kiểm thử viên tạo giá trị thế nào trong lập kế hoạch iteration và release
* **FL-5.1.3 (K2)** Compare and contrast entry criteria and exit criteria / **FL-5.1.3 (K2)** So sánh tiêu chí đầu vào và đầu ra
* **FL-5.1.4 (K3)** Use estimation techniques to calculate the required test effort / **FL-5.1.4 (K3)** Dùng kỹ thuật ước lượng để tính nỗ lực kiểm thử
* **FL-5.1.5 (K3)** Apply test case prioritization / **FL-5.1.5 (K3)** Áp dụng ưu tiên hóa ca kiểm thử
* **FL-5.1.6 (K1)** Recall the concepts of the test pyramid / **FL-5.1.6 (K1)** Ghi nhớ khái niệm tháp kiểm thử
* **FL-5.1.7 (K2)** Summarize the testing quadrants and their relationships with test levels and test types / **FL-5.1.7 (K2)** Tóm tắt bốn góc phần tư kiểm thử và mối quan hệ với mức độ/loại kiểm thử

### 5.2 Risk Management / Quản lý Rủi ro

* **FL-5.2.1 (K1)** Identify risk level by using risk likelihood and risk impact / **FL-5.2.1 (K1)** Xác định mức rủi ro bằng khả năng xảy ra và tác động
* **FL-5.2.2 (K2)** Distinguish between project risks and product risks / **FL-5.2.2 (K2)** Phân biệt rủi ro dự án và rủi ro sản phẩm
* **FL-5.2.3 (K2)** Explain how product risk analysis may influence thoroughness and test scope / **FL-5.2.3 (K2)** Giải thích phân tích rủi ro sản phẩm ảnh hưởng độ sâu và phạm vi kiểm thử
* **FL-5.2.4 (K2)** Explain what measures can be taken in response to analyzed product risks / **FL-5.2.4 (K2)** Giải thích biện pháp đối phó rủi ro sản phẩm sau phân tích

### 5.3 Test Monitoring, Test Control and Test Completion / Giám sát, Kiểm soát và Kết thúc Kiểm thử

* **FL-5.3.1 (K1)** Recall metrics used for testing / **FL-5.3.1 (K1)** Ghi nhớ chỉ số dùng trong kiểm thử
* **FL-5.3.2 (K2)** Summarize the purposes, content, and audiences for test reports / **FL-5.3.2 (K2)** Tóm tắt mục đích, nội dung và đối tượng nhận báo cáo kiểm thử
* **FL-5.3.3 (K2)** Exemplify how to communicate the status of testing / **FL-5.3.3 (K2)** Minh họa cách truyền đạt trạng thái kiểm thử

### 5.4 Configuration Management / Quản lý Cấu hình

* **FL-5.4.1 (K2)** Summarize how configuration management supports testing / **FL-5.4.1 (K2)** Tóm tắt quản lý cấu hình hỗ trợ kiểm thử thế nào

### 5.5 Defect Management / Quản lý Khiếm khuyết

* **FL-5.5.1 (K3)** Prepare a defect report / **FL-5.5.1 (K3)** Soạn báo cáo khiếm khuyết

---

## 5.1 Test Planning / Lập kế hoạch Kiểm thử

Test planning defines the test objectives and the approach for meeting the objectives within constraints.

Lập kế hoạch kiểm thử xác định các mục tiêu kiểm thử và cách tiếp cận để đáp ứng các mục tiêu đó trong các ràng buộc.

### 5.1.1 Purpose and Content of a Test Plan / Mục đích và Nội dung của Kế hoạch Kiểm thử

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

### 5.1.2 Tester’s Contribution to Iteration and Release Planning / Đóng góp của Người kiểm thử vào Lập kế hoạch Vòng lặp và Phát hành

In Agile development, testers contribute to:

Trong phát triển Agile, người kiểm thử đóng góp vào:

* Identifying testable features and defining acceptance criteria.
* Xác định các tính năng có thể kiểm thử và định nghĩa tiêu chí chấp nhận.
* Estimating the test effort for each user story.
* Ước lượng nỗ lực kiểm thử cho mỗi user story.
* Identifying risks and planning for their mitigation.
* Xác định rủi ro và lập kế hoạch giảm thiểu rủi ro.

* **Entry criteria**: define the preconditions for starting a test activity (e.g., availability of test environment, test basis).
  **Tiêu chí đầu vào**: định nghĩa các điều kiện tiên quyết để bắt đầu một hoạt động kiểm thử (ví dụ: sự sẵn có của môi trường kiểm thử, cơ sở kiểm thử).
* **Exit criteria**: define the conditions that must be met to complete a test activity (e.g., coverage achieved, no high-priority defects remaining).
  **Tiêu chí đầu ra**: định nghĩa các điều kiện phải được thỏa mãn để hoàn thành một hoạt động kiểm thử (ví dụ: độ bao phủ đạt được, không còn khiếm khuyết ưu tiên cao nào sót lại).

### 5.1.4 Estimation Techniques / Các Kỹ thuật Ước lượng

* **Estimation based on ratios**: using historical data from similar projects.
  **Ước lượng dựa trên tỷ lệ**: sử dụng dữ liệu lịch sử từ các dự án tương tự.
* **Extrapolation**: using data from the early stages of the current project.
  **Ngoại suy (Extrapolation)**: sử dụng dữ liệu từ các giai đoạn đầu của dự án hiện tại.
* **Wideband Delphi** (e.g., Planning Poker): a consensus-based approach involving the whole team.
  **Wideband Delphi** (ví dụ: Planning Poker): một cách tiếp cận dựa trên sự đồng thuận với sự tham gia của toàn đội.
* **Three-point estimation**: using optimistic, pessimistic, and most likely estimates.
  **Ước lượng ba điểm**: sử dụng các ước lượng lạc quan, bi quan và có khả năng xảy ra nhất.

### 5.1.5 Test Case Prioritization / Ưu tiên Ca kiểm thử

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

### 5.1.6 Test Pyramid / Mô hình Kim tự tháp Kiểm thử (Test Pyramid)

The test pyramid shows that there should be a large number of low-level tests (e.g., unit tests) and a smaller number of high-level tests (e.g., UI tests).

Kim tự tháp kiểm thử chỉ ra rằng nên có một số lượng lớn các bài kiểm thử mức thấp (ví dụ: kiểm thử đơn vị) và một số lượng nhỏ hơn các bài kiểm thử mức cao (ví dụ: kiểm thử giao diện người dùng - UI).

* Lower levels: more granular, more isolated, faster, cheaper.
  Mức thấp hơn: chi tiết hơn, cô lập hơn, nhanh hơn, rẻ hơn.
* Higher levels: less granular, less isolated, slower, more expensive.
  Mức cao hơn: ít chi tiết hơn, ít cô lập hơn, chậm hơn, tốn kém hơn.

### 5.1.7 Testing Quadrants / Các Góc phần tư Kiểm thử (Testing Quadrants)

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

## 5.2 Risk Management / Quản lý Rủi ro

Organizations face many internal and external factors that make it uncertain whether and when they will achieve their objectives (ISO 31000). Risk management allows organizations to increase the likelihood of achieving objectives, improve product quality, and increase stakeholders’ confidence and trust.

Tổ chức đối mặt nhiều yếu tố nội bộ và bên ngoài khiến không chắc có đạt mục tiêu hay không và khi nào (ISO 31000). Quản lý rủi ro giúp tăng khả năng đạt mục tiêu, cải thiện chất lượng sản phẩm và niềm tin của bên liên quan.

The main risk management activities are:

Các hoạt động quản lý rủi ro chính gồm:

* **Risk analysis** (risk identification and risk assessment; see section 5.2.3).
* **Phân tích rủi ro** (nhận diện và đánh giá rủi ro; xem mục 5.2.3).
* **Risk control** (risk mitigation, risk monitoring; see section 5.2.4).
* **Kiểm soát rủi ro** (giảm thiểu và giám sát rủi ro; xem mục 5.2.4).

The test approach in which test activities are selected, prioritized, and managed based on risk analysis and risk control is called **risk-based testing**.

Cách tiếp cận kiểm thử mà các hoạt động kiểm thử được chọn, ưu tiên và quản lý dựa trên phân tích và kiểm soát rủi ro gọi là **kiểm thử dựa trên rủi ro (risk-based testing)**.

### 5.2.1 Risk Definition and Risk Attributes / Định nghĩa Rủi ro và Thuộc tính Rủi ro

Risk is a potential event, hazard, threat, or situation whose occurrence causes an adverse effect. A risk is characterized by:

Rủi ro là sự kiện, nguy cơ, mối đe dọa hoặc tình huống tiềm ẩn mà nếu xảy ra sẽ gây tác động bất lợi. Rủi ro được mô tả bởi:

* **Risk likelihood** – the probability of the risk occurring (greater than zero and less than one).
* **Khả năng xảy ra rủi ro** – xác suất rủi ro xảy ra (lớn hơn 0 và nhỏ hơn 1).
* **Risk impact (harm)** – the consequences if it occurs.
* **Tác động (thiệt hại)** – hậu quả nếu rủi ro xảy ra.

These factors define **risk level**, a measure of the risk. Higher risk level means treatment is more important.

Hai yếu tố này tạo thành **mức độ rủi ro**. Mức độ càng cao thì xử lý rủi ro càng quan trọng. Quantitative assessment may multiply likelihood × impact; qualitative approaches may use a risk matrix.
Đánh giá định lượng có thể nhân khả năng × tác động; đánh giá định tính có thể dùng ma trận rủi ro.

### 5.2.2 Project Risks and Product Risks / Rủi ro Dự án và Rủi ro Sản phẩm

In software testing we are generally concerned with **project risks** and **product risks**.

Trong kiểm thử phần mềm, người ta thường quan tâm **rủi ro dự án** và **rủi ro sản phẩm**.

**Project risks** relate to management and control of the project, for example:

**Rủi ro dự án** gắn với quản lý và kiểm soát dự án, ví dụ:

* Organizational issues (delayed work products, inaccurate estimates, cost cutting).
* Vấn đề tổ chức (trễ giao sản phẩm làm việc, ước lượng sai, cắt giảm chi phí).
* People issues (skills, conflicts, communication, staffing).
* Con người (kỹ năng, xung đột, giao tiếp, nhân sự).
* Technical issues (scope creep, poor tool support).
* Kỹ thuật (tràn phạm vi, công cụ kém).
* Supplier/third-party issues.
* Nhà cung cấp/bên thứ ba.

If they occur, project risks may affect schedule, budget, or scope.

Nếu xảy ra, rủi ro dự án có thể ảnh hưởng tiến độ, ngân sách hoặc phạm vi.

**Product risks** relate to quality characteristics (e.g., ISO/IEC 25010), such as wrong or missing functionality, poor performance, security issues, poor UX, etc. Consequences can include dissatisfaction, loss of revenue or reputation, damage to third parties, high support costs, regulatory or even safety impacts.

**Rủi ro sản phẩm** gắn với đặc tính chất lượng (ví dụ ISO/IEC 25010), như chức năng sai/thiếu, hiệu năng kém, bảo mật, trải nghiệm người dùng kém, v.v. Hậu quả có thể gồm bất mãn, mất doanh thu/uy tín, thiệt hại cho bên thứ ba, chi phí hỗ trợ cao, vi phạm quy định hoặc thậm chí an toàn.

### 5.2.3 Product Risk Analysis / Phân tích Rủi ro Sản phẩm

The goal is to make product risks visible so test effort focuses on reducing **residual** risk. Product risk analysis combines **risk identification** (e.g., brainstorming, workshops, interviews, cause-effect diagrams) and **risk assessment** (categorize risks, assign likelihood and impact, prioritize, propose handling).

Mục tiêu là làm rõ rủi ro sản phẩm để nỗ lực kiểm thử tập trung giảm rủi ro **còn lại**. Phân tích gồm **nhận diện** (brainstorming, workshop, phỏng vấn, sơ đồ nguyên nhân–kết quả) và **đánh giá** (phân loại, gán khả năng/tác động, ưu tiên, đề xuất xử lý).

Results are used to determine scope, test levels and types, techniques and coverage, effort estimates, priorities, and whether non-testing actions also reduce risk.

Kết quả dùng để xác định phạm vi, mức/loại kiểm thử, kỹ thuật và độ bao phủ, ước lượng nỗ lực, thứ tự ưu tiên, và có cần biện pháp ngoài kiểm thử để giảm rủi ro hay không.

### 5.2.4 Product Risk Control / Kiểm soát Rủi ro Sản phẩm

Product risk control covers measures taken for identified and assessed product risks. It includes **risk mitigation** (actions from assessment to lower risk level) and **risk monitoring** (check mitigation works, improve assessment, spot new risks).

Kiểm soát rủi ro sản phẩm gồm các biện pháp đối với rủi ro đã phân tích. Gồm **giảm thiểu** (hành động theo đánh giá để hạ mức rủi ro) và **giám sát** (kiểm tra hiệu quả, cải thiện đánh giá, phát hiện rủi ro mới).

Response options can include mitigation by testing, acceptance, transfer, or contingency planning. Testing-related mitigation examples:

Các lựa chọn ứng phó gồm giảm thiểu bằng kiểm thử, chấp nhận, chuyển giao hoặc kế hoạch dự phòng. Ví dụ giảm thiểu bằng kiểm thử:

* Use testers with suitable experience and independence.
* Dùng kiểm thử viên có kinh nghiệm và mức độc lập phù hợp.
* Apply reviews and static analysis.
* Áp dụng đánh giá và phân tích tĩnh.
* Apply appropriate techniques and coverage for the risk.
* Áp dụng kỹ thuật và độ bao phủ phù hợp với rủi ro.
* Use test types that target affected quality characteristics.
* Dùng loại kiểm thử phù hợp đặc tính chất lượng bị ảnh hưởng.
* Perform dynamic testing including regression testing.
* Thực hiện kiểm thử động gồm hồi quy.

## 5.3 Test Monitoring, Test Control and Test Completion / Giám sát, Kiểm soát và Kết thúc Kiểm thử

**Test monitoring** gathers information to assess progress and whether exit criteria or related targets (e.g., product risk coverage) are met.

**Giám sát kiểm thử** thu thập thông tin để đánh giá tiến độ và việc đạt tiêu chí kết thúc hoặc mục tiêu liên quan (ví dụ bao phủ rủi ro sản phẩm).

**Test control** uses monitoring outputs to give guidance and corrective actions for effective, efficient testing (e.g., reprioritize tests when a risk becomes an issue; re-check entry/exit criteria after rework; adjust schedule for environment delays; add resources).

**Kiểm soát kiểm thử** dùng kết quả giám sát để chỉ đạo và hành động khắc phục nhằm kiểm thử hiệu quả (ví dụ sắp xếp lại mức ưu tiên khi rủi ro trở thành sự cố; xem lại tiêu chí đầu vào/ra sau chỉnh sửa; điều chỉnh lịch khi môi trường trễ; bổ sung nguồn lực).

**Test completion** consolidates data and experience at milestones (end of a test level, iteration, project, release, or maintenance cycle).

**Kết thúc kiểm thử** tổng hợp dữ liệu và kinh nghiệm tại các mốc (hết mức kiểm thử, iteration, dự án, phát hành hoặc bảo trì).

### 5.3.1 Metrics used in Testing / Các Chỉ số dùng trong Kiểm thử

Test metrics show progress against schedule and budget, current quality of the test object, and effectiveness of testing against objectives. Examples include:

Chỉ số kiểm thử thể hiện tiến độ so với lịch và ngân sách, chất lượng hiện tại của đối tượng kiểm thử, và hiệu quả kiểm thử so với mục tiêu. Ví dụ:

* Project progress (tasks, resources, effort).
* Tiến độ dự án (nhiệm vụ, nguồn lực, nỗ lực).
* Test progress (cases prepared/run/passed/failed, environment readiness, execution time).
* Tiến độ kiểm thử (ca đã chuẩn bị/chạy/đạt/thất bại, môi trường, thời gian thực thi).
* Product quality (e.g., availability, response time, MTTF).
* Chất lượng sản phẩm (ví dụ khả dụng, thời gian phản hồi, MTTF).
* Defects (found/fixed, density, detection percentage).
* Khiếm khuyết (tìm/đã sửa, mật độ, tỷ lệ phát hiện).
* Risk (e.g., residual risk level).
* Rủi ro (ví dụ mức rủi ro còn lại).
* Coverage (requirements, code, etc.).
* Độ bao phủ (yêu cầu, mã, v.v.).
* Cost of testing and quality.
* Chi phí kiểm thử và chất lượng.

### 5.3.2 Purpose, Content and Audience for Test Reports / Mục đích, Nội dung và Đối tượng của Báo cáo Kiểm thử

**Test progress reports** support ongoing control; they are often periodic and may include period covered, progress vs plan, impediments and workarounds, metrics, new/changed risks, and planned next steps.

**Báo cáo tiến độ kiểm thử** phục vụ kiểm soát hàng ngày; thường định kỳ và gồm khoảng thời gian, tiến độ so với kế hoạch, trở ngại và cách xử lý, chỉ số, rủi ro mới/thay đổi, kế hoạch kỳ tới.

**Test completion reports** summarize a test level, cycle, or iteration when work is done and exit criteria are ideally met; they may include test summary, evaluation vs plan, deviations, impediments, metrics, open risks/defects, and lessons learned. Audiences differ: frequent informal updates within a team vs formal completion reports using a standard.

**Báo cáo kết thúc kiểm thử** tóm tắt một mức, chu kỳ hoặc iteration khi kết thúc và thường kỳ vọng đạt tiêu chí đầu ra; có thể gồm tóm tắt kiểm thử, đánh giá so với kế hoạch, lệch so với kế hoạch, trở ngại, chỉ số, rủi ro/khiếm khuyết mở và bài học. Đối tượng nhận báo cáo khác nhau: cập nhật thường xuyên trong đội so với báo cáo hoàn thành trên mẫu chuẩn.

### 5.3.3 Communicating the Status of Testing / Truyền đạt Trạng thái Kiểm thử

The best communication channel depends on test management needs, organizational strategy, regulations, and—in self-organizing teams—the team itself. Options include:

Kênh truyền đạt phù hợp phụ thuộc nhu cầu quản lý kiểm thử, chiến lược tổ chức, quy định và—với đội tự tổ chức—chính đội. Có thể dùng:

* Verbal updates with stakeholders.
* Trao đổi trực tiếp với bên liên quan.
* Dashboards (CI/CD, task boards, burn-down charts).
* Bảng điều khiển (CI/CD, bảng việc, burn-down).
* Email, chat, and online documentation.
* Email, chat và tài liệu trực tuyến.
* Formal test reports (see section 5.3.2).
* Báo cáo kiểm thử chính thức (mục 5.3.2).

Tailor content to stakeholder interests. Distributed teams may need more formal written communication.

Điều chỉnh nội dung theo nhu cầu từng bên liên quan. Đội phân tán có thể cần báo cáo văn bản chính thức hơn.

## 5.4 Configuration Management / Quản lý Cấu hình

In testing, **configuration management (CM)** provides a discipline for identifying, controlling, and tracking work products such as test plans, test strategies, test conditions, test cases, test scripts, test results, test logs, and test reports as **configuration items**.

Trong kiểm thử, **quản lý cấu hình (CM)** đặt ra khuôn khổ kỷ luật để xác định, kiểm soát và theo dõi các sản phẩm làm việc như kế hoạch kiểm thử, chiến lược kiểm thử, điều kiện kiểm thử, ca kiểm thử, script, kết quả, nhật ký và báo cáo kiểm thử như **mục cấu hình (configuration items)**.

For a complex configuration item (e.g., a test environment), CM records what it consists of, relationships, and versions. If the item is approved for testing, it becomes a **baseline** and can only be changed through formal change control. CM keeps a record of changed items when a new baseline is created; you can revert to a previous baseline to reproduce earlier test results.

Với mục cấu hình phức tạp (ví dụ môi trường kiểm thử), CM ghi lại thành phần, quan hệ và phiên bản. Khi được phê duyệt để kiểm thử, nó trở thành **mốc cơ sở (baseline)** và chỉ đổi qua quy trình kiểm soát thay đổi chính thức. CM ghi nhận các thay đổi khi tạo baseline mới; có thể quay lại baseline cũ để tái lập kết quả kiểm thử trước đó.

To support testing properly, CM ensures that:

Để hỗ trợ kiểm thử đúng cách, CM đảm bảo:

* All configuration items, including **test items** (parts of the test object), are uniquely identified, version-controlled, tracked for changes, and related to other items so **traceability** is maintained through the test process.
* Mọi mục cấu hình, gồm **hạng mục kiểm thử** (phần của đối tượng kiểm thử), được định danh duy nhất, kiểm soát phiên bản, theo dõi thay đổi và liên kết với mục khác để duy trì **truy xuất nguồn gốc** trong suốt quy trình kiểm thử.
* All identified documentation and software items are referenced unambiguously in testware.
* Mọi tài liệu và phần mềm đã xác định được tham chiếu rõ ràng trong testware.

Continuous integration, delivery, deployment, and the associated testing are often part of an automated DevOps pipeline (see section 2.1.4), where automated CM is usually included.

Tích hợp, phát hành, triển khai liên tục và kiểm thử kèm theo thường nằm trong pipeline DevOps tự động (xem mục 2.1.4), trong đó thường có CM tự động.

## 5.5 Defect Management / Quản lý Khiếm khuyết

Finding defects is a major test objective, so an established **defect management** process is essential. Reported anomalies may turn out to be real defects or something else (e.g., false positive, change request)—that is resolved while handling the report. Anomalies may be reported in any SDLC phase; the form depends on the SDLC.

Tìm khiếm khuyết là mục tiêu kiểm thử quan trọng nên cần quy trình **quản lý khiếm khuyết** ổn định. Bất thường được báo có thể là khiếm khuyết thật hoặc thứ khác (ví dụ kết quả dương tính giả, yêu cầu thay đổi)—được xử lý khi làm việc với báo cáo. Bất thường có thể báo ở mọi giai đoạn SDLC; biểu mẫu phụ thuộc SDLC.

At a minimum, the process includes a **workflow** from discovery to closure and **rules for classification**. The workflow typically logs anomalies, analyzes and classifies them, decides a response (fix or keep as-is), and closes the report; all stakeholders must follow it. **Static testing** findings (especially static analysis) should be handled similarly.

Tối thiểu, quy trình có **luồng xử lý** từ phát hiện đến đóng và **quy tắc phân loại**. Luồng thường ghi nhận, phân tích/phân loại, quyết định ứng xử (sửa hoặc giữ nguyên) và đóng báo cáo; mọi bên liên quan phải tuân theo. Kết quả **kiểm thử tĩnh** (đặc biệt phân tích tĩnh) nên xử lý tương tự.

Typical defect reports aim to:

Báo cáo khiếm khuyết thường nhằm:

* Give handlers enough information to resolve the issue.
* Cung cấp đủ thông tin để xử lý.
* Track work product quality.
* Theo dõi chất lượng sản phẩm làm việc.
* Suggest improvements to development and testing.
* Gợi ý cải tiến phát triển và kiểm thử.

A defect report from **dynamic testing** typically includes (some fields may be filled automatically by tools):

Báo cáo từ **kiểm thử động** thường gồm (một số trường có thể tự điền bởi công cụ):

* Unique identifier.
* Mã định danh duy nhất.
* Title with a short summary of the anomaly.
* Tiêu đề và tóm tắt ngắn bất thường.
* Date observed, issuing organization, author (including role).
* Ngày quan sát, tổ chức phát hành, tác giả và vai trò.
* Identification of the test object and test environment.
* Định danh đối tượng kiểm thử và môi trường.
* Context (e.g., test case run, activity, SDLC phase, technique, checklist, test data).
* Ngữ cảnh (ví dụ ca đang chạy, hoạt động, giai đoạn SDLC, kỹ thuật, checklist, dữ liệu).
* Description enabling reproduction and resolution: steps, logs, dumps, screenshots, recordings as relevant.
* Mô tả để tái hiện và xử lý: bước, log, dump, ảnh chụp, ghi hình khi cần.
* Expected and actual results.
* Kết quả mong đợi và thực tế.
* Severity (impact on stakeholders or requirements).
* Mức độ nghiêm trọng (tác động lên bên liên quan hoặc yêu cầu).
* Priority to fix.
* Mức ưu tiên sửa.
* Status (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected).
* Trạng thái (ví dụ mở, hoãn, trùng, chờ sửa, chờ kiểm thử xác nhận, mở lại, đóng, từ chối).
* References (e.g., to the test case).
* Tham chiếu (ví dụ tới ca kiểm thử).

Templates and examples appear in **ISO/IEC/IEEE 29119-3** (there called incident reports).

Mẫu và ví dụ có trong **ISO/IEC/IEEE 29119-3** (gọi là incident reports).