**Chapter 1: Fundamentals of Testing**

**Chương 1: Các Khái Niệm Cơ Bản về Kiểm Thử**

## 1. Overview / Tổng quan
This chapter establishes the foundation for the ISTQB® Foundation Level certification. It defines what testing is, why it is necessary, the seven universal principles of testing, the test process (activities and testware), traceability, roles, and essential skills. Mastering this chapter is essential because it underpins every subsequent topic in the syllabus.

Chương này thiết lập nền tảng cho chứng chỉ ISTQB® Foundation Level. Nội dung định nghĩa kiểm thử là gì, tại sao cần kiểm thử, bảy nguyên tắc kiểm thử phổ quát, quy trình kiểm thử (các hoạt động và tài liệu kiểm thử), truy xuất nguồn gốc, vai trò và các kỹ năng thiết yếu. Nắm vững chương này là bắt buộc vì nó là cơ sở cho mọi chủ đề tiếp theo trong giáo trình.

**Syllabus Alignment:** FL-BO1, FL-BO2, FL-BO12
**Training Time:** 180 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi
### 2.1 What is Testing? / Kiểm thử là gì?
- **Definition:** Testing is a set of activities to discover defects and evaluate the quality of software work products. These work products, when being tested, are known as **test objects**.

- **Scope:** It includes both **dynamic testing** (executing software) and **static testing** (reviews and static analysis without execution).

- **Verification vs Validation:**

  - **Verification** checks whether the system meets **specified requirements** ("Are we building the product right?").

  - **Validation** checks whether the system meets **users' and stakeholders' needs** in its operational environment ("Are we building the right product?").

- **Common Misconceptions:**

  - Testing is only about running tests. *(False: it includes planning, analysis, design, monitoring, etc.)*

  - Testing focuses entirely on verification. *(False: validation is equally important.)*

- **Typical Test Objectives:**

  - Evaluating work products (requirements, user stories, designs, code).

  - Causing failures and finding defects.

  - Ensuring required coverage of a test object.

  - Reducing the risk level of inadequate software quality.

  - Verifying whether specified requirements have been fulfilled.

  - Verifying contractual, legal, and regulatory compliance.

  - Providing information to stakeholders to allow them to make informed decisions.

  - Building confidence in the quality of the test object.

  - Validating whether the test object is complete and works as expected.

- **Context Dependency:** Objectives vary depending on the work product, test level, risks, SDLC, and business context.

- **Định nghĩa:** Kiểm thử là tập hợp các hoạt động nhằm phát hiện khiếm khuyết và đánh giá chất lượng của các sản phẩm làm việc phần mềm. Các sản phẩm này, khi được kiểm thử, được gọi là **đối tượng kiểm thử**.

- **Phạm vi:** Bao gồm **kiểm thử động** (thực thi phần mềm) và **kiểm thử tĩnh** (đánh giá và phân tích tĩnh không thực thi).

- **Xác minh so với Xác thực:**

  - **Xác minh (Verification)** kiểm tra xem hệ thống có đáp ứng **yêu cầu đã đặc tả** không ("Chúng ta có đang xây dựng đúng sản phẩm không?").

  - **Xác thực (Validation)** kiểm tra xem hệ thống có đáp ứng **nhu cầu của người dùng và bên liên quan** trong môi trường vận hành không ("Chúng ta có đang xây dựng sản phẩm đúng không?").

- **Nhận thức sai lầm phổ biến:**

  - Kiểm thử chỉ là chạy kiểm thử. *(Sai: còn bao gồm lập kế hoạch, phân tích, thiết kế, giám sát...)*

  - Kiểm thử chỉ tập trung vào xác minh. *(Sai: xác thực cũng quan trọng không kém.)*

- **Các mục tiêu kiểm thử điển hình:**

  - Đánh giá sản phẩm làm việc (yêu cầu, user story, thiết kế, code).

  - Gây ra thất bại và tìm khiếm khuyết.

  - Đảm bảo độ bao phủ yêu cầu cho đối tượng kiểm thử.

  - Giảm thiểu mức độ rủi ro của chất lượng phần mềm không đạt.

  - Xác minh các yêu cầu đã đặc tả được đáp ứng.

  - Xác minh tuân thủ hợp đồng, pháp luật và quy định.

  - Cung cấp thông tin cho bên liên quan để họ đưa ra quyết định đúng đắn.

  - Xây dựng niềm tin vào chất lượng đối tượng kiểm thử.

  - Xác thực tính đầy đủ và hành vi đúng như mong đợi của đối tượng kiểm thử.

- **Phụ thuộc ngữ cảnh:** Mục tiêu thay đổi tùy theo sản phẩm làm việc, mức độ kiểm thử, rủi ro, vòng đời phát triển phần mềm (SDLC) và bối cảnh kinh doanh.

