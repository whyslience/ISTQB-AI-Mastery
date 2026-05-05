# Chapter 5: Input Data Testing for Machine Learning Systems / Chương 5: Kiểm thử Dữ liệu Đầu vào cho Hệ Học Máy

> **ISTQB CT-AI v2.0** · **180 minutes** minimum teaching time per official syllabus.

## Learning Objectives for Chapter 5 (summary) / Mục tiêu học tập Chương 5 (tóm tắt)

Input data risks and mitigations; testing for **bias**; **data pipeline** testing; **representativeness**; **dataset constraints**; **label correctness**; hands-on input data testing — see official **AI-5.x** / **HO-5.x** entries.

---

## 5.1 Why input data testing matters / Vì sao kiểm thử dữ liệu đầu vào quan trọng

Model testing cannot compensate for systematically wrong, biased, drifting, or poisoned training/evaluation data. Defects here propagate to false confidence in downstream metrics.

Kiểm thử mô hình không bù đắp được dữ liệu huấn luyện/đánh giá sai có hệ thống, **thiên kiến (biased)**, trôi dạt hoặc bị đầu độc. Khiếm khuyết ở đây lan xuống và làm **đánh giá sai lệch** các chỉ số phía dưới.

## 5.2 Risk themes / Chủ đề rủi ro

Examples aligned to the syllabus: **sampling bias**, **historical bias**, **label noise**, **missing values handling**, **data leakage** between train and test splits, **schema drift**, **pipeline bugs** (wrong transform order), **privacy** in logs, and **adversarial poisoning** of training stores.

Ví dụ khớp giáo trình: thiên kiến mẫu, thiên kiến lịch sử, nhiễu nhãn, xử lý giá trị thiếu, **rò rỉ** giữa tập huấn luyện và tập kiểm thử, trôi dạt schema, lỗi pipeline (thứ tự biến đổi), riêng tư trong log, đầu độc kho dữ liệu huấn luyện.

## 5.3 Bias testing / Kiểm thử thiên kiếm

Measure fairness metrics relevant to context; test across demographic or operational slices; validate mitigation does not destroy accuracy unfairly on other slices.

Đo các chỉ số công bằng phù hợp ngữ cảnh; kiểm thử theo lát cắt nhân khẩu hoặc vận hành; xác nhận biện pháp giảm thiểu **không** làm giảm độ chính xác một cách **thiếu công bằng** trên các lát cắt khác.

## 5.4 Data pipeline testing / Kiểm thử pipeline dữ liệu

Automated tests on transforms: idempotence where required, valid ranges, categorical mappings, time-window joins, and replay of production samples through the pipeline.

Kiểm thử tự động trên bước biến đổi: **tính idempotent** khi cần, miền giá trị hợp lệ, ánh xạ phân loại, join theo cửa sổ thời gian, phát lại mẫu từ môi trường production qua pipeline.

## 5.5 Representativeness and dataset constraints / Đại diện và ràng buộc tập dữ liệu

Validate that operational data distribution matches training assumptions; enforce documented constraints (volume, freshness, legal categories) as testable requirements.

Xác nhận phân phối dữ liệu vận hành khớp giả định huấn luyện; chuyển các ràng buộc đã tài liệu hóa (khối lượng, độ mới, danh mục pháp lý) thành yêu cầu có thể kiểm thử.

## 5.6 Label correctness / Đúng nhãn

Audit sampling, adjudication rules, inter-rater agreement, and correction workflows; fuzz tests for label format consistency.

**Lấy mẫu kiểm toán (audit sampling)**, quy tắc phân xử, đồng thuận giữa các người gán nhãn và quy trình sửa lỗi nhãn; kiểm thử fuzz độ nhất quán định dạng nhãn.
