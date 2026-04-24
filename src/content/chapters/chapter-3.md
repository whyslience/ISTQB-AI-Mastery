**Chapter 3: Static Testing**

**Chương 3: Kiểm thử Tĩnh**

## 1. Overview / Tổng quan
Static testing evaluates work products without executing the software. It includes manual reviews and tool-supported static analysis. This chapter covers the types of work products that can be examined, the value of static testing, differences from dynamic testing, the review process, review roles, review types, and success factors.

Kiểm thử tĩnh đánh giá sản phẩm làm việc mà không thực thi phần mềm. Nó bao gồm đánh giá thủ công và phân tích tĩnh được hỗ trợ bởi công cụ. Chương này bao gồm các loại sản phẩm làm việc có thể được kiểm tra, giá trị của kiểm thử tĩnh, sự khác biệt với kiểm thử động, quy trình đánh giá, vai trò, loại đánh giá và các yếu tố thành công.

**Syllabus Alignment:** FL-BO4
**Training Time:** 80 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi
### 2.1 Static Testing Basics / Cơ bản về Kiểm thử Tĩnh
- **Definition / Định nghĩa:** Evaluation of work products without execution. Objectives: improve quality, detect defects, assess readability, completeness, correctness, testability, consistency.

- **Methods / Phương pháp:**

  - **Manual examination / Đánh giá thủ công:** Reviews (informal to formal).

  - **Tool-supported / Hỗ trợ bởi công cụ:** Static analysis (code analysis, spelling checkers, readability tools).

- **Applicability / Phạm vi áp dụng:** Almost any work product can be reviewed. Static analysis requires structured work products (code, models, formal text). Not appropriate for 3rd party executable code (legal restrictions).

- **Work Products Examinable / Sản phẩm có thể Kiểm tra:** Requirement specs, source code, test plans, test cases, product backlog items, test charters, project documentation, contracts, models.

### 2.2 Value of Static Testing / Giá trị của Kiểm thử Tĩnh
- **Early Defect Detection:** Fulfills the principle of early testing. Defects found in requirements or design are far cheaper to fix than those found in code or production.

- **Defects Not Found by Dynamic Testing:** Unreachable code, design pattern violations, defects in non-executable work products (e.g., requirements inconsistencies).

- **Quality Evaluation and Confidence:** Stakeholders verify requirements match actual needs.

- **Shared Understanding:** Early involvement creates common understanding and improves communication.

- **Cost Efficiency:** Despite review costs, overall project costs are lower due to reduced late defect fixing.

- **Static Analysis Efficiency:** Certain code defects are found more efficiently than through dynamic testing.

### 2.3 Static vs Dynamic Testing / Kiểm thử Tĩnh vs Động
**Table**


| **Aspect / Khía cạnh** | **Static Testing / Tĩnh** | **Dynamic Testing / Động** |
| --- | --- | --- |
| Execution / Thực thi | No / Không | Yes / Có |
| Defect detection / Phát hiện khiếm khuyết | Direct / Trực tiếp | Via failures / Qua thất bại |
| Applicable work products / Sản phẩm áp dụng | Executable and non-executable / Thực thi và không thực thi | Executable only / Chỉ thực thi được |
| Rarely executed paths / Đường dẫn hiếm khi thực thi | Easily detected / Dễ phát hiện | May be missed / Có thể bỏ sót |
| Quality characteristics / Đặc tính chất lượng | Maintainability, readability / Khả năng bảo trì, khả đọc | Performance efficiency / Hiệu suất |


**Defects Easier to Find Statically / Khiếm khuyết Dễ tìm bằng Tĩnh:**

- Requirements defects (inconsistencies, ambiguities, omissions)

- Design defects (inefficient structures, poor modularization)

- Coding defects (undefined variables, unreachable code, excessive complexity)

- Deviations from standards

- Incorrect interface specifications

- Security vulnerabilities (e.g., buffer overflows)

- Gaps in test basis coverage

### 2.4 Early and Frequent Feedback / Phản hồi Sớm và Thường xuyên
- Prevents misunderstandings about requirements.

- Ensures changes are understood and implemented earlier.

- Helps the team focus on high-value features.

- Prevents costly rework, missed deadlines, and project failure.

### 2.5 Review Process Activities / Các Hoạt động của Quy trình Đánh giá
Defined in ISO/IEC 20246. May be invoked multiple times for large work products.

1.  **Planning / Lập kế hoạch:** Define scope, purpose, work product, quality characteristics, focus areas, exit criteria, standards, effort, and timeframes.

2.  **Review Initiation / Khởi động Đánh giá:** Ensure participants have access, understand roles, and have necessary materials.

3.  **Individual Review / Đánh giá Cá nhân:** Reviewers assess quality, identify anomalies, recommendations, and questions using techniques (checklists, scenarios). Log all findings.

4.  **Communication and Analysis / Giao tiếp và Phân tích:** Analyze anomalies (not all are defects). Decide status, ownership, actions. Typically in a review meeting. Decide quality level and follow-up actions.