**Real-world Example:** A QA team for an e-commerce app not only checks that the "Add to Cart" button functions per the spec (verification) but also validates whether the checkout flow feels intuitive and secure for real shoppers (validation). **Ví dụ thực tế:** Nhóm QA cho ứng dụng thương mại điện tử không chỉ kiểm tra nút "Thêm vào giỏ hàng" hoạt động đúng theo đặc tả (xác minh) mà còn xác thực xem luồng thanh toán có trực quan và an toàn cho người mua hàng thực tế không (xác thực).

### 2.2 Testing and Debugging / Kiểm thử và Gỡ lỗi
Testing and debugging are **separate activities**.

- **Dynamic testing** can trigger failures caused by defects. **Debugging** is then concerned with finding the causes of the failure, analyzing them, and eliminating them.

- The typical debugging process involves:

  1.  **Reproduction** of a failure.

  2.  **Diagnosis** (finding the defect).

  3.  **Fixing** the defect.

- After fixing, **confirmation testing** checks whether the fix resolved the problem (preferably by the same person who performed the initial test).

- **Regression testing** checks whether the fix caused failures in other parts of the system.

- When **static testing** identifies a defect, debugging removes it directly; there is no need for reproduction or diagnosis.

Kiểm thử và gỡ lỗi là **hai hoạt động riêng biệt**.

- **Kiểm thử động** có thể kích hoạt thất bại do khiếm khuyết gây ra. **Gỡ lỗi** sau đó tìm nguyên nhân của thất bại, phân tích và loại bỏ chúng.

- Quy trình gỡ lỗi điển hình bao gồm:

  1.  **Tái hiện** thất bại.

  2.  **Chẩn đoán** (tìm khiếm khuyết).

  3.  **Sửa** khiếm khuyết.

- Sau khi sửa, **kiểm thử xác nhận** kiểm tra xem bản sửa lỗi đã giải quyết vấn đề chưa (ưu tiên do cùng người đã thực hiện kiểm thử ban đầu thực hiện).

- **Kiểm thử hồi quy** kiểm tra xem bản sửa lỗi có gây ra thất bại ở các phần khác của hệ thống không.

- Khi **kiểm thử tĩnh** xác định khiếm khuyết, gỡ lỗi loại bỏ trực tiếp; không cần tái hiện hay chẩn đoán.

**Real-world Example:** A tester reports that the payment gateway returns a 500 error (testing). A developer reproduces it, finds a missing null check in the API (diagnosis), fixes the code (debugging), and the tester re-runs the payment flow (confirmation testing). **Ví dụ thực tế:** Kiểm thử viên báo cáo cổng thanh toán trả về lỗi 500 (kiểm thử). Lập trình viên tái hiện lỗi, phát hiện thiếu kiểm tra null trong API (chẩn đoán), sửa code (gỡ lỗi), và kiểm thử viên chạy lại luồng thanh toán (kiểm thử xác nhận).

### 2.3 Why is Testing Necessary? / Tại sao cần Kiểm thử?
Testing contributes to project success by:

- Providing a **cost-effective** means of detecting defects.

- Directly evaluating the quality of a test object at various SDLC phases.

- Providing users with indirect representation on the development project.

- Meeting **contractual, legal, or regulatory requirements**.

Kiểm thử đóng góp vào thành công dự án bằng cách:

- Cung cấp phương tiện **hiệu quả về chi phí** để phát hiện khiếm khuyết.

- Đánh giá trực tiếp chất lượng đối tượng kiểm thử ở các giai đoạn SDLC.

- Đại diện gián tiếp cho người dùng trong dự án phát triển.

- Đáp ứng **yêu cầu hợp đồng, pháp luật hoặc quy định**.

**Testing vs Quality Assurance (QA) / Kiểm thử so với Đảm bảo chất lượng (QA)**

**Table**


| **Aspect / Khía cạnh** | **Testing (QC) / Kiểm thử (QC)** | **QA / Đảm bảo chất lượng** |
| --- | --- | --- |
| Orientation / Định hướng | Product-oriented / Hướng đến sản phẩm | Process-oriented / Hướng đến quy trình |
| Approach / Phương pháp | Corrective / Khắc phục | Preventive / Phòng ngừa |
| Focus / Tập trung | Achieving quality levels / Đạt mức chất lượng | Implementing and improving processes / Triển khai và cải tiến quy trình |
| Responsibility / Trách nhiệm | Test team / Nhóm kiểm thử | Everyone / Mọi người |


- Test results are used in **testing** to fix defects and in **QA** to provide feedback on how well processes work.

- Testing is a major form of **quality control (QC)**; other forms include formal methods and simulation.

