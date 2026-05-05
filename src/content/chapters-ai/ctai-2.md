# Chapter 2: Quality Characteristics for AI-Based Systems / Chương 2: Đặc tính Chất lượng cho Hệ thống Dựa trên AI

> **ISTQB CT-AI v2.0** · **45 minutes** minimum teaching time per official syllabus.

## Keywords / Từ khóa

Functional adaptability, AI functional correctness, intervenability, AI robustness, safety, societal and ethical risk mitigation, transparency, user controllability

khả năng thích ứng chức năng, tính đúng đắn chức năng AI, khả năng can thiệp (intervenability), độ vững vàng của AI (AI robustness), an toàn, giảm thiểu rủi ro xã hội và đạo đức, minh bạch, khả năng kiểm soát của người dùng

## Learning Objectives for Chapter 2 / Mục tiêu học tập Chương 2

### 2.1 Quality characteristics / Đặc tính chất lượng

* **AI-2.1.1 (K2)** Classify behaviours according to **ISO/IEC 25059** characteristics / **AI-2.1.1 (K2)** Phân loại hành vi theo đặc tính **ISO/IEC 25059**
* **AI-2.1.2 (K2)** Explain special considerations for **safety-related** AI systems / **AI-2.1.2 (K2)** Giải thích điểm đặc biệt khi AI dùng trong hệ **an toàn**

### 2.2 Acceptance criteria / Tiêu chí nghiệm thu

* **AI-2.2.1 (K2)** Give examples of acceptance criteria for AI-based systems / **AI-2.2.1 (K2)** Cho ví dụ tiêu chí nghiệm thu cho hệ dựa trên AI

---

## 2.1 ISO/IEC 25059 and testing / ISO/IEC 25059 và kiểm thử

ISO/IEC **25059** extends the software quality view (related to **25010**) for AI-based systems from **product quality** and **quality in use** perspectives. These characteristics shape **test objectives**, **acceptance criteria**, and how you interpret **test results**.

ISO/IEC **25059** mở rộng góc nhìn chất lượng phần mềm (liên quan **25010**) cho hệ AI theo **chất lượng sản phẩm** và **chất lượng khi sử dụng**. Các đặc tính này định hình **mục tiêu kiểm thử**, **tiêu chí nghiệm thu** và cách diễn giải **kết quả kiểm thử**.

Notable AI-specific or adapted characteristics in the syllabus include (names as in the official document):

Các đặc tính được nhấn mạnh trong giáo trình gồm (tên theo tài liệu chính thức):

* **AI functional correctness** — allows **thresholds** for incorrect outputs because probabilistic ML cannot demand perfection.
* **Functional adaptability** — autonomous adaptation after deployment to environment changes.
* **User controllability** — humans or external agents can intervene in functioning in time.
* **Transparency** — appropriate information communicated to stakeholders (links to documentation and explainability activities).
* **AI robustness** — maintain correctness under biased, adversarial, invalid inputs, interference, environment, misuse.
* **Intervenability** (security sub-characteristic) — operator can intervene to prevent harm in time.
* **Societal and ethical risk mitigation** — fairness, accountability, privacy, human control, sustainability, etc.

## 2.2 AI and safety / AI và an toàn

Safety-related systems can harm people, property, or the environment. AI adds challenges: **vague or data-implicit requirements**, **non-determinism**, **self-learning drift** from the tested baseline, **limited explainability**, and **evolving regulations** (e.g. high-risk categories under EU AI Act for safety components).

Hệ an toàn có thể gây hại cho người, tài sản hoặc môi trường. AI làm tăng thách thức: **yêu cầu mơ hồ hoặc hàm ý qua dữ liệu**, **tính phi quyết định**, **trôi dạt do học liên tục** so với baseline đã kiểm thử, **khó giải thích**, và **quy định thay đổi nhanh** (ví dụ phân loại rủi ro cao theo EU AI Act cho thành phần an toàn).

## 2.3 Acceptance criteria examples / Ví dụ tiêu chí nghiệm thu

Acceptance criteria are often **statistical**, **probabilistic**, or **threshold-based** (accuracy/recall targets, latency under fault, temperature derating behaviour, fairness metrics, red-team scores, safety monitor reaction times). Study the official syllabus table for characteristic → example mappings.

Tiêu chí nghiệm thu thường **thống kê**, **xác suất** hoặc **theo ngưỡng**. Hãy học bảng ví dụ trong giáo trình chính thức theo từng đặc tính.
