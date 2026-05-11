# Chapter 3: Static Testing / Chương 3: Kiểm thử Tĩnh

> **ISTQB CTFL v4.0.1** · **80 minutes** / **80 phút** giảng dạy tối thiểu (theo giáo trình chính thức).

## Keywords / Từ khóa

anomaly, dynamic testing, formal review, informal review, inspection, review, static analysis, static testing, technical review, walkthrough

bất thường (anomaly), kiểm thử động, đánh giá chính thức, đánh giá không chính thức, thanh tra (inspection), đánh giá (review), phân tích tĩnh, kiểm thử tĩnh, đánh giá kỹ thuật, duyệt qua (walkthrough)

## Learning Objectives for Chapter 3 / Mục tiêu học tập Chương 3

### 3.1 Static Testing Basics / Cơ bản về Kiểm thử Tĩnh

* **FL-3.1.1 (K1)** Recognize types of work products that can be examined by static testing / **FL-3.1.1 (K1)** Nhận diện loại sản phẩm làm việc có thể kiểm tra bằng kiểm thử tĩnh
* **FL-3.1.2 (K2)** Explain the value of static testing / **FL-3.1.2 (K2)** Giải thích giá trị của kiểm thử tĩnh
* **FL-3.1.3 (K2)** Compare static testing and dynamic testing / **FL-3.1.3 (K2)** So sánh kiểm thử tĩnh và kiểm thử động

### 3.2 Feedback and Review Process / Phản hồi và Quy trình Đánh giá

* **FL-3.2.1 (K1)** Identify the benefits of early and frequent stakeholder feedback / **FL-3.2.1 (K1)** Nhận diện lợi ích của phản hồi sớm và thường xuyên từ bên liên quan
* **FL-3.2.2 (K2)** Summarize the activities of the review process / **FL-3.2.2 (K2)** Tóm tắt các hoạt động trong quy trình đánh giá
* **FL-3.2.3 (K1)** Recall which responsibilities are assigned to the principal roles when performing reviews / **FL-3.2.3 (K1)** Ghi nhớ trách nhiệm của các vai trò chính khi thực hiện review
* **FL-3.2.4 (K2)** Compare the different review types / **FL-3.2.4 (K2)** So sánh các loại hình đánh giá
* **FL-3.2.5 (K1)** Recall the factors that contribute to a successful review / **FL-3.2.5 (K1)** Ghi nhớ các yếu tố góp phần vào review thành công

---

## 3.1 Static Testing Basics / Cơ bản về Kiểm thử Tĩnh

Unlike dynamic testing, which requires the execution of the software being tested, static testing relies on the manual examination of work products (reviews) or tool-driven evaluation of the code or other work products (static analysis).

Khác với kiểm thử động, yêu cầu thực thi phần mềm đang được kiểm thử, kiểm thử tĩnh dựa trên việc kiểm tra thủ công các sản phẩm làm việc (đánh giá - review) hoặc đánh giá dựa trên công cụ đối với mã nguồn hoặc các sản phẩm làm việc khác (phân tích tĩnh).

### 3.1.1 Work Products Examinable by Static Testing / Các Sản phẩm làm việc có thể Kiểm tra bằng Kiểm thử Tĩnh

Almost any work product can be examined using static testing, including:

Hầu hết mọi sản phẩm làm việc đều có thể được kiểm tra bằng kiểm thử tĩnh, bao gồm:

* Requirements specifications (e.g., business requirements, functional requirements).
* Đặc tả yêu cầu (ví dụ: yêu cầu kinh doanh, yêu cầu chức năng).
* User stories, acceptance criteria, and backlogs.
* User story, tiêu chí chấp nhận và danh sách tồn đọng (backlogs).
* Design specifications (e.g., architectural designs, interface designs).
* Đặc tả thiết kế (ví dụ: thiết kế kiến trúc, thiết kế giao diện).
* Source code.
* Mã nguồn.
* Testware (e.g., test plans, test cases, test scripts).
* Tài liệu kiểm thử - testware (ví dụ: kế hoạch kiểm thử, ca kiểm thử, kịch bản kiểm thử).
* User guides and other documentation.
* Hướng dẫn sử dụng và các tài liệu khác.
* Contracts and project plans.
* Hợp đồng và kế hoạch dự án.

