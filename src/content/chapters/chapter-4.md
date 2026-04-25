
## 1. Overview / Tổng quan

### Overview / Tổng quan

This chapter covers the largest portion of the syllabus. It introduces test techniques (black-box, white-box, experience-based) and collaboration-based approaches. Candidates must be able to apply equivalence partitioning, boundary value analysis, decision table testing, state transition testing, and ATDD to derive test cases.

Chương này chiếm phần lớn nhất trong giáo trình. Nội dung giới thiệu các kỹ thuật kiểm thử (hộp đen, hộp trắng, dựa trên kinh nghiệm) và các phương pháp dựa trên cộng tác. Thí sinh phải có khả năng áp dụng phân vùng tương đương, phân tích giá trị biên, kiểm thử bảng quyết định, kiểm thử chuyển trạng thái và ATDD để suy ra ca kiểm thử.

**Syllabus Alignment / Phạm vi Giáo trình:** FL-BO3, FL-BO5
**Training Time / Thời gian Đào tạo:** 390 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi

### 2.1 Test Techniques Overview / Tổng quan Kỹ thuật Kiểm thử

#### Black-box / Hộp đen

Specification-based. Based on specified behavior without reference to internal structure. Test cases remain valid if implementation changes but behavior does not.

Dựa trên đặc tả. Dựa trên hành vi đã chỉ định mà không tham chiếu cấu trúc nội bộ. Ca kiểm thử vẫn có giá trị nếu triển khai thay đổi nhưng hành vi không đổi.

#### White-box / Hộp trắng

Structure-based. Based on internal structure (code, architecture). Test cases depend on design/implementation.

Dựa trên cấu trúc. Dựa trên cấu trúc nội bộ (code, kiến trúc). Ca kiểm thử phụ thuộc vào thiết kế/triển khai.

#### Experience-based / Dựa trên kinh nghiệm

Uses tester knowledge and experience. Complements black-box and white-box techniques.

Sử dụng kiến thức và kinh nghiệm của kiểm thử viên. Bổ sung cho kỹ thuật hộp đen và hộp trắng.

### 2.2 Equivalence Partitioning (EP) / Phân vùng Tương đương

#### Concept / Khái niệm

Divides data into partitions where all elements are expected to be processed the same way. Partitions must not overlap and must be non-empty.

Chia dữ liệu thành các vùng trong đó tất cả các phần tử dự kiến sẽ được xử lý theo cùng một cách. Các vùng không được chồng chéo và không được để trống.

#### Partitions / Phân vùng

* **Valid Partition**: Contains valid values.
* **Vùng hợp lệ**: Chứa các giá trị hợp lệ.
* **Invalid Partition**: Contains invalid values.
* **Vùng không hợp lệ**: Chứa các giá trị không hợp lệ.

### 2.3 Boundary Value Analysis (BVA) / Phân tích Giá trị Biên

#### Concept / Khái niệm

Based on exercising boundaries of ordered equivalence partitions. Developers often make errors at boundaries.

Dựa trên việc kiểm thử các biên của các phân vùng tương đương có thứ tự. Các nhà phát triển thường mắc lỗi tại các biên này.

#### Techniques / Kỹ thuật

* **2-value BVA**: Test the boundary and its closest neighbor in the adjacent partition.
* **BVA 2 giá trị**: Kiểm thử giá trị biên và giá trị lân cận gần nhất của nó trong phân vùng kế cận.
* **3-value BVA**: Test the boundary and both neighbors (one inside, one outside).
* **BVA 3 giá trị**: Kiểm thử giá trị biên và cả hai giá trị lân cận (một bên trong, một bên ngoài phân vùng).

## 3. White-box Testing / Kiểm thử Hộp trắng

### Statement Testing / Kiểm thử Câu lệnh

Measures the percentage of executable statements exercised by test cases. **100% Statement Coverage** means all executable statements were exercised at least once.

Đo lường tỷ lệ phần trăm các câu lệnh thực thi được đã được các ca kiểm thử thực hiện. **Bao phủ Câu lệnh 100%** có nghĩa là tất cả các câu lệnh thực thi được đã được thực hiện ít nhất một lần.

### Branch Testing / Kiểm thử Nhánh

Measures the percentage of control transfers (branches) exercised. **100% Branch Coverage** guarantees 100% statement coverage, but not vice versa.

Đo lường tỷ lệ phần trăm chuyển giao điều khiển (nhánh) được thực hiện. **Bao phủ Nhánh 100%** đảm bảo bao phủ câu lệnh 100%, nhưng ngược lại thì không đúng.

## 4. Key Terminology / Thuật ngữ Quan trọng

* **Equivalence Partitioning / Phân vùng Tương đương**: Dividing data into partitions processed similarly.
* **Phân vùng Tương đương**: Chia dữ liệu thành các vùng được xử lý tương tự nhau.
* **Boundary Value Analysis / Phân tích Giá trị Biên**: Testing boundaries of ordered partitions.
* **Phân tích Giá trị Biên**: Kiểm thử các biên của các phân vùng có thứ tự.
* **Decision Table / Bảng Quyết định**: Table showing combinations of conditions and resulting actions.
* **Bảng Quyết định**: Bảng hiển thị các tổ hợp điều kiện và hành động kết quả.
* **State Transition / Chuyển Trạng thái**: Testing based on states and transitions.
* **Chuyển Trạng thái**: Kiểm thử dựa trên các trạng thái và chuyển tiếp.
* **Statement Coverage / Bao phủ Câu lệnh**: Percentage of executable statements exercised.
* **Bao phủ Câu lệnh**: Tỷ lệ phần trăm câu lệnh thực thi được đã thực hiện.
* **Branch Coverage / Bao phủ Nhánh**: Percentage of branches exercised.
* **Bao phủ Nhánh**: Tỷ lệ phần trăm nhánh đã được thực hiện.
* **Exploratory Testing / Kiểm thử Khám phá**: Simultaneous test design, execution, and evaluation.
* **Kiểm thử Khám phá**: Đồng thời thiết kế, thực thi và đánh giá kiểm thử.
* **ATDD / ATDD**: Test-first approach deriving tests from acceptance criteria.
* **ATDD**: Phương pháp kiểm thử trước suy ra các bài kiểm thử từ tiêu chí chấp nhận.