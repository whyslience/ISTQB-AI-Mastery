import { buildQ, opt } from "./core.mjs";

const X =
  "* **Đúng / Correct:** Matches ISTQB CTFL v4.0.1 — Chapter 1 (Fundamentals of Testing).\n* **Sai / Incorrect:** Contradicts glossary, principles, or roles described in the syllabus.";

const W = {
  proveAbsent: opt("To prove the absence of defects", "Để chứng minh sự vắng mặt của khiếm khuyết"),
  replaceQA: opt("To replace quality assurance", "Để thay thế đảm bảo chất lượng"),
  onlyDevTest: opt("Only developers ever test", "Chỉ developer mới kiểm thử"),
  debugSame: opt("Testing is the same as debugging", "Kiểm thử giống gỡ lỗi"),
  chainDFE: opt("Defect → Error → Failure", "Khiếm khuyết → Lỗi → Thất bại"),
  chainFED: opt("Failure → Error → Defect", "Thất bại → Lỗi → Khiếm khuyết"),
  exhaustiveReq: opt("Exhaustive testing is mandatory", "Kiểm thử toàn diện là bắt buộc"),
  analysisHow: opt("Test analysis answers \"How to test?\"", "Phân tích kiểm thử trả lời \"Kiểm thử như thế nào?\""),
  designWhat: opt("Test design answers \"What to test?\"", "Thiết kế kiểm thử trả lời \"Kiểm thử cái gì?\""),
  traceReplace: opt("Traceability replaces test completion", "Truy xuất nguồn gốc thay kết thúc kiểm thử"),
  indepPerfect: opt("Higher independence has no drawbacks", "Độc lập cao không có hạn chế"),
  wtWaterfall: opt("Whole team approach comes from Waterfall", "Whole team đến từ Waterfall"),
  verOpNeed: opt("Verification checks user operational needs", "Xác minh kiểm tra nhu cầu vận hành người dùng"),
  valSpecs: opt("Validation checks specifications only", "Xác thực chỉ kiểm tra đặc tả"),
};