- Kết quả kiểm thử được dùng trong **kiểm thử** để sửa khiếm khuyết và trong **QA** để phản hồi hiệu quả quy trình.

- Kiểm thử là hình thức chính của **kiểm soát chất lượng (QC)**; các hình thức khác bao gồm phương pháp hình thức và mô phỏng.

**Error, Defect, Failure, and Root Cause / Lỗi, Khiếm khuyết, Thất bại và Nguyên nhân gốc rễ**

- **Error (mistake):** A human action that produces an incorrect result. *Example: A developer misunderstands a requirement.*

- **Defect (fault/bug):** An imperfection in a work product. *Example: Wrong code is written due to the misunderstanding.*

- **Failure:** The inability of a system to perform its required function. *Example: The app crashes when the defective code is executed.*

- **Root Cause:** A fundamental reason for the occurrence of a problem. *Example: Poor requirements documentation and lack of review caused the misunderstanding.*

- **Note:** Environmental conditions (e.g., radiation) can also cause failures without human error.

- **Lỗi (sai sót):** Hành động của con người tạo ra kết quả không đúng. *Ví dụ: Lập trình viên hiểu sai yêu cầu.*

- **Khiếm khuyết (fault/bug):** Khuyết điểm trong sản phẩm làm việc. *Ví dụ: Code sai được viết do hiểu nhầm.*

- **Thất bại:** Hệ thống không thực hiện được chức năng yêu cầu. *Ví dụ: Ứng dụng sập khi khiếm khuyết được thực thi.*

- **Nguyên nhân gốc rễ:** Lý do cơ bản gây ra vấn đề. *Ví dụ: Tài liệu yêu cầu kém và thiếu đánh giá dẫn đến hiểu nhầm.*

- **Lưu ý:** Điều kiện môi trường (ví dụ: bức xạ) cũng có thể gây thất bại mà không có lỗi của con người.

### 2.4 Seven Principles of Testing / Bảy Nguyên tắc Kiểm thử
1.  **Testing shows the presence of defects, not their absence.** Even if no defects are found, testing cannot prove that the software is correct.

2.  **Exhaustive testing is impossible.** Testing everything is not feasible except in trivial cases; prioritization and risk-based approaches are required.

3.  **Early testing saves time and money.** Defects removed early prevent subsequent defects and reduce the cost of quality.

4.  **Defects cluster together.** A small number of modules usually contain most defects (Pareto principle). Risk-based testing focuses on these clusters.

5.  **Tests wear out.** Repeated tests become less effective at finding new defects; tests must be modified or new tests written. *(Exception: automated regression testing benefits from repetition.)*

6.  **Testing is context dependent.** There is no single best approach; safety-critical software is tested differently than a marketing website.

7.  **Absence-of-defects fallacy.** Thoroughly verifying requirements and fixing defects does not guarantee success if the system does not meet real user needs.

8.  **Kiểm thử cho thấy sự hiện diện của khiếm khuyết, không phải sự vắng mặt của chúng.** Ngay cả khi không tìm thấy khiếm khuyết, kiểm thử không chứng minh phần mềm đúng.

9.  **Kiểm thử toàn diện là không thể.** Kiểm thử mọi thứ không khả thi trừ các trường hợp đơn giản; cần có sự ưu tiên và phương pháp dựa trên rủi ro.

10. **Kiểm thử sớm tiết kiệm thời gian và tiền bạc.** Khiếm khuyết loại bỏ sớm ngăn ngừa khiếm khuyết phát sinh sau và giảm chi phí chất lượng.

11. **Khiếm khuyết có xu hướng tập trung.** Một số ít mô-đun thường chứa phần lớn khiếm khuyết (nguyên tắc Pareto). Kiểm thử dựa trên rủi ro tập trung vào các cụm này.

12. **Các ca kiểm thử bị "mòn".** Kiểm thử lặp lại giảm hiệu quả tìm khiếm khuyết mới; cần sửa đổi ca kiểm thử hoặc viết ca mới. *(Ngoại lệ: kiểm thử hồi quy tự động được hưởng lợi từ việc lặp lại.)*

13. **Kiểm thử phụ thuộc ngữ cảnh.** Không có cách tiếp cận tốt nhất duy nhất; phần mềm an toàn chức năng được kiểm thử khác với website tiếp thị.

14. **Ảo tưởng về sự vắng mặt khiếm khuyết.** Xác minh kỹ lưỡng yêu cầu và sửa khiếm khuyết không đảm bảo thành công nếu hệ thống không đáp ứng nhu cầu thực của người dùng.

### 2.5 Test Activities and Testware / Các Hoạt động Kiểm thử và Tài liệu Kiểm thử
The test process consists of seven main activities, often implemented iteratively or in parallel.

