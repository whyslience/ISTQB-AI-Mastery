
## 1. Overview / Tổng quan


This chapter establishes the foundation for the ISTQB® Foundation Level certification. It defines what testing is, why it is necessary, the seven universal principles of testing, the test process (activities and testware), traceability, roles, and essential skills. Mastering this chapter is essential because it underpins every subsequent topic in the syllabus.

Chương này thiết lập nền tảng cho chứng chỉ ISTQB® Foundation Level. Nội dung định nghĩa kiểm thử là gì, tại sao cần kiểm thử, bảy nguyên tắc kiểm thử phổ quát, quy trình kiểm thử (các hoạt động và tài liệu kiểm thử), truy xuất nguồn gốc, vai trò và các kỹ năng thiết yếu. Nắm vững chương này là bắt buộc vì nó là cơ sở cho mọi chủ đề tiếp theo trong giáo trình.

**Syllabus Alignment / Phạm vi Giáo trình:** FL-BO1, FL-BO2, FL-BO12

**Training Time / Thời gian Đào tạo:** 180 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi

### 2.1 What is Testing? / Kiểm thử là gì?

#### Definition / Định nghĩa

Testing is a set of activities to discover **defects** and evaluate the quality of software work products. These work products, when being tested, are known as **test objects**.

Kiểm thử là tập hợp các hoạt động nhằm phát hiện **khiếm khuyết** và đánh giá chất lượng của các sản phẩm làm việc phần mềm. Các sản phẩm này, khi được kiểm thử, được gọi là **đối tượng kiểm thử**.

#### Scope / Phạm vi

It includes both **dynamic testing** (executing software) and **static testing** (reviews and static analysis without execution).

Bao gồm **kiểm thử động** (thực thi phần mềm) và **kiểm thử tĩnh** (đánh giá và phân tích tĩnh không thực thi).

#### Verification vs Validation / Xác minh so với Xác thực

* **Verification** checks whether the system meets **specified requirements** ("Are we building the product right?").
* **Xác minh** kiểm tra xem hệ thống có đáp ứng **yêu cầu đã đặc tả** không ("Chúng ta có đang xây dựng đúng sản phẩm không?").
* **Validation** checks whether the system meets **users' and stakeholders' needs** in its operational environment ("Are we building the right product?").
* **Xác thực** kiểm tra xem hệ thống có đáp ứng **nhu cầu của người dùng và bên liên quan** trong môi trường vận hành không ("Chúng ta có đang xây dựng sản phẩm đúng không?").

#### Common Misconceptions / Nhận thức sai lầm phổ biến

* Testing is only about running tests.
* Kiểm thử chỉ là chạy kiểm thử.
* Testing focuses entirely on verification.
* Kiểm thử chỉ tập trung vào xác minh.

#### Typical Test Objectives / Các mục tiêu kiểm thử điển hình

* Evaluating work products (requirements, user stories, designs, code).
* Đánh giá sản phẩm làm việc (yêu cầu, user story, thiết kế, code).
* Causing failures and finding **defects**.
* Gây ra thất bại và tìm **khiếm khuyết**.
* Ensuring required coverage of a **test object**.
* Đảm bảo độ bao phủ yêu cầu cho **đối tượng kiểm thử**.
* Reducing the risk level of inadequate software quality.
* Giảm thiểu mức độ rủi ro của chất lượng phần mềm không đạt.
* **Verifying** whether specified requirements have been fulfilled.
* **Xác minh** các yêu cầu đã đặc tả được đáp ứng.
* **Verifying** contractual, legal, and regulatory compliance.
* **Xác minh** tuân thủ hợp đồng, pháp luật và quy định.
* Providing information to stakeholders to allow them to make informed decisions.
* Cung cấp thông tin cho bên liên quan để họ đưa ra quyết định đúng đắn.
* Building confidence in the quality of the **test object**.
* Xây dựng niềm tin vào chất lượng **đối tượng kiểm thử**.
* **Validating** whether the **test object** is complete and works as expected.
* **Xác thực** tính đầy đủ và hành vi đúng như mong đợi của **đối tượng kiểm thử**.

### 2.2 Testing and Debugging / Kiểm thử và Gỡ lỗi

#### Concepts / Khái niệm

