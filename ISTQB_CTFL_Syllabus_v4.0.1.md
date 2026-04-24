**Chapter 1: Fundamentals of Testing**

**Chương 1: Các Khái Niệm Cơ Bản về Kiểm Thử**

**1. Overview / Tổng quan**

This chapter establishes the foundation for the ISTQB® Foundation Level certification. It defines what testing is, why it is necessary, the seven universal principles of testing, the test process (activities and testware), traceability, roles, and essential skills. Mastering this chapter is essential because it underpins every subsequent topic in the syllabus.

Chương này thiết lập nền tảng cho chứng chỉ ISTQB® Foundation Level. Nội dung định nghĩa kiểm thử là gì, tại sao cần kiểm thử, bảy nguyên tắc kiểm thử phổ quát, quy trình kiểm thử (các hoạt động và tài liệu kiểm thử), truy xuất nguồn gốc, vai trò và các kỹ năng thiết yếu. Nắm vững chương này là bắt buộc vì nó là cơ sở cho mọi chủ đề tiếp theo trong giáo trình.

**Syllabus Alignment:** FL-BO1, FL-BO2, FL-BO12\
**Training Time:** 180 minutes

**2. Core Concepts / Các Khái niệm Cốt lõi**

**2.1 What is Testing? / Kiểm thử là gì?**

- **Definition:** Testing is a set of activities to discover defects and evaluate the quality of software work products. These work products, when being tested, are known as **test objects**.

- **Scope:** It includes both **dynamic testing** (executing software) and **static testing** (reviews and static analysis without execution).

- **Verification vs Validation:**

  - **Verification** checks whether the system meets **specified requirements** (\"Are we building the product right?\").

  - **Validation** checks whether the system meets **users\' and stakeholders\' needs** in its operational environment (\"Are we building the right product?\").

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

  - **Xác minh (Verification)** kiểm tra xem hệ thống có đáp ứng **yêu cầu đã đặc tả** không (\"Chúng ta có đang xây dựng đúng sản phẩm không?\").

  - **Xác thực (Validation)** kiểm tra xem hệ thống có đáp ứng **nhu cầu của người dùng và bên liên quan** trong môi trường vận hành không (\"Chúng ta có đang xây dựng sản phẩm đúng không?\").

- **Nhận thức sai lầm phổ biến:**

  - Kiểm thử chỉ là chạy kiểm thử. *(Sai: còn bao gồm lập kế hoạch, phân tích, thiết kế, giám sát\...)*

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

**Real-world Example:** A QA team for an e-commerce app not only checks that the \"Add to Cart\" button functions per the spec (verification) but also validates whether the checkout flow feels intuitive and secure for real shoppers (validation). **Ví dụ thực tế:** Nhóm QA cho ứng dụng thương mại điện tử không chỉ kiểm tra nút \"Thêm vào giỏ hàng\" hoạt động đúng theo đặc tả (xác minh) mà còn xác thực xem luồng thanh toán có trực quan và an toàn cho người mua hàng thực tế không (xác thực).

**2.2 Testing and Debugging / Kiểm thử và Gỡ lỗi**

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

**2.3 Why is Testing Necessary? / Tại sao cần Kiểm thử?**

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

  --------------------------------------------------------------------------------------------------------------------------------------------------------
  **Aspect / Khía cạnh**         **Testing (QC) / Kiểm thử (QC)**                **QA / Đảm bảo chất lượng**
  ------------------------------ ----------------------------------------------- -------------------------------------------------------------------------
  Orientation / Định hướng       Product-oriented / Hướng đến sản phẩm           Process-oriented / Hướng đến quy trình

  Approach / Phương pháp         Corrective / Khắc phục                          Preventive / Phòng ngừa

  Focus / Tập trung              Achieving quality levels / Đạt mức chất lượng   Implementing and improving processes / Triển khai và cải tiến quy trình

  Responsibility / Trách nhiệm   Test team / Nhóm kiểm thử                       Everyone / Mọi người
  --------------------------------------------------------------------------------------------------------------------------------------------------------

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

**2.4 Seven Principles of Testing / Bảy Nguyên tắc Kiểm thử**

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

12. **Các ca kiểm thử bị \"mòn\".** Kiểm thử lặp lại giảm hiệu quả tìm khiếm khuyết mới; cần sửa đổi ca kiểm thử hoặc viết ca mới. *(Ngoại lệ: kiểm thử hồi quy tự động được hưởng lợi từ việc lặp lại.)*

13. **Kiểm thử phụ thuộc ngữ cảnh.** Không có cách tiếp cận tốt nhất duy nhất; phần mềm an toàn chức năng được kiểm thử khác với website tiếp thị.

14. **Ảo tưởng về sự vắng mặt khiếm khuyết.** Xác minh kỹ lưỡng yêu cầu và sửa khiếm khuyết không đảm bảo thành công nếu hệ thống không đáp ứng nhu cầu thực của người dùng.

**2.5 Test Activities and Testware / Các Hoạt động Kiểm thử và Tài liệu Kiểm thử**

The test process consists of seven main activities, often implemented iteratively or in parallel.

Quy trình kiểm thử gồm bảy hoạt động chính, thường được thực hiện lặp hoặc song song.

**Table**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Activity / Hoạt động**                                **Description / Mô tả**                                                                                                                                                                                                                                                                        **Question / Câu hỏi**
  ------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------
  **Test Planning** / Lập kế hoạch                        Define test objectives and select an approach within constraints. / Xác định mục tiêu và chọn phương pháp trong các ràng buộc.                                                                                                                                                                 \"What is the goal?\" / \"Mục tiêu là gì?\"

  **Test Monitoring & Control** / Giám sát & Điều khiển   Check actual progress against the plan; take corrective actions. / Kiểm tra tiến độ thực tế so với kế hoạch; thực hiện hành động khắc phục.                                                                                                                                                    \"Are we on track?\" / \"Chúng ta có đúng lộ trình không?\"

  **Test Analysis** / Phân tích                           Analyze the test basis; identify testable features; define and prioritize test conditions; assess testability. / Phân tích cơ sở kiểm thử; xác định đặc điểm có thể kiểm thử; xác định và ưu tiên điều kiện kiểm thử; đánh giá khả năng kiểm thử.                                              **\"What to test?\"** / **\"Kiểm thử cái gì?\"**

  **Test Design** / Thiết kế                              Elaborate test conditions into test cases/charters; identify coverage items; define test data and environment requirements. / Chi tiết hóa điều kiện thành ca kiểm thử/charter; xác định mục bao phủ; xác định yêu cầu dữ liệu và môi trường.                                                  **\"How to test?\"** / **\"Kiểm thử như thế nào?\"**

  **Test Implementation** / Triển khai                    Create/acquire testware; organize into procedures/suites; create scripts; build and verify environment; schedule execution. / Tạo/thu thập tài liệu kiểm thử; tổ chức thành thủ tục/bộ kiểm thử; tạo kịch bản; xây dựng và xác minh môi trường; lập lịch thực thi.                             \"Is everything ready?\" / \"Mọi thứ đã sẵn sàng chưa?\"

  **Test Execution** / Thực thi                           Run tests; compare actual vs expected results; log results; analyze anomalies. / Chạy kiểm thử; so sánh kết quả thực tế và mong đợi; ghi nhận kết quả; phân tích bất thường.                                                                                                                   \"What happened?\" / \"Chuyện gì đã xảy ra?\"

  **Test Completion** / Kết thúc                          At milestones, create change requests for unresolved defects, archive testware, document lessons learned, produce completion report. / Tại các cột mốc, tạo yêu cầu thay đổi cho khiếm khuyết chưa giải quyết, lưu trữ tài liệu kiểm thử, ghi lại bài học kinh nghiệm, lập báo cáo kết thúc.   \"What did we learn?\" / \"Chúng ta đã học được gì?\"
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

**2.6 Context, Traceability, and Roles / Ngữ cảnh, Truy xuất nguồn gốc và Vai trò**

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

**2.7 Essential Skills and Good Practices / Kỹ năng Thiết yếu và Thực tiễn Tốt**

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

  ---------------------------------------------------------------------------------------------------------------------------
  **Level / Mức độ**    **Description / Mô tả**
  --------------------- -----------------------------------------------------------------------------------------------------
  None / Không          Author tests own work / Tác giả tự kiểm thử sản phẩm của mình

  Some / Một phần       Peers from the same team / Đồng nghiệp trong cùng nhóm

  High / Cao            Testers outside the team but within the organization / Kiểm thử viên ngoài nhóm nhưng trong tổ chức

  Very High / Rất cao   Testers from outside the organization / Kiểm thử viên từ bên ngoài tổ chức
  ---------------------------------------------------------------------------------------------------------------------------

- **Best Practice:** Use multiple levels. Developers perform component testing; the test team performs system testing; business reps perform acceptance testing.

- **Benefits:** Independent testers recognize different failures due to different backgrounds and biases; they can challenge stakeholder assumptions.

- **Drawbacks:** Isolation from the dev team; communication problems; adversarial relationships; developers may lose sense of quality responsibility; testers may be seen as bottlenecks.

- **Thực tiễn tốt nhất:** Sử dụng đa cấp độ. Lập trình viên thực hiện kiểm thử thành phần; nhóm kiểm thử thực hiện kiểm thử hệ thống; đại diện doanh nghiệp thực hiện kiểm thử chấp nhận.

- **Lợi ích:** Kiểm thử viên độc lập nhận ra các thất bại khác do nền tảng và thiên kiến khác nhau; họ có thể thách thức giả định của bên liên quan.

- **Bất lợi:** Cô lập khỏi nhóm phát triển; vấn đề giao tiếp; quan hệ đối đầu; lập trình viên có thể mất ý thức trách nhiệm về chất lượng; kiểm thử viên bị coi là điểm nghẽn.

**3. Key Terminology / Thuật ngữ Quan trọng**

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

- **Validation / Xác thực:** Checking whether the system meets users\' and stakeholders\' needs in its operational environment.

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

**4. Deep Understanding / Hiểu Sâu**

**Why These Concepts Matter / Tại sao các khái niệm này quan trọng**

- **Early Testing Reduces Cost:** A defect found in requirements costs \~100x less to fix than one found in production. Static testing (reviews) and dynamic testing started early prevent expensive rework.

- **Traceability is a Project Lifesaver:** When a critical business requirement changes, traceability allows you to instantly identify which test cases to update, which results are affected, and what risks remain.

- **Independence is a Double-Edged Sword:** Complete independence finds different defects but creates silos. The syllabus explicitly recommends a **balanced, multi-level approach** rather than maximum independence.

- **Kiểm thử sớm giảm chi phí:** Khiếm khuyết phát hiện trong giai đoạn yêu cầu có chi phí sửa chữa thấp hơn khoảng 100 lần so với khiếm khuyết phát hiện trong môi trường sản xuất. Kiểm thử tĩnh (đánh giá) và kiểm thử động bắt đầu sớm ngăn ngừa làm lại tốn kém.

- **Truy xuất nguồn gốc là cứu cánh cho dự án:** Khi yêu cầu nghiệp vụ quan trọng thay đổi, truy xuất nguồn gốc cho phép bạn xác định ngay ca kiểm thử nào cần cập nhật, kết quả nào bị ảnh hưởng và rủi ro nào còn lại.

- **Tính độc lập là con dao hai lưỡi:** Độc lập hoàn toàn tìm ra khiếm khuyết khác nhưng tạo ra các \"silos\". Giáo trình khuyến nghị rõ ràng **phương pháp cân bằng, đa cấp độ** thay vì độc lập tối đa.

**Critical Comparisons / So sánh Quan trọng**

**Table**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Comparison / So sánh**                                   **Key Difference / Điểm khác biệt chính**
  ---------------------------------------------------------- -------------------------------------------------------------------------------------------------
  **Verification vs Validation** / Xác minh vs Xác thực      Specified requirements vs Operational user needs / Yêu cầu đặc tả vs Nhu cầu người dùng thực tế

  **Testing vs QA** / Kiểm thử vs QA                         Product-oriented (QC) vs Process-oriented / Hướng sản phẩm (QC) vs Hướng quy trình

  **Error vs Defect** / Lỗi vs Khiếm khuyết                  Human mistake vs Work product imperfection / Sai sót con người vs Khuyết điểm sản phẩm làm việc

  **Test Analysis vs Test Design** / Phân tích vs Thiết kế   \"What to test\" vs \"How to test\" / \"Kiểm thử cái gì\" vs \"Kiểm thử như thế nào\"
  ------------------------------------------------------------------------------------------------------------------------------------------------------------

**Common Mistakes / Sai lầm Thường gặp**

1.  **\"No bugs found = perfect software\"** --- Violates Principle 1. Testing shows presence, not absence.

2.  **\"Testing is just execution\"** --- Ignores planning, analysis, design, and completion.

3.  **\"Testing = QA\"** --- Testing is QC (product); QA is process.

4.  **\"Maximum independence is best\"** --- Ignores communication gaps and adversarial risks.

5.  **\"Developers should not test\"** --- Contradicts the whole team approach and multi-level independence best practice.

6.  **\"Không tìm thấy bug = phần mềm hoàn hảo\"** --- Vi phạm Nguyên tắc 1. Kiểm thử chỉ cho thấy sự hiện diện, không phải sự vắng mặt.

7.  **\"Kiểm thử chỉ là thực thi\"** --- Bỏ qua lập kế hoạch, phân tích, thiết kế và kết thúc.

8.  **\"Kiểm thử = QA\"** --- Kiểm thử là QC (sản phẩm); QA là quy trình.

9.  **\"Độc lập tối đa là tốt nhất\"** --- Bỏ qua khoảng cách giao tiếp và rủi ro đối đầu.

10. **\"Lập trình viên không nên kiểm thử\"** --- Mâu thuẫn với phương pháp toàn đội và thực tiễn độc lập đa cấp độ.

**5. Practice Questions / Câu hỏi Luyện tập**

**Question 1 / Câu hỏi 1** Which of the following is a typical test objective? a) To prove the absence of defects b) To cause failures and find defects c) To replace quality assurance d) To perform debugging

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** \"Causing failures and finding defects\" is explicitly listed as a typical test objective in the syllabus.