Quy trình kiểm thử gồm bảy hoạt động chính, thường được thực hiện lặp hoặc song song.

**Table**


| **Activity / Hoạt động** | **Description / Mô tả** | **Question / Câu hỏi** |
| --- | --- | --- |
| **Test Planning** / Lập kế hoạch | Define test objectives and select an approach within constraints. / Xác định mục tiêu và chọn phương pháp trong các ràng buộc. | "What is the goal?" / "Mục tiêu là gì?" |
| **Test Monitoring & Control** / Giám sát & Điều khiển | Check actual progress against the plan; take corrective actions. / Kiểm tra tiến độ thực tế so với kế hoạch; thực hiện hành động khắc phục. | "Are we on track?" / "Chúng ta có đúng lộ trình không?" |
| **Test Analysis** / Phân tích | Analyze the test basis; identify testable features; define and prioritize test conditions; assess testability. / Phân tích cơ sở kiểm thử; xác định đặc điểm có thể kiểm thử; xác định và ưu tiên điều kiện kiểm thử; đánh giá khả năng kiểm thử. | **"What to test?"** / **"Kiểm thử cái gì?"** |
| **Test Design** / Thiết kế | Elaborate test conditions into test cases/charters; identify coverage items; define test data and environment requirements. / Chi tiết hóa điều kiện thành ca kiểm thử/charter; xác định mục bao phủ; xác định yêu cầu dữ liệu và môi trường. | **"How to test?"** / **"Kiểm thử như thế nào?"** |
| **Test Implementation** / Triển khai | Create/acquire testware; organize into procedures/suites; create scripts; build and verify environment; schedule execution. / Tạo/thu thập tài liệu kiểm thử; tổ chức thành thủ tục/bộ kiểm thử; tạo kịch bản; xây dựng và xác minh môi trường; lập lịch thực thi. | "Is everything ready?" / "Mọi thứ đã sẵn sàng chưa?" |
| **Test Execution** / Thực thi | Run tests; compare actual vs expected results; log results; analyze anomalies. / Chạy kiểm thử; so sánh kết quả thực tế và mong đợi; ghi nhận kết quả; phân tích bất thường. | "What happened?" / "Chuyện gì đã xảy ra?" |
| **Test Completion** / Kết thúc | At milestones, create change requests for unresolved defects, archive testware, document lessons learned, produce completion report. / Tại các cột mốc, tạo yêu cầu thay đổi cho khiếm khuyết chưa giải quyết, lưu trữ tài liệu kiểm thử, ghi lại bài học kinh nghiệm, lập báo cáo kết thúc. | "What did we learn?" / "Chúng ta đã học được gì?" |


**Testware by Activity / Tài liệu Kiểm thử theo Hoạt động**

- **Planning:** Test plan, test schedule, risk register, entry/exit criteria.

- **Monitoring/Control:** Test progress reports, control directives.

- **Analysis:** Prioritized test conditions, defect reports on the test basis.

- **Design:** Test cases, test charters, coverage items, test data requirements, environment requirements.

- **Implementation:** Test procedures, manual/automated test scripts, test suites, test data, test execution schedule, environment items (stubs, drivers, simulators, service virtualizations).

- **Execution:** Test logs, defect reports.

- **Completion:** Test completion report, action items, lessons learned, change requests.

- **Lập kế hoạch:** Kế hoạch kiểm thử, lịch trình, sổ đăng ký rủi ro, tiêu chí đầu vào/đầu ra.

- **Giám sát/Điều khiển:** Báo cáo tiến độ kiểm thử, chỉ thị điều khiển.

- **Phân tích:** Điều kiện kiểm thử được ưu tiên, báo cáo khiếm khuyết trên cơ sở kiểm thử.

- **Thiết kế:** Ca kiểm thử, charter kiểm thử, mục bao phủ, yêu cầu dữ liệu kiểm thử, yêu cầu môi trường.

- **Triển khai:** Thủ tục kiểm thử, kịch bản thủ công/tự động, bộ kiểm thử, dữ liệu kiểm thử, lịch thực thi, các thành phần môi trường (stub, driver, bộ giả lập, ảo hóa dịch vụ).

- **Thực thi:** Nhật ký kiểm thử, báo cáo khiếm khuyết.

- **Kết thúc:** Báo cáo kết thúc kiểm thử, hành động cải tiến, bài học kinh nghiệm, yêu cầu thay đổi.

### 2.6 Context, Traceability, and Roles / Ngữ cảnh, Truy xuất nguồn gốc và Vai trò
**Impact of Context / Tác động của Ngữ cảnh**

Testing is tailored based on:

- Stakeholders, team skills, business domain, technical factors.

