
## 1. Overview / Tổng quan

### Overview / Tổng quan

Static testing evaluates work products without executing the software. It includes manual reviews and tool-supported static analysis. This chapter covers the types of work products that can be examined, the value of static testing, differences from dynamic testing, the review process, review roles, review types, and success factors.

Kiểm thử tĩnh đánh giá sản phẩm làm việc mà không thực thi phần mềm. Nó bao gồm đánh giá thủ công và phân tích tĩnh được hỗ trợ bởi công cụ. Chương này bao gồm các loại sản phẩm làm việc có thể được kiểm tra, giá trị của kiểm thử tĩnh, sự khác biệt với kiểm thử động, quy trình đánh giá, vai trò, loại đánh giá và các yếu tố thành công.

**Syllabus Alignment / Phạm vi Giáo trình:** FL-BO4
**Training Time / Thời gian Đào tạo:** 80 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi

### 2.1 Static Testing Basics / Cơ bản về Kiểm thử Tĩnh

#### Definition / Định nghĩa

Evaluation of work products without execution. Objectives: improve quality, detect **defects**, assess readability, completeness, correctness, testability, and consistency.

Đánh giá sản phẩm làm việc mà không cần thực thi. Mục tiêu: cải thiện chất lượng, phát hiện **khiếm khuyết**, đánh giá khả năng đọc, tính đầy đủ, tính đúng đắn, khả năng kiểm thử và tính nhất quán.

#### Methods / Phương pháp

* **Manual examination**: Reviews (ranging from informal to formal).
* **Kiểm tra thủ công**: Các cuộc đánh giá (từ không chính thức đến chính thức).
* **Tool-supported**: Static analysis (code analysis, spelling checkers, readability tools).
* **Hỗ trợ bởi công cụ**: Phân tích tĩnh (phân tích mã nguồn, trình kiểm tra chính tả, công cụ đo lường độ dễ đọc).

### 2.2 Value of Static Testing / Giá trị của Kiểm thử Tĩnh

#### Early Defect Detection / Phát hiện khiếm khuyết sớm

Fulfills the principle of early testing. **Defects** found in requirements or design are far cheaper to fix than those found in code or production.

Thực hiện nguyên tắc kiểm thử sớm. Các **khiếm khuyết** được tìm thấy trong yêu cầu hoặc thiết kế có chi phí sửa chữa rẻ hơn nhiều so với khiếm khuyết được tìm thấy trong code hoặc môi trường vận hành.

#### Specific Defects / Các khiếm khuyết đặc thù

Static testing can find **defects** not easily detectable by dynamic testing, such as unreachable code, design pattern violations, and inconsistencies in requirements.

Kiểm thử tĩnh có thể tìm thấy các **khiếm khuyết** mà kiểm thử động khó phát hiện, như mã nguồn không bao giờ được thực thi, vi phạm mẫu thiết kế và sự không nhất quán trong yêu cầu.

### 2.3 Static vs Dynamic Testing / Kiểm thử Tĩnh vs Động

#### Static Testing / Kiểm thử Tĩnh

Does not involve execution. Finds **defects** directly. Applicable to both executable and non-executable work products.

Không bao gồm việc thực thi. Phát hiện **khiếm khuyết** trực tiếp. Áp dụng được cho cả sản phẩm làm việc thực thi được và không thực thi được.

#### Dynamic Testing / Kiểm thử Động

Requires execution. Finds **defects** via failures. Applicable only to executable work products.

Đòi hỏi thực thi phần mềm. Phát hiện **khiếm khuyết** thông qua các thất bại. Chỉ áp dụng được cho các sản phẩm làm việc có thể thực thi.

## 3. Review Process / Quy trình Đánh giá

### Review Activities / Các Hoạt động Đánh giá

1. **Planning**: Define scope and purpose.
1. **Lập kế hoạch**: Xác định phạm vi và mục đích.
2. **Review Initiation**: Distribute work products and explain roles.
2. **Khởi động đánh giá**: Phân phối sản phẩm và giải thích vai trò.
3. **Individual Review**: Reviewers identify anomalies and questions.
3. **Đánh giá cá nhân**: Người đánh giá xác định các bất thường và câu hỏi.
4. **Communication and Analysis**: Discuss findings and decide on status.
4. **Giao tiếp và Phân tích**: Thảo luận các phát hiện và quyết định trạng thái.
5. **Fixing and Reporting**: Create **defect** reports and verify fixes.
5. **Sửa chữa và Báo cáo**: Tạo báo cáo **khiếm khuyết** và xác minh kết quả sửa.

## 4. Key Terminology / Thuật ngữ Quan trọng

* **Static Testing / Kiểm thử Tĩnh**: Testing without executing the software.
* **Kiểm thử Tĩnh**: Kiểm thử mà không thực thi phần mềm.
* **Dynamic Testing / Kiểm thử Động**: Testing that involves executing the software.
* **Kiểm thử Động**: Kiểm thử bao gồm việc thực thi phần mềm.
* **Review / Đánh giá**: A static testing technique where work products are examined by people.
* **Đánh giá**: Kỹ thuật kiểm thử tĩnh trong đó con người kiểm tra sản phẩm làm việc.
* **Inspection / Thanh tra**: The most formal review type with defined process and metrics collection.
* **Thanh tra**: Loại đánh giá hình thức nhất với quy trình xác định và thu thập số liệu.
* **Walkthrough / Duyệt qua**: A review led by the author with multiple possible objectives.
* **Duyệt qua**: Cuộc đánh giá do tác giả dẫn dắt với nhiều mục tiêu khác nhau.