- **a) Incorrect / Sai:** Testing shows the presence, not the absence of defects (Principle 1).

- **c) Incorrect / Sai:** Testing does not replace QA; testing is a form of QC, while QA is process-oriented.

- **d) Incorrect / Sai:** Debugging is a separate activity from testing.

**Question 2 / Câu hỏi 2** What is the main difference between testing and debugging? a) Testing finds the root cause; debugging removes defects b) Testing triggers failures and finds defects; debugging diagnoses and fixes defects c) Testing is performed by developers; debugging by testers d) They are the same activity with different names

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Testing discovers defects (often by triggering failures), while debugging is the process of reproducing, diagnosing, and fixing the underlying defect.

- **a) Incorrect / Sai:** Root cause analysis is part of debugging, not testing.

- **c) Incorrect / Sai:** Both activities can involve testers and developers; role is not the differentiator.

- **d) Incorrect / Sai:** They are explicitly defined as separate activities in the syllabus.

**Question 3 / Câu hỏi 3** Which sequence correctly describes the chain from human mistake to system malfunction? a) Defect → Error → Failure b) Error → Defect → Failure c) Failure → Defect → Error d) Error → Failure → Defect

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Humans make **errors** (mistakes), which create **defects** (faults in work products), which may cause **failures** when executed.

- The other options reverse the causal chain.

**Question 4 / Câu hỏi 4** Which principle states that testing everything is not feasible except in trivial cases? a) Early testing saves time and money b) Defects cluster together c) Exhaustive testing is impossible d) Tests wear out

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Principle 2 explicitly states that exhaustive testing is impossible except in trivial cases.

- **a) Incorrect / Sai:** This is Principle 3, about cost of quality.

- **b) Incorrect / Sai:** This is Principle 4, about the Pareto distribution of defects.

- **d) Incorrect / Sai:** This is Principle 5, about the decreasing effectiveness of repeated tests.

**Question 5 / Câu hỏi 5** Which test activity answers the question \"How to test?\" a) Test Analysis b) Test Design c) Test Implementation d) Test Execution

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Test design elaborates test conditions into test cases and defines how to test.

- **a) Incorrect / Sai:** Test analysis answers \"What to test?\"

- **c) Incorrect / Sai:** Implementation prepares the testware and environment for execution.

- **d) Incorrect / Sai:** Execution runs the tests and compares results.

**Question 6 / Câu hỏi 6** What is a key benefit of maintaining traceability between the test basis and testware? a) It eliminates the need for regression testing b) It helps evaluate coverage and assess the impact of changes c) It replaces the test plan d) It guarantees the absence of defects

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Traceability supports coverage evaluation and impact analysis, as stated in the syllabus.

- **a) Incorrect / Sai:** Traceability does not eliminate regression testing.

- **c) Incorrect / Sai:** Traceability complements but does not replace a test plan.

- **d) Incorrect / Sai:** No activity can guarantee the absence of defects (Principle 1).

**Question 7 / Câu hỏi 7** Which of the following is a drawback of high independence in testing? a) Testers may verify assumptions made by stakeholders b) Testers may be isolated from the development team c) Testers find fewer defects than developers d) Testers improve team dynamics

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Isolation from the development team is an explicitly listed drawback of independence.

- **a) Incorrect / Sai:** Verifying assumptions is a benefit, not a drawback.

- **c) Incorrect / Sai:** Independent testers typically find different defects, not necessarily fewer.

- **d) Incorrect / Sai:** Isolation can harm, not improve, team dynamics.

**Question 8 / Câu hỏi 8** The whole team approach is a practice originating from: a) Scrum b) Extreme Programming (XP) c) Waterfall d) V-Model

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly states the whole team approach comes from Extreme Programming (XP).

- **a/c/d) Incorrect / Sai:** While Scrum uses cross-functional teams, the \"whole team approach\" as a specific practice originates from XP.

**6. Exam Tips & Common Traps / Mẹo Thi & Bẫy Thường gặp**

**Top 5 Exam Traps / 5 Bẫy Thi Hàng đầu**

1.  **\"Testing proves no bugs exist\"** --- This is false. Remember Principle 1: presence, not absence.

2.  **\"Testing = QA\"** --- The exam tests the distinction between testing (QC, product-oriented) and QA (process-oriented).

3.  **Error vs Defect** --- An **error** is a human mistake; a **defect** is the resulting flaw. Examiners frequently swap these in distractors.

4.  **Test Analysis vs Test Design** --- Analysis = **What** to test; Design = **How** to test. Do not mix these up.

5.  **\"More independence is always better\"** --- The syllabus lists clear drawbacks (isolation, bottlenecks). The best answer is usually \"multiple levels of independence.\"

6.  **\"Kiểm thử chứng minh không có bug\"** --- Sai. Nhớ Nguyên tắc 1: hiện diện, không phải vắng mặt.

7.  **\"Kiểm thử = QA\"** --- Đề thi thường kiểm tra sự phân biệt giữa kiểm thử (QC, hướng sản phẩm) và QA (hướng quy trình).

8.  **Lỗi vs Khiếm khuyết** --- **Lỗi** là sai sót con người; **khiếm khuyết** là khuyết điểm phát sinh. Giám khảo thường hoán đổi hai khái niệm này trong các phương án nhiễu.

9.  **Phân tích vs Thiết kế kiểm thử** --- Phân tích = kiểm thử **cái gì**; Thiết kế = kiểm thử **như thế nào**. Đừng nhầm lẫn.

10. **\"Độc lập nhiều hơn luôn tốt hơn\"** --- Giáo trình liệt kê rõ bất lợi (cô lập, điểm nghẽn). Đáp án đúng thường là \"đa cấp độ độc lập.\"

**Quick Memorization Tips / Mẹo ghi nhớ nhanh**

- **7 Principles:** Remember the keywords: Presence, Exhaustive, Early, Cluster, Wear out, Context, Fallacy.

- **Test Activities:** Plan → Monitor → **Analysis** (What) → **Design** (How) → Implement → Execute → Complete.

- **Independence Levels:** Author → Peers → External Team → External Org.

- **7 Nguyên tắc:** Nhớ từ khóa: Hiện diện, Toàn diện, Sớm, Tập trung, Mòn, Ngữ cảnh, Ảo tưởng.

- **Hoạt động kiểm thử:** Lập kế hoạch → Giám sát → **Phân tích** (Cái gì) → **Thiết kế** (Như thế nào) → Triển khai → Thực thi → Kết thúc.

- **Các cấp độ độc lập:** Tác giả → Đồng nghiệp → Nhóm ngoài → Tổ chức ngoài.

**7. Chapter Summary / Tóm tắt Chương**

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

**8. Quick Review / Ôn tập Nhanh**

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

- \"What to test?\" → Test Analysis / Phân tích kiểm thử

- \"How to test?\" → Test Design / Thiết kế kiểm thử

- \"Who is responsible for quality?\" → Everyone / Mọi người (Whole Team Approach)

- \"Best independence strategy?\" → Multiple levels / Đa cấp độ

- \"Can testing prove correctness?\" → No / Không (Principle 1)

**Chapter 2: Testing Throughout the Software Development Lifecycle**

**Chương 2: Kiểm thử trong suốt Vòng đời Phát triển Phần mềm**

**1. Overview / Tổng quan**

This chapter explains how testing fits into different software development lifecycles (SDLCs). It covers the impact of SDLC choices on testing, good testing practices applicable to all models, test-first approaches, DevOps, shift left, retrospectives, test levels, test types, and maintenance testing. Understanding these relationships is critical for aligning test activities with development contexts.

Chương này giải thích cách kiểm thử phù hợp với các vòng đời phát triển phần mềm (SDLC) khác nhau. Nội dung bao gồm tác động của lựa chọn SDLC đến kiểm thử, các thực tiễn kiểm thử tốt áp dụng cho mọi mô hình, các phương pháp kiểm thử trước, DevOps, dịch chuyển sang trái, họp rút kinh nghiệm, các mức độ kiểm thử, loại kiểm thử và kiểm thử bảo trì. Hiểu rõ các mối quan hệ này là then chốt để điều chỉnh hoạt động kiểm thử phù hợp với ngữ cảnh phát triển.

**Syllabus Alignment:** FL-BO6\
**Training Time:** 130 minutes

**2. Core Concepts / Các Khái niệm Cốt lõi**

**2.1 SDLC Models and Their Impact on Testing / Các mô hình SDLC và Tác động đến Kiểm thử**

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

**2.2 Testing as a Driver for Development / Kiểm thử là Động lực cho Phát triển**

**Table**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Approach / Phương pháp**   **Mechanism / Cơ chế**                                                                                                        **Key Trait / Đặc điểm chính**
  ---------------------------- ----------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  **TDD**                      Write tests first, then code to satisfy them, then refactor / Viết kiểm thử trước, sau đó code để đáp ứng, rồi tái cấu trúc   Directs coding through test cases / Điều hướng coding qua ca kiểm thử

  **ATDD**                     Derive tests from acceptance criteria before development / Suy ra kiểm thử từ tiêu chí chấp nhận trước phát triển             Part of system design / Là một phần thiết kế hệ thống

  **BDD**                      Express behavior in natural language (Given/When/Then) / Diễn đạt hành vi bằng ngôn ngữ tự nhiên                              Stakeholder-readable; should auto-translate to executable tests / Dễ đọc cho bên liên quan; nên tự động chuyển thành kiểm thử thực thi được
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

All three support iterative development and shift left. Tests may persist as automated regression tests.

**2.3 DevOps and Shift Left / DevOps và Dịch chuyển Sang Trái**

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

- Practices: reviewing specifications from a tester\'s perspective; writing test cases before code; using CI/CD; static analysis before dynamic testing; non-functional testing at component level where possible.

- Requires stakeholder buy-in; may increase early costs but reduces later costs.

**2.4 Retrospectives / Họp Rút kinh nghiệm**

Held at project/iteration/release milestones. Participants discuss:

- What was successful and should be retained? / Điều gì thành công và nên giữ lại?

- What was not successful and could be improved? / Điều gì không thành công và có thể cải thiện?

- How to incorporate improvements? / Làm thế nào để áp dụng cải tiến?

Results feed into the test completion report. Benefits: increased effectiveness/efficiency, better testware quality, team bonding, improved test basis, better cooperation.

**2.5 Test Levels / Các Mức độ Kiểm thử**