- Project constraints (scope, time, budget).

- Organizational factors, SDLC, and tools.

Kiểm thử được điều chỉnh dựa trên:

- Bên liên quan, kỹ năng đội nhóm, lĩnh vực kinh doanh, yếu tố kỹ thuật.

- Ràng buộc dự án (phạm vi, thời gian, ngân sách).

- Yếu tố tổ chức, SDLC và công cụ.

**Traceability / Truy xuất nguồn gốc**

Maintaining traceability between the **test basis**, **testware**, **test results**, and **defects** supports:

- Coverage evaluation (e.g., requirements coverage by test cases).

- Impact analysis of changes.

- Audits and IT governance.

- Clearer test progress and completion reports.

- Assessment of product quality, process capability, and project progress.

Duy trì truy xuất nguồn gốc giữa **cơ sở kiểm thử**, **tài liệu kiểm thử**, **kết quả kiểm thử** và **khiếm khuyết** hỗ trợ:

- Đánh giá độ bao phủ (ví dụ: độ bao phủ yêu cầu bởi ca kiểm thử).

- Phân tích tác động của thay đổi.

- Kiểm toán và quản trị IT.

- Báo cáo tiến độ và kết thúc rõ ràng hơn.

- Đánh giá chất lượng sản phẩm, năng lực quy trình và tiến độ dự án.

**Roles in Testing / Vai trò trong Kiểm thử**

- **Test Management Role:** Overall responsibility for the test process, team, and leadership. Focuses on **planning, monitoring, control, and completion**.

- **Testing Role:** Engineering/technical focus. Focuses on **analysis, design, implementation, and execution**.

- In Agile, some management tasks may be handled by the Agile team; cross-organizational tasks may be performed by dedicated test managers.

- One person can perform both roles.

- **Vai trò Quản lý kiểm thử:** Chịu trách nhiệm tổng thể về quy trình, đội nhóm và lãnh đạo. Tập trung vào **lập kế hoạch, giám sát, điều khiển và kết thúc**.

- **Vai trò Kiểm thử:** Tập trung kỹ thuật/công nghệ. Tập trung vào **phân tích, thiết kế, triển khai và thực thi**.

- Trong Agile, một số nhiệm vụ quản lý có thể do nhóm Agile đảm nhận; nhiệm vụ xuyên tổ chức có thể do quản lý kiểm thử chuyên trách thực hiện.

- Một người có thể đảm nhận cả hai vai trò.

### 2.7 Essential Skills and Good Practices / Kỹ năng Thiết yếu và Thực tiễn Tốt
**Generic Skills / Kỹ năng Chung**

- Testing knowledge (to increase effectiveness).

- Thoroughness, carefulness, curiosity, attention to detail.

- Good communication, active listening, teamwork.

- Analytical thinking, critical thinking, creativity.

- Technical knowledge (to increase efficiency).

- Domain knowledge (to understand end users).

- Kiến thức kiểm thử (tăng hiệu quả).

- Tính kỹ lưỡng, cẩn thận, tò mò, chú ý đến chi tiết.

- Kỹ năng giao tiếp tốt, lắng nghe chủ động, làm việc nhóm.

- Tư duy phân tích, tư duy phản biện, sáng tạo.

- Kiến thức kỹ thuật (tăng hiệu suất).

- Kiến thức miền nghiệp vụ (hiểu người dùng cuối).

**Whole Team Approach / Phương pháp Toàn đội**

- Originating from **Extreme Programming (XP)**.

- Any team member with necessary knowledge can perform any task.

- Everyone is responsible for quality.

- Improves team dynamics, communication, and synergy.

- Testers collaborate with business reps and developers.

- Xuất phát từ **Extreme Programming (XP)**.

- Bất kỳ thành viên nào có kiến thức cần thiết cũng có thể thực hiện nhiệm vụ.

- Mọi người chịu trách nhiệm về chất lượng.

- Cải thiện động lực nhóm, giao tiếp và sự cộng hưởng.

- Kiểm thử viên cộng tác với đại diện doanh nghiệp và lập trình viên.

**Independence of Testing / Tính độc lập của Kiểm thử**

**Table**


| **Level / Mức độ** | **Description / Mô tả** |
| --- | --- |
| None / Không | Author tests own work / Tác giả tự kiểm thử sản phẩm của mình |
| Some / Một phần | Peers from the same team / Đồng nghiệp trong cùng nhóm |
| High / Cao | Testers outside the team but within the organization / Kiểm thử viên ngoài nhóm nhưng trong tổ chức |
| Very High / Rất cao | Testers from outside the organization / Kiểm thử viên từ bên ngoài tổ chức |


- **Best Practice:** Use multiple levels. Developers perform component testing; the test team performs system testing; business reps perform acceptance testing.