/** @returns {import('./core.mjs').buildQ[]} */
export function generateChapter1(count, seedBase) {
  /** @type {{ qEn: string; qVi: string; c: ReturnType<typeof opt>; w: ReturnType<typeof opt>[] }[]} */
  const stems = [
    {
      qEn: "Which is a typical test objective?",
      qVi: "Mục tiêu nào là mục tiêu kiểm thử điển hình?",
      c: opt("To cause failures and find defects", "Để gây ra thất bại và tìm khiếm khuyết"),
      w: [W.proveAbsent, W.replaceQA, W.onlyDevTest],
    },
    {
      qEn: "Testing shows:",
      qVi: "Kiểm thử cho thấy:",
      c: opt("The presence of defects", "Sự hiện diện của khiếm khuyết"),
      w: [W.proveAbsent, W.replaceQA, W.debugSame],
    },
    {
      qEn: "Debugging focuses on:",
      qVi: "Gỡ lỗi tập trung vào:",
      c: opt("Removing the underlying causes of failures", "Loại bỏ nguyên nhân gốc của thất bại"),
      w: [
        opt("Writing new requirements", "Viết yêu cầu mới"),
        opt("Executing performance tests only", "Chỉ thực hiện kiểm thử hiệu năng"),
        opt("Planning release parties", "Lập kế hoạch tiệc phát hành"),
      ],
    },
    {
      qEn: "The causal chain from human mistake is:",
      qVi: "Chuỗi nhân quả từ sai lầm con người là:",
      c: opt("Error → Defect → Failure", "Lỗi → Khiếm khuyết → Thất bại"),
      w: [W.chainDFE, W.chainFED, W.debugSame],
    },
    {
      qEn: "Which principle states exhaustive testing is impossible except in trivial cases?",
      qVi: "Nguyên tắc nào nêu kiểm thử toàn diện không khả thi trừ trường hợp tầm thường?",
      c: opt("Exhaustive testing is impossible", "Kiểm thử toàn diện là không thể"),
      w: [
        opt("Early testing saves time and money", "Kiểm thử sớm tiết kiệm thời gian và tiền"),
        opt("Defects cluster together", "Khiếm khuyết cụm lại"),
        opt("Tests wear out", "Bài kiểm thử bị \"mòn\""),
      ],
    },
    {
      qEn: "\"Absence-of-errors\" is a fallacy\" is which testing principle?",
      qVi: "\"Ảo tưởng không có lỗi\" là nguyên tắc kiểm thử nào?",
      c: opt("Principle 7", "Nguyên tắc 7"),
      w: [
        opt("Principle 1", "Nguyên tắc 1"),
        opt("Principle 3", "Nguyên tắc 3"),
        opt("Principle 5", "Nguyên tắc 5"),
      ],
    },
    {
      qEn: "\"Testing shows presence of defects\" corresponds to:",
      qVi: "\"Kiểm thử cho thấy sự hiện diện khiếm khuyết\" tương ứng:",
      c: opt("Principle 1", "Nguyên tắc 1"),
      w: [
        opt("Principle 2", "Nguyên tắc 2"),
        opt("Principle 6", "Nguyên tắc 6"),
        opt("Principle 7", "Nguyên tắc 7"),
      ],
    },
    {
      qEn: "Defect clustering is:",
      qVi: "Khiếm khuyết cụm lại là:",
      c: opt("Principle 4", "Nguyên tắc 4"),
      w: [
        opt("Principle 2", "Nguyên tắc 2"),
        opt("Principle 5", "Nguyên tắc 5"),
        opt("Principle 6", "Nguyên tắc 6"),
      ],
    },
    {
      qEn: "The pesticide paradox warns that:",
      qVi: "Nghịch lý thuốc trừ sâu cảnh báo rằng:",
      c: opt("Repeated identical tests lose effectiveness", "Lặp lại cùng kiểm thử làm giảm hiệu quả"),
      w: [
        opt("More pesticides improve quality", "Nhiều thuốc trừ sâu hơn cải thiện chất lượng"),
        opt("Static testing is useless", "Kiểm thử tĩnh vô dụng"),
        opt("Automation removes human testers", "Tự động hóa loại con người"),
      ],
    },
    {
      qEn: "Early testing contributes to:",
      qVi: "Kiểm thử sớm góp phần:",
      c: opt("Reducing costs of quality over the lifecycle", "Giảm chi phí chất lượng trong vòng đời"),
      w: [
        opt("Eliminating documentation", "Loại bỏ tài liệu"),
        opt("Deferring all reviews", "Hoãn mọi review"),
        opt("Removing unit testing", "Bỏ kiểm thử đơn vị"),
      ],
    },
    {
      qEn: "Which activity answers \"What should be tested?\"",
      qVi: "Hoạt động nào trả lời \"Nên kiểm thử gì?\"",
      c: opt("Test analysis", "Phân tích kiểm thử"),
      w: [W.analysisHow, W.designWhat, W.exhaustiveReq],
    },
    {
      qEn: "Which activity answers \"How to test?\"",
      qVi: "Hoạt động nào trả lời \"Kiểm thử như thế nào?\"",
      c: opt("Test design", "Thiết kế kiểm thử"),
      w: [W.analysisHow, W.designWhat, W.traceReplace],
    },
    {
      qEn: "Test implementation prepares:",
      qVi: "Triển khai kiểm thử chuẩn bị:",
      c: opt("Test procedures/scripts and environment readiness", "Thủ tục/script và sẵn sàng môi trường"),
      w: [
        opt("Marketing sign-off", "Marketing phê duyệt"),
        opt("Legal incorporation", "Thành lập pháp lý"),
        opt("Production passwords only", "Chỉ mật khẩu production"),
      ],
    },
    {
      qEn: "Traceability supports:",
      qVi: "Truy xuất nguồn gốc hỗ trợ:",
      c: opt("Coverage assessment and impact of changes", "Đánh giá bao phủ và tác động thay đổi"),
      w: [W.traceReplace, W.proveAbsent, W.replaceQA],
    },
    {
      qEn: "Quality assurance (QA) is primarily:",
      qVi: "Đảm bảo chất lượng (QA) chủ yếu là:",
      c: opt("Process-focused prevention orientation", "Định hướng phòng ngừa theo quy trình"),
      w: [
        opt("Executing dynamic tests only", "Chỉ thực hiện kiểm thử động"),
        opt("Finding defects during execution", "Tìm khiếm khuyết khi thực thi"),
        opt("Writing user manuals", "Viết hướng dẫn người dùng"),
      ],
    },
    {
      qEn: "Quality control (QC) includes:",
      qVi: "Kiểm soát chất lượng (QC) gồm:",
      c: opt("Corrective product-oriented activities including testing", "Hoạt động hướng sản phẩm, khắc phục, gồm kiểm thử"),
      w: [
        opt("Only process audits", "Chỉ kiểm toán quy trình"),
        opt("Replacing QA entirely", "Thay thế QA hoàn toàn"),
        opt("Removing retrospectives", "Bỏ retrospective"),
      ],
    },
    {
      qEn: "A benefit of tester independence is:",
      qVi: "Lợi ích của độc lập kiểm thử là:",
      c: opt("Different perspective may reveal failures developers overlook", "Góc nhìn khác có thể phát hiện lỗi developer bỏ sót"),
      w: [W.indepPerfect, W.onlyDevTest, W.replaceQA],
    },
    {
      qEn: "A drawback of high independence can be:",
      qVi: "Hạn chế của độc lập cao có thể là:",
      c: opt("Isolation from developers", "Bị cô lập khỏi developer"),
      w: [W.indepPerfect, W.onlyDevTest, opt("Automatic defect prevention", "Tự động ngăn khiếm khuyết")],
    },
    {
      qEn: "Whole team approach originated notably from:",
      qVi: "Whole team approach nổi bật bắt nguồn từ:",
      c: opt("Extreme Programming (XP)", "Extreme Programming (XP)"),
      w: [W.wtWaterfall, opt("COBOL maintenance standards", "Chuẩn bảo trì COBOL"), opt("ITIL only", "Chỉ ITIL")],
    },
    {
      qEn: "Verification aims at:",
      qVi: "Xác minh (verification) nhằm:",
      c: opt("Specified requirements fulfillment", "Đáp ứng yêu cầu đặc tả"),
      w: [W.verOpNeed, W.valSpecs, W.replaceQA],
    },
    {
      qEn: "Validation aims at:",
      qVi: "Xác thực (validation) nhằm:",
      c: opt("Stakeholder needs in operational environment", "Nhu cầu bên liên quan trong môi trường vận hành"),
      w: [W.valSpecs, W.verOpNeed, W.debugSame],
    },
    {
      qEn: "Dynamic testing requires:",
      qVi: "Kiểm thử động yêu cầu:",
      c: opt("Executing the software", "Thực thi phần mềm"),
      w: [
        opt("Only documents reviews", "Chỉ đánh giá tài liệu"),
        opt("Compiler warnings only", "Chỉ cảnh báo compiler"),
        opt("Database backups only", "Chỉ sao lưu CSDL"),
      ],
    },
    {
      qEn: "Static testing includes:",
      qVi: "Kiểm thử tĩnh gồm:",
      c: opt("Reviews and static analysis", "Đánh giá và phân tích tĩnh"),
      w: [
        opt("Only running GUI automation", "Chỉ chạy tự động GUI"),
        opt("Load testing only", "Chỉ kiểm thử tải"),
        opt("Production monitoring only", "Chỉ giám sát production"),
      ],
    },
    {
      qEn: "Testware includes:",
      qVi: "Testware gồm:",
      c: opt("Artifacts produced during testing (plans, cases, scripts…)", "Sản phẩm làm việc của kiểm thử (kế hoạch, ca, script…)"),
      w: [
        opt("Only source code", "Chỉ mã nguồn"),
        opt("Only marketing brochures", "Chỉ brochure marketing"),
        opt("Only payroll records", "Chỉ hồ sơ lương"),
      ],
    },
    {
      qEn: "Test monitoring primarily:",
      qVi: "Giám sát kiểm thử chủ yếu:",
      c: opt("Gathers information on progress vs criteria", "Thu thập thông tin tiến độ so với tiêu chí"),
      w: [
        opt("Removes all defects", "Loại mọi khiếm khuyết"),
        opt("Writes production code", "Viết mã production"),
        opt("Sets salaries", "Đặt lương"),
      ],
    },
    {
      qEn: "Test basis provides:",
      qVi: "Cơ sở kiểm thử cung cấp:",
      c: opt("Foundation for test decisions and expected results", "Nền tảng cho quyết định và kết quả mong đợi"),
      w: [
        opt("Entertainment only", "Chỉ giải trí"),
        opt("Legal incorporation clauses", "Điều khoản thành lập pháp lý"),
        opt("Graphic design palettes", "Bảng màu thiết kế đồ họa"),
      ],
    },
  ];

  const out = [];
  for (let i = 0; i < count; i++) {
    const s = stems[i % stems.length];
    const pool = [...s.w, ...Object.values(W)].filter((o) => o.en !== s.c.en);
    out.push(buildQ(seedBase + i * 7919, s.qEn, s.qVi, s.c, pool, X));
  }
  return out;
}