**Table**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Level / Mức độ**                                                 **Focus / Tập trung**                                                                                                      **Typical Performer / Người thực hiện**
  ------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------
  **Component Testing** / Kiểm thử Thành phần                        Components in isolation; requires harnesses/frameworks / Thành phần độc lập; cần khung/harness                             Developers / Lập trình viên

  **Component Integration Testing** / Kiểm thử Tích hợp Thành phần   Interfaces and interactions between components / Giao diện và tương tác giữa các thành phần                                Developers / Lập trình viên

  **System Testing** / Kiểm thử Hệ thống                             Overall behavior of entire system; functional and non-functional / Hành vi tổng thể hệ thống; chức năng và phi chức năng   Independent test team / Nhóm kiểm thử độc lập

  **System Integration Testing** / Kiểm thử Tích hợp Hệ thống        Interfaces with other systems and external services / Giao diện với hệ thống khác và dịch vụ bên ngoài                     Independent test team / Nhóm kiểm thử độc lập

  **Acceptance Testing** / Kiểm thử Chấp nhận                        Validation and readiness for deployment; business needs / Xác thực và sẵn sàng triển khai; nhu cầu kinh doanh              Intended users / Người dùng dự kiến
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Forms of Acceptance Testing / Các hình thức Kiểm thử Chấp nhận:** User acceptance (UAT), operational acceptance, contractual acceptance, regulatory acceptance, alpha testing, beta testing.

**Distinguishing Attributes / Các thuộc tính phân biệt:** Test object, objectives, test basis, defects/failures, approach, and responsibilities.

**2.6 Test Types / Các Loại Kiểm thử**

- **Functional Testing / Kiểm thử Chức năng:** Evaluates \"what\" the system should do. Objectives: functional completeness, correctness, appropriateness.

- **Non-functional Testing / Kiểm thử Phi chức năng:** Evaluates \"how well\" the system behaves. Based on ISO 25010: performance efficiency, compatibility, usability (interaction capability), reliability, security, maintainability, portability (flexibility), safety. Should start early where possible.

- **Black-box Testing / Kiểm thử Hộp đen:** Specification-based; derives tests from documentation unrelated to internal structure.

- **White-box Testing / Kiểm thử Hộp trắng:** Structure-based; derives tests from internal structure (code, architecture, flows).

All four test types can be applied at all test levels, though focus differs.

**2.7 Confirmation and Regression Testing / Kiểm thử Xác nhận và Hồi quy**

- **Confirmation Testing / Kiểm thử Xác nhận:** Confirms an original defect has been fixed. Execute previously failed tests or add new tests covering the fix.

- **Regression Testing / Kiểm thử Hồi quy:** Confirms no adverse consequences were caused by a change (including fixes). Checks same component, other components, or connected systems. Impact analysis identifies scope. Strong candidate for automation.

Both are needed at all test levels when defects are fixed or changes are made.

**2.8 Maintenance Testing / Kiểm thử Bảo trì**

Triggered by:

- **Modifications / Sửa đổi:** Planned enhancements, corrective changes, hot fixes.

- **Upgrades/Migrations / Nâng cấp/Chuyển đổi:** New platforms, operational environment changes, data conversion.

- **Retirement / Ngừng sử dụng:** Data archiving, restore/retrieval procedures.

Scope depends on risk of change, size of existing system, and size of change. Includes evaluating the change implementation and checking for regressions in unchanged parts.

**3. Key Terminology / Thuật ngữ Quan trọng**

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

**4. Deep Understanding / Hiểu Sâu**

**TDD vs ATDD vs BDD**

- **TDD** is developer-focused, driving unit-level code design.

- **ATDD** involves the whole team deriving acceptance tests from criteria before coding.

- **BDD** uses natural language to express behavior for stakeholder understanding; often becomes the automated acceptance test.

**Why Shift Left is Not \"Only Left\"** Shift left means testing earlier, not eliminating later testing. System-level and end-to-end testing still occur. The goal is to find defects when they are cheapest to fix.

**Test Levels in Agile vs Waterfall**

- In Waterfall, levels are sequential: exit criteria of one level feed into entry criteria of the next.

- In Agile, levels may overlap within iterations; component and integration tests are automated and run continuously, while system and acceptance tests may occur at feature completion.

**Common Mistake:** Confusing test levels with test types. Levels are *when* (phase); types are *what* (quality characteristic).

**5. Practice Questions / Câu hỏi Luyện tập**

**Question 1 / Câu hỏi 1** Which of the following is a good testing practice that applies to all SDLCs? a) Test documentation must be exhaustive regardless of the SDLC b) Test analysis for a given test level should begin during the corresponding development phase c) Only one test level should be used to avoid redundancy d) Dynamic testing should only begin after system deployment

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly states this as a universal good practice supporting early testing.

- **a) Incorrect / Sai:** Agile favors lightweight documentation.

- **c) Incorrect / Sai:** Multiple test levels with different objectives avoid redundancy while ensuring comprehensiveness.

- **d) Incorrect / Sai:** Dynamic testing begins when executable code is available, not after deployment.

**Question 2 / Câu hỏi 2** In Behavior-Driven Development (BDD), test cases are typically written in: a) Machine code b) SQL queries c) A simple form of natural language (Given/When/Then) d) UML diagrams only

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** BDD uses natural language (Given/When/Then) to express desired behavior.

- The other options are not characteristic of BDD.

**Question 3 / Câu hỏi 3** Which test level focuses on testing the interfaces between components? a) Component testing b) Component integration testing c) System testing d) Acceptance testing

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Component integration testing explicitly focuses on interfaces and interactions between components.

- **a) Incorrect / Sai:** Component testing focuses on components in isolation.

- **c) Incorrect / Sai:** System testing focuses on the entire system.

- **d) Incorrect / Sai:** Acceptance testing focuses on business readiness.

**Question 4 / Câu hỏi 4** Which of the following is a non-functional quality characteristic according to ISO 25010? a) Functional completeness b) Functional correctness c) Performance efficiency d) Functional appropriateness

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Performance efficiency is explicitly listed as a non-functional quality characteristic.

- **a, b, d) Incorrect / Sai:** These are functional testing objectives.

**Question 5 / Câu hỏi 5** What is the primary purpose of regression testing? a) To confirm that a defect has been fixed b) To check for adverse consequences caused by a change c) To evaluate work products before execution d) To perform static analysis on source code

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Regression testing confirms no adverse consequences in unchanged or related areas after a change.

- **a) Incorrect / Sai:** That is confirmation testing.

- **c/d) Incorrect / Sai:** These describe static testing activities.

**Question 6 / Câu hỏi 6** Which of the following best describes \"shift left\"? a) Eliminating all testing activities after code implementation b) Moving testing activities to earlier phases of the SDLC c) Transferring testers to the left side of the office d) Using only manual testing in early phases

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Shift left means testing earlier in the SDLC, not removing later testing.

- **a) Incorrect / Sai:** Later testing is not eliminated.

- **c) Incorrect / Sai:** This is a literal misinterpretation.

- **d) Incorrect / Sai:** Shift left includes automated static analysis and component tests.

**Question 7 / Câu hỏi 7** Which test level is ideally performed by the intended users? a) System testing b) Component testing c) Acceptance testing d) Component integration testing

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Acceptance testing ideally involves the intended users to validate business needs.

- The other levels are typically performed by developers or independent test teams.

**Question 8 / Câu hỏi 8** Which of the following is a trigger for maintenance testing? a) Initial development of a new system b) Retirement of an application c) Writing the first user story d) Creating the project charter

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Retirement is explicitly listed as a trigger for maintenance testing (archiving, retrieval procedures).

- **a/c/d) Incorrect / Sai:** These are new project activities, not maintenance triggers.

**6. Exam Tips & Common Traps / Mẹo Thi & Bẫy Thường gặp**

1.  **\"Shift left eliminates late testing\"** --- False. It adds early testing; late testing remains.

2.  **\"TDD, ATDD, and BDD are the same\"** --- They are similar but distinct. TDD = unit/code focus; ATDD = acceptance criteria focus; BDD = natural language behavior focus.

3.  **\"Confirmation = Regression\"** --- Confirmation checks the fix; regression checks for side effects.

4.  **\"Component integration testing is done by testers\"** --- Usually performed by developers.

5.  **\"Non-functional testing always happens late\"** --- The syllabus states it should start early where possible (e.g., component level).

**7. Chapter Summary / Tóm tắt Chương**

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

**8. Quick Review / Ôn tập Nhanh**

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

**Chapter 3: Static Testing**

**Chương 3: Kiểm thử Tĩnh**

**1. Overview / Tổng quan**

Static testing evaluates work products without executing the software. It includes manual reviews and tool-supported static analysis. This chapter covers the types of work products that can be examined, the value of static testing, differences from dynamic testing, the review process, review roles, review types, and success factors.

Kiểm thử tĩnh đánh giá sản phẩm làm việc mà không thực thi phần mềm. Nó bao gồm đánh giá thủ công và phân tích tĩnh được hỗ trợ bởi công cụ. Chương này bao gồm các loại sản phẩm làm việc có thể được kiểm tra, giá trị của kiểm thử tĩnh, sự khác biệt với kiểm thử động, quy trình đánh giá, vai trò, loại đánh giá và các yếu tố thành công.

**Syllabus Alignment:** FL-BO4\
**Training Time:** 80 minutes

**2. Core Concepts / Các Khái niệm Cốt lõi**

**2.1 Static Testing Basics / Cơ bản về Kiểm thử Tĩnh**

- **Definition / Định nghĩa:** Evaluation of work products without execution. Objectives: improve quality, detect defects, assess readability, completeness, correctness, testability, consistency.

- **Methods / Phương pháp:**

  - **Manual examination / Đánh giá thủ công:** Reviews (informal to formal).

  - **Tool-supported / Hỗ trợ bởi công cụ:** Static analysis (code analysis, spelling checkers, readability tools).

- **Applicability / Phạm vi áp dụng:** Almost any work product can be reviewed. Static analysis requires structured work products (code, models, formal text). Not appropriate for 3rd party executable code (legal restrictions).

- **Work Products Examinable / Sản phẩm có thể Kiểm tra:** Requirement specs, source code, test plans, test cases, product backlog items, test charters, project documentation, contracts, models.

**2.2 Value of Static Testing / Giá trị của Kiểm thử Tĩnh**

- **Early Defect Detection:** Fulfills the principle of early testing. Defects found in requirements or design are far cheaper to fix than those found in code or production.

- **Defects Not Found by Dynamic Testing:** Unreachable code, design pattern violations, defects in non-executable work products (e.g., requirements inconsistencies).

- **Quality Evaluation and Confidence:** Stakeholders verify requirements match actual needs.

- **Shared Understanding:** Early involvement creates common understanding and improves communication.

- **Cost Efficiency:** Despite review costs, overall project costs are lower due to reduced late defect fixing.

- **Static Analysis Efficiency:** Certain code defects are found more efficiently than through dynamic testing.

**2.3 Static vs Dynamic Testing / Kiểm thử Tĩnh vs Động**

**Table**

  --------------------------------------------------------------------------------------------------------------------------------------------------------
  **Aspect / Khía cạnh**                                **Static Testing / Tĩnh**                                    **Dynamic Testing / Động**
  ----------------------------------------------------- ------------------------------------------------------------ -------------------------------------
  Execution / Thực thi                                  No / Không                                                   Yes / Có

  Defect detection / Phát hiện khiếm khuyết             Direct / Trực tiếp                                           Via failures / Qua thất bại

  Applicable work products / Sản phẩm áp dụng           Executable and non-executable / Thực thi và không thực thi   Executable only / Chỉ thực thi được

  Rarely executed paths / Đường dẫn hiếm khi thực thi   Easily detected / Dễ phát hiện                               May be missed / Có thể bỏ sót

  Quality characteristics / Đặc tính chất lượng         Maintainability, readability / Khả năng bảo trì, khả đọc     Performance efficiency / Hiệu suất
  --------------------------------------------------------------------------------------------------------------------------------------------------------

**Defects Easier to Find Statically / Khiếm khuyết Dễ tìm bằng Tĩnh:**

- Requirements defects (inconsistencies, ambiguities, omissions)

- Design defects (inefficient structures, poor modularization)

- Coding defects (undefined variables, unreachable code, excessive complexity)

- Deviations from standards

- Incorrect interface specifications

- Security vulnerabilities (e.g., buffer overflows)

- Gaps in test basis coverage

**2.4 Early and Frequent Feedback / Phản hồi Sớm và Thường xuyên**

- Prevents misunderstandings about requirements.

- Ensures changes are understood and implemented earlier.

- Helps the team focus on high-value features.

- Prevents costly rework, missed deadlines, and project failure.

**2.5 Review Process Activities / Các Hoạt động của Quy trình Đánh giá**

Defined in ISO/IEC 20246. May be invoked multiple times for large work products.