- **Benefits:** Independent testers recognize different failures due to different backgrounds and biases; they can challenge stakeholder assumptions.

- **Drawbacks:** Isolation from the dev team; communication problems; adversarial relationships; developers may lose sense of quality responsibility; testers may be seen as bottlenecks.

- **Thực tiễn tốt nhất:** Sử dụng đa cấp độ. Lập trình viên thực hiện kiểm thử thành phần; nhóm kiểm thử thực hiện kiểm thử hệ thống; đại diện doanh nghiệp thực hiện kiểm thử chấp nhận.

- **Lợi ích:** Kiểm thử viên độc lập nhận ra các thất bại khác do nền tảng và thiên kiến khác nhau; họ có thể thách thức giả định của bên liên quan.

- **Bất lợi:** Cô lập khỏi nhóm phát triển; vấn đề giao tiếp; quan hệ đối đầu; lập trình viên có thể mất ý thức trách nhiệm về chất lượng; kiểm thử viên bị coi là điểm nghẽn.

## 3. Key Terminology / Thuật ngữ Quan trọng
- **Testing / Kiểm thử:** A set of activities to discover defects and evaluate the quality of software work products.

  - **Kiểm thử:** Tập hợp các hoạt động nhằm phát hiện khiếm khuyết và đánh giá chất lượng của các sản phẩm làm việc phần mềm.

- **Test Object / Đối tượng kiểm thử:** The work product being tested.

  - **Đối tượng kiểm thử:** Sản phẩm làm việc đang được kiểm thử.

- **Defect / Khiếm khuyết:** A flaw in a work product that can cause the system to fail (also called bug or fault).

  - **Khiếm khuyết:** Khuyết điểm trong sản phẩm làm việc có thể khiến hệ thống thất bại (còn gọi là bug hoặc fault).

- **Error / Lỗi:** A human mistake that produces a defect.

  - **Lỗi:** Sai sót của con người tạo ra khiếm khuyết.

- **Failure / Thất bại:** The inability of a system to perform its required function.

  - **Thất bại:** Hệ thống không thể thực hiện chức năng yêu cầu.

- **Root Cause / Nguyên nhân gốc rễ:** A fundamental reason for the occurrence of a problem.

  - **Nguyên nhân gốc rễ:** Lý do cơ bản gây ra vấn đề.

- **Debugging / Gỡ lỗi:** The process of finding, analyzing, and removing the causes of failures.

  - **Gỡ lỗi:** Quy trình tìm, phân tích và loại bỏ nguyên nhân gây thất bại.

- **Quality Assurance (QA) / Đảm bảo chất lượng:** A process-oriented, preventive approach focusing on implementation and improvement of processes.

  - **Đảm bảo chất lượng (QA):** Phương pháp hướng quy trình, phòng ngừa, tập trung triển khai và cải tiến quy trình.

- **Verification / Xác minh:** Checking whether the system meets specified requirements.

  - **Xác minh:** Kiểm tra xem hệ thống có đáp ứng yêu cầu đã đặc tả không.

- **Validation / Xác thực:** Checking whether the system meets users' and stakeholders' needs in its operational environment.

  - **Xác thực:** Kiểm tra xem hệ thống có đáp ứng nhu cầu của người dùng và bên liên quan trong môi trường vận hành không.

- **Test Basis / Cơ sở kiểm thử:** The body of knowledge used as the basis for test analysis and design.

  - **Cơ sở kiểm thử:** Tập hợp kiến thức được dùng làm cơ sở cho phân tích và thiết kế kiểm thử.

- **Test Case / Ca kiểm thử:** A set of preconditions, inputs, actions, and expected results.

  - **Ca kiểm thử:** Tập hợp các điều kiện tiên quyết, đầu vào, hành động và kết quả mong đợi.

- **Test Condition / Điều kiện kiểm thử:** An item or event that could be verified by one or more test cases.

  - **Điều kiện kiểm thử:** Mục hoặc sự kiện có thể được xác minh bởi một hoặc nhiều ca kiểm thử.

- **Testware / Tài liệu kiểm thử:** Work products produced during the test process.

  - **Tài liệu kiểm thử:** Các sản phẩm làm việc được tạo ra trong quy trình kiểm thử.

- **Traceability / Truy xuất nguồn gốc:** The degree to which a relationship can be established between test basis elements and testware.

  - **Truy xuất nguồn gốc:** Mức độ có thể thiết lập mối quan hệ giữa các thành phần cơ sở kiểm thử và tài liệu kiểm thử.

- **Coverage / Độ bao phủ:** The degree to which specified coverage items are exercised.

  - **Độ bao phủ:** Mức độ các mục bao phủ được chỉ định được thực hiện.