### 3.1.2 Value of Static Testing / Giá trị của Kiểm thử Tĩnh

Static testing provides many benefits, especially when applied early in the SDLC:

Kiểm thử tĩnh mang lại nhiều lợi ích, đặc biệt khi được áp dụng sớm trong SDLC:

* Detecting and correcting defects more efficiently, and prior to dynamic test execution.
* Phát hiện và sửa chữa khiếm khuyết hiệu quả hơn, và trước khi thực thi kiểm thử động.
* Identifying defects that are not easily found by dynamic testing (e.g., unreachable code, inconsistent requirements).
* Xác định các khiếm khuyết không dễ tìm thấy bằng kiểm thử động (ví dụ: mã nguồn không bao giờ được thực thi, các yêu cầu mâu thuẫn).
* Preventing defects in design or code by identifying issues in requirements.
* Ngăn ngừa khiếm khuyết trong thiết kế hoặc mã nguồn bằng cách xác định các vấn đề trong yêu cầu.
* Improving the quality of work products and the communication between team members.
* Cải thiện chất lượng sản phẩm làm việc và sự giao tiếp giữa các thành viên trong nhóm.
* Reducing development and testing time and costs.
* Giảm thời gian và chi phí phát triển và kiểm thử.
* Reducing the number of defects found during dynamic testing or in operation.
* Giảm số lượng khiếm khuyết được tìm thấy trong quá trình kiểm thử động hoặc khi vận hành.

### 3.1.3 Differences between Static and Dynamic Testing / Sự khác biệt giữa Kiểm thử Tĩnh và Kiểm thử Động

Static and dynamic testing have the same objective (evaluating quality and finding defects), but they are complementary.

Kiểm thử tĩnh và kiểm thử động có cùng mục tiêu (đánh giá chất lượng và tìm kiếm khiếm khuyết), nhưng chúng bổ trợ cho nhau.

* Static testing finds defects directly in the work products, while dynamic testing finds failures that are caused by defects.
* Kiểm thử tĩnh tìm khiếm khuyết trực tiếp trong sản phẩm làm việc, trong khi kiểm thử động tìm thấy các lỗi (failure) gây ra bởi các khiếm khuyết.
* Static testing can be used to improve the quality of work products that cannot be executed (e.g., requirements).
* Kiểm thử tĩnh có thể được dùng để cải thiện chất lượng của các sản phẩm làm việc không thể thực thi (ví dụ: yêu cầu).
* Static testing can find defects (e.g., security vulnerabilities) more efficiently than dynamic testing.
* Kiểm thử tĩnh có thể tìm thấy các khiếm khuyết (ví dụ: lỗ hổng bảo mật) hiệu quả hơn kiểm thử động.

## 3.2 Feedback and Review Process / Phản hồi và Quy trình Đánh giá (Review)

### 3.2.1 Benefits of Early and Frequent Stakeholder Feedback / Lợi ích của Phản hồi sớm và thường xuyên từ các Bên liên quan

Frequent feedback throughout the SDLC helps ensure that the work products meet stakeholder needs and requirements. It helps prevent misunderstandings and reduces the risk of developing the wrong features.

Phản hồi thường xuyên trong suốt SDLC giúp đảm bảo rằng các sản phẩm làm việc đáp ứng nhu cầu và yêu cầu của các bên liên quan. Nó giúp ngăn ngừa sự hiểu lầm và giảm rủi ro phát triển sai tính năng.

### 3.2.2 Review Process Activities / Các Hoạt động của Quy trình Đánh giá

The activities of a formal review process are:

Các hoạt động của một quy trình đánh giá chính thức là:

* **Planning**: defining the scope, objectives, and participants.
  **Lập kế hoạch**: định nghĩa phạm vi, mục tiêu và thành phần tham gia.
