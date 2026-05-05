# Chapter 6: Model Testing for Machine Learning Systems / Chương 6: Kiểm thử Mô hình cho Hệ Học Máy

> **ISTQB CT-AI v2.0** · **225 minutes** minimum teaching time per official syllabus.

## Learning Objectives for Chapter 6 (summary) / Mục tiêu học tập Chương 6 (tóm tắt)

Model risks and mitigations; **documentation review**; **ML functional performance** testing for probabilistic models; **adversarial** testing; **metamorphic** testing (including hands-on); **drift**; **overfitting/underfitting**; **A/B** and **back-to-back** testing — see official **AI-6.x** / **HO-6.x** codes.

---

## 6.1 Documentation and review / Tài liệu và đánh giá

Verify model cards, datasheets, intended use, limitations, monitoring plan, and change history match deployment configuration (version, hyperparameters, thresholds).

Xác minh model card, datasheet, mục đích sử dụng, hạn chế, kế hoạch giám sát và lịch sử thay đổi khớp cấu hình triển khai (phiên bản, siêu tham số, ngưỡng).

## 6.2 ML functional performance testing / Kiểm thử hiệu năng chức năng ML

Use independent test sets and agreed metrics; compare runs across builds; watch for validation-test divergence that hints overfitting or data leakage.

Dùng tập kiểm thử độc lập và metric đã thống nhất; so sánh các bản build; chú ý lệch validation–test gợi ý overfitting hoặc rò dữ liệu.

## 6.3 Adversarial testing / Kiểm thử đối kháng

Crafted perturbations and attack libraries probe decision boundaries; combine with monitoring for novel attack classes in production.

Nhiễu được thiết kế và thư viện tấn công thăm dò biên quyết định; kết hợp giám sát lớp tấn công mới trên production.

## 6.4 Metamorphic testing / Kiểm thử biến hình

Define relations such as permutations, scaling, or paraphrases that should preserve labels or bounded output change; essential when no single oracle exists.

Định nghĩa quan hệ như hoán vị, tỉ lệ hoặc diễn đạt lại mà nhãn giữ nguyên hoặc đầu ra đổi trong biên; cần thiết khi không có oracle đơn.

## 6.5 Drift, overfitting, underfitting / Trôi dạt, overfitting, underfitting

**Drift** — data or concept shift over time; tests include statistical two-sample tests, performance dashboards, and trigger-based retraining.

**Trôi dạt (drift)** — dữ liệu hoặc khái niệm thay đổi theo thời gian; kiểm thử gồm kiểm định hai mẫu, bảng theo dõi hiệu năng và kích hoạt huấn luyện lại theo ngưỡng.

**Overfitting** — strong results on validation data but poor generalization; detect with holdout sets, disciplined cross-validation, and regularization checks.

**Overfitting** — kết quả trên tập validation tốt nhưng khả năng khái quát hóa kém; phát hiện bằng tập holdout, kiểm chứng chéo nghiêm ngặt và kiểm tra **regularization**.

**Underfitting** — model too simple; detect with bias-dominated error profiles.

**Underfitting** — mô hình quá đơn giản; thường thấy hồ sơ lỗi thiên về độ lệch (bias) hơn phương sai (variance).

## 6.6 A/B and back-to-back testing / Kiểm thử A/B và back-to-back

Compare candidate models on live or shadow traffic with guardrails; back-to-back runs the old and new model on the same inputs to highlight regressions.

So sánh mô hình ứng viên trên traffic thật hoặc shadow có rào chắn; back-to-back chạy mô hình cũ và mới trên cùng đầu vào để phát hiện **thoái sút hiệu năng (performance regression)**.