## 4. Deep Understanding / Hiểu Sâu
**Why These Concepts Matter / Tại sao các khái niệm này quan trọng**

- **Early Testing Reduces Cost:** A defect found in requirements costs \~100x less to fix than one found in production. Static testing (reviews) and dynamic testing started early prevent expensive rework.

- **Traceability is a Project Lifesaver:** When a critical business requirement changes, traceability allows you to instantly identify which test cases to update, which results are affected, and what risks remain.

- **Independence is a Double-Edged Sword:** Complete independence finds different defects but creates silos. The syllabus explicitly recommends a **balanced, multi-level approach** rather than maximum independence.

- **Kiểm thử sớm giảm chi phí:** Khiếm khuyết phát hiện trong giai đoạn yêu cầu có chi phí sửa chữa thấp hơn khoảng 100 lần so với khiếm khuyết phát hiện trong môi trường sản xuất. Kiểm thử tĩnh (đánh giá) và kiểm thử động bắt đầu sớm ngăn ngừa làm lại tốn kém.

- **Truy xuất nguồn gốc là cứu cánh cho dự án:** Khi yêu cầu nghiệp vụ quan trọng thay đổi, truy xuất nguồn gốc cho phép bạn xác định ngay ca kiểm thử nào cần cập nhật, kết quả nào bị ảnh hưởng và rủi ro nào còn lại.

- **Tính độc lập là con dao hai lưỡi:** Độc lập hoàn toàn tìm ra khiếm khuyết khác nhưng tạo ra các "silos". Giáo trình khuyến nghị rõ ràng **phương pháp cân bằng, đa cấp độ** thay vì độc lập tối đa.

**Critical Comparisons / So sánh Quan trọng**

**Table**


| **Comparison / So sánh** | **Key Difference / Điểm khác biệt chính** |
| --- | --- |
| **Verification vs Validation** / Xác minh vs Xác thực | Specified requirements vs Operational user needs / Yêu cầu đặc tả vs Nhu cầu người dùng thực tế |
| **Testing vs QA** / Kiểm thử vs QA | Product-oriented (QC) vs Process-oriented / Hướng sản phẩm (QC) vs Hướng quy trình |
| **Error vs Defect** / Lỗi vs Khiếm khuyết | Human mistake vs Work product imperfection / Sai sót con người vs Khuyết điểm sản phẩm làm việc |
| **Test Analysis vs Test Design** / Phân tích vs Thiết kế | "What to test" vs "How to test" / "Kiểm thử cái gì" vs "Kiểm thử như thế nào" |


**Common Mistakes / Sai lầm Thường gặp**

1.  **"No bugs found = perfect software"** --- Violates Principle 1. Testing shows presence, not absence.

2.  **"Testing is just execution"** --- Ignores planning, analysis, design, and completion.

3.  **"Testing = QA"** --- Testing is QC (product); QA is process.

4.  **"Maximum independence is best"** --- Ignores communication gaps and adversarial risks.

5.  **"Developers should not test"** --- Contradicts the whole team approach and multi-level independence best practice.

6.  **"Không tìm thấy bug = phần mềm hoàn hảo"** --- Vi phạm Nguyên tắc 1. Kiểm thử chỉ cho thấy sự hiện diện, không phải sự vắng mặt.

7.  **"Kiểm thử chỉ là thực thi"** --- Bỏ qua lập kế hoạch, phân tích, thiết kế và kết thúc.

8.  **"Kiểm thử = QA"** --- Kiểm thử là QC (sản phẩm); QA là quy trình.

9.  **"Độc lập tối đa là tốt nhất"** --- Bỏ qua khoảng cách giao tiếp và rủi ro đối đầu.

10. **"Lập trình viên không nên kiểm thử"** --- Mâu thuẫn với phương pháp toàn đội và thực tiễn độc lập đa cấp độ.

## 5. Chapter Summary / Tóm tắt Chương
- Testing evaluates quality and discovers defects through dynamic and static activities.

- It includes both verification (against specs) and validation (against user needs).

- Testing and debugging are separate; debugging follows testing to fix root causes.

- Testing is necessary for cost-effective defect detection, quality evaluation, and compliance.

- Testing is a form of QC (product-oriented); QA is process-oriented and preventive.

- Errors (human) → Defects (work product flaws) → Failures (system malfunction).

- The seven principles guide all testing: presence not absence, exhaustive impossible, early testing, clustering, wear out, context dependency, and absence-of-defects fallacy.

- The test process has seven activities: Planning, Monitoring/Control, Analysis, Design, Implementation, Execution, Completion.

- Testware is produced in each activity (plans, cases, scripts, logs, reports).

