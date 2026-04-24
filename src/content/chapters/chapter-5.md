**Chapter 5: Managing the Test Activities**

**Chương 5: Quản lý Các Hoạt động Kiểm thử**

## 1. Overview / Tổng quan
This chapter covers test planning, estimation, prioritization, risk management, monitoring, control, configuration management, and defect management. It provides the management framework within which technical testing activities operate.

Chương này bao gồm lập kế hoạch kiểm thử, ước lượng, ưu tiên, quản lý rủi ro, giám sát, điều khiển, quản lý cấu hình và quản lý khiếm khuyết. Nội dung cung cấp khung quản lý mà trong đó các hoạt động kiểm thử kỹ thuật vận hành.

**Syllabus Alignment:** FL-BO7, FL-BO9, FL-BO13, FL-BO14
**Training Time:** 335 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi
### 2.1 Test Planning / Lập kế hoạch Kiểm thử
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

**Tester's Contribution to Planning / Đóng góp của Kiểm thử viên vào Lập kế hoạch**

- **Release Planning / Lập kế hoạch Phát hành:** Write testable user stories, define acceptance criteria, participate in risk analysis, estimate effort, determine approach.

- **Iteration Planning / Lập kế hoạch Lặp:** Detailed risk analysis of stories, determine testability, break down into tasks, estimate testing tasks, refine functional/non-functional aspects.

### 2.2 Entry and Exit Criteria / Tiêu chí Đầu vào và Đầu ra
**Table**


| **/** | **Entry Criteria / Đầu vào** | **Exit Criteria / Đầu ra** |
| --- | --- | --- |
| **Definition / Định nghĩa** | Preconditions to start an activity / Điều kiện tiên quyết để bắt đầu hoạt động | Conditions to declare completion / Điều kiện tuyên bố hoàn thành |
| **Examples / Ví dụ** | Resources available, testware ready, initial quality level (smoke tests passed) / Nguồn lực sẵn sàng, tài liệu kiểm thử sẵn sàng, mức chất lượng ban đầu (kiểm thử khói đạt) | Coverage achieved, unresolved defects within limit, planned tests executed, regression tests passed / Đạt độ bao phủ, khiếm khuyết chưa giải quyết trong giới hạn, kiểm thử đã lên kế hoạch được thực thi, kiểm thử hồi quy đạt |
| **Agile Terms / Thuật ngữ Agile** | Definition of Ready / Định nghĩa Sẵn sàng | Definition of Done / Định nghĩa Hoàn thành |


**Note / Lưu ý:** Running out of time or budget can be valid exit criteria if stakeholders accept the risk.

### 2.3 Estimation Techniques / Kỹ thuật Ước lượng
**Table**


| **Technique / Kỹ thuật** | **Type / Loại** | **Description / Mô tả** |
| --- | --- | --- |
| **Ratios / Tỷ lệ** | Metrics-based / Dựa trên số liệu | Use historical ratios (e.g., dev:test = 3:2) / Dùng tỷ lệ lịch sử |
| **Extrapolation / Ngoại suy** | Metrics-based / Dựa trên số liệu | Use early project measurements to project remaining effort / Dùng số liệu sớm để dự đoán công việc còn lại |
| **Wideband Delphi** | Expert-based / Dựa trên chuyên gia | Experts estimate in isolation, discuss deviations, re-estimate iteratively until consensus / Chuyên gia ước lượng riêng, thảo luận độ lệch, ước lượng lại đến khi đồng thuận |
| **Planning Poker** | Variant of Wideband Delphi / Biến thể | Uses numbered cards for effort size / Dùng thẻ số cho kích thước công sức |
| **Three-point Estimation** | Expert-based / Dựa trên chuyên gia | Optimistic (a), Most likely (m), Pessimistic (b). Formula: **E = (a + 4m + b) / 6**. Standard deviation: **SD = (b - a) / 6** / Lạc quan, Khả dĩ nhất, Bi quan |


### 2.4 Test Case Prioritization / Ưu tiên Ca kiểm thử
Strategies / Chiến lược:

- **Risk-based / Dựa trên rủi ro:** Execute tests covering highest risks first.

- **Coverage-based / Dựa trên bao phủ:** Execute tests achieving highest coverage first (or highest additional coverage).

- **Requirements-based / Dựa trên yêu cầu:** Execute tests linked to highest priority requirements first.

**Constraints / Ràng buộc:** Dependencies may force lower-priority tests to run first. Resource availability (tools, environments, people) also affects order.

### 2.5 Test Pyramid / Kim tự tháp Kiểm thử
Model showing different test granularity levels.

- **Bottom / Đáy:** Unit/Component tests --- small, isolated, fast, many needed.

- **Middle / Giữa:** Integration/Service tests.

- **Top / Đỉnh:** End-to-end/UI tests --- complex, slow, fewer needed.

Higher layer = lower granularity, lower isolation, higher execution time.

### 2.6 Testing Quadrants / Bốn Phần tư Kiểm thử
Model by Brian Marick for Agile. Combines facing (business/technology) and purpose (support team/critique product).

**Table**


| **/** | **Support Team / Hỗ trợ nhóm** | **Critique Product / Phê phán sản phẩm** |
| --- | --- | --- |
| **Technology Facing / Hướng công nghệ** | **Q1:** Component tests, component integration tests (automated, CI) / Kiểm thử thành phần, tích hợp thành phần | **Q4:** Smoke tests, non-functional tests (except usability) / Kiểm thử khói, phi chức năng (trừ khả dụng) |
| **Business Facing / Hướng kinh doanh** | **Q2:** Functional tests, examples, user story tests, API testing (manual or automated) / Kiểm thử chức năng, ví dụ, kiểm thử user story | **Q3:** Exploratory testing, usability testing, UAT (manual, user-oriented) / Kiểm thử khám phá, khả dụng, UAT |


### 2.7 Risk Management / Quản lý Rủi ro
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

### 2.8 Monitoring, Control, and Completion / Giám sát, Điều khiển và Kết thúc
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

### 2.9 Configuration Management / Quản lý Cấu hình
Provides discipline for identifying, controlling, and tracking work products as configuration items.

- Ensures unique identification, version control, change tracking, and traceability.

- Baselines are established; changes require formal change control.

- Supports reproducibility of previous test results.

### 2.10 Defect Management / Quản lý Khiếm khuyết
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

## 3. Key Terminology / Thuật ngữ Quan trọng
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

## 4. Deep Understanding / Hiểu Sâu
**Entry vs Exit Criteria** Entry criteria prevent starting testing when preconditions are unmet (wasting effort). Exit criteria provide an objective stopping point and prevent endless testing.

**Test Pyramid in Agile** Agile teams aim for many fast, automated unit tests (base of pyramid) and fewer slow UI tests (top). This provides rapid feedback and reduces maintenance cost of flaky end-to-end tests.

**Project vs Product Risk Examples**

- Project risk: "Our test environment will be delivered two weeks late" (affects schedule).

- Product risk: "The payment module may calculate tax incorrectly" (affects quality).

**When to Stop Testing** Ideally, when exit criteria are met. Practically, when time/budget runs out and stakeholders accept residual risk. The test plan should document this decision-making framework.

## 5. Chapter Summary / Tóm tắt Chương
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

## 6. Quick Review / Ôn tập Nhanh
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