# Chapter 4: Test Analysis and Design / Chương 4: Phân tích và Thiết kế Kiểm thử

## 4.1 Test Techniques Overview / 4.1 Tổng quan về các Kỹ thuật Kiểm thử

Test techniques are used to derive test conditions, test cases, and test data.
Các kỹ thuật kiểm thử được sử dụng để xây dựng các điều kiện kiểm thử, các ca kiểm thử và dữ liệu kiểm thử.

### 4.1.1 Categories of Test Techniques / 4.1.1 Các Nhóm Kỹ thuật Kiểm thử

* **Black-box test techniques** (specification-based): based on an analysis of the test basis (e.g., requirements, design). The internal structure is not used.
  **Kỹ thuật kiểm thử hộp đen** (dựa trên đặc tả): dựa trên phân tích cơ sở kiểm thử (ví dụ: yêu cầu, thiết kế). Cấu trúc bên trong không được sử dụng.
* **White-box test techniques** (structure-based): based on an analysis of the internal structure (e.g., code, architecture).
  **Kỹ thuật kiểm thử hộp trắng** (dựa trên cấu trúc): dựa trên phân tích cấu trúc bên trong (ví dụ: mã nguồn, kiến trúc).
* **Experience-based test techniques**: based on the experience and knowledge of the testers, developers, and users.
  **Kỹ thuật kiểm thử dựa trên kinh nghiệm**: dựa trên kinh nghiệm và kiến thức của người kiểm thử, người phát triển và người dùng.

The choice of test techniques depends on factors like the risk level, type of system, SDLC, available skills, and time/budget constraints.
Việc lựa chọn các kỹ thuật kiểm thử phụ thuộc vào các yếu tố như mức độ rủi ro, loại hệ thống, SDLC, kỹ năng sẵn có và các hạn chế về thời gian/ngân sách.

## 4.2 Black-box Test Techniques / 4.2 Các Kỹ thuật Kiểm thử Hộp đen

### 4.2.1 Equivalence Partitioning (EP) / 4.2.1 Phân vùng Tương đương (EP)

EP divides the input data into partitions (equivalence classes) where all values are expected to be processed in the same way.
EP chia dữ liệu đầu vào thành các phân vùng (lớp tương đương) mà tất cả các giá trị trong đó được kỳ vọng sẽ được xử lý theo cùng một cách.

* **Valid partitions**: contain values that should be accepted by the system.
  **Phân vùng hợp lệ**: chứa các giá trị nên được hệ thống chấp nhận.
* **Invalid partitions**: contain values that should be rejected by the system.
  **Phân vùng không hợp lệ**: chứa các giá trị nên bị hệ thống từ chối.

Coverage is measured as the percentage of partitions exercised by the test cases.
Độ bao phủ được đo bằng tỷ lệ phần trăm các phân vùng được thực thi bởi các ca kiểm thử.

### 4.2.2 Boundary Value Analysis (BVA) / 4.2.2 Phân tích Giá trị Biên (BVA)

BVA focuses on the boundaries between partitions. Defects are often found at the boundaries.
BVA tập trung vào các biên giữa các phân vùng. Các khiếm khuyết thường được tìm thấy tại các biên này.

* **2-value BVA**: focuses on the boundary value and its closest neighbor inside the adjacent partition.
  **BVA 2 giá trị**: tập trung vào giá trị biên và giá trị lân cận gần nhất của nó bên trong phân vùng liền kề.
* **3-value BVA**: focuses on the boundary value and its closest neighbors on both sides.
  **BVA 3 giá trị**: tập trung vào giá trị biên và các giá trị lân cận gần nhất ở cả hai phía.

Coverage is measured as the percentage of boundary values exercised.
Độ bao phủ được đo bằng tỷ lệ phần trăm các giá trị biên được thực thi.

### 4.2.3 Decision Table Testing / 4.2.3 Kiểm thử Bảng Quyết định

Decision tables are used to handle complex combinations of conditions and associated actions. Each column in the table represents a test case.
Bảng quyết định được dùng để xử lý các kết hợp phức tạp của các điều kiện và các hành động liên quan. Mỗi cột trong bảng đại diện cho một ca kiểm thử.

Coverage is measured as the percentage of decision table columns exercised.
Độ bao phủ được đo bằng tỷ lệ phần trăm các cột trong bảng quyết định được thực thi.

### 4.2.4 State Transition Testing / 4.2.4 Kiểm thử Chuyển đổi Trạng thái

Based on a state diagram or state table that shows the states of the system and the transitions between them.
Dựa trên sơ đồ trạng thái hoặc bảng trạng thái cho thấy các trạng thái của hệ thống và sự chuyển đổi giữa chúng.

* **States**: represent conditions or situations.
  **Trạng thái**: đại diện cho các điều kiện hoặc tình huống.
* **Transitions**: represent movements between states triggered by events.
  **Sự chuyển đổi**: đại diện cho sự di chuyển giữa các trạng thái được kích hoạt bởi các sự kiện.

Coverage can be measured as the percentage of states or transitions exercised.
Độ bao phủ có thể được đo bằng tỷ lệ phần trăm các trạng thái hoặc các lần chuyển đổi được thực thi.

## 4.3 White-box Test Techniques / 4.3 Các Kỹ thuật Kiểm thử Hộp trắng