Testing and debugging are **separate activities**. **Dynamic testing** can trigger failures caused by **defects**. **Debugging** is then concerned with finding the causes of the failure, analyzing them, and eliminating them.

Kiểm thử và gỡ lỗi là **hai hoạt động riêng biệt**. **Kiểm thử động** có thể kích hoạt thất bại do **khiếm khuyết** gây ra. **Gỡ lỗi** sau đó tìm nguyên nhân của thất bại, phân tích và loại bỏ chúng.

#### Debugging Process / Quy trình gỡ lỗi

1. **Reproduction** of a failure.
1. **Tái hiện** thất bại.
2. **Diagnosis** (finding the **defect**).
2. **Chẩn đoán** (tìm **khiếm khuyết**).
3. **Fixing** the **defect**.
3. **Sửa** **khiếm khuyết**.

#### Post-fix activities / Hoạt động sau sửa lỗi

After fixing, **confirmation testing** checks whether the fix resolved the problem. **Regression testing** checks whether the fix caused failures in other parts of the system.

Sau khi sửa, **kiểm thử xác nhận** kiểm tra xem bản sửa lỗi đã giải quyết vấn đề chưa. **Kiểm thử hồi quy** kiểm tra xem bản sửa lỗi có gây ra thất bại ở các phần khác của hệ thống không.

### 2.3 Why is Testing Necessary? / Tại sao cần Kiểm thử?

#### Necessity / Sự cần thiết

Testing contributes to project success by providing a **cost-effective** means of detecting **defects**, evaluating the quality of a **test object**, and meeting **contractual, legal, or regulatory requirements**.

Kiểm thử đóng góp vào thành công dự án bằng cách cung cấp phương tiện **hiệu quả về chi phí** để phát hiện **khiếm khuyết**, đánh giá chất lượng **đối tượng kiểm thử** và đáp ứng **yêu cầu hợp đồng, pháp luật hoặc quy định**.

### 2.4 Seven Principles of Testing / Bảy Nguyên tắc Kiểm thử

#### Principles / Nguyên tắc

1. **Testing shows the presence of defects, not their absence.**
1. **Kiểm thử cho thấy sự hiện diện của khiếm khuyết, không phải sự vắng mặt của chúng.**
2. **Exhaustive testing is impossible.**
2. **Kiểm thử toàn diện là không thể.**
3. **Early testing saves time and money.**
3. **Kiểm thử sớm tiết kiệm thời gian và tiền bạc.**
4. **Defects cluster together.**
4. **Khiếm khuyết có xu hướng tập trung.**
5. **Tests wear out.**
5. **Các ca kiểm thử bị "mòn".**
6. **Testing is context dependent.**
6. **Kiểm thử phụ thuộc ngữ cảnh.**
7. **Absence-of-defects fallacy.**
7. **Ảo tưởng về sự vắng mặt khiếm khuyết.**

## 3. Key Terminology / Thuật ngữ Quan trọng

* **Testing / Kiểm thử**: A set of activities to discover **defects** and evaluate quality.
* **Testing / Kiểm thử**: Tập hợp các hoạt động nhằm phát hiện **khiếm khuyết** và đánh giá chất lượng.
* **Test Object / Đối tượng kiểm thử**: The work product being tested.
* **Test Object / Đối tượng kiểm thử**: Sản phẩm làm việc đang được kiểm thử.
* **Defect / Khiếm khuyết**: A flaw in a work product that can cause the system to fail.
* **Defect / Khiếm khuyết**: Khuyết điểm trong sản phẩm làm việc có thể khiến hệ thống thất bại.
* **Error / Lỗi**: A human mistake that produces a **defect**.
* **Error / Lỗi**: Sai sót của con người tạo ra **khiếm khuyết**.
* **Failure / Thất bại**: The inability of a system to perform its required function.
* **Failure / Thất bại**: Hệ thống không thể thực hiện chức năng yêu cầu.
* **Verification / Xác minh**: Checking whether the system meets specified requirements.
* **Verification / Xác minh**: Kiểm tra xem hệ thống có đáp ứng yêu cầu đã đặc tả không.
* **Validation / Xác thực**: Checking whether the system meets user needs in operation.
* **Validation / Xác thực**: Kiểm tra xem hệ thống có đáp ứng nhu cầu của người dùng khi vận hành.