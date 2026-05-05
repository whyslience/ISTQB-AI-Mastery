import { buildQ, opt } from "./core.mjs";

const X =
  "* **Đúng / Correct:** ISTQB CTFL v4.0.1 — Chapter 6 (Test Tools).\n* **Sai / Incorrect:** Misstates automation benefits/risks or common tool categories.";

export function generateChapter6(count, seedBase) {
  const stems = [
    {
      qEn: "A primary benefit of test automation is:",
      qVi: "Lợi ích chính của tự động hóa kiểm thử là:",
      c: opt("Faster feedback on software quality", "Phản hồi nhanh hơn về chất lượng phần mềm"),
      w: [
        opt("Eliminating test planning forever", "Loại lập kế hoạch kiểm thử mãi"),
        opt("Removing human testers entirely", "Loại hết con người tester"),
        opt("Guaranteeing zero defects", "Đảm bảo không khiếm khuyết"),
      ],
    },
    {
      qEn: "A common risk of test automation is:",
      qVi: "Rủi ro phổ biến của tự động hóa kiểm thử:",
      c: opt("Unrealistic expectations about immediate ROI", "Kỳ vọng ROI ngắn hạn không thực tế"),
      w: [
        opt("Automatic elimination of flaky tests", "Tự loại test \"flaky\""),
        opt("Automatic replacement of reviews", "Tự thay review"),
        opt("Automatic freeze of requirements", "Tự đóng băng yêu cầu"),
      ],
    },
    {
      qEn: "Test execution tools primarily:",
      qVi: "Công cụ thực thi kiểm thử chủ yếu:",
      c: opt("Run automated tests and capture results", "Chạy kiểm thử tự động và ghi kết quả"),
      w: [
        opt("Replace defect management systems", "Thay hệ thống quản lý khiếm khuyết"),
        opt("Author legal contracts", "Soạn hợp đồng pháp lý"),
        opt("Design database schemas only", "Chỉ thiết kế schema CSDL"),
      ],
    },
    {
      qEn: "Coverage tools help measure:",
      qVi: "Công cụ coverage giúp đo:",
      c: opt("Extent of exercised code or requirements", "Mức mã hoặc yêu cầu được thực thi"),
      w: [
        opt("Printer jam frequencies", "Tần suất kẹt giấy máy in"),
        opt("Coffee acidity titration", "Chuẩn độ độ axit cà phê"),
        opt("Office chair squeaks", "Kêu ghế văn phòng"),
      ],
    },
    {
      qEn: "Data-driven testing separates:",
      qVi: "Kiểm thử data-driven tách:",
      c: opt("Test logic from variable test data", "Logic kiểm thử khỏi dữ liệu biến thiên"),
      w: [
        opt("Hardware from electricity", "Phần cứng khỏi điện"),
        opt("Managers from salaries", "Quản lý khỏi lương"),
        opt("GPUs from monitors", "GPU khỏi màn hình"),
      ],
    },
    {
      qEn: "Keyword-driven testing uses:",
      qVi: "Kiểm thử keyword-driven dùng:",
      c: opt("Action keywords interpreted by automation framework", "Từ khóa hành động do framework diễn giải"),
      w: [
        opt("Random binary blobs only", "Chỉ blob nhị phân ngẫu nhiên"),
        opt("Only GPU shader languages", "Chỉ ngôn ngữ shader GPU"),
        opt("Only Morse code exclusively", "Chỉ mã Morse"),
      ],
    },
    {
      qEn: "Open-source tool risks include:",
      qVi: "Rủi ro công cụ mã nguồn mở gồm:",
      c: opt("Uncertain long-term maintenance or licensing nuances", "Bảo trì dài hạn không chắc hoặc chi tiết giấy phép"),
      w: [
        opt("Guaranteed eternal vendor hotlines", "Hotline nhà cung cấp vĩnh cửu chắc chắn"),
        opt("Automatic ISO certification", "Chứng nhận ISO tự động"),
        opt("Removal of all defects automatically", "Tự loại mọi khiếm khuyết"),
      ],
    },
    {
      qEn: "Cloud-based tool considerations include:",
      qVi: "Cân nhắc công cụ đám mây gồm:",
      c: opt("Data residency and access/security controls", "Cư trú dữ liệu và kiểm soát truy cập/bảo mật"),
      w: [
        opt("Infinite zero-cost assumption always", "Giả định không chi phí vô hạn luôn"),
        opt("Guaranteed on-prem elimination", "Loại on-prem chắc chắn"),
        opt("Printer driver parity only", "Chỉ tương thích driver máy in"),
      ],
    },
    {
      qEn: "Successful automation typically requires:",
      qVi: "Tự động hóa thành công thường cần:",
      c: opt("Maintainable tests and stable interfaces/selectors", "Kiểm thử có thể bảo trì và giao diện/bộ chọn ổn định"),
      w: [
        opt("Only record-and-playback forever brittle", "Chỉ record-playback giòn mãi"),
        opt("No CI integration ever", "Không tích hợp CI"),
        opt("No version control for scripts", "Không version control script"),
      ],
    },
  ];

  const out = [];
  for (let i = 0; i < count; i++) {
    const s = stems[i % stems.length];
    const pool = [...s.w, ...stems.flatMap((x) => x.w)].filter(
      (o) => o.en !== s.c.en
    );
    out.push(buildQ(seedBase + i * 7993, s.qEn, s.qVi, s.c, pool, X));
  }
  return out;
}