1.  **Planning / Lập kế hoạch:** Define scope, purpose, work product, quality characteristics, focus areas, exit criteria, standards, effort, and timeframes.

2.  **Review Initiation / Khởi động Đánh giá:** Ensure participants have access, understand roles, and have necessary materials.

3.  **Individual Review / Đánh giá Cá nhân:** Reviewers assess quality, identify anomalies, recommendations, and questions using techniques (checklists, scenarios). Log all findings.

4.  **Communication and Analysis / Giao tiếp và Phân tích:** Analyze anomalies (not all are defects). Decide status, ownership, actions. Typically in a review meeting. Decide quality level and follow-up actions.

5.  **Fixing and Reporting / Sửa chữa và Báo cáo:** Create defect reports for defects. Once exit criteria are met, accept the work product. Record review results.

**2.6 Roles and Responsibilities / Vai trò và Trách nhiệm**

**Table**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Role / Vai trò**                             **Responsibility / Trách nhiệm**
  ---------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------
  **Manager** / Quản lý                          Decides what to review; provides resources / Quyết định đánh giá gì; cung cấp nguồn lực

  **Author** / Tác giả                           Creates and fixes the work product / Tạo và sửa sản phẩm làm việc

  **Moderator (Facilitator)** / Điều phối viên   Ensures effective meetings, mediation, time management, safe environment / Đảm bảo họp hiệu quả, hòa giải, quản lý thời gian, môi trường an toàn

  **Scribe (Recorder)** / Thư ký                 Collates anomalies; records decisions and new anomalies / Tập hợp bất thường; ghi nhận quyết định và bất thường mới

  **Reviewer** / Người đánh giá                  Performs reviews; may be project member, SME, or stakeholder / Thực hiện đánh giá; có thể là thành viên dự án, chuyên gia hoặc bên liên quan

  **Review Leader** / Trưởng nhóm Đánh giá       Overall responsibility; decides participants, timing, location / Trách nhiệm chung; quyết định người tham gia, thời gian, địa điểm
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2.7 Review Types / Các Loại Đánh giá**

**Table**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Type / Loại**                                   **Formality / Hình thức**   **Leader / Người dẫn dắt**                                     **Objectives / Mục tiêu**
  ------------------------------------------------- --------------------------- -------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Informal Review** / Đánh giá Không chính thức   None / Không                Anyone / Bất kỳ ai                                             Detect anomalies / Phát hiện bất thường

  **Walkthrough** / Duyệt qua                       Low / Thấp                  Author / Tác giả                                               Evaluate quality, educate, gain consensus, detect anomalies / Đánh giá chất lượng, đào tạo, đạt đồng thuận, phát hiện bất thường

  **Technical Review** / Đánh giá Kỹ thuật          Medium / Trung bình         Moderator / Điều phối viên                                     Gain consensus, make technical decisions, detect anomalies, evaluate quality / Đạt đồng thuận, ra quyết định kỹ thuật, phát hiện bất thường, đánh giá chất lượng

  **Inspection** / Thanh tra                        High / Cao                  Moderator (not author) / Điều phối viên (không phải tác giả)   Maximum anomaly detection, metrics collection, process improvement / Phát hiện bất thường tối đa, thu thập số liệu, cải tiến quy trình
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Note / Lưu ý:** In inspections, the author **cannot** act as the review leader or moderator. Metrics are collected to improve the SDLC.

**2.8 Success Factors for Reviews / Các Yếu tố Thành công cho Đánh giá**

- Clear objectives and measurable exit criteria (never evaluate participants).

- Appropriate review type for the work product and context.

- Small chunks to maintain concentration.

- Feedback to authors and stakeholders.

- Adequate preparation time.

- Management support.

- Reviews embedded in organizational culture.

- Adequate training for participants.

- Effective meeting facilitation.

**3. Key Terminology / Thuật ngữ Quan trọng**

- **Static Testing / Kiểm thử Tĩnh:** Testing without executing the software.

  - **Kiểm thử Tĩnh:** Kiểm thử không thực thi phần mềm.

- **Dynamic Testing / Kiểm thử Động:** Testing that involves executing the software.

  - **Kiểm thử Động:** Kiểm thử có thực thi phần mềm.

- **Review / Đánh giá:** A static testing technique where work products are examined by people.

  - **Đánh giá:** Kỹ thuật kiểm thử tĩnh để con người kiểm tra sản phẩm làm việc.

- **Static Analysis / Phân tích Tĩnh:** Tool-supported evaluation of work products.

  - **Phân tích Tĩnh:** Đánh giá sản phẩm làm việc được hỗ trợ bởi công cụ.

- **Anomaly / Bất thường:** Any condition that deviates from expectation. Not necessarily a defect.

  - **Bất thường:** Bất kỳ điều kiện nào lệch khỏi mong đợi. Chưa chắc là khiếm khuyết.

- **Inspection / Thanh tra:** The most formal review type with defined process and metrics collection.

  - **Thanh tra:** Loại đánh giá hình thức nhất với quy trình xác định và thu thập số liệu.

- **Walkthrough / Duyệt qua:** A review led by the author with multiple possible objectives.

  - **Duyệt qua:** Đánh giá do tác giả dẫn dắt với nhiều mục tiêu có thể.

- **Formal Review / Đánh giá Chính thức:** A review with a documented, defined process.

  - **Đánh giá Chính thức:** Đánh giá có quy trình xác định, được tài liệu hóa.

**4. Deep Understanding / Hiểu Sâu**

**Why Static Testing Saves Money** Finding a requirements inconsistency during a review costs minutes to fix. Finding it during system testing costs hours. Finding it in production costs days and damages reputation. Static testing is the highest-ROI testing activity.

**Informal vs Formal Reviews** The same work product can be reviewed informally first (to catch obvious issues cheaply) and then formally (for audit trails or critical components). The level of formality depends on SDLC, maturity, criticality, and regulatory needs.

**Common Mistake:** Assuming all anomalies found in reviews are defects. Anomalies include questions and recommendations; only some are actual defects.

**Inspection Rule:** The author cannot be the review leader or moderator. This ensures objectivity and prevents the author from controlling the meeting.

**5. Practice Questions / Câu hỏi Luyện tập**

**Question 1 / Câu hỏi 1** Which of the following is a typical defect easier to find through static testing than dynamic testing? a) Incorrect calculation result during execution b) Slow response time under load c) Unreachable code in the source d) Memory leak during runtime

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Unreachable code is explicitly listed as a defect detectable by static analysis but not by dynamic testing (since it never executes).

- **a/b/d) Incorrect / Sai:** These require execution and are found through dynamic testing.

**Question 2 / Câu hỏi 2** In the review process, during which activity are anomalies analyzed and their status decided? a) Planning b) Individual review c) Communication and analysis d) Fixing and reporting

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** The communication and analysis activity involves analyzing anomalies and deciding status, ownership, and actions.

- **a) Incorrect / Sai:** Planning defines scope, not anomaly status.

- **b) Incorrect / Sai:** Individual review identifies anomalies; analysis happens later.

- **d) Incorrect / Sai:** Fixing occurs after analysis and decision-making.

**Question 3 / Câu hỏi 3** Which role is responsible for ensuring effective running of review meetings? a) Author b) Manager c) Moderator d) Review leader

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** The moderator ensures effective meetings, mediation, time management, and a safe environment.

- **a) Incorrect / Sai:** The author creates/fixes the work product.

- **b) Incorrect / Sai:** The manager provides resources.

- **d) Incorrect / Sai:** The review leader organizes the review but the moderator runs the meeting.

**Question 4 / Câu hỏi 4** Which review type is the most formal and collects metrics to improve the SDLC? a) Informal review b) Walkthrough c) Technical review d) Inspection

**Correct Answer / Đáp án đúng: D**

**Explanation / Giải thích:**

- **d) Correct / Đúng:** Inspection is the most formal type and explicitly collects metrics for process improvement.

- **c) Incorrect / Sai:** Technical review is formal but does not emphasize metrics collection as its primary goal.

- **a/b) Incorrect / Sai:** These are less formal.

**Question 5 / Câu hỏi 5** Which of the following is a benefit of early and frequent stakeholder feedback? a) Eliminates the need for dynamic testing b) Prevents misunderstandings about requirements c) Removes all defects before coding begins d) Replaces the test plan

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Early feedback prevents misunderstandings and ensures changes are implemented correctly.

- **a/c) Incorrect / Sai:** Neither eliminates dynamic testing nor removes all defects.

- **d) Incorrect / Sai:** Feedback complements but does not replace planning.

**Question 6 / Câu hỏi 6** In an inspection, who should NOT act as the review leader or moderator? a) The manager b) The author c) A reviewer d) The scribe

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly states the author cannot act as review leader or moderator in inspections.

- The other roles may participate in these capacities.

**Question 7 / Câu hỏi 7** Static testing can be applied to which of the following work products? a) Compiled executable binaries from a third party b) Source code and requirement specifications c) Running production logs d) Dynamic memory allocations

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Source code and requirements are explicitly listed as examinable work products.

- **a) Incorrect / Sai:** 3rd party executable code is inappropriate due to legal restrictions.

- **c/d) Incorrect / Sai:** These relate to dynamic execution.

**Question 8 / Câu hỏi 8** Which success factor for reviews explicitly states that evaluation of participants should never be an objective? a) Choosing the appropriate review type b) Defining clear objectives and measurable exit criteria c) Providing adequate training d) Making reviews part of the culture

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly links \"evaluation of participants should never be an objective\" to defining clear objectives and exit criteria.

- The other options are valid success factors but do not carry this specific statement.

**6. Exam Tips & Common Traps / Mẹo Thi & Bẫy Thường gặp**

1.  **\"Static testing only finds documentation defects\"** --- False. It also finds code defects (unreachable code, complexity).

2.  **\"All anomalies = defects\"** --- False. Anomalies include questions and recommendations.

3.  **\"Author can lead an inspection\"** --- False. Never in inspections.

4.  **\"Walkthrough is the most formal review\"** --- False. Inspection is the most formal.

5.  **\"Static analysis requires execution\"** --- False. By definition, static testing does not execute software.

**7. Chapter Summary / Tóm tắt Chương**

- Static testing evaluates work products without execution: reviews (manual) and static analysis (tool-based).

- Applicable to requirements, code, test plans, charters, and almost any readable work product.

- Detects defects early, finds defects dynamic testing cannot, improves communication, and reduces overall cost.

- Static finds defects directly; dynamic finds them via failures. Static works on non-executable products; dynamic requires execution.

- The review process: Planning → Initiation → Individual Review → Communication/Analysis → Fixing/Reporting.

- Roles: Manager, Author, Moderator, Scribe, Reviewer, Review Leader.

- Review types (least to most formal): Informal → Walkthrough → Technical Review → Inspection.

- Inspection rules: Author cannot be leader/moderator; metrics are collected.

- Success factors: clear objectives, right type, small chunks, feedback, preparation time, management support, culture, training, facilitation.

**8. Quick Review / Ôn tập Nhanh**

**Static vs Dynamic / Tĩnh vs Động**

- Static: No execution, direct defect finding, non-executable products / Không thực thi, tìm khiếm khuyết trực tiếp, sản phẩm không thực thi

- Dynamic: Execution required, finds defects via failures, executable only / Cần thực thi, tìm khiếm khuyết qua thất bại, chỉ thực thi được

**Review Process / Quy trình Đánh giá**

1.  Planning / Lập kế hoạch

2.  Initiation / Khởi động

3.  Individual Review / Đánh giá Cá nhân

4.  Communication & Analysis / Giao tiếp & Phân tích

5.  Fixing & Reporting / Sửa & Báo cáo

**Review Types by Formality / Loại Đánh giá theo Hình thức**

1.  Informal / Không chính thức

2.  Walkthrough / Duyệt qua

3.  Technical Review / Đánh giá Kỹ thuật

4.  Inspection / Thanh tra (most formal / hình thức nhất)

**Inspection Rule / Quy tắc Thanh tra**

- Author ≠ Review Leader / Moderator / Tác giả không được làm Trưởng nhóm/Điều phối viên

**Chapter 4: Test Analysis and Design**

**Chương 4: Phân tích và Thiết kế Kiểm thử**

**1. Overview / Tổng quan**

This chapter covers the largest portion of the syllabus. It introduces test techniques (black-box, white-box, experience-based) and collaboration-based approaches. Candidates must be able to apply equivalence partitioning, boundary value analysis, decision table testing, state transition testing, and ATDD to derive test cases.

