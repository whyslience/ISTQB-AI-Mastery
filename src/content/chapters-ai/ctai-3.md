# Chapter 3: Machine Learning / Chương 3: Học Máy (Machine Learning)

> **ISTQB CT-AI v2.0** · **375 minutes** minimum teaching time per official syllabus.

## Keywords / Từ khóa

K-multisection neuron coverage, ML functional performance criteria, ML functional performance metric, ML model, neuron boundary coverage, neuron coverage, perceptron — plus association, classification, clustering, data preparation, ML algorithm, ML workflow, pretrained model, ML regression, reinforcement learning, supervised learning, unsupervised learning (see official list).

## Learning Objectives for Chapter 3 (summary) / Mục tiêu học tập Chương 3 (tóm tắt)

Covers ML **forms**, **workflow**, **data preparation**, **train/validation/test** roles, **performance metrics** from confusion matrices, **neural network** structure, **perceptron** hands-on, and **coverage measures** for neural nets — see official syllabus for every **AI-** and **HO-** code.

---

## 3.1 Forms of machine learning / Các dạng học máy

* **Supervised learning** — labeled data; **classification** (discrete classes) and **ML regression** (continuous prediction). In CT-AI, “ML regression” means numeric prediction, **not** CTFL “regression testing” after code changes.
* **Unsupervised learning** — unlabeled data; **clustering** and **association** patterns.
* **Reinforcement learning** — agent, environment, rewards/penalties; challenges include environment design, reward shaping, and strategy.

## 3.2 Machine learning workflow / Quy trình học máy

Typical stages (as in the syllabus figure): **understand objectives** and acceptance criteria → **select framework** → **select/build algorithm** → **prepare & test data** (acquisition, preprocessing, feature engineering, EDA; data must be representative of operational use) → **train** (model hyperparameters vs algorithm hyperparameters) → **evaluate** on validation set → **tune** hyperparameters → **test** on independent test set (compare to validation; large gaps may require revisiting data or model generation) → **deploy** and integrate (monitoring, drift, updates).

## 3.3 Data for ML / Dữ liệu cho ML

Data preparation activities and quality directly constrain what testing can prove later; Chapter 5 deep-dives **input data testing**.

## 3.4 ML functional performance metrics (classification) / Chỉ số hiệu năng (phân loại)

You must be able to **calculate** common metrics from a confusion matrix (true/false positives/negatives) — accuracy, precision, recall, F1, specificity, etc., as required in the syllabus learning objectives at **K3** level for AI-3.3.1.

## 3.5 Neural networks / Mạng nơ-ron

Deep neural networks stack layers (input, hidden, output), activations, forward pass, loss, backpropagation training. **Coverage ideas** for neural testing (neuron coverage, boundary coverage, multisection variants) address structural adequacy beyond pure input-output metrics.

Mạng sâu xếp lớp, hàm kích hoạt, lan truyền xuôi, hàm mất mát, huấn luyện lan truyền ngược. **Ý tưởng đo độ bao phủ** cho kiểm thử mạng nơ-ron bổ sung cho việc **chỉ** đo theo cặp đầu vào–đầu ra.

## 3.6 Pretrained models, fine-tuning, RAG / Mô hình tiền huấn luyện, fine-tuning, RAG

Pretrained models speed delivery but inherit dataset and safety biases. **Fine-tuning** adapts weights to a new task. **Retrieval-augmented generation (RAG)** grounds LLM answers in external documents—testing must cover retrieval quality, staleness, and injection paths.

Mô hình tiền huấn luyện rút ngắn thời gian nhưng kế thừa thiên kiếm và rủi ro an toàn. **Fine-tuning** thích nghi trọng số cho nhiệm vụ mới. **RAG** neo câu trả lời LLM vào tài liệu ngoài—kiểm thử cần chất lượng truy hồi, độ mới và đường tấn công injection.