### 4.3.1 Statement Testing and Statement Coverage / 4.3.1 Kiểm thử Câu lệnh và Độ bao phủ Câu lệnh

Statement testing focuses on exercising individual executable statements in the code.
Kiểm thử câu lệnh tập trung vào việc thực thi các câu lệnh riêng lẻ có thể thực hiện được trong mã nguồn.

Coverage is measured as: (Number of statements exercised / Total number of executable statements) * 100%.
Độ bao phủ được đo bằng: (Số câu lệnh được thực thi / Tổng số câu lệnh có thể thực thi) * 100%.

### 4.3.2 Branch Testing and Branch Coverage / 4.3.2 Kiểm thử Nhánh và Độ bao phủ Nhánh

Branch testing focuses on exercising control flow transfers (branches) in the code.
Kiểm thử nhánh tập trung vào việc thực thi các lần chuyển hướng luồng điều khiển (các nhánh) trong mã nguồn.

Coverage is measured as: (Number of branches exercised / Total number of branches) * 100%.
Độ bao phủ được đo bằng: (Số nhánh được thực thi / Tổng số nhánh) * 100%.

100% branch coverage implies 100% statement coverage, but not vice versa.
Độ bao phủ nhánh 100% ngụ ý độ bao phủ câu lệnh 100%, nhưng ngược lại thì không đúng.

### 4.3.3 Value of White-box Testing / 4.3.3 Giá trị của Kiểm thử Hộp trắng

White-box testing can identify issues that are missed by black-box testing, such as:
Kiểm thử hộp trắng có thể xác định các vấn đề bị bỏ sót bởi kiểm thử hộp đen, chẳng hạn như:

* Unreachable code.
* Mã nguồn không bao giờ được thực thi (unreachable code).
* Redundant code.
* Mã nguồn dư thừa.
* Errors in logical conditions.
* Lỗi trong các điều kiện logic.

## 4.4 Experience-based Test Techniques / 4.4 Các Kỹ thuật Kiểm thử dựa trên Kinh nghiệm

### 4.4.1 Error Guessing / 4.4.1 Đoán Lỗi (Error Guessing)

Testers anticipate defects based on their experience with similar systems and knowledge of common failures.
Người kiểm thử dự đoán các khiếm khuyết dựa trên kinh nghiệm của họ với các hệ thống tương tự và kiến thức về các lỗi phổ biến.

### 4.4.2 Exploratory Testing / 4.4.2 Kiểm thử Khám phá (Exploratory Testing)

Simultaneous test design and test execution. It is highly creative and unscripted. It is often guided by test charters.
Thiết kế kiểm thử và thực thi kiểm thử diễn ra đồng thời. Nó mang tính sáng tạo cao và không có kịch bản trước. Nó thường được dẫn dắt bởi các điều lệ kiểm thử (test charters).

### 4.4.3 Checklist-based Testing / 4.4.3 Kiểm thử dựa trên Danh mục (Checklist-based Testing)

Testers use a checklist of items to be tested. Checklists are often based on experience or knowledge of standards.
Người kiểm thử sử dụng một danh mục các mục cần kiểm thử. Các danh mục này thường dựa trên kinh nghiệm hoặc kiến thức về các tiêu chuẩn.

## 4.5 Collaboration-based Test Approaches / 4.5 Các Cách tiếp cận Kiểm thử dựa trên sự Hợp tác

### 4.5.1 Collaborative User Story Writing / 4.5.1 Viết User Story có sự Hợp tác

User stories should be created collaboratively by business representatives, developers, and testers. This is often referred to as the "Three Amigos" approach.
User story nên được tạo ra với sự hợp tác giữa đại diện kinh doanh, người phát triển và người kiểm thử. Điều này thường được gọi là cách tiếp cận "Three Amigos".

* **Card**: represents the user story itself.
  **Card**: đại diện cho chính user story đó.
* **Conversation**: discusses the details and behavior of the user story.
  **Conversation**: thảo luận về chi tiết và hành vi của user story.
* **Confirmation**: defines the acceptance criteria.
  **Confirmation**: định nghĩa các tiêu chí chấp nhận.

### 4.5.2 Acceptance Criteria / 4.5.2 Tiêu chí Chấp nhận

Acceptance criteria are the conditions that a work product must satisfy to be accepted by stakeholders.
Tiêu chí chấp nhận là các điều kiện mà một sản phẩm làm việc phải thỏa mãn để được các bên liên quan chấp nhận.

* **Scenario-oriented**: often using the Given/When/Then format.
  **Scenario-oriented**: thường sử dụng định dạng Given/When/Then.
* **Rule-oriented**: lists the rules and constraints.
  **Rule-oriented**: liệt kê các quy tắc và ràng buộc.

### 4.5.3 Acceptance Test-Driven Development (ATDD) / 4.5.3 Phát triển Hướng Kiểm thử Chấp nhận (ATDD)

A test-first approach where tests are derived from acceptance criteria before the code is developed. It ensures the team has a shared understanding of the requirements.
Một cách tiếp cận kiểm thử trước, trong đó các bài kiểm thử được xây dựng từ tiêu chí chấp nhận trước khi mã nguồn được phát triển. Nó đảm bảo nhóm có sự hiểu biết chung về các yêu cầu.