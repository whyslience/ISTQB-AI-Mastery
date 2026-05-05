import { buildQ, opt } from "./core.mjs";

const X =
  "* **Đúng / Correct:** ISTQB CTFL v4.0.1 — Chapter 3 (Static Testing).\n* **Sai / Incorrect:** Misstates review process, roles, or static vs dynamic findings.";

export function generateChapter3(count, seedBase) {
  const stems = [
    {
      qEn: "Static testing can find defects related to:",
      qVi: "Kiểm thử tĩnh có thể tìm khiếm khuyết liên quan:",
      c: opt("Inconsistencies in specifications before execution", "Không nhất quán trong đặc tả trước khi thực thi"),
      w: [
        opt("Runtime memory fragmentation only", "Chỉ phân mảnh bộ nhớ runtime"),
        opt("Live CPU voltage spikes", "Đột biến điện áp CPU trực tiếp"),
        opt("Production CDN latency only", "Chỉ độ trễ CDN production"),
      ],
    },
    {
      qEn: "Unreachable code is typically easier to detect via:",
      qVi: "Mã không thể thực thi thường dễ phát hiện hơn qua:",
      c: opt("Static analysis", "Phân tích tĩnh"),
      w: [
        opt("Dynamic testing alone", "Chỉ kiểm thử động"),
        opt("Manual payroll reconciliation", "Đối soát lương thủ công"),
        opt("Printer nozzle inspection", "Kiểm tra vòi phun máy in"),
      ],
    },
    {
      qEn: "Formal review entry criteria often include:",
      qVi: "Tiêu chí vào review chính thức thường gồm:",
      c: opt("Clear objectives and suitable participant competence", "Mục tiêu rõ và năng lực người tham gia phù hợp"),
      w: [
        opt("Mandatory karaoke session", "Bắt buộc karaoke"),
        opt("Zero documented defects allowed", "Không cho phép khiếm khuyết được ghi"),
        opt("Finished production binaries only", "Chỉ nhị phân production hoàn tất"),
      ],
    },
    {
      qEn: "During formal review \"communication and analysis\":",
      qVi: "Trong review chính thức, \"giao tiếp và phân tích\":",
      c: opt("Anomalies are analyzed and disposition decided", "Phân tích bất thường và quyết định xử lý"),
      w: [
        opt("Budget forecasts are approved", "Phê duyệt dự báo ngân sách"),
        opt("Hardware purchase orders raise", "Tạo đơn mua phần cứng"),
        opt("Office leases renew", "Gia hạn thuê văn phòng"),
      ],
    },
    {
      qEn: "The moderator primarily ensures:",
      qVi: "Người điều phối chủ yếu đảm bảo:",
      c: opt("Effective meeting facilitation and timeboxing", "Điều phối họp hiệu quả và giới hạn thời gian"),
      w: [
        opt("Writing all production code", "Viết toàn bộ mã production"),
        opt("Signing paychecks", "Ký phiếu lương"),
        opt("Choosing furniture vendors", "Chọn nhà cung cấp nội thất"),
      ],
    },
    {
      qEn: "The review leader typically:",
      qVi: "Trưởng nhóm review thường:",
      c: opt("Takes overall responsibility for the review", "Chịu trách nhiệm tổng thể review"),
      w: [
        opt("Runs CI/CD builds exclusively", "Chỉ chạy CI/CD"),
        opt("Moderates every agenda item personally", "Tự điều phối mọi mục"),
        opt("Deletes defect databases", "Xóa CSDL khiếm khuyết"),
      ],
    },
    {
      qEn: "The author in reviews:",
      qVi: "Tác giả trong review:",
      c: opt("Creates/fixes the work product under review", "Tạo/sửa sản phẩm làm việc được review"),
      w: [
        opt("Always moderates meetings", "Luôn điều phối họp"),
        opt("Never accepts findings", "Không bao giờ nhận finding"),
        opt("Sets HR salaries", "Đặt lương nhân sự"),
      ],
    },
    {
      qEn: "Which review type is most formal and emphasizes metrics?",
      qVi: "Loại review nào trình thức nhất và nhấn mạnh chỉ số?",
      c: opt("Inspection", "Inspection / Thanh tra"),
      w: [
        opt("Informal review", "Informal review"),
        opt("Ad-hoc coffee chat", "Trò chuyện cà phê tự phát"),
        opt("Silent reading party", "Tiệc đọc thầm"),
      ],
    },
    {
      qEn: "A walkthrough is often:",
      qVi: "Walkthrough thường:",
      c: opt("Less formal; knowledge sharing oriented", "Ít trình thức hơn; hướng chia sẻ kiến thức"),
      w: [
        opt("Identical to inspection", "Giống inspection"),
        opt("Always legally binding", "Luôn ràng buộc pháp lý"),
        opt("Performed only by auditors", "Chỉ kiểm toán viên làm"),
      ],
    },
    {
      qEn: "Technical reviews emphasize:",
      qVi: "Đánh giá kỹ thuật nhấn mạnh:",
      c: opt("Technical correctness and consensus among experts", "Tính đúng kỹ thuật và đồng thuận chuyên gia"),
      w: [
        opt("Celebrity endorsements", "Chứng thực người nổi tiếng"),
        opt("Fashion branding colors", "Màu thương hiệu thời trang"),
        opt("Pet naming conventions", "Quy ước đặt tên thú cưng"),
      ],
    },
    {
      qEn: "Static testing contributes value by:",
      qVi: "Kiểm thử tĩnh mang lại giá trị vì:",
      c: opt("Finding defects early when cheaper to fix", "Phát hiện khiếm khuyết sớm khi sửa rẻ hơn"),
      w: [
        opt("Eliminating dynamic testing", "Loại kiểm thử động"),
        opt("Guaranteeing zero operational failures", "Đảm bảo không lỗi vận hành"),
        opt("Replacing configuration management", "Thay quản lý cấu hình"),
      ],
    },
    {
      qEn: "Review findings may include:",
      qVi: "Kết quả review có thể gồm:",
      c: opt("Anomalies that are not necessarily defects", "Bất thường không nhất thiết là khiếm khuyết"),
      w: [
        opt("Only payroll anomalies", "Chỉ bất thường lương"),
        opt("Only GPU shader defects", "Chỉ khiếm khuyết shader GPU"),
        opt("Only lunar calendar drift", "Chỉ lệch lịch âm"),
      ],
    },
    {
      qEn: "Checklist-based reviewing helps:",
      qVi: "Review theo checklist giúp:",
      c: opt("Systematically probe typical defect areas", "Kiểm tra có hệ thống vùng khiếm khuyết điển hình"),
      w: [
        opt("Random guessing faster", "Đoán ngẫu nhiên nhanh hơn"),
        opt("Avoid reading documents", "Tránh đọc tài liệu"),
        opt("Skip logging anomalies", "Bỏ ghi bất thường"),
      ],
    },
    {
      qEn: "Compared with dynamic testing, static testing:",
      qVi: "So với kiểm thử động, kiểm thử tĩnh:",
      c: opt("Does not require executing the software", "Không yêu cầu thực thi phần mềm"),
      w: [
        opt("Always requires GPUs", "Luôn cần GPU"),
        opt("Cannot find specification defects", "Không tìm được khiếm khuyết đặc tả"),
        opt("Runs only in production", "Chỉ chạy production"),
      ],
    },
    {
      qEn: "Metrics from inspections may feed:",
      qVi: "Chỉ số từ inspection có thể nuôi:",
      c: opt("Process improvement across the SDLC", "Cải tiến quy trình trong SDLC"),
      w: [
        opt("Celebrity salary indexing", "Chỉ mục lương người nổi tiếng"),
        opt("Coffee bean roasting curves", "Đường cong rang hạt cà phê"),
        opt("Parking slot auctions", "Đấu giá chỗ đậu xe"),
      ],
    },
    {
      qEn: "Pair reviewing involves:",
      qVi: "Review theo cặp gồm:",
      c: opt("Two reviewers collaborating on findings", "Hai reviewer cộng tác trên finding"),
      w: [
        opt("Exactly twelve auditors", "Đúng 12 kiểm toán viên"),
        opt("Only automated bots", "Chỉ bot tự động"),
        opt("Judges from talent shows", "Giám khảo talent show"),
      ],
    },
    {
      qEn: "Work products suitable for static testing include:",
      qVi: "Sản phẩm làm việt phù hợp kiểm thử tĩnh gồm:",
      c: opt("Requirements, user stories, designs, code", "Yêu cầu, user story, thiết kế, mã"),
      w: [
        opt("Only shipped binaries", "Chỉ nhị phân đã ship"),
        opt("Only toner cartridges", "Chỉ hộp mực"),
        opt("Only subway maps", "Chỉ bản đồ metro"),
      ],
    },
    {
      qEn: "A scribe in reviews typically:",
      qVi: "Thư ký trong review thường:",
      c: opt("Records anomalies and outcomes", "Ghi bất thường và kết quả"),
      w: [
        opt("Deletes version control history", "Xóa lịch sử version control"),
        opt("Deploys to production", "Triển khai production"),
        opt("Negotiates office rent", "Đàm phán thuê văn phòng"),
      ],
    },
    {
      qEn: "Static analysis tools may detect:",
      qVi: "Công cụ phân tích tĩnh có thể phát hiện:",
      c: opt("Coding standard violations and suspicious constructs", "Vi phạm chuẩn mã và cấu trúc đáng ngờ"),
      w: [
        opt("End-user satisfaction scores", "Điểm hài lòng người dùng"),
        opt("Shipping carton weights", "Trọng lượng thùng ship"),
        opt("Brand sentiment on Twitter", "Cảm xúc thương hiệu Twitter"),
      ],
    },
    {
      qEn: "Benefits of reviews include:",
      qVi: "Lợi ích của review gồm:",
      c: opt("Improved quality of work products and earlier defect detection", "Chất lượng SP làm việc tốt hơn và phát hiện khiếm khuyết sớm"),
      w: [
        opt("Eliminating testing phases", "Loại giai đoạn kiểm thử"),
        opt("Removing traceability needs", "Bỏ nhu cầu traceability"),
        opt("Banning automation", "Cấm tự động hóa"),
      ],
    },
  ];

  const out = [];
  for (let i = 0; i < count; i++) {
    const s = stems[i % stems.length];
    const pool = [...s.w, ...stems.flatMap((x) => x.w)].filter(
      (o) => o.en !== s.c.en
    );
    out.push(buildQ(seedBase + i * 7933, s.qEn, s.qVi, s.c, pool, X));
  }
  return out;
}
