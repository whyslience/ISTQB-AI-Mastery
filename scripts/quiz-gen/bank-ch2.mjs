import { buildQ, opt } from "./core.mjs";

const X =
  "* **Đúng / Correct:** ISTQB CTFL v4.0.1 — Chapter 2 (Testing Throughout the SDLC).\n* **Sai / Incorrect:** Misstates levels, types, SDLC practices, or ISO quality classification.";

export function generateChapter2(count, seedBase) {
  const stems = [
    {
      qEn: "Good testing practice across SDLCs includes:",
      qVi: "Thực hành kiểm thử tốt trên mọi SDLC gồm:",
      c: opt(
        "Starting test analysis during the corresponding development phase",
        "Bắt đầu phân tích kiểm thử trong giai đoạn phát triển tương ứng"
      ),
      w: [
        opt("Deferring all testing to operation", "Hoãn mọi kiểm thử đến vận hành"),
        opt("Using exactly one test level only", "Chỉ dùng đúng một mức kiểm thử"),
        opt("Rejecting lightweight docs in agile", "Từ chối tài liệu nhẹ trong agile"),
      ],
    },
    {
      qEn: "TDD primarily drives:",
      qVi: "TDD chủ yếu thúc đẩy:",
      c: opt("Unit-level tests before implementation", "Kiểm thử mức đơn vị trước triển khai"),
      w: [
        opt("Only acceptance UI scripts", "Chỉ script UI chấp nhận"),
        opt("Production deployment first", "Triển khai production trước"),
        opt("Removal of reviews", "Bỏ review"),
      ],
    },
    {
      qEn: "ATDD emphasizes:",
      qVi: "ATDD nhấn mạnh:",
      c: opt("Acceptance criteria as basis for tests", "Tiêu chí chấp nhận làm cơ sở cho kiểm thử"),
      w: [
        opt("Machine bytecode optimization", "Tối ưu bytecode máy"),
        opt("Database normalization proofs", "Chứng minh chuẩn hóa CSDL"),
        opt("Marketing funnel metrics", "Chỉ số marketing funnel"),
      ],
    },
    {
      qEn: "BDD scenarios often use:",
      qVi: "Kịch bản BDD thường dùng:",
      c: opt("Given / When / Then structure", "Cấu trúc Given / When / Then"),
      w: [
        opt("SQL DDL only", "Chỉ SQL DDL"),
        opt("Hexadecimal opcode dumps", "Dump opcode hex"),
        opt("Org-chart hierarchies", "Sơ đồ tổ chức"),
      ],
    },
    {
      qEn: "DevOps culture tends to:",
      qVi: "Văn hóa DevOps có xu hướng:",
      c: opt("Integrate development, operations and quality practices", "Tích hợp phát triển, vận hành và chất lượng"),
      w: [
        opt("Eliminate all manual testing forever", "Loại mọi kiểm thử thủ công mãi mãi"),
        opt("Remove configuration management", "Bỏ quản lý cấu hình"),
        opt("Ban automated pipelines", "Cấm pipeline tự động"),
      ],
    },
    {
      qEn: "\"Shift left\" means:",
      qVi: "\"Shift left\" có nghĩa:",
      c: opt("Moving testing earlier in the SDLC", "Đưa kiểm thử sớm hơn trong SDLC"),
      w: [
        opt("Deleting late-phase testing", "Xóa kiểm thử giai đoạn muộn"),
        opt("Moving testers’ desks leftward", "Chuyển bàn tester sang trái"),
        opt("Only testing after release", "Chỉ kiểm thử sau phát hành"),
      ],
    },
    {
      qEn: "Retrospectives support testing by:",
      qVi: "Retrospective hỗ trợ kiểm thử bằng:",
      c: opt("Process improvement lessons learned", "Bài học cải tiến quy trình"),
      w: [
        opt("Removing defect reports", "Xóa báo cáo khiếm khuyết"),
        opt("Skipping root cause", "Bỏ nguyên nhân gốc"),
        opt("Hiding metrics from teams", "Giấu chỉ số với đội"),
      ],
    },
    {
      qEn: "Component testing focuses on:",
      qVi: "Kiểm thử thành phần tập trung vào:",
      c: opt("Components in isolation", "Thành phần cô lập"),
      w: [
        opt("Full production traffic", "Toàn bộ traffic production"),
        opt("Legal contracts only", "Chỉ hợp đồng pháp lý"),
        opt("End-user payroll", "Lương người dùng cuối"),
      ],
    },
    {
      qEn: "Component integration testing focuses on:",
      qVi: "Kiểm thử tích hợp thành phần tập trung vào:",
      c: opt("Interfaces between components", "Giao diện giữa các thành phần"),
      w: [
        opt("Single function bytecode", "Bytecode một hàm"),
        opt("Marketing slogans", "Khẩu hiệu marketing"),
        opt(" Printer toner levels", "Mực máy in"),
      ],
    },
    {
      qEn: "System testing evaluates:",
      qVi: "Kiểm thử hệ thống đánh giá:",
      c: opt("End-to-end behavior of the whole system", "Hành vi đầu-cuối của toàn hệ thống"),
      w: [
        opt("Only variable names", "Chỉ tên biến"),
        opt("Only payroll deductions", "Chỉ khấu trừ lương"),
        opt("Only IDE themes", "Chỉ theme IDE"),
      ],
    },
    {
      qEn: "Acceptance testing validates:",
      qVi: "Kiểm thử chấp nhận xác thực:",
      c: opt("Business/user readiness to accept the system", "Sự sẵn sàng kinh doanh/người dùng chấp nhận hệ thống"),
      w: [
        opt("Compiler internal registers", "Thanh ghi nội bộ compiler"),
        opt("Subnet bitmask trivia", "Chi tiết subnet mask"),
        opt("IDE font smoothing", "Làm mượt font IDE"),
      ],
    },
    {
      qEn: "Functional testing checks:",
      qVi: "Kiểm thử chức năng kiểm tra:",
      c: opt("What the system does", "Hệ thống làm gì"),
      w: [
        opt("How well it performs under stress", "Mức chịu tải tốt đến đâu"),
        opt("How secure authorization is", "Phân quyền bảo mật ra sao"),
        opt("How portable localization fonts are", "Font đa ngôn ngữ portable"),
      ],
    },
    {
      qEn: "Non-functional testing targets:",
      qVi: "Kiểm thử phi chức năng nhắm vào:",
      c: opt("How well the system works (quality attributes)", "Hệ thống hoạt động tốt đến đâu (đặc tính chất lượng)"),
      w: [
        opt("Business rules only", "Chỉ luật nghiệp vụ"),
        opt("Feature completeness only", "Chỉ đầy đủ tính năng"),
        opt("API spelling only", "Chỉ chính tả API"),
      ],
    },
    {
      qEn: "Performance efficiency in ISO/IEC 25010 is:",
      qVi: "Hiệu quả hiệu năng trong ISO/IEC 25010 là:",
      c: opt("A non-functional characteristic", "Đặc tính phi chức năng"),
      w: [
        opt("A purely functional objective", "Mục tiêu thuần chức năng"),
        opt("A copyright clause", "Điều khoản bản quyền"),
        opt("A payroll attribute", "Thuộc tính lương"),
      ],
    },
    {
      qEn: "Confirmation testing verifies:",
      qVi: "Kiểm thử xác nhận xác minh:",
      c: opt("A defect fix resolved the failure", "Sửa khiếm khuyết đã khắc phục thất bại"),
      w: [
        opt("No side-effects anywhere after change", "Không tác dụng phụ sau thay đổi"),
        opt("All documents translated", "Mọi tài liệu đã dịch"),
        opt("Marketing banners updated", "Banner marketing đã cập nhật"),
      ],
    },
    {
      qEn: "Regression testing checks:",
      qVi: "Kiểm thử hồi quy kiểm tra:",
      c: opt("Unchanged areas still behave after a change", "Vùng không đổi vẫn đúng sau thay đổi"),
      w: [
        opt("Only the defect fix itself", "Chỉ bản thân bản sửa"),
        opt("Only spelling in manuals", "Chỉ chính tả trong hướng dẫn"),
        opt("Only compiler version strings", "Chuỗi phiên bản compiler"),
      ],
    },
    {
      qEn: "Maintenance testing may be triggered by:",
      qVi: "Kiểm thử bảo trì có thể do:",
      c: opt("Planned enhancements or retirement", "Cải tiến có kế hoạch hoặc ngừng hệ thống"),
      w: [
        opt("Only initial greenfield coding", "Chỉ giai đoạn greenfield đầu tiên"),
        opt("Only kindergarten schedules", "Chỉ lịch mẫu giáo"),
        opt("Only lunar phases", "Chỉ pha mặt trăng"),
      ],
    },
    {
      qEn: "Testing quadrants Q1 are typically:",
      qVi: "Góc Q1 thường là:",
      c: opt("Technology-facing, supporting the team", "Hướng công nghệ, hỗ trợ đội"),
      w: [
        opt("Business-facing critiques only", "Chỉ phản biện hướng kinh doanh"),
        opt("External auditors only", "Chỉ kiểm toán ngoài"),
        opt("Payroll compliance only", "Chỉ tuân thủ lương"),
      ],
    },
    {
      qEn: "Sequential SDLC models often:",
      qVi: "Mô hình SDLC tuần tự thường:",
      c: opt("Treat testing as a distinct phase after development", "Coi kiểm thử là giai đoạn riêng sau phát triển"),
      w: [
        opt("Eliminate documentation", "Loại tài liệu"),
        opt("Remove independent testers", "Bỏ tester độc lập"),
        opt("Ban shift-left ideas", "Cấm shift-left"),
      ],
    },
    {
      qEn: "Iterative/incremental SDLC models often:",
      qVi: "Mô hình lặp/gia tăng thường:",
      c: opt("Blend testing activities throughout iterations", "Trộn hoạt động kiểm thử xuyên iteration"),
      w: [
        opt("Require waterfall-only gates fixed forever", "Cổng waterfall cố định mãi"),
        opt("Disallow automation", "Không cho tự động"),
        opt("Disallow retrospectives", "Không cho retrospective"),
      ],
    },
    {
      qEn: "System integration testing emphasizes:",
      qVi: "Kiểm thử tích hợp hệ thống nhấn mạnh:",
      c: opt("Interfaces between systems/packages", "Giao diện giữa hệ thống/gói"),
      w: [
        opt("Single developer keyboard layout", "Bố cục bàn phím một developer"),
        opt("Coffee machine calibration", "Hiệu chuẩn máy cà phê"),
        opt("Office floor tiling patterns", "Họa tiết gạch sàn văn phòng"),
      ],
    },
    {
      qEn: "White-box techniques leverage:",
      qVi: "Kỹ thuật hộp trắng dựa vào:",
      c: opt("Structure of code or architecture", "Cấu trúc mã hoặc kiến trúc"),
      w: [
        opt("Only printed brochures", "Chỉ brochure in"),
        opt("Only Pantone colors", "Chỉ màu Pantone"),
        opt("Only invoice totals", "Chỉ tổng hóa đơn"),
      ],
    },
    {
      qEn: "Black-box techniques derive tests from:",
      qVi: "Hộp đen suy ra kiểm thử từ:",
      c: opt("Specified behaviors without internal structure", "Hành vi đặc tả không cần cấu trúc nội bộ"),
      w: [
        opt("CPU register dumps only", "Chỉ dump thanh ghi CPU"),
        opt("Assembler listings only", "Chỉ listing assembler"),
        opt("GPU shader internals only", "Chỉ nội bộ shader GPU"),
      ],
    },
  ];

  const out = [];
  for (let i = 0; i < count; i++) {
    const s = stems[i % stems.length];
    const pool = [...s.w, ...stems.flatMap((x) => x.w)].filter(
      (o) => o.en !== s.c.en
    );
    out.push(buildQ(seedBase + i * 7927, s.qEn, s.qVi, s.c, pool, X));
  }
  return out;
}