Chương này chiếm phần lớn nhất trong giáo trình. Nội dung giới thiệu các kỹ thuật kiểm thử (hộp đen, hộp trắng, dựa trên kinh nghiệm) và các phương pháp dựa trên cộng tác. Thí sinh phải có khả năng áp dụng phân vùng tương đương, phân tích giá trị biên, kiểm thử bảng quyết định, kiểm thử chuyển trạng thái và ATDD để suy ra ca kiểm thử.

**Syllabus Alignment:** FL-BO3, FL-BO5\
**Training Time:** 390 minutes

**2. Core Concepts / Các Khái niệm Cốt lõi**

**2.1 Test Techniques Overview / Tổng quan Kỹ thuật Kiểm thử**

- **Black-box / Hộp đen (Specification-based):** Based on specified behavior without reference to internal structure. Test cases remain valid if implementation changes but behavior does not.

- **White-box / Hộp trắng (Structure-based):** Based on internal structure (code, architecture). Test cases depend on design/implementation.

- **Experience-based / Dựa trên kinh nghiệm:** Uses tester knowledge and experience. Complements black-box and white-box techniques.

**2.2 Equivalence Partitioning (EP) / Phân vùng Tương đương**

Divides data into partitions where all elements are expected to be processed the same way. Partitions must not overlap and must be non-empty.

- **Valid Partition / Vùng hợp lệ:** Contains valid values.

- **Invalid Partition / Vùng không hợp lệ:** Contains invalid values.

- **Coverage / Độ bao phủ:** Number of partitions exercised / Total partitions × 100%.

- **Each Choice Coverage / Bao phủ Mỗi Lựa chọn:** For multiple input sets, exercise each partition from each set at least once. Does not cover combinations.

**Example / Ví dụ:** Input age 18-65 is valid. Partitions: \<18 (invalid), 18-65 (valid), \>65 (invalid). One test per partition.

**2.3 Boundary Value Analysis (BVA) / Phân tích Giá trị Biên**

Based on exercising boundaries of ordered equivalence partitions. Developers often make errors at boundaries.

- **2-value BVA / BVA 2 giá trị:** For each boundary, test the boundary value and its closest neighbor in the adjacent partition.

- **3-value BVA / BVA 3 giá trị:** For each boundary, test the boundary value and both neighbors (one inside, one outside the partition).

- **Coverage / Độ bao phủ:** Number of boundary values (and neighbors for 3-value) exercised / Total identified × 100%.

- **3-value is more rigorous / BVA 3 giá trị nghiêm ngặt hơn:** Can detect defects like if (x = 10) instead of if (x ≤ 10) by testing x=9.

**Example / Ví dụ:** Range 1-100. Boundary at 1 and 100.

- 2-value: 0, 1, 100, 101

- 3-value: 0, 1, 2, 99, 100, 101

**2.4 Decision Table Testing / Kiểm thử Bảng Quyết định**

Used for requirements specifying how combinations of conditions result in different outcomes.

- **Structure / Cấu trúc:** Conditions (rows) and Actions (rows). Columns = Decision Rules.

- **Notations / Ký hiệu:** T (true), F (false), -- (irrelevant), N/A (infeasible). For actions: X (occurs), blank (does not occur).

- **Coverage / Độ bao phủ:** Columns (feasible combinations) exercised / Total feasible columns × 100%.

- **Minimization / Tối thiểu hóa:** Merge columns where conditions do not affect the outcome. Algorithms are out of scope.

**Strength / Điểm mạnh:** Systematic identification of all combinations; finds gaps and contradictions.\
**Weakness / Điểm yếu:** Exponential growth of rules with conditions.

**2.5 State Transition Testing / Kiểm thử Chuyển Trạng thái**

Models behavior via states and valid transitions triggered by events (with optional guard conditions and actions).

- **State Diagram / Sơ đồ trạng thái:** Shows states and transitions. Syntax: event \[guard condition\]/action.

- **State Table / Bảng trạng thái:** Rows = states, columns = events. Cells = target state + action. Explicitly shows invalid transitions (empty cells).

- **Test Case / Ca kiểm thử:** Sequence of events causing state changes.

**Coverage Criteria / Tiêu chí Bao phủ:**

1.  **All States Coverage / Bao phủ Tất cả Trạng thái:** All states exercised. Weakest criterion.

2.  **Valid Transitions Coverage (0-switch) / Bao phủ Chuyển tiếp Hợp lệ:** All valid single transitions exercised. Most widely used.

3.  **All Transitions Coverage / Bao phủ Tất cả Chuyển tiếp:** All valid and invalid transitions exercised/attempted. Strongest; minimum for safety-critical systems.

**Hierarchy / Thứ bậc:** All transitions ⊃ Valid transitions ⊃ All states.

**2.6 Statement Testing and Coverage / Kiểm thử và Bao phủ Câu lệnh**

- **Coverage Item / Mục bao phủ:** Executable statements.

- **Coverage / Độ bao phủ:** Statements exercised / Total executable statements × 100%.

- **100% Statement Coverage:** All executable statements exercised at least once.

- **Limitation / Hạn chế:** Does not ensure all decision logic is tested (e.g., missing branches). Does not detect all data-dependent defects (e.g., division by zero only when denominator is zero).

**2.7 Branch Testing and Coverage / Kiểm thử và Bao phủ Nhánh**

- **Branch / Nhánh:** Transfer of control between nodes in the control flow graph. Can be unconditional or conditional.

- **Coverage Item / Mục bao phủ:** Branches.

- **Coverage / Độ bao phủ:** Branches exercised / Total branches × 100%.

- **100% Branch Coverage:** All branches (true/false outcomes of decisions, switch cases, loop exits) exercised.

- **Subsumes Statement Coverage / Bao phủ câu lệnh:** 100% branch coverage guarantees 100% statement coverage, but not vice versa.

**2.8 Value of White-box Testing / Giá trị của Kiểm thử Hộp trắng**

- **Strength / Điểm mạnh:** Entire implementation is considered; detects defects even when specifications are vague, outdated, or incomplete. Provides objective coverage measures.

- **Weakness / Điểm yếu:** May miss defects of omission (missing requirements) because it only tests what was implemented.

- **Applicability / Phạm vi:** Can be used in static testing (dry runs) and for pseudocode/logic review.

**2.9 Experience-based Techniques / Kỹ thuật Dựa trên Kinh nghiệm**

**Error Guessing / Đoán Lỗi**

- Anticipates errors based on tester knowledge (past failures, developer tendencies, similar applications).

- **Fault Attacks / Tấn công Lỗi:** Create lists of possible errors and design tests to expose them.

**Exploratory Testing / Kiểm thử Khám phá**

- Simultaneous design, execution, and evaluation while learning about the test object.

- **Session-based / Dựa trên Phiên:** Time-boxed sessions guided by test charters; followed by debriefing.

- Best when specifications are poor or time is limited. Effectiveness depends on tester skill and domain knowledge.

**Checklist-based Testing / Kiểm thử Dựa trên Danh sách Kiểm tra**

- Tests designed to cover conditions from a checklist.

- Items phrased as questions; should be checkable separately and directly.

- Must be regularly updated based on defect analysis. Avoid becoming too long.

**2.10 Collaboration-based Approaches / Phương pháp Dựa trên Cộng tác**

**User Stories / Câu chuyện Người dùng**

- Represent valuable features. Format: \"As a \[role\], I want \[goal\], so that \[business value\].\"

- **3 C\'s / 3 chữ C:** Card, Conversation, Confirmation.

- **INVEST criteria:** Independent, Negotiable, Valuable, Estimable, Small, Testable.

**Acceptance Criteria / Tiêu chí Chấp nhận**

- Conditions implementation must meet to be accepted.

- **Formats / Định dạng:**

  - Scenario-oriented: Given/When/Then (BDD style).

  - Rule-oriented: Bullet points or input-output tables.

**Acceptance Test-Driven Development (ATDD)**

- Test-first approach. Tests created before implementation by the whole team (customers, developers, testers).

- **Process / Quy trình:** Specification workshop → Create test cases (positive first, then negative, then non-functional) → Automate if possible.

- Tests are examples of how the software works; must cover the user story without going beyond it.

**3. Key Terminology / Thuật ngữ Quan trọng**

- **Equivalence Partitioning / Phân vùng Tương đương:** Dividing data into partitions processed similarly.

  - **Phân vùng Tương đương:** Chia dữ liệu thành các vùng được xử lý tương tự nhau.

- **Boundary Value Analysis / Phân tích Giá trị Biên:** Testing boundaries of ordered partitions.

  - **Phân tích Giá trị Biên:** Kiểm thử các biên của vùng tương đương có thứ tự.

- **Decision Table / Bảng Quyết định:** Table showing combinations of conditions and resulting actions.

  - **Bảng Quyết định:** Bảng hiển thị các tổ hợp điều kiện và hành động kết quả.

- **State Transition / Chuyển Trạng thái:** Testing based on states and transitions.

  - **Chuyển Trạng thái:** Kiểm thử dựa trên trạng thái và chuyển tiếp.

- **Statement Coverage / Bao phủ Câu lệnh:** Percentage of executable statements exercised.

  - **Bao phủ Câu lệnh:** Tỷ lệ phần trăm câu lệnh thực thi được đã thực hiện.

- **Branch Coverage / Bao phủ Nhánh:** Percentage of branches exercised.

  - **Bao phủ Nhánh:** Tỷ lệ phần trăm nhánh đã thực hiện.

- **Exploratory Testing / Kiểm thử Khám phá:** Simultaneous test design, execution, and evaluation.

  - **Kiểm thử Khám phá:** Đồng thời thiết kế, thực thi và đánh giá kiểm thử.

- **ATDD / ATDD:** Test-first approach deriving tests from acceptance criteria.

  - **ATDD:** Phương pháp kiểm thử trước suy ra ca kiểm thử từ tiêu chí chấp nhận.

- **Coverage Item / Mục bao phủ:** An entity used to measure coverage.

  - **Mục bao phủ:** Thực thể dùng để đo độ bao phủ.

**4. Deep Understanding / Hiểu Sâu**

**EP vs BVA**

- EP selects one value from each partition.

- BVA specifically targets the boundaries because that is where developers typically make mistakes. BVA requires ordered partitions.

**2-value vs 3-value BVA**

- 2-value tests the boundary and the adjacent partition neighbor.

- 3-value tests the boundary and both sides (inside and outside). More rigorous and can catch off-by-one errors in either direction.

**Statement vs Branch Coverage**

- Statement coverage is weaker. You can achieve 100% statement coverage without executing all branches (e.g., an if statement where only the true branch is ever taken).

- Branch coverage subsumes statement coverage: 100% branch → 100% statement.

**When to Use Exploratory Testing**

- Poor or missing specifications.

- Time pressure.

- As a complement to formal techniques (not a replacement).

- Requires skilled, domain-knowledgeable testers.

**White-box Limitation**

- If a requirement is completely missing from the code, white-box testing will not detect the omission because there is no code to cover. Black-box techniques (based on requirements) are needed to catch omissions.

**5. Practice Questions / Câu hỏi Luyện tập**

**Question 1 / Câu hỏi 1** In equivalence partitioning, which of the following is true about partitions? a) They may overlap to ensure thorough testing b) They must be non-empty and must not overlap c) They should only include valid values d) They are only applicable to output data

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly states partitions must not overlap and must be non-empty.

- **a) Incorrect / Sai:** Overlapping violates EP rules.

- **c) Incorrect / Sai:** Both valid and invalid partitions must be identified.

- **d) Incorrect / Sai:** EP applies to inputs, outputs, configuration, internal values, time, and interface parameters.

**Question 2 / Câu hỏi 2** Using 3-value BVA for a range accepting values from 10 to 20, which set includes all coverage items for the lower boundary? a) 9, 10 b) 10, 11 c) 9, 10, 11 d) 8, 9, 10

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** 3-value BVA tests the boundary (10) and both neighbors (9 outside, 11 inside).

- **a) Incorrect / Sai:** This is 2-value BVA for the lower boundary.

- **b) Incorrect / Sai:** This misses the outside neighbor (9).

- **d) Incorrect / Sai:** Tests too far from the boundary.

**Question 3 / Câu hỏi 3** In decision table testing, what are the coverage items? a) Individual conditions b) Rows in the table c) Columns containing feasible combinations of conditions d) All actions

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Coverage items are the columns (decision rules) containing feasible combinations.

- **a/b/d) Incorrect / Sai:** These are not the coverage items for decision table testing.

