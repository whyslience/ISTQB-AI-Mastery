# Chapter 1: Introduction to Artificial Intelligence / Chương 1: Giới thiệu Trí tuệ Nhân tạo

> **ISTQB CT-AI v2.0** · **120 minutes** minimum teaching time per official syllabus.

## Keywords / Từ khóa

AI-based system, artificial intelligence, general AI, machine learning, ML development framework, narrow AI, super AI

hệ thống dựa trên AI, trí tuệ nhân tạo, general AI, học máy, framework phát triển ML, narrow AI, super AI

## Learning Objectives for Chapter 1 / Mục tiêu học tập Chương 1

### 1.1 Introduction to AI / Giới thiệu về AI

* **AI-1.1.1 (K2)** Differentiate between AI-based systems and conventional systems / **AI-1.1.1 (K2)** Phân biệt hệ dựa trên AI và hệ thống truyền thống
* **AI-1.1.2 (K2)** Distinguish between narrow AI, general AI, and super AI / **AI-1.1.2 (K2)** Phân biệt narrow AI, general AI và super AI
* **AI-1.1.3 (K2)** Explain the different types of AI technologies / **AI-1.1.3 (K2)** Giải thích các loại công nghệ AI
* **AI-1.1.4 (K2)** Explain generative AI / **AI-1.1.4 (K2)** Giải thích generative AI
* **AI-1.1.5 (K2)** Compare hardware choices for ML systems / **AI-1.1.5 (K2)** So sánh lựa chọn phần cứng cho hệ ML
* **AI-1.1.6 (K2)** Compare options for development and hosting of AI models / **AI-1.1.6 (K2)** So sánh các phương án phát triển và **hosting** (lưu trữ/triển khai) mô hình AI
* **AI-1.1.7 (K2)** Summarize functionality of ML development frameworks / **AI-1.1.7 (K2)** Tóm tắt chức năng của framework phát triển ML
* **AI-1.1.8 (K2)** Explain how regulations and standards affect development and testing / **AI-1.1.8 (K2)** Giải thích quy định và chuẩn ảnh hưởng thế nào đến phát triển và kiểm thử

---

## 1.1 AI-based vs conventional systems / Hệ AI so với hệ thống truyền thống

Conventional systems are usually built with explicit imperative logic (conditions, loops), which makes behaviour relatively predictable and traceable from code.

Hệ thống truyền thống thường được xây bằng logic mệnh lệnh rõ ràng (điều kiện, vòng lặp), giúp hành vi tương đối dự đoán được và truy vết từ mã nguồn.

Many AI-based systems—especially those using machine learning—infer behaviour from data instead of fully explicit rules. Outputs can be **probabilistic** and sensitive to small input changes.

Nhiều hệ dựa trên AI—đặc biệt dùng học máy—suy ra hành vi từ dữ liệu thay vì quy tắc hoàn toàn tường minh. Đầu ra có thể **mang tính xác suất (probabilistic)** và nhạy với thay đổi nhỏ ở đầu vào.

**Explainability** is a recurring concern: large deep models can act as “black boxes,” which matters in regulated domains (health, finance, transport, defence).

**Khả năng giải thích** là mối quan tâm lặp lại: mô hình deep lớn có thể như “hộp đen,” quan trọng trong lĩnh vực chịu quy định (y tế, tài chính, giao thông, quốc phòng).

**Adaptability**: conventional systems often need manual change for new knowledge; many AI systems can continue learning or adapting from new data— which then requires **monitoring** to stay aligned with requirements.

**Khả năng thích ứng**: hệ truyền thống thường cần chỉnh tay cho tri thức mới; nhiều hệ AI có thể học hoặc thích ứng từ dữ liệu mới—do đó cần **giám sát** để vẫn khớp yêu cầu.

## 1.2 Narrow AI, general AI, super AI / Narrow AI, general AI, super AI

**Narrow AI (weak AI)** solves specific tasks; all deployed production AI today is narrow AI, including frontier GenAI systems that remain task-specific.

**Narrow AI (weak AI)** giải quyết từng nhiệm vụ cụ thể; mọi AI production hôm nay đều là narrow AI, kể cả GenAI frontier vẫn gắn với phạm vi nhiệm vụ.

**General AI (strong AI)** would match broad human-like reasoning across tasks without retraining for each new task; **no such system exists today**.

**General AI (strong AI)** lý thuyết đạt khả năng suy luận rộng như người qua nhiều nhiệm vụ mà không cần huấn luyện lại từng việc; **hiện chưa tồn tại**.

**Super AI** refers to hypothetical self-improving intelligence beyond humans; the transition point is sometimes called the **technological singularity**—a risk discussion topic, not an exam deployment scenario.

**Super AI** mô tả giả thuyết về siêu trí thông minh tự cải tiến vượt con người; giai đoạn chuyển tiếp này **đôi khi** được gọi là **technological singularity**—chủ đề thảo luận rủi ro, không phải kịch bản triển khai trong kỳ thi.

## 1.3 Types of AI technologies / Các loại công nghệ AI

Core branches include **ML** (supervised, unsupervised, reinforcement learning), **deep learning** (CNN, RNN, transformers), **NLP**, **computer vision**, **GenAI** (GANs, diffusion, transformers), fuzzy logic, search, and expert systems. **Agentic AI** combines agents that plan and act toward goals.

Nhánh cốt lõi gồm **ML** (học có giám sát, học không giám sát, học tăng cường), **deep learning** (CNN, RNN, transformer), **NLP**, **thị giác máy tính**, **GenAI** (GAN, diffusion, transformer), logic mờ, tìm kiếm và hệ chuyên gia. **Agentic AI** kết hợp tác nhân lập kế hoạch và hành động.

## 1.4 Generative AI / Generative AI (GenAI)

GenAI systems create new content (text, image, audio, video) learned from large datasets; they often support classification and prediction as well. Testers care about bias, safety, copyright, and non-deterministic outputs.

GenAI tạo nội dung mới (văn bản, hình, âm thanh, video) học từ tập dữ liệu lớn; thường hỗ trợ cả phân loại và dự đoán. Người kiểm thử cần quan tâm **thiên kiến (bias)**, an toàn, bản quyền và **đầu ra phi quyết định (non-deterministic)**.

## 1.5 Hardware, hosting, frameworks, regulations / Phần cứng, triển khai lưu trữ, framework, quy định

ML often depends on GPUs/TPUs and distributed training; models may be hosted on-premises, in the cloud, or at the edge. Frameworks (e.g. TensorFlow, PyTorch ecosystems) provide data pipelines, training APIs, and deployment tooling.

ML thường phụ thuộc GPU/TPU và huấn luyện phân tán; mô hình có thể đặt tại chỗ (on-prem), trên đám mây hoặc ở biên (edge). Các framework cung cấp pipeline dữ liệu, API huấn luyện và công cụ triển khai.

Regulations and standards (examples cited in the official syllabus include EU AI Act, ISO/IEC 42001, ISO/IEC 23894) influence required documentation, risk class, transparency, and testing evidence.

Quy định và chuẩn (ví dụ EU AI Act, ISO/IEC 42001, ISO/IEC 23894 trong giáo trình) ảnh hưởng tài liệu bắt buộc, phân loại rủi ro, minh bạch và bằng chứng kiểm thử.
