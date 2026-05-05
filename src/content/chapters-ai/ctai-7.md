# Chapter 7: Machine Learning Development Testing / Chương 7: Kiểm thử Phát triển Hệ Học Máy

> **ISTQB CT-AI v2.0** · **30 minutes** minimum teaching time per official syllabus.

## Learning Objectives for Chapter 7 (summary) / Mục tiêu học tập Chương 7 (tóm tắt)

ML **development** risks and mitigations; **deployment** testing for MLS — see official **AI-7.1.1** and **AI-7.1.2** (wording exactly as in the syllabus).

---

## 7.1 Development risks / Rủi ro trong phát triển

Examples include incorrect experiment tracking, non-reproducible training, insufficient isolation of secrets, immature CI for data/model artifacts, and skipping independent test data before release.

Ví dụ: theo dõi thí nghiệm sai, huấn luyện không tái lập, cô lập bí mật không đủ, CI chưa trưởng thành cho artifact dữ liệu/mô hình, bỏ qua dữ liệu kiểm thử độc lập trước phát hành.

## 7.2 Mitigations / Giảm thiểu

Version datasets and models, enforce peer review on training configs, automate data validation gates, and define rollback criteria before promotion.

Phiên bản hóa tập dữ liệu và mô hình, bắt buộc peer review cho cấu hình huấn luyện, tự động hóa cổng kiểm tra dữ liệu, và định nghĩa tiêu chí hoàn tác trước khi **đưa bản build lên production (promotion)**.

## 7.3 Deployment testing / Kiểm thử triển khai

Validate packaging, inference latency under load, autoscaling behaviour, feature store contracts, canary metrics, kill switches, and compatibility with upstream/downstream services.

Xác minh đóng gói, độ trễ suy luận dưới tải, autoscale, hợp đồng feature store, metric canary, công tắc dừng khẩn và tương thích dịch vụ upstream/downstream.

## 7.4 Link to earlier chapters / Liên hệ các chương trước

Development testing closes the loop with **Chapter 3** workflow, **Chapter 4** test strategy, **Chapter 5** data quality, and **Chapter 6** model-level evidence before production monitoring.

Kiểm thử phát triển khép vòng với quy trình **Chương 3**, chiến lược **Chương 4**, chất lượng dữ liệu **Chương 5** và bằng chứng mức mô hình **Chương 6** trước giám sát production.