**Question 4 / Câu hỏi 4** Which coverage criterion for state transition testing is the strongest? a) All states coverage b) Valid transitions coverage c) All transitions coverage d) Each choice coverage

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** All transitions coverage includes valid and invalid transitions and subsumes the others.

- **a) Incorrect / Sai:** Weakest; can be achieved without exercising all transitions.

- **b) Incorrect / Sai:** Most widely used but weaker than all transitions.

- **d) Incorrect / Sai:** This is an EP coverage criterion, not state transition.

**Question 5 / Câu hỏi 5** Which statement is true regarding branch coverage? a) 100% statement coverage guarantees 100% branch coverage b) Branch coverage subsumes statement coverage c) Branch testing only covers conditional branches d) Branch coverage is weaker than statement coverage

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly states branch coverage subsumes statement coverage.

- **a) Incorrect / Sai:** The reverse is true: branch coverage guarantees statement coverage, not vice versa.

- **c) Incorrect / Sai:** Branch testing covers both unconditional and conditional branches.

- **d) Incorrect / Sai:** Branch coverage is stronger, not weaker.

**Question 6 / Câu hỏi 6** Which test technique is most effective when specifications are inadequate and there is significant time pressure? a) Decision table testing b) State transition testing c) Exploratory testing d) Statement testing

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Exploratory testing is explicitly recommended for poor specifications and time pressure.

- **a/b) Incorrect / Sai:** These require structured specifications.

- **d) Incorrect / Sai:** This requires code access and is not suited for specification gaps.

**Question 7 / Câu hỏi 7** In ATDD, which type of test cases are typically created first? a) Negative test cases b) Non-functional test cases c) Positive test cases d) Regression test cases

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** The syllabus states positive test cases confirming correct behavior are done first, followed by negative testing, then non-functional.

- **a/b) Incorrect / Sai:** These come after positive tests.

- **d) Incorrect / Sai:** Regression tests are not part of the ATDD derivation sequence.

**Question 8 / Câu hỏi 8** What does the INVEST acronym stand for in the context of user stories? a) Integrated, Negotiable, Valuable, Estimable, Small, Testable b) Independent, Negotiable, Valuable, Estimable, Small, Testable c) Independent, Non-negotiable, Valuable, Estimable, Small, Testable d) Independent, Negotiable, Verifiable, Estimable, Small, Testable

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Independent, Negotiable, Valuable, Estimable, Small, Testable.

- **a) Incorrect / Sai:** \"Integrated\" is wrong.

- **c) Incorrect / Sai:** \"Non-negotiable\" contradicts the correct term.

- **d) Incorrect / Sai:** \"Verifiable\" is wrong.

**Question 9 / Câu hỏi 9** Which of the following is a weakness of white-box testing? a) It cannot be used for component testing b) It may not detect defects of omission if a requirement is not implemented c) It requires executable code to be available d) It provides no objective coverage measure

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** If software does not implement a requirement, white-box testing may not detect the omission.

- **a) Incorrect / Sai:** White-box is well-suited for component testing.

- **c) Incorrect / Sai:** It can be used in static testing (dry runs) before execution.

- **d) Incorrect / Sai:** It provides objective coverage measures (statement, branch).

**Question 10 / Câu hỏi 10** A tester uses their knowledge of common developer mistakes to anticipate defects. Which technique is this? a) Checklist-based testing b) Error guessing c) Exploratory testing d) Equivalence partitioning

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Error guessing uses tester knowledge to anticipate errors and defects.

- **a) Incorrect / Sai:** Uses predefined checklists, not personal anticipation of developer mistakes.

- **c) Incorrect / Sai:** Simultaneous design/execution, not specifically anticipation based on developer tendencies.

- **d) Incorrect / Sai:** A black-box technique based on data partitioning.

**6. Exam Tips & Common Traps / Mẹo Thi & Bẫy Thường gặp**

1.  **\"EP partitions can overlap\"** --- False. They must be disjoint.

2.  **\"100% statement coverage = thorough testing\"** --- False. Branch coverage is stronger.

3.  **\"BVA applies to unordered partitions\"** --- False. BVA requires ordered partitions.

4.  **\"Decision table coverage = covering all conditions\"** --- False. It is covering all feasible rule columns.

5.  **\"All states coverage is sufficient for safety-critical\"** --- False. All transitions coverage is the minimum.

6.  **\"ATDD tests are only manual\"** --- False. They may be executed manually or automated.

7.  **\"Exploratory testing has no structure\"** --- False. Session-based exploratory testing uses charters and time boxes.

**7. Chapter Summary / Tóm tắt Chương**

- Black-box techniques derive tests from specified behavior; white-box from internal structure; experience-based from tester knowledge.

- EP divides data into non-overlapping, non-empty valid and invalid partitions. Each Choice coverage requires each partition to be exercised at least once.

- BVA tests boundaries. 2-value tests boundary + adjacent neighbor; 3-value tests boundary + both neighbors. 3-value is more rigorous.

- Decision tables model complex business rules. Coverage items are feasible columns (rules).

- State transition testing uses states and transitions. Coverage hierarchy: All states \< Valid transitions \< All transitions.

- Statement coverage measures executable statements. Branch coverage measures control transfers and subsumes statement coverage.

- White-box considers implementation; good for vague specs but may miss omissions.

- Error guessing anticipates defects; exploratory testing is simultaneous design/execution/evaluation; checklist-based uses regularly updated question lists.

