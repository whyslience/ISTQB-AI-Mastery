
## 1. Overview / Tổng quan

### Overview / Tổng quan

This chapter covers test planning, estimation, prioritization, risk management, monitoring, control, configuration management, and **defect** management. It provides the management framework within which technical testing activities operate.

Chương này bao gồm lập kế hoạch kiểm thử, ước lượng, ưu tiên, quản lý rủi ro, giám sát, điều khiển, quản lý cấu hình và quản lý **khiếm khuyết**. Nội dung cung cấp khung quản lý mà trong đó các hoạt động kiểm thử kỹ thuật vận hành.

**Syllabus Alignment / Phạm vi Giáo trình:** FL-BO7, FL-BO9, FL-BO13, FL-BO14
**Training Time / Thời gian Đào tạo:** 335 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi

### 2.1 Test Planning / Lập kế hoạch Kiểm thử

#### Concept / Khái niệm

A test plan documents objectives, resources, and processes. It serves as communication with stakeholders and demonstrates adherence to test policy/strategy.

Kế hoạch kiểm thử ghi lại các mục tiêu, nguồn lực và quy trình. Nó đóng vai trò là phương tiện giao tiếp với các bên liên quan và chứng minh việc tuân thủ chính sách/chiến lược kiểm thử.

#### Typical Content / Nội dung điển hình

* Context (scope, objectives, basis)
* Ngữ cảnh (phạm vi, mục tiêu, cơ sở)
* Assumptions and constraints
* Giả định và ràng buộc
* Stakeholders (roles, responsibilities)
* Các bên liên quan (vai trò, trách nhiệm)
* Risk register (product and project risks)
* Sổ đăng ký rủi ro (rủi rỏ sản phẩm và dự án)
* Test approach (levels, types, techniques)
* Phương pháp kiểm thử (mức độ, loại, kỹ thuật)
* Budget and schedule
* Ngân sách và lịch trình

### 2.2 Entry and Exit Criteria / Tiêu chí Đầu vào và Đầu ra

#### Entry Criteria / Tiêu chí Đầu vào

Preconditions to start an activity. Examples include resources availability, testware readiness, and initial quality level (e.g., smoke tests passed).

Các điều kiện tiên quyết để bắt đầu một hoạt động. Ví dụ bao gồm sự sẵn sàng của nguồn lực, tài liệu kiểm thử sẵn sàng và mức chất lượng ban đầu (ví dụ: đã vượt qua kiểm thử khói).

#### Exit Criteria / Tiêu chí Đầu ra

Conditions to declare completion. Examples include coverage achieved, unresolved **defects** within limit, and planned tests executed.

Các điều kiện để tuyên bố hoàn thành. Ví dụ bao gồm đạt được độ bao phủ, số lượng **khiếm khuyết** chưa giải quyết nằm trong giới hạn và các bài kiểm thử đã lập kế hoạch được thực thi.

### 2.3 Risk Management / Quản lý Rủi ro

#### Risk Level / Mức độ rủi ro

Determined by **Risk Likelihood × Risk Impact**.

Được xác định bằng **Khả năng xảy ra rủi ro × Tác động của rủi ro**.

#### Types of Risk / Các loại rủi ro

* **Project Risks**: Related to management/control (e.g., delays, skill shortages).
* **Rủi ro Dự án**: Liên quan đến quản lý/điều khiển (ví dụ: chậm trễ, thiếu hụt kỹ năng).
* **Product Risks**: Related to quality characteristics (e.g., missing functionality, poor performance).
* **Rủi ro Sản phẩm**: Liên quan đến các đặc tính chất lượng (ví dụ: thiếu chức năng, hiệu suất kém).

## 3. Defect Management / Quản lý Khiếm khuyết

### Workflow / Quy trình làm việc

Log → Analyze/Classify → Decide response (fix or keep) → Close.

Ghi nhận → Phân tích/Phân loại → Quyết định phản hồi (sửa hoặc giữ lại) → Đóng.

### Defect Report Contents / Nội dung Báo cáo Khiếm khuyết

* Unique identifier
* Định danh duy nhất
* Title/short summary
* Tiêu đề/tóm tắt ngắn gọn
* **Test object** and environment identification
* Định danh **đối tượng kiểm thử** và môi trường
* Description of failure (steps, logs, screenshots)
* Mô tả về thất bại (các bước, nhật ký, ảnh chụp màn hình)
* Expected and actual results
* Kết quả mong đợi và thực tế
* Severity and Priority
* Mức độ nghiêm trọng và Độ ưu tiên

## 4. Key Terminology / Thuật ngữ Quan trọng

* **Test Plan / Kế hoạch Kiểm thử**: Document describing test objectives, resources, and processes.
* **Kế hoạch Kiểm thử**: Tài liệu mô tả mục tiêu, nguồn lực và quy trình kiểm thử.
* **Entry Criteria / Tiêu chí Đầu vào**: Preconditions to start a test activity.
* **Tiêu chí Đầu vào**: Điều kiện tiên quyết để bắt đầu hoạt động kiểm thử.
* **Exit Criteria / Tiêu chí Đầu ra**: Conditions to declare a test activity complete.
* **Tiêu chí Đầu ra**: Điều kiện tuyên bố hoạt động kiểm thử hoàn thành.
* **Risk / Rủi ro**: Potential event causing adverse effect.
* **Rủi ro**: Sự kiện tiềm ẩn gây ảnh hưởng bất lợi.
* **Product Risk / Rủi ro Sản phẩm**: Risk related to product quality characteristics.
* **Rủi ro Sản phẩm**: Rủi ro liên quan đến các đặc tính chất lượng của sản phẩm.
* **Defect Report / Báo cáo Khiếm khuyết**: Document reporting an anomaly for investigation and resolution.
* **Báo cáo Khiếm khuyết**: Tài liệu báo cáo bất thường để phục vụ điều tra và giải quyết.