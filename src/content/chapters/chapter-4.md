**Chapter 4: Test Analysis and Design**

**Chương 4: Phân tích và Thiết kế Kiểm thử**

## 1. Overview / Tổng quan
This chapter covers the largest portion of the syllabus. It introduces test techniques (black-box, white-box, experience-based) and collaboration-based approaches. Candidates must be able to apply equivalence partitioning, boundary value analysis, decision table testing, state transition testing, and ATDD to derive test cases.

Chương này chiếm phần lớn nhất trong giáo trình. Nội dung giới thiệu các kỹ thuật kiểm thử (hộp đen, hộp trắng, dựa trên kinh nghiệm) và các phương pháp dựa trên cộng tác. Thí sinh phải có khả năng áp dụng phân vùng tương đương, phân tích giá trị biên, kiểm thử bảng quyết định, kiểm thử chuyển trạng thái và ATDD để suy ra ca kiểm thử.

**Syllabus Alignment:** FL-BO3, FL-BO5
**Training Time:** 390 minutes

## 2. Core Concepts / Các Khái niệm Cốt lõi
### 2.1 Test Techniques Overview / Tổng quan Kỹ thuật Kiểm thử
- **Black-box / Hộp đen (Specification-based):** Based on specified behavior without reference to internal structure. Test cases remain valid if implementation changes but behavior does not.

- **White-box / Hộp trắng (Structure-based):** Based on internal structure (code, architecture). Test cases depend on design/implementation.

- **Experience-based / Dựa trên kinh nghiệm:** Uses tester knowledge and experience. Complements black-box and white-box techniques.

### 2.2 Equivalence Partitioning (EP) / Phân vùng Tương đương
Divides data into partitions where all elements are expected to be processed the same way. Partitions must not overlap and must be non-empty.

- **Valid Partition / Vùng hợp lệ:** Contains valid values.

- **Invalid Partition / Vùng không hợp lệ:** Contains invalid values.

- **Coverage / Độ bao phủ:** Number of partitions exercised / Total partitions × 100%.

- **Each Choice Coverage / Bao phủ Mỗi Lựa chọn:** For multiple input sets, exercise each partition from each set at least once. Does not cover combinations.

**Example / Ví dụ:** Input age 18-65 is valid. Partitions: \<18 (invalid), 18-65 (valid), \>65 (invalid). One test per partition.

### 2.3 Boundary Value Analysis (BVA) / Phân tích Giá trị Biên
Based on exercising boundaries of ordered equivalence partitions. Developers often make errors at boundaries.

- **2-value BVA / BVA 2 giá trị:** For each boundary, test the boundary value and its closest neighbor in the adjacent partition.

- **3-value BVA / BVA 3 giá trị:** For each boundary, test the boundary value and both neighbors (one inside, one outside the partition).

- **Coverage / Độ bao phủ:** Number of boundary values (and neighbors for 3-value) exercised / Total identified × 100%.

- **3-value is more rigorous / BVA 3 giá trị nghiêm ngặt hơn:** Can detect defects like if (x = 10) instead of if (x ≤ 10) by testing x=9.

**Example / Ví dụ:** Range 1-100. Boundary at 1 and 100.

- 2-value: 0, 1, 100, 101

- 3-value: 0, 1, 2, 99, 100, 101

### 2.4 Decision Table Testing / Kiểm thử Bảng Quyết định
Used for requirements specifying how combinations of conditions result in different outcomes.

- **Structure / Cấu trúc:** Conditions (rows) and Actions (rows). Columns = Decision Rules.

- **Notations / Ký hiệu:** T (true), F (false), -- (irrelevant), N/A (infeasible). For actions: X (occurs), blank (does not occur).

- **Coverage / Độ bao phủ:** Columns (feasible combinations) exercised / Total feasible columns × 100%.

- **Minimization / Tối thiểu hóa:** Merge columns where conditions do not affect the outcome. Algorithms are out of scope.

**Strength / Điểm mạnh:** Systematic identification of all combinations; finds gaps and contradictions.
**Weakness / Điểm yếu:** Exponential growth of rules with conditions.

### 2.5 State Transition Testing / Kiểm thử Chuyển Trạng thái
Models behavior via states and valid transitions triggered by events (with optional guard conditions and actions).

- **State Diagram / Sơ đồ trạng thái:** Shows states and transitions. Syntax: event [guard condition]/action.