5.  **Fixing and Reporting / Sửa chữa và Báo cáo:** Create defect reports for defects. Once exit criteria are met, accept the work product. Record review results.

### 2.6 Roles and Responsibilities / Vai trò và Trách nhiệm
**Table**


| **Role / Vai trò** | **Responsibility / Trách nhiệm** |
| --- | --- |
| **Manager** / Quản lý | Decides what to review; provides resources / Quyết định đánh giá gì; cung cấp nguồn lực |
| **Author** / Tác giả | Creates and fixes the work product / Tạo và sửa sản phẩm làm việc |
| **Moderator (Facilitator)** / Điều phối viên | Ensures effective meetings, mediation, time management, safe environment / Đảm bảo họp hiệu quả, hòa giải, quản lý thời gian, môi trường an toàn |
| **Scribe (Recorder)** / Thư ký | Collates anomalies; records decisions and new anomalies / Tập hợp bất thường; ghi nhận quyết định và bất thường mới |
| **Reviewer** / Người đánh giá | Performs reviews; may be project member, SME, or stakeholder / Thực hiện đánh giá; có thể là thành viên dự án, chuyên gia hoặc bên liên quan |
| **Review Leader** / Trưởng nhóm Đánh giá | Overall responsibility; decides participants, timing, location / Trách nhiệm chung; quyết định người tham gia, thời gian, địa điểm |


### 2.7 Review Types / Các Loại Đánh giá
**Table**


| **Type / Loại** | **Formality / Hình thức** | **Leader / Người dẫn dắt** | **Objectives / Mục tiêu** |
| --- | --- | --- | --- |
| **Informal Review** / Đánh giá Không chính thức | None / Không | Anyone / Bất kỳ ai | Detect anomalies / Phát hiện bất thường |
| **Walkthrough** / Duyệt qua | Low / Thấp | Author / Tác giả | Evaluate quality, educate, gain consensus, detect anomalies / Đánh giá chất lượng, đào tạo, đạt đồng thuận, phát hiện bất thường |
| **Technical Review** / Đánh giá Kỹ thuật | Medium / Trung bình | Moderator / Điều phối viên | Gain consensus, make technical decisions, detect anomalies, evaluate quality / Đạt đồng thuận, ra quyết định kỹ thuật, phát hiện bất thường, đánh giá chất lượng |
| **Inspection** / Thanh tra | High / Cao | Moderator (not author) / Điều phối viên (không phải tác giả) | Maximum anomaly detection, metrics collection, process improvement / Phát hiện bất thường tối đa, thu thập số liệu, cải tiến quy trình |


**Note / Lưu ý:** In inspections, the author **cannot** act as the review leader or moderator. Metrics are collected to improve the SDLC.

### 2.8 Success Factors for Reviews / Các Yếu tố Thành công cho Đánh giá
- Clear objectives and measurable exit criteria (never evaluate participants).

- Appropriate review type for the work product and context.

- Small chunks to maintain concentration.

- Feedback to authors and stakeholders.

- Adequate preparation time.

- Management support.

- Reviews embedded in organizational culture.

- Adequate training for participants.

- Effective meeting facilitation.

## 3. Key Terminology / Thuật ngữ Quan trọng
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

## 4. Deep Understanding / Hiểu Sâu
**Why Static Testing Saves Money** Finding a requirements inconsistency during a review costs minutes to fix. Finding it during system testing costs hours. Finding it in production costs days and damages reputation. Static testing is the highest-ROI testing activity.

**Informal vs Formal Reviews** The same work product can be reviewed informally first (to catch obvious issues cheaply) and then formally (for audit trails or critical components). The level of formality depends on SDLC, maturity, criticality, and regulatory needs.

**Common Mistake:** Assuming all anomalies found in reviews are defects. Anomalies include questions and recommendations; only some are actual defects.

**Inspection Rule:** The author cannot be the review leader or moderator. This ensures objectivity and prevents the author from controlling the meeting.

## 5. Chapter Summary / Tóm tắt Chương
- Static testing evaluates work products without execution: reviews (manual) and static analysis (tool-based).

- Applicable to requirements, code, test plans, charters, and almost any readable work product.

- Detects defects early, finds defects dynamic testing cannot, improves communication, and reduces overall cost.

- Static finds defects directly; dynamic finds them via failures. Static works on non-executable products; dynamic requires execution.

- The review process: Planning → Initiation → Individual Review → Communication/Analysis → Fixing/Reporting.

- Roles: Manager, Author, Moderator, Scribe, Reviewer, Review Leader.

- Review types (least to most formal): Informal → Walkthrough → Technical Review → Inspection.

- Inspection rules: Author cannot be leader/moderator; metrics are collected.

- Success factors: clear objectives, right type, small chunks, feedback, preparation time, management support, culture, training, facilitation.

## 6. Quick Review / Ôn tập Nhanh
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