- Collaboration approaches: User stories (3C\'s, INVEST), acceptance criteria (scenario/rule-oriented), ATDD (positive → negative → non-functional tests created before implementation).

**8. Quick Review / Ôn tập Nhanh**

**Black-box Techniques / Kỹ thuật Hộp đen**

- EP: Partitions, valid/invalid, no overlap / Phân vùng, hợp lệ/không hợp lệ, không chồng chéo

- BVA: 2-value (boundary + neighbor) / 3-value (boundary + both neighbors) / BVA 2 giá trị / 3 giá trị

- Decision Table: Conditions + Actions = Rules (columns) / Bảng quyết định: Điều kiện + Hành động = Quy tắc (cột)

- State Transition: States, events, transitions / Chuyển trạng thái: Trạng thái, sự kiện, chuyển tiếp

**White-box Techniques / Kỹ thuật Hộp trắng**

- Statement: Executable statements / Câu lệnh thực thi được

- Branch: Control transfers (unconditional + conditional) / Chuyển giao điều khiển

- Branch ⊃ Statement / Bao phủ nhánh bao hàm bao phủ câu lệnh

**Experience-based / Dựa trên kinh nghiệm**

- Error Guessing / Đoán lỗi

- Exploratory (Session-based, Charter) / Khám phá (Dựa trên phiên, Charter)

- Checklist-based / Dựa trên danh sách kiểm tra

**Collaboration / Cộng tác**

- User Story: As a\... I want\... so that\... / Câu chuyện người dùng

- INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable

- ATDD: Workshop → Positive → Negative → Non-functional / Hội thảo → Tích cực → Tiêu cực → Phi chức năng

**Chapter 5: Managing the Test Activities**

**Chương 5: Quản lý Các Hoạt động Kiểm thử**

**1. Overview / Tổng quan**

This chapter covers test planning, estimation, prioritization, risk management, monitoring, control, configuration management, and defect management. It provides the management framework within which technical testing activities operate.

Chương này bao gồm lập kế hoạch kiểm thử, ước lượng, ưu tiên, quản lý rủi ro, giám sát, điều khiển, quản lý cấu hình và quản lý khiếm khuyết. Nội dung cung cấp khung quản lý mà trong đó các hoạt động kiểm thử kỹ thuật vận hành.

**Syllabus Alignment:** FL-BO7, FL-BO9, FL-BO13, FL-BO14\
**Training Time:** 335 minutes

**2. Core Concepts / Các Khái niệm Cốt lõi**

**2.1 Test Planning / Lập kế hoạch Kiểm thử**

A test plan documents objectives, resources, and processes. It:

- Documents means and schedule for achieving objectives.

- Ensures test activities meet established criteria.

- Serves as communication with stakeholders.

- Demonstrates adherence to test policy/strategy.

**Typical Content / Nội dung điển hình:**

- Context (scope, objectives, basis)

- Assumptions and constraints

- Stakeholders (roles, responsibilities, training needs)

- Communication (forms, frequency, templates)

- Risk register (product and project risks)

- Test approach (levels, types, techniques, deliverables, entry/exit criteria, independence, metrics, data/environment requirements)

- Budget and schedule

**Tester\'s Contribution to Planning / Đóng góp của Kiểm thử viên vào Lập kế hoạch**

- **Release Planning / Lập kế hoạch Phát hành:** Write testable user stories, define acceptance criteria, participate in risk analysis, estimate effort, determine approach.

- **Iteration Planning / Lập kế hoạch Lặp:** Detailed risk analysis of stories, determine testability, break down into tasks, estimate testing tasks, refine functional/non-functional aspects.

**2.2 Entry and Exit Criteria / Tiêu chí Đầu vào và Đầu ra**

**Table**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **/**                               **Entry Criteria / Đầu vào**                                                                                                                                                   **Exit Criteria / Đầu ra**
  ----------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Definition / Định nghĩa**         Preconditions to start an activity / Điều kiện tiên quyết để bắt đầu hoạt động                                                                                                 Conditions to declare completion / Điều kiện tuyên bố hoàn thành

  **Examples / Ví dụ**                Resources available, testware ready, initial quality level (smoke tests passed) / Nguồn lực sẵn sàng, tài liệu kiểm thử sẵn sàng, mức chất lượng ban đầu (kiểm thử khói đạt)   Coverage achieved, unresolved defects within limit, planned tests executed, regression tests passed / Đạt độ bao phủ, khiếm khuyết chưa giải quyết trong giới hạn, kiểm thử đã lên kế hoạch được thực thi, kiểm thử hồi quy đạt

  **Agile Terms / Thuật ngữ Agile**   Definition of Ready / Định nghĩa Sẵn sàng                                                                                                                                      Definition of Done / Định nghĩa Hoàn thành
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Note / Lưu ý:** Running out of time or budget can be valid exit criteria if stakeholders accept the risk.

**2.3 Estimation Techniques / Kỹ thuật Ước lượng**

**Table**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Technique / Kỹ thuật**        **Type / Loại**                         **Description / Mô tả**
  ------------------------------- --------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Ratios / Tỷ lệ**              Metrics-based / Dựa trên số liệu        Use historical ratios (e.g., dev:test = 3:2) / Dùng tỷ lệ lịch sử

  **Extrapolation / Ngoại suy**   Metrics-based / Dựa trên số liệu        Use early project measurements to project remaining effort / Dùng số liệu sớm để dự đoán công việc còn lại

  **Wideband Delphi**             Expert-based / Dựa trên chuyên gia      Experts estimate in isolation, discuss deviations, re-estimate iteratively until consensus / Chuyên gia ước lượng riêng, thảo luận độ lệch, ước lượng lại đến khi đồng thuận

  **Planning Poker**              Variant of Wideband Delphi / Biến thể   Uses numbered cards for effort size / Dùng thẻ số cho kích thước công sức

  **Three-point Estimation**      Expert-based / Dựa trên chuyên gia      Optimistic (a), Most likely (m), Pessimistic (b). Formula: **E = (a + 4m + b) / 6**. Standard deviation: **SD = (b - a) / 6** / Lạc quan, Khả dĩ nhất, Bi quan
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2.4 Test Case Prioritization / Ưu tiên Ca kiểm thử**

Strategies / Chiến lược:

- **Risk-based / Dựa trên rủi ro:** Execute tests covering highest risks first.

- **Coverage-based / Dựa trên bao phủ:** Execute tests achieving highest coverage first (or highest additional coverage).

- **Requirements-based / Dựa trên yêu cầu:** Execute tests linked to highest priority requirements first.

**Constraints / Ràng buộc:** Dependencies may force lower-priority tests to run first. Resource availability (tools, environments, people) also affects order.

**2.5 Test Pyramid / Kim tự tháp Kiểm thử**

Model showing different test granularity levels.

- **Bottom / Đáy:** Unit/Component tests --- small, isolated, fast, many needed.

- **Middle / Giữa:** Integration/Service tests.

- **Top / Đỉnh:** End-to-end/UI tests --- complex, slow, fewer needed.

Higher layer = lower granularity, lower isolation, higher execution time.

**2.6 Testing Quadrants / Bốn Phần tư Kiểm thử**

Model by Brian Marick for Agile. Combines facing (business/technology) and purpose (support team/critique product).

**Table**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **/**                                     **Support Team / Hỗ trợ nhóm**                                                                                                             **Critique Product / Phê phán sản phẩm**
  ----------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------
  **Technology Facing / Hướng công nghệ**   **Q1:** Component tests, component integration tests (automated, CI) / Kiểm thử thành phần, tích hợp thành phần                            **Q4:** Smoke tests, non-functional tests (except usability) / Kiểm thử khói, phi chức năng (trừ khả dụng)

  **Business Facing / Hướng kinh doanh**    **Q2:** Functional tests, examples, user story tests, API testing (manual or automated) / Kiểm thử chức năng, ví dụ, kiểm thử user story   **Q3:** Exploratory testing, usability testing, UAT (manual, user-oriented) / Kiểm thử khám phá, khả dụng, UAT
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2.7 Risk Management / Quản lý Rủi ro**

**Risk / Rủi ro:** A potential event causing adverse effect. **Risk Level / Mức độ rủi ro:** Determined by **Risk Likelihood × Risk Impact**.

**Types / Loại:**

- **Project Risks / Rủi ro Dự án:** Related to management/control. Examples: delays, skill shortages, scope creep, supplier failure. Affect schedule, budget, scope.

- **Product Risks / Rủi ro Sản phẩm:** Related to quality characteristics. Examples: missing functionality, incorrect calculations, poor performance, security vulnerabilities. Affect user satisfaction, revenue, safety.

**Product Risk Analysis / Phân tích Rủi ro Sản phẩm:**

- **Identification / Nhận diện:** Brainstorming, workshops, interviews, cause-effect diagrams.

- **Assessment / Đánh giá:** Quantitative (likelihood × impact) or qualitative (risk matrix). Categorize and prioritize.

- **Influence on Testing / Ảnh hưởng đến Kiểm thử:** Determines scope, levels, types, techniques, coverage, effort estimation, prioritization.

**Product Risk Control / Kiểm soát Rủi ro Sản phẩm:**

- **Mitigation / Giảm thiểu:** Select skilled testers, apply independence, perform reviews/static analysis, use appropriate techniques/coverage, perform dynamic/regression testing.

- **Other responses / Phản ứng khác:** Risk acceptance, risk transfer, contingency plans.

**2.8 Monitoring, Control, and Completion / Giám sát, Điều khiển và Kết thúc**

**Test Monitoring / Giám sát Kiểm thử:** Gathering information to assess progress against exit criteria.

**Test Control / Điều khiển Kiểm thử:** Using monitoring information to take corrective actions (control directives): reprioritize tests, re-evaluate entry/exit criteria, adjust schedule, add resources.

**Test Completion / Kết thúc Kiểm thử:** Occurs at milestones. Consolidates experience, testware, and information.

**Metrics / Số liệu:**

- Project progress (task completion, resource usage)

- Test progress (cases implemented/run/passed/failed, execution time)

- Product quality (availability, response time, MTTF)

- Defects (found/fixed, density, detection percentage)

- Risk (residual risk level)

- Coverage (requirements, code)

- Cost (cost of testing, cost of quality)

**Test Reports / Báo cáo Kiểm thử:**

- **Progress Reports / Báo cáo Tiến độ:** Regular (daily/weekly). Include period, progress, impediments, metrics, new risks, planned activities.

- **Completion Reports / Báo cáo Kết thúc:** At project/level completion. Include summary, quality evaluation, deviations, impediments, metrics, unmitigated risks, lessons learned.

**Communication / Giao tiếp:** Verbal, dashboards (CI/CD, burn-down), electronic channels, online docs, formal reports. Tailor to audience.

**2.9 Configuration Management / Quản lý Cấu hình**

Provides discipline for identifying, controlling, and tracking work products as configuration items.

- Ensures unique identification, version control, change tracking, and traceability.

- Baselines are established; changes require formal change control.

- Supports reproducibility of previous test results.

**2.10 Defect Management / Quản lý Khiếm khuyết**

An established process essential because finding defects is a major test objective.

**Workflow / Quy trình làm việc:** Log → Analyze/Classify → Decide response (fix or keep) → Close.

**Defect Report Contents / Nội dung Báo cáo Khiếm khuyết:**

- Unique identifier

- Title/short summary

- Date, issuing organization, author, role

- Test object and environment identification

- Context (test case, activity, SDLC phase, technique used)

- Description of failure (steps, logs, screenshots)

- Expected and actual results

- Severity (impact on stakeholders)

- Priority (to fix)

- Status (open, deferred, duplicate, fixed, closed, etc.)

- References (to test cases)

**3. Key Terminology / Thuật ngữ Quan trọng**

- **Test Plan / Kế hoạch Kiểm thử:** Document describing test objectives, resources, and processes.

  - **Kế hoạch Kiểm thử:** Tài liệu mô tả mục tiêu, nguồn lực và quy trình kiểm thử.

- **Entry Criteria / Tiêu chí Đầu vào:** Preconditions to start a test activity.

  - **Tiêu chí Đầu vào:** Điều kiện tiên quyết để bắt đầu hoạt động kiểm thử.

- **Exit Criteria / Tiêu chí Đầu ra:** Conditions to declare a test activity complete.

  - **Tiêu chí Đầu ra:** Điều kiện tuyên bố hoạt động kiểm thử hoàn thành.

- **Risk / Rủi ro:** Potential event causing adverse effect.

  - **Rủi ro:** Sự kiện tiềm ẩn gây ảnh hưởng bất lợi.

- **Product Risk / Rủi ro Sản phẩm:** Risk related to product quality characteristics.

  - **Rủi ro Sản phẩm:** Rủi ro liên quan đặc tính chất lượng sản phẩm.

- **Project Risk / Rủi ro Dự án:** Risk related to project management and control.

  - **Rủi ro Dự án:** Rủi ro liên quan quản lý và điều khiển dự án.

- **Risk Level / Mức độ rủi ro:** Measure based on risk likelihood and risk impact.

  - **Mức độ rủi ro:** Thước đo dựa trên khả năng và tác động của rủi ro.

- **Test Pyramid / Kim tự tháp Kiểm thử:** Model showing tests of different granularity.

  - **Kim tự tháp Kiểm thử:** Mô hình hiển thị kiểm thử ở các mức độ chi tiết khác nhau.

- **Testing Quadrants / Bốn Phần tư Kiểm thử:** Model grouping tests by business/technology facing and support/critique purpose.

  - **Bốn Phần tư Kiểm thử:** Mô hình nhóm kiểm thử theo hướng kinh doanh/công nghệ và mục đích hỗ trợ/phê phán.

- **Defect Report / Báo cáo Khiếm khuyết:** Document reporting an anomaly for investigation and resolution.

  - **Báo cáo Khiếm khuyết:** Tài liệu báo cáo bất thường để điều tra và giải quyết.

**4. Deep Understanding / Hiểu Sâu**

**Entry vs Exit Criteria** Entry criteria prevent starting testing when preconditions are unmet (wasting effort). Exit criteria provide an objective stopping point and prevent endless testing.

**Test Pyramid in Agile** Agile teams aim for many fast, automated unit tests (base of pyramid) and fewer slow UI tests (top). This provides rapid feedback and reduces maintenance cost of flaky end-to-end tests.

**Project vs Product Risk Examples**

- Project risk: \"Our test environment will be delivered two weeks late\" (affects schedule).

- Product risk: \"The payment module may calculate tax incorrectly\" (affects quality).

**When to Stop Testing** Ideally, when exit criteria are met. Practically, when time/budget runs out and stakeholders accept residual risk. The test plan should document this decision-making framework.

**5. Practice Questions / Câu hỏi Luyện tập**

**Question 1 / Câu hỏi 1** Which of the following is typically included in a test plan? a) Detailed code implementation b) Test approach and risk register c) Marketing strategy for the product d) End-user training materials

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Test approach and risk register are explicitly listed as typical test plan contents.

- **a/c/d) Incorrect / Sai:** These are outside the scope of a test plan.

**Question 2 / Câu hỏi 2** Using three-point estimation, if a=4, m=7, and b=16 person-days, what is the final estimate E? a) 7 b) 8 c) 9 d) 10

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** E = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8.

- The other values are miscalculations.

**Question 3 / Câu hỏi 3** In Agile, exit criteria are often called: a) Definition of Ready b) Definition of Done c) Sprint Backlog d) Product Vision

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** The syllabus explicitly states exit criteria are often called Definition of Done in Agile.

- **a) Incorrect / Sai:** Definition of Ready corresponds to entry criteria.

- **c/d) Incorrect / Sai:** These are not related to exit criteria.

**Question 4 / Câu hỏi 4** Which of the following is a project risk rather than a product risk? a) Incorrect calculation in the billing module b) Insufficient skills in the test team c) Security vulnerability in user authentication d) Poor user experience

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Insufficient skills is a people issue affecting project management/control.

- **a/c/d) Incorrect / Sai:** These relate to product quality characteristics.

**Question 5 / Câu hỏi 5** Which test case prioritization strategy executes tests linked to the most important requirements first? a) Risk-based prioritization b) Coverage-based prioritization c) Requirements-based prioritization d) Random prioritization

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Requirements-based prioritization uses requirement priorities defined by stakeholders.

- **a) Incorrect / Sai:** Uses risk analysis, not requirement importance directly.

- **b) Incorrect / Sai:** Uses coverage metrics.

- **d) Incorrect / Sai:** Not a valid syllabus strategy.

**Question 6 / Câu hỏi 6** In the testing quadrants model, which quadrant contains exploratory testing? a) Q1 b) Q2 c) Q3 d) Q4

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Q3 is business-facing and critiques the product; it contains exploratory testing, usability testing, and UAT.

- **a) Incorrect / Sai:** Q1 is technology-facing, support team (component tests).

- **b) Incorrect / Sai:** Q2 is business-facing, support team (functional tests).

- **d) Incorrect / Sai:** Q4 is technology-facing, critique product (non-functional tests).

**Question 7 / Câu hỏi 7** Which of the following is a control directive? a) Collecting test metrics b) Reprioritizing tests when a risk becomes an issue c) Writing the test plan d) Executing test cases

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Reprioritizing tests based on monitoring information is a control directive.

- **a) Incorrect / Sai:** This is monitoring.

- **c) Incorrect / Sai:** This is planning.

- **d) Incorrect / Sai:** This is execution.

**Question 8 / Câu hỏi 8** What is the primary purpose of configuration management in testing? a) To write test cases b) To uniquely identify, version control, and track work products c) To execute automated tests d) To estimate test effort

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** CM ensures unique identification, version control, and traceability of configuration items.

- **a/c/d) Incorrect / Sai:** These are not CM functions.

**Question 9 / Câu hỏi 9** Which of the following must be included in a defect report? a) The developer\'s home address b) Expected and actual results c) The marketing budget d) The company\'s stock price

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Expected and actual results are mandatory components of a defect report.

- **a/c/d) Incorrect / Sai:** These are irrelevant to defect reporting.

**Question 10 / Câu hỏi 10** Which estimation technique involves experts making estimates in isolation, then discussing deviations, and re-estimating until consensus is reached? a) Extrapolation b) Estimation based on ratios c) Wideband Delphi d) Three-point estimation

**Correct Answer / Đáp án đúng: C**

**Explanation / Giải thích:**

- **c) Correct / Đúng:** Wideband Delphi is defined as an iterative expert-based technique with isolated estimation and consensus building.

- **a/b) Incorrect / Sai:** These are metrics-based.

- **d) Incorrect / Sai:** Uses three estimates but does not involve iterative consensus discussion.

**6. Exam Tips & Common Traps / Mẹo Thi & Bẫy Thường gặp**

1.  **\"Entry criteria = Exit criteria\"** --- They are opposites. Entry = start; Exit = done.

2.  **\"Risk level = only impact\"** --- It is likelihood × impact.

3.  **\"Test pyramid has only 3 layers\"** --- The number and naming may differ.

4.  **\"Q1 is business-facing\"** --- Q1 is technology-facing; Q2 is business-facing.

5.  **\"Defect report needs only a title\"** --- It needs identifier, context, steps, expected/actual, severity, priority, status, and references.

6.  **\"Three-point estimate uses simple average\"** --- It uses weighted average: (a+4m+b)/6.

**7. Chapter Summary / Tóm tắt Chương**

- Test planning documents objectives, approach, risks, schedule, and budget. Testers contribute to release and iteration planning.