- **State Table / Bảng trạng thái:** Rows = states, columns = events. Cells = target state + action. Explicitly shows invalid transitions (empty cells).

- **Test Case / Ca kiểm thử:** Sequence of events causing state changes.

**Coverage Criteria / Tiêu chí Bao phủ:**

1.  **All States Coverage / Bao phủ Tất cả Trạng thái:** All states exercised. Weakest criterion.

2.  **Valid Transitions Coverage (0-switch) / Bao phủ Chuyển tiếp Hợp lệ:** All valid single transitions exercised. Most widely used.

3.  **All Transitions Coverage / Bao phủ Tất cả Chuyển tiếp:** All valid and invalid transitions exercised/attempted. Strongest; minimum for safety-critical systems.

**Hierarchy / Thứ bậc:** All transitions ⊃ Valid transitions ⊃ All states.

### 2.6 Statement Testing and Coverage / Kiểm thử và Bao phủ Câu lệnh
- **Coverage Item / Mục bao phủ:** Executable statements.

- **Coverage / Độ bao phủ:** Statements exercised / Total executable statements × 100%.

- **100% Statement Coverage:** All executable statements exercised at least once.

- **Limitation / Hạn chế:** Does not ensure all decision logic is tested (e.g., missing branches). Does not detect all data-dependent defects (e.g., division by zero only when denominator is zero).

### 2.7 Branch Testing and Coverage / Kiểm thử và Bao phủ Nhánh
- **Branch / Nhánh:** Transfer of control between nodes in the control flow graph. Can be unconditional or conditional.

- **Coverage Item / Mục bao phủ:** Branches.

- **Coverage / Độ bao phủ:** Branches exercised / Total branches × 100%.

- **100% Branch Coverage:** All branches (true/false outcomes of decisions, switch cases, loop exits) exercised.

- **Subsumes Statement Coverage / Bao phủ câu lệnh:** 100% branch coverage guarantees 100% statement coverage, but not vice versa.

### 2.8 Value of White-box Testing / Giá trị của Kiểm thử Hộp trắng
- **Strength / Điểm mạnh:** Entire implementation is considered; detects defects even when specifications are vague, outdated, or incomplete. Provides objective coverage measures.

- **Weakness / Điểm yếu:** May miss defects of omission (missing requirements) because it only tests what was implemented.

- **Applicability / Phạm vi:** Can be used in static testing (dry runs) and for pseudocode/logic review.

### 2.9 Experience-based Techniques / Kỹ thuật Dựa trên Kinh nghiệm
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

### 2.10 Collaboration-based Approaches / Phương pháp Dựa trên Cộng tác
**User Stories / Câu chuyện Người dùng**

- Represent valuable features. Format: "As a [role], I want [goal], so that [business value]."

- **3 C's / 3 chữ C:** Card, Conversation, Confirmation.

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

## 3. Key Terminology / Thuật ngữ Quan trọng
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

## 4. Deep Understanding / Hiểu Sâu
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

## 5. Chapter Summary / Tóm tắt Chương
- Black-box techniques derive tests from specified behavior; white-box from internal structure; experience-based from tester knowledge.

- EP divides data into non-overlapping, non-empty valid and invalid partitions. Each Choice coverage requires each partition to be exercised at least once.

- BVA tests boundaries. 2-value tests boundary + adjacent neighbor; 3-value tests boundary + both neighbors. 3-value is more rigorous.

- Decision tables model complex business rules. Coverage items are feasible columns (rules).

- State transition testing uses states and transitions. Coverage hierarchy: All states \< Valid transitions \< All transitions.

- Statement coverage measures executable statements. Branch coverage measures control transfers and subsumes statement coverage.

- White-box considers implementation; good for vague specs but may miss omissions.

- Error guessing anticipates defects; exploratory testing is simultaneous design/execution/evaluation; checklist-based uses regularly updated question lists.

- Collaboration approaches: User stories (3C's, INVEST), acceptance criteria (scenario/rule-oriented), ATDD (positive → negative → non-functional tests created before implementation).

## 6. Quick Review / Ôn tập Nhanh
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

- User Story: As a... I want... so that... / Câu chuyện người dùng

- INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable

- ATDD: Workshop → Positive → Negative → Non-functional / Hội thảo → Tích cực → Tiêu cực → Phi chức năng