* **Review initiation**: distributing the work products and preparing the participants.
  **Bắt đầu đánh giá**: phân phối các sản phẩm làm việc và chuẩn bị cho những người tham gia.
* **Individual review**: participants examine the work product individually to identify anomalies.
  **Đánh giá cá nhân**: những người tham gia tự kiểm tra sản phẩm làm việc để xác định các điểm bất thường.
* **Communication and analysis**: discussing the identified anomalies and deciding on their status.
  **Trao đổi và phân tích**: thảo luận về các điểm bất thường đã xác định và quyết định trạng thái của chúng.
* **Fixing and reporting**: fixing the defects and reporting the review results.
  **Sửa chữa và báo cáo**: sửa chữa các khiếm khuyết và báo cáo kết quả đánh giá.

### 3.2.3 Roles and Responsibilities in Reviews / Vai trò và Trách nhiệm trong Đánh giá

Typical roles in a formal review are:

Các vai trò điển hình trong một buổi đánh giá chính thức là:

* **Author**: the person who created the work product being reviewed.
  **Tác giả**: người tạo ra sản phẩm làm việc đang được đánh giá.
* **Management**: responsible for the review planning and resource allocation.
  **Quản lý**: chịu trách nhiệm lập kế hoạch đánh giá và phân bổ nguồn lực.
* **Facilitator** (Moderator): ensures the review meetings run effectively.
  **Người điều phối** (Moderator): đảm bảo các cuộc họp đánh giá diễn ra hiệu quả.
* **Review Leader**: overall responsibility for the review.
  **Trưởng nhóm đánh giá**: chịu trách nhiệm tổng thể cho cuộc đánh giá.
* **Reviewers**: subject matter experts or stakeholders who examine the work product.
  **Người đánh giá**: các chuyên gia trong lĩnh vực hoặc các bên liên quan thực hiện kiểm tra sản phẩm làm việc.
* **Scribe** (Recorder): documents the findings and decisions made during the review meeting.
  **Người ghi chép** (Recorder): ghi lại các phát hiện và quyết định được đưa ra trong cuộc họp đánh giá.

### 3.2.4 Review Types / Các Loại Đánh giá

* **Informal review**: no defined process, no formal documentation. Simple and low cost.
  **Đánh giá không chính thức**: không có quy trình định nghĩa, không có tài liệu chính thức. Đơn giản và chi phí thấp.
* **Walkthrough**: led by the author to explain the work product and gather feedback. Useful for knowledge transfer.
  **Walkthrough**: do tác giả dẫn dắt để giải thích sản phẩm làm việc và thu thập phản hồi. Hữu ích cho việc chuyển giao kiến thức.
* **Technical review**: led by a facilitator, focuses on technical quality and consensus.
  **Đánh giá kỹ thuật**: do người điều phối dẫn dắt, tập trung vào chất lượng kỹ thuật và sự đồng thuận.
* **Inspection**: the most formal type of review, with a documented process and entry/exit criteria. Uses checklists and metrics.
  **Kiểm tra (Inspection)**: loại đánh giá chính thức nhất, với quy trình được lập tài liệu và các tiêu chí đầu vào/đầu ra. Sử dụng danh mục kiểm tra (checklists) và các chỉ số (metrics).

### 3.2.5 Success Factors for Reviews / Các Yếu tố Thành công cho Đánh giá

Success factors include:

Các yếu tố thành công bao gồm:

* Clearly defined objectives and scope.
* Mục tiêu và phạm vi được định nghĩa rõ ràng.
* Right participants with the necessary skills and knowledge.
* Những người tham gia phù hợp với các kỹ năng và kiến thức cần thiết.
* Participants have enough time to prepare.
* Những người tham gia có đủ thời gian để chuẩn bị.
* Management support and a culture of constructive criticism.
* Sự hỗ trợ từ quản lý và một văn hóa phê bình mang tính xây dựng.
* Using checklists to focus the review effort.
* Sử dụng danh mục kiểm tra để tập trung nỗ lực đánh giá.
* Continuous process improvement based on review metrics.
* Cải tiến quy trình liên tục dựa trên các chỉ số đánh giá.