- Entry criteria are preconditions; exit criteria define completion. In Agile: Definition of Ready (entry) and Definition of Done (exit).

- Estimation: Ratios (historical), Extrapolation (current data), Wideband Delphi/Planning Poker (expert consensus), Three-point (weighted average with standard deviation).

- Prioritization: Risk-based, coverage-based, requirements-based. Dependencies and resources affect execution order.

- Test pyramid: More fast isolated tests at bottom; fewer slow end-to-end tests at top.

- Testing quadrants: Q1(tech/support), Q2(business/support), Q3(business/critique), Q4(tech/critique).

- Risk = likelihood × impact. Project risks affect schedule/budget; product risks affect quality.

- Risk analysis identifies and assesses; risk control mitigates and monitors.

- Monitoring gathers metrics; control takes corrective action; completion consolidates learning.

- CM ensures identification, version control, and traceability of work products.

- Defect reports require unique ID, title, context, description, expected/actual results, severity, priority, status, and references.

**8. Quick Review / Ôn tập Nhanh**

**Estimation Formulas / Công thức Ước lượng**

- Three-point: **E = (a + 4m + b) / 6**

- Standard deviation: **SD = (b - a) / 6**

**Test Pyramid / Kim tự tháp**

- Bottom: Unit/Component (fast, isolated, many) / Đơn vị/Thành phần

- Middle: Integration / Tích hợp

- Top: End-to-end/UI (slow, complex, few) / Từ đầu đến cuối/UI

**Quadrants / Bốn phần tư**

- Q1: Tech-facing, Support team / Hướng công nghệ, Hỗ trợ nhóm

- Q2: Business-facing, Support team / Hướng kinh doanh, Hỗ trợ nhóm

- Q3: Business-facing, Critique product / Hướng kinh doanh, Phê phán sản phẩm

- Q4: Tech-facing, Critique product / Hướng công nghệ, Phê phán sản phẩm

**Risk / Rủi ro**

- Level = Likelihood × Impact / Mức độ = Khả năng × Tác động

- Project: Schedule, budget, scope / Dự án: Lịch trình, ngân sách, phạm vi

- Product: Quality, functionality, performance / Sản phẩm: Chất lượng, chức năng, hiệu suất

**Defect Report Essentials / Thành phần Báo cáo Khiếm khuyết** ID, Title, Date/Author, Object/Environment, Context, Steps, Expected/Actual, Severity, Priority, Status, References

**Chapter 6: Test Tools**

**Chương 6: Công cụ Kiểm thử**

**1. Overview / Tổng quan**

This final chapter covers tool support for testing and the benefits and risks of test automation. It is the shortest chapter but important for understanding the practical enablers and pitfalls of modern testing.

Chương cuối cùng này bao gồm hỗ trợ công cụ cho kiểm thử và lợi ích, rủi ro của tự động hóa kiểm thử. Đây là chương ngắn nhất nhưng quan trọng để hiểu các yếu tố thực tiễn và cạm bẫy của kiểm thử hiện đại.

**Syllabus Alignment:** FL-BO11\
**Training Time:** 20 minutes

**2. Core Concepts / Các Khái niệm Cốt lõi**

**2.1 Tool Support for Testing / Hỗ trợ Công cụ cho Kiểm thử**

Tools support and facilitate many test activities. Categories include:

**Table**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Category / Loại**                                                      **Purpose / Mục đích**
  ------------------------------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------
  **Test Management Tools** / Công cụ Quản lý kiểm thử                     Manage SDLC, requirements, tests, defects, configuration / Quản lý vòng đời, yêu cầu, kiểm thử, khiếm khuyết, cấu hình

  **Static Testing Tools** / Công cụ Kiểm thử tĩnh                         Support reviews and static analysis / Hỗ trợ đánh giá và phân tích tĩnh

  **Test Design & Implementation Tools** / Công cụ Thiết kế & Triển khai   Generate test cases, data, procedures / Tạo ca kiểm thử, dữ liệu, thủ tục

  **Test Execution & Coverage Tools** / Công cụ Thực thi & Bao phủ         Automated execution and coverage measurement / Thực thi tự động và đo độ bao phủ

  **Non-functional Testing Tools** / Công cụ Kiểm thử Phi chức năng        Perform tests difficult manually (performance, security) / Thực hiện kiểm thử khó thủ công

  **DevOps Tools** / Công cụ DevOps                                        Support CI/CD pipelines, workflow tracking, automated builds / Hỗ trợ đường ống CI/CD, theo dõi luồng, build tự động

  **Collaboration Tools** / Công cụ Cộng tác                               Facilitate communication / Tạo điều kiện giao tiếp

  **Scalability & Deployment Tools** / Công cụ Mở rộng & Triển khai        VMs, containerization / Máy ảo, đóng gói container

  **Other Tools** / Công cụ Khác                                           Any tool assisting testing (e.g., spreadsheets) / Bất kỳ công cụ hỗ trợ kiểm thử (ví dụ: bảng tính)
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2.2 Benefits of Test Automation / Lợi ích của Tự động hóa Kiểm thử**

- **Time saved / Tiết kiệm thời gian:** Reduces repetitive manual work (regression tests, data re-entry, result comparison).

- **Consistency / Tính nhất quán:** Prevents simple human errors; tests run in same order with same frequency.

- **Objectivity / Tính khách quan:** Provides measures too complicated for humans (e.g., precise coverage).

- **Information access / Truy cập thông tin:** Statistics, graphs, aggregated data for management and reporting.

- **Speed / Tốc độ:** Earlier defect detection, faster feedback, faster time-to-market.

- **Deeper testing / Kiểm thử sâu hơn:** Frees testers to design new, more effective tests.

**2.3 Risks of Test Automation / Rủi ro của Tự động hóa Kiểm thử**

- **Unrealistic expectations / Kỳ vọng không thực tế:** About functionality and ease of use.

- **Inaccurate estimations / Ước lượng không chính xác:** Of time, cost, and effort to introduce and maintain tools.

- **Wrong tool for the job / Công cụ không phù hợp:** Using automation when manual testing is more appropriate.

- **Over-reliance / Phụ thuộc quá mức:** Ignoring need for human critical thinking.

- **Vendor dependency / Phụ thuộc nhà cung cấp:** Vendor goes out of business, retires tool, sells to another, or provides poor support.

- **Open-source risks / Rủi ro mã nguồn mở:** Abandonment, frequent updates needed.

- **Incompatibility / Không tương thích:** Tool incompatible with development platform.

- **Regulatory non-compliance / Không tuân thủ quy định:** Tool unsuitable for regulatory or safety requirements.

**3. Key Terminology / Thuật ngữ Quan trọng**

- **Test Automation / Tự động hóa Kiểm thử:** The use of software to perform test execution and comparison of actual vs. expected results.

  - **Tự động hóa Kiểm thử:** Sử dụng phần mềm để thực thi kiểm thử và so sánh kết quả thực tế với mong đợi.

**4. Deep Understanding / Hiểu Sâu**

**Tool is Not a Silver Bullet** Simply acquiring a tool does not guarantee success. Each tool requires effort for introduction, maintenance, and training. The syllabus emphasizes that testing is largely an intellectual activity; tools support but do not replace critical thinking.

**Spreadsheet as a Test Tool** The syllabus explicitly notes that even a spreadsheet is a test tool in the context of testing. This broad definition reminds testers that tool support is about utility, not just expensive commercial software.

**Manual vs Automated** Manual testing --- especially from the user\'s perspective --- remains necessary even in high-automation DevOps environments. Automation excels at repetition and consistency; humans excel at exploration and intuition.

**5. Practice Questions / Câu hỏi Luyện tập**

**Question 1 / Câu hỏi 1** Which of the following is a potential benefit of test automation? a) Eliminating the need for test planning b) Reducing test execution times and providing faster feedback c) Removing all human involvement from testing d) Guaranteeing the absence of defects

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Faster execution and feedback are explicitly listed benefits.

- **a) Incorrect / Sai:** Planning remains essential.

- **c) Incorrect / Sai:** Human critical thinking is still required.

- **d) Incorrect / Sai:** No activity guarantees absence of defects.

**Question 2 / Câu hỏi 2** Which of the following is a risk of using an open-source test tool? a) It is always more expensive than commercial tools b) It may be abandoned with no further updates c) It automatically complies with all regulatory requirements d) It eliminates the need for test environment setup

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Abandonment is explicitly listed as an open-source risk.

- **a) Incorrect / Sai:** Open-source is often less expensive.

- **c) Incorrect / Sai:** Open-source does not guarantee regulatory compliance.

- **d) Incorrect / Sai:** Environment setup is still required.

**Question 3 / Câu hỏi 3** Which tool category supports the DevOps delivery pipeline and automated build processes? a) Test design tool b) DevOps tool c) Non-functional testing tool d) Static testing tool

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** DevOps tools support CI/CD pipelines and automated builds.

- The other categories serve different primary purposes.

**Question 4 / Câu hỏi 4** Which of the following statements about test tools is true according to the syllabus? a) A spreadsheet cannot be considered a test tool b) Test automation removes the need for manual testing entirely c) Simply acquiring a tool guarantees success d) Tools require effort for introduction, maintenance, and training

**Correct Answer / Đáp án đúng: D**

**Explanation / Giải thích:**

- **d) Correct / Đúng:** The syllabus explicitly states each new tool requires effort for introduction, maintenance, and training.

- **a) Incorrect / Sai:** Spreadsheets are explicitly listed as test tools.

- **b) Incorrect / Sai:** Manual testing, especially from the user perspective, remains necessary.

- **c) Incorrect / Sai:** Simply acquiring a tool does not guarantee success.

**Question 5 / Câu hỏi 5** Over-reliance on a test tool may lead to: a) Improved critical thinking by testers b) Ignoring the need for human critical thinking c) Reduced consistency in test execution d) Slower time-to-market

**Correct Answer / Đáp án đúng: B**

**Explanation / Giải thích:**

- **b) Correct / Đúng:** Over-reliance on tools is explicitly listed as a risk that leads to ignoring human critical thinking.

- **a) Incorrect / Sai:** Over-reliance reduces, not improves, critical thinking.

- **c) Incorrect / Sai:** Tools increase consistency, not reduce it.

- **d) Incorrect / Sai:** Tools generally improve time-to-market.

**6. Exam Tips & Common Traps / Mẹo Thi & Bẫy Thường gặp**

1.  **\"Automation replaces testers\"** --- False. It supports testers and frees them for deeper work.

2.  **\"Open source is risk-free\"** --- False. Abandonment and update frequency are risks.

3.  **\"Tools guarantee success\"** --- False. Effort for introduction, maintenance, and training is required.

4.  **\"Only commercial tools count\"** --- False. Spreadsheets are valid test tools.

**7. Chapter Summary / Tóm tắt Chương**

- Tools support management, static testing, design/implementation, execution/coverage, non-functional testing, DevOps, collaboration, and deployment.

- Benefits: save time, increase consistency, provide objectivity, improve information access, speed up feedback, enable deeper testing.

- Risks: unrealistic expectations, inaccurate estimations, wrong tool choice, over-reliance, vendor dependency, open-source abandonment, incompatibility, regulatory non-compliance.

- Testing remains an intellectual activity; tools assist but do not replace human judgment.

- Manual testing (especially user-perspective) remains necessary even with high automation.

**8. Quick Review / Ôn tập Nhanh**

**Tool Categories / Loại Công cụ**

- Management / Quản lý

- Static / Tĩnh

- Design & Implementation / Thiết kế & Triển khai

- Execution & Coverage / Thực thi & Bao phủ

- Non-functional / Phi chức năng

- DevOps / DevOps

- Collaboration / Cộng tác

- Scalability/Deployment / Mở rộng/Triển khai

**Benefits / Lợi ích**

- Save time / Tiết kiệm thời gian

- Consistency / Nhất quán

- Objectivity / Khách quan

- Faster feedback / Phản hồi nhanh

- Deeper tests / Kiểm thử sâu hơn

**Risks / Rủi ro**

- Unrealistic expectations / Kỳ vọng ảo

- Wrong tool / Công cụ sai

- Over-reliance / Phụ thuộc quá mức

- Vendor issues / Vấn đề nhà cung cấp

- Open-source abandonment / Bỏ rơi mã nguồn mở

- Incompatibility / Không tương thích

**Key Principle / Nguyên tắc chính**

- Tool ≠ Success. Effort required. / Công cụ ≠ Thành công. Cần có nỗ lực.

- Manual testing still needed. / Kiểm thử thủ công vẫn cần thiết.
