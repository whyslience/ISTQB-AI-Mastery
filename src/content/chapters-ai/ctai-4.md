# Chapter 4: Testing AI-Based Systems / Chương 4: Kiểm thử Hệ thống Dựa trên AI

> **ISTQB CT-AI v2.0** · **195 minutes** minimum teaching time per official syllabus.

## Learning Objectives for Chapter 4 (summary) / Mục tiêu học tập Chương 4 (tóm tắt)

Locked vs adaptive systems; statistical rationale; test oracles; GenAI and LLM testing; red teaming; exploratory LLM testing (hands-on); test levels for MLS; risk-based testing of MLS — see official **AI-4.x** and **HO-4.x** codes.

---

## 4.1 Locked and adaptive AI-based systems / Hệ AI “khóa” và “thích ứng”

**Locked** systems freeze model behaviour after release (updates are controlled releases). **Adaptive** systems continue learning online; behaviour can drift from what was validated, requiring monitoring, guardrails, and re-test triggers.

**Hệ khóa** đóng băng hành vi mô hình sau phát hành (cập nhật là bản phát hành có kiểm soát). **Hệ thích ứng** học trực tuyến; hành vi có thể lệch so với baseline đã thẩm định, cần giám sát, rào chắn và kích hoạt kiểm thử lại.

## 4.2 Statistical approach to testing / Tiếp cận thống kê

Large input spaces and non-determinism mean exhaustive functional testing is usually impossible; sampling, confidence intervals, repeated runs, and operational monitoring complement classic test design.

Không gian đầu vào lớn và tính phi quyết định khiến kiểm thử hàm kiểu **vét cạn** thường không khả thi; cần lấy mẫu, khoảng tin cậy, chạy lặp và giám sát vận hành bổ sung cho thiết kế kiểm thử cổ điển.

## 4.3 Test oracles for AI / Oracle kiểm thử cho AI

Oracles may be **metamorphic relations**, **reference models**, **probabilistic thresholds**, **human evaluation**, or **constraints** (safety rules). Pure expected-output oracles often do not exist for open-ended GenAI outputs.

Oracle có thể là **quan hệ biến hình**, **mô hình tham chiếu**, **ngưỡng xác suất**, **đánh giá con người** hoặc **ràng buộc** an toàn. Oracle đầu ra mong đợi đơn thuần thường không đủ cho GenAI mở.

## 4.4 Testing GenAI and LLMs / Kiểm thử GenAI và LLM

Include functional and non-functional aspects: factuality, grounding, toxicity, bias, privacy leakage, prompt injection, tool-use safety, latency, and versioning of prompts/models.

Bao gồm khía cạnh chức năng và phi chức năng: tính đúng thực tế (factuality), neo nguồn (grounding), độc tính nội dung (toxicity), thiên kiến (bias), rò rỉ dữ liệu riêng tư, prompt injection, an toàn khi gọi công cụ (tool-use), độ trễ, phiên bản prompt/mô hình.

## 4.5 Red teaming / Red teaming

Structured adversarial probing (manual or automated) to elicit harmful or policy-violating outputs; often used as an acceptance gate with quantitative pass thresholds.

Thử có chủ đích theo hướng đối kháng để gợi đầu ra có hại hoặc vi phạm chính sách; thường làm cổng nghiệm thu với ngưỡng đạt định lượng.

## 4.6 Test levels and risk-based testing for MLS / Mức kiểm thử và kiểm thử theo rủi ro cho MLS

Align component, integration, system, and operational tests with MLS architecture: data pipelines, training code, serving infrastructure, monitoring, and rollback. Risk-based prioritization focuses effort on failure modes with highest impact × likelihood.

Căn chỉnh kiểm thử thành phần, tích hợp, hệ thống và vận hành với kiến trúc MLS: pipeline dữ liệu, mã huấn luyện, hạ tầng phục vụ, giám sát và hoàn tác. Ưu tiên theo rủi ro tập trung vào **các kiểu hỏng (failure modes)** có **mức rủi ro (tác động × xác suất)** cao.