- Traceability links test basis to testware and supports coverage, impact analysis, and governance.

- Two key roles: Test Management (planning/control) and Testing (analysis/execution).

- Essential skills include thoroughness, communication, analytical thinking, and domain knowledge.

- The whole team approach (from XP) improves collaboration; independence of testing has benefits and drawbacks requiring a balanced, multi-level approach.

- Kiểm thử đánh giá chất lượng và phát hiện khiếm khuyết thông qua hoạt động động và tĩnh.

- Bao gồm xác minh (theo đặc tả) và xác thực (theo nhu cầu người dùng).

- Kiểm thử và gỡ lỗi là hai hoạt động riêng biệt; gỡ lỗi theo sau kiểm thử để sửa nguyên nhân gốc rễ.

- Kiểm thử cần thiết để phát hiện khiếm khuyết hiệu quả, đánh giá chất lượng và tuân thủ.

- Kiểm thử là hình thức QC (hướng sản phẩm); QA hướng quy trình và phòng ngừa.

- Lỗi (con người) → Khiếm khuyết (khuyết điểm sản phẩm) → Thất bại (hệ thống hỏng).

- Bảy nguyên tắc hướng dẫn mọi kiểm thử: hiện diện không phải vắng mặt, toàn diện không thể, kiểm thử sớm, tập trung, mòn, phụ thuộc ngữ cảnh, ảo tưởng vắng mặt khiếm khuyết.

- Quy trình kiểm thử có bảy hoạt động: Lập kế hoạch, Giám sát/Điều khiển, Phân tích, Thiết kế, Triển khai, Thực thi, Kết thúc.

- Tài liệu kiểm thử được tạo ra ở mỗi hoạt động (kế hoạch, ca kiểm thử, kịch bản, nhật ký, báo cáo).

- Truy xuất nguồn gốc liên kết cơ sở kiểm thử với tài liệu kiểm thử và hỗ trợ độ bao phủ, phân tích tác động và quản trị.

- Hai vai trò chính: Quản lý kiểm thử (lập kế hoạch/điều khiển) và Kiểm thử (phân tích/thực thi).

- Kỹ năng thiết yếu bao gồm tính kỹ lưỡng, giao tiếp, tư duy phân tích và kiến thức miền.

- Phương pháp toàn đội (từ XP) cải thiện cộng tác; tính độc lập của kiểm thử có lợi ích và bất lợi, đòi hỏi phương pháp cân bằng, đa cấp độ.

## 6. Quick Review / Ôn tập Nhanh
**Must-Know Definitions / Định nghĩa cần nhớ**

- **Testing:** Activities to discover defects and evaluate quality.

- **Verification:** Meets specified requirements.

- **Validation:** Meets user needs in operation.

- **Error:** Human mistake.

- **Defect:** Flaw in a work product.

- **Failure:** System does not perform required function.

- **Root Cause:** Fundamental reason for a problem.

**7 Principles (Keywords) / 7 Nguyên tắc (Từ khóa)**

1.  Presence, not absence / Hiện diện, không phải vắng mặt

2.  Exhaustive impossible / Toàn diện không thể

3.  Early saves money / Sớm tiết kiệm tiền

4.  Defects cluster / Khiếm khuyết tập trung

5.  Tests wear out / Ca kiểm thử mòn

6.  Context dependent / Phụ thuộc ngữ cảnh

7.  Absence-of-defects fallacy / Ảo tưởng vắng mặt khiếm khuyết

**Test Activities Order / Thứ tự Hoạt động Kiểm thử** Plan → Monitor/Control → **Analysis (What)** → **Design (How)** → Implement → Execute → Complete

**Testware Map / Bản đồ Tài liệu Kiểm thử**

- Plan: Test plan, schedule, risk register, entry/exit criteria

- Analysis: Test conditions

- Design: Test cases, charters, coverage items

- Implementation: Procedures, scripts, suites, data, schedule

- Execution: Logs, defect reports

- Completion: Completion report, lessons learned

**Independence Levels / Các cấp độ Độc lập** None (Author) → Some (Peers) → High (External team) → Very High (External org)

**Key Formulas / Công thức chính**

- Coverage = (Number of exercised items / Total number of identified items) × 100%

- Risk Level = Risk Likelihood × Risk Impact *(introduced in Chapter 5, but foundational)*

**One-Liner Exam Answers / Câu trả lời ngắn cho đề thi**

- "What to test?" → Test Analysis / Phân tích kiểm thử

- "How to test?" → Test Design / Thiết kế kiểm thử

- "Who is responsible for quality?" → Everyone / Mọi người (Whole Team Approach)

- "Best independence strategy?" → Multiple levels / Đa cấp độ

- "Can testing prove correctness?" → No / Không (Principle 1)