import { buildQ, opt } from "./core.mjs";

const X =
  "* **Đúng / Correct:** ISTQB CTFL v4.0.1 — Chapter 4 (Test Analysis & Design).\n* **Sai / Incorrect:** Misstates black-box techniques, coverage, or acceptance concepts.";

function stemsArray() {
  return [
    {
      qEn: "Equivalence partitions must be:",
      qVi: "Phân vùng tương đương phải:",
      c: opt("Non-empty and mutually disjoint", "Không rỗng và không chồng chéo"),
      w: [
        opt("Overlapping for thoroughness", "Chồng chéo để kỹ hơn"),
        opt("Empty allowed with annotations", "Cho phép rỗng nếu ghi chú"),
        opt("Only for outputs never inputs", "Chỉ đầu ra không đầu vào"),
      ],
    },
    {
      qEn: "Boundary value analysis often pairs with:",
      qVi: "Phân tích giá trị biên thường đi cùng:",
      c: opt("Equivalence partitioning", "Phân vùng tương đương"),
      w: [
        opt("Payroll tax tables only", "Chỉ bảng thuế lương"),
        opt("Printer DPI calibration", "Hiệu chuẩn DPI máy in"),
        opt("GPU thermal curves", "Đường cong nhiệt GPU"),
      ],
    },
    {
      qEn: "For ordered integer domain 1–10 inclusive, typical boundary values include:",
      qVi: "Miền nguyên có thứ tự 1–10, giá trị biên điển hình gồm:",
      c: opt("0, 1, 10, 11", "0, 1, 10, 11"),
      w: [
        opt("Only 5", "Chỉ 5"),
        opt("-∞ and +∞ only", "Chỉ âm vô cực và dương vô cực"),
        opt("Only primes", "Chỉ số nguyên tố"),
      ],
    },
    {
      qEn: "Decision tables model:",
      qVi: "Bảng quyết định mô hình hóa:",
      c: opt("Combinations of conditions and resulting actions", "Tổ hợp điều kiện và hành động kết quả"),
      w: [
        opt("CPU pipeline hazards only", "Chỉ hazard pipeline CPU"),
        opt("GPU shader compilation only", "Chỉ biên dịch shader GPU"),
        opt("Office seating charts only", "Chỉ sơ đồ chỗ ngồi"),
      ],
    },
    {
      qEn: "State transition testing focuses on:",
      qVi: "Kiểm thử chuyển trạng thái tập trung vào:",
      c: opt("Valid transitions and guards between states", "Chuyển trạng thái hợp lệ và điều kiện"),
      w: [
        opt("SQL indexing trivia only", "Chỉ trivia chỉ mục SQL"),
        opt("Printer margins only", "Chỉ lề máy in"),
        opt("Coffee grind sizes only", "Chỉ cỡ xay cà phê"),
      ],
    },
    {
      qEn: "Use-case testing derives tests from:",
      qVi: "Kiểm thử use case suy ra từ:",
      c: opt("Interactions between actors and system", "Tương tác tác nhân và hệ thống"),
      w: [
        opt("Compiler opcode tables only", "Chỉ bảng opcode compiler"),
        opt("Invoice stamps only", "Chỉ tem hóa đơn"),
        opt("Wallpaper resolutions only", "Chỉ độ phân giải hình nền"),
      ],
    },
    {
      qEn: "Exploratory testing simultaneously:",
      qVi: "Kiểm thử khám phá đồng thời:",
      c: opt("Learns, designs and executes tests", "Học, thiết kế và thực thi kiểm thử"),
      w: [
        opt("Eliminates documentation forever", "Loại tài liệu mãi mãi"),
        opt("Runs only automated scripts", "Chỉ chạy script tự động"),
        opt("Disallows human intuition", "Không cho trực giác con người"),
      ],
    },
    {
      qEn: "Acceptance criteria should ideally be:",
      qVi: "Tiêu chí chấp nhận lý tưởng nên:",
      c: opt("Testable and clear", "Có thể kiểm thử và rõ ràng"),
      w: [
        opt("Purely subjective slogans", "Khẩu hiệu chủ quan"),
        opt("Known only to executives", "Chỉ BGĐ biết"),
        opt("Infinite in length", "Vô hạn độ dài"),
      ],
    },
    {
      qEn: "Error guessing leverages:",
      qVi: "Đoán lỗi tận dụng:",
      c: opt("Tester experience and intuition about failures", "Kinh nghiệm và trực giác tester về lỗi"),
      w: [
        opt("Random coin flips only", "Chỉ tung đồng xu"),
        opt("Astrological charts only", "Chỉ biểu đồ chiêm tinh"),
        opt("Lottery numbers only", "Chỉ số xổ số"),
      ],
    },
    {
      qEn: "Collaboration-based testing may involve:",
      qVi: "Kiểm thử hợp tác có thể gồm:",
      c: opt("Crowdsourcing diverse perspectives", "Crowdsourcing góc nhìn đa dạng"),
      w: [
        opt("Deleting defect databases", "Xóa CSDL khiếm khuyết"),
        opt("Banning pair sessions", "Cấm làm theo cặp"),
        opt("Removing exploratory charters", "Bỏ charter khám phá"),
      ],
    },
    {
      qEn: "Statement coverage requires:",
      qVi: "Bao phủ câu lệnh yêu cầu:",
      c: opt("Each executable statement executed at least once", "Mỗi câu lệnh thực thi ít nhất một lần"),
      w: [
        opt("Every branch both ways always", "Mọi nhánh hai hướng luôn luôn"),
        opt("Every path in program forever", "Mọi đường đi chương trình mãi mãi"),
        opt("Every pixel on screen", "Mọi pixel màn hình"),
      ],
    },
    {
      qEn: "Branch/decision coverage is generally:",
      qVi: "Bao phủ nhánh/quyết định nhìn chung:",
      c: opt("Stronger than statement coverage", "Mạnh hơn bao phủ câu lệnh"),
      w: [
        opt("Weaker than statement coverage", "Yếu hơn bao phủ câu lệnh"),
        opt("Unrelated to coverage", "Không liên quan coverage"),
        opt("Only for hardware buses", "Chỉ cho bus phần cứng"),
      ],
    },
    {
      qEn: "Test charters often guide:",
      qVi: "Charter kiểm thử thường định hướng:",
      c: opt("Session-based exploratory testing scope", "Phạm vi exploratory theo phiên"),
      w: [
        opt("Payroll overtime rules only", "Chỉ quy tắc làm thêm lương"),
        opt("GPU fan curves only", "Chỉ đường cong quạt GPU"),
        opt("Stamp collecting themes only", "Chỉ chủ đề sưu tem"),
      ],
    },
    {
      qEn: "Black-box techniques derive tests from:",
      qVi: "Kỹ thuật hộp đen suy kiểm thử từ:",
      c: opt("Specified behaviors and data", "Hành vi và dữ liệu được đặc tả"),
      w: [
        opt("CPU microcode only", "Chỉ microcode CPU"),
        opt("RAM timing diagrams only", "Chỉ timing RAM"),
        opt("Desk height ergonomics only", "Chỉ ergonomics chiều cao bàn"),
      ],
    },
    {
      qEn: "A test condition is:",
      qVi: "Điều kiện kiểm thử là:",
      c: opt("An aspect verifiable in a test", "Khía cạnh có thể kiểm chứng trong một kiểm thử"),
      w: [
        opt("Always identical to test case", "Luôn giống ca kiểm thử"),
        opt("Only production passwords", "Chỉ mật khẩu production"),
        opt("Only marketing personas", "Chỉ persona marketing"),
      ],
    },
    {
      qEn: "Test cases realize:",
      qVi: "Ca kiểm thử cụ thể hóa:",
      c: opt("Test conditions with concrete inputs and expected results", "Điều kiện với đầu vào và kết quả mong đợi cụ thể"),
      w: [
        opt("Purchase orders for furniture", "Đơn mua nội thất"),
        opt("GPU crypto mining pools", "Pool đào GPU"),
        opt("Employee gym memberships", "Thẻ gym nhân viên"),
      ],
    },
    {
      qEn: "Prioritization often combines:",
      qVi: "Ưu tiên thường kết hợp:",
      c: opt("Risk, coverage and deadlines", "Rủi ro, bao phủ và deadline"),
      w: [
        opt("Only shoe sizes", "Chỉ cỡ giày"),
        opt("Only astrology signs", "Chỉ cung hoàng đạo"),
        opt("Only pantry snacks", "Chỉ đồ ăn tủ"),
      ],
    },
    {
      qEn: "\"Happy path\" scenarios cover:",
      qVi: "Kịch bản \"happy path\" bao phủ:",
      c: opt("Expected valid flows without anomalies", "Luồng hợp lệ mong đợi không bất thường"),
      w: [
        opt("Only catastrophic failures", "Chỉ thảm họa"),
        opt("Only ransomware payloads", "Chỉ payload ransomware"),
        opt("Only cosmic rays", "Chỉ tia vũ trụ"),
      ],
    },
    {
      qEn: "Negative tests deliberately use:",
      qVi: "Kiểm thử âm cố ý dùng:",
      c: opt("Invalid inputs or exceptional conditions", "Đầu vào không hợp lệ hoặc điều kiện ngoại lệ"),
      w: [
        opt("Only certified happy inputs", "Chỉ đầu vào happy đã chứng nhận"),
        opt("Only CEO keystrokes", "Chỉ phím CEO"),
        opt("Only golden stickers", "Chỉ sticker vàng"),
      ],
    },
    {
      qEn: "Combinatorial testing aims to:",
      qVi: "Kiểm thử tổ hợp nhằm:",
      c: opt("Cover interactions among parameters efficiently", "Bao phủ tương tác tham số hiệu quả"),
      w: [
        opt("Test every cosmic permutation always", "Luôn mọi hoán vị vũ trụ"),
        opt("Eliminate equivalence partitioning", "Loại EP"),
        opt("Replace reviews", "Thay review"),
      ],
    },
    {
      qEn: "Coverage gaps indicate:",
      qVi: "Lỗ hổng bao phủ cho thấy:",
      c: opt("Areas not yet exercised by tests", "Vùng chưa được kiểm thử"),
      w: [
        opt("Perfect quality achieved", "Đạt chất lượng hoàn hảo"),
        opt("No further testing needed", "Không cần kiểm thử thêm"),
        opt("Zero residual risk", "Rủi ro dư bằng 0"),
      ],
    },
    {
      qEn: "Experience-based techniques include:",
      qVi: "Kỹ thuật dựa kinh nghiệm gồm:",
      c: opt("Error guessing and exploratory testing", "Đoán lỗi và exploratory"),
      w: [
        opt("Only exhaustive enumeration", "Chỉ liệt kê toàn diện"),
        opt("Only opcode dumps", "Chỉ dump opcode"),
        opt("Only barcode scans", "Chỉ quét mã vạch"),
      ],
    },
    {
      qEn: "Test basis for acceptance tests often includes:",
      qVi: "Cơ sở kiểm thử chấp nhận thường gồm:",
      c: opt("User stories and acceptance criteria", "User story và tiêu chí chấp nhận"),
      w: [
        opt("Compiler lexer tables only", "Chỉ bảng lexer compiler"),
        opt("GPU VRAM vendors only", "Chỉ hãng VRAM GPU"),
        opt("Parking fines database only", "Chỉ CSDL phạt đậu xe"),
      ],
    },
    {
      qEn: "Partitioning invalid classes matters because:",
      qVi: "Phân vùng lớp không hợp lệ quan trọng vì:",
      c: opt("Systems must handle erroneous inputs safely", "Hệ thống phải xử lý đầu vào sai an toàn"),
      w: [
        opt("Invalid inputs never occur", "Đầu vào sai không bao giờ xảy ra"),
        opt("Users never mistype", "Người dùng không gõ nhầm"),
        opt("Networks never corrupt packets", "Mạng không hỏng gói"),
      ],
    },
    {
      qEn: "Two-value BVA often tests:",
      qVi: "BVA hai giá trị thường kiểm tra:",
      c: opt("The boundary and one value inside the partition", "Biên và một giá trị trong phân vùng"),
      w: [
        opt("Only cosmological constants", "Chỉ hằng số vũ trụ học"),
        opt("Only lottery jackpots", "Chỉ jackpot xổ số"),
        opt("Only celebrity ages", "Chỉ tuổi người nổi tiếng"),
      ],
    },
    {
      qEn: "Decision table completeness aims for:",
      qVi: "Đầy đủ bảng quyết định nhằm:",
      c: opt("All meaningful condition combinations considered", "Xét mọi tổ hợp điều kiện có nghĩa"),
      w: [
        opt("Ignoring contradictions", "Bỏ qua mâu thuẫn"),
        opt("Hiding actions", "Giấu hành động"),
        opt("Removing ELSE rules arbitrarily", "Xóa ELSE tuỳ tiện"),
      ],
    },
    {
      qEn: "Coverage of acceptance scenarios ties to:",
      qVi: "Bao phủ kịch bản chấp nhận gắn với:",
      c: opt("Business objectives and agreed criteria", "Mục tiêu kinh doanh và tiêu chí thống nhất"),
      w: [
        opt("Compiler mascot colors", "Màu mascot compiler"),
        opt("Desk plant taxonomy", "Phân loại cây bàn"),
        opt("Elevator music playlists", "Playlist nhạc thang máy"),
      ],
    },
    {
      qEn: "Test design should consider:",
      qVi: "Thiết kế kiểm thử nên xét:",
      c: opt("Test environments and data realism", "Môi trường và tính thực tế dữ liệu"),
      w: [
        opt("Only lunar phases", "Chỉ pha trăng"),
        opt("Only shoe polish brands", "Chỉ nhãn xi giày"),
        opt("Only concert ticket stubs", "Chỉ vé concert"),
      ],
    },
    {
      qEn: "Techniques suitable for workflow rules often include:",
      qVi: "Kỹ thuật phù hợp luật quy trình thường gồm:",
      c: opt("Decision tables and state transition", "Bảng quyết định và chuyển trạng thái"),
      w: [
        opt("Only barcode checksums", "Chỉ checksum mã vạch"),
        opt("Only RGB histograms", "Chỉ histogram RGB"),
        opt("Only submarine sonar", "Chỉ sonar tàu ngầm"),
      ],
    },
    {
      qEn: "Equivalence class testing selects:",
      qVi: "Kiểm thử lớp tương đương chọn:",
      c: opt("Representatives expected to behave equivalently", "Đại diện được kỳ vọng hành vi tương đương"),
      w: [
        opt("Random cosmic integers only", "Chỉ số nguyên ngẫu nhiên vũ trụ"),
        opt("Only CEO favorite numbers", "Chỉ số CEO thích"),
        opt("Only palindrome dates", "Chỉ ngày đối xứng"),
      ],
    },
    {
      qEn: "Iterative refinement of tests occurs when:",
      qVi: "Tinh chỉnh lặp các ca kiểm thử khi:",
      c: opt("New risks or information emerge", "Xuất hiện rủi ro hoặc thông tin mới"),
      w: [
        opt("Testing is frozen forever", "Kiểm thử đóng băng mãi"),
        opt("No defects exist by fiat", "Không có khiếm khuyết theo lệnh"),
        opt("Managers forbid learning", "Quản lý cấm học"),
      ],
    },
    {
      qEn: "Traceability from criteria to tests helps:",
      qVi: "Truy vết từ tiêu chí đến kiểm thử giúp:",
      c: opt("Prove coverage of agreed scope", "Chứng minh bao phủ phạm vi thống nhất"),
      w: [
        opt("Hide uncovered scope", "Giấu phạm vi chưa cover"),
        opt("Delete requirements", "Xóa yêu cầu"),
        opt("Avoid retrospectives", "Tránh retrospective"),
      ],
    },
    {
      qEn: "A concrete expected result should be:",
      qVi: "Kết quả mong đợi cụ thể nên:",
      c: opt("Observable and evaluable", "Quan sát được và đánh giá được"),
      w: [
        opt("Purely subjective vibes", "Chỉ cảm nhận chủ quan"),
        opt("Secret to executives only", "Bí mật chỉ BGĐ"),
        opt("Infinite prose only", "Chỉ văn xuôi vô hạn"),
      ],
    },
    {
      qEn: "Domain analysis precedes:",
      qVi: "Phân tích miền đứng trước:",
      c: opt("Selecting partitions and boundary tests", "Chọn phân vùng và kiểm thử biên"),
      w: [
        opt("Deleting test environments", "Xóa môi trường kiểm thử"),
        opt("Shipping untested builds", "Ship bản chưa kiểm thử"),
        opt("Ignoring stakeholders", "Bỏ qua bên liên quan"),
      ],
    },
    {
      qEn: "Collaborative workshops for examples support:",
      qVi: "Workshop hợp tác cho ví dụ hỗ trợ:",
      c: opt("ATDD/BDD style executable specifications", "Đặc tả thực thi kiểu ATDD/BDD"),
      w: [
        opt("Removing automation", "Bỏ tự động"),
        opt("Banning testers", "Cấm tester"),
        opt("Deleting retrospectives", "Xóa retrospective"),
      ],
    },
    {
      qEn: "Risk-based prioritization prefers tests targeting:",
      qVi: "Ưu tiên theo rủi ro thích kiểm thử nhắm:",
      c: opt("Higher assessed product risk areas", "Vùng rủi ro sản phẩm đánh giá cao hơn"),
      w: [
        opt("Only cosmetic tooltip typos", "Chỉ lỗi tooltip"),
        opt("Only splash screen hues", "Chỉ sắc splash"),
        opt("Only mascot ear shapes", "Chỉ tai mascot"),
      ],
    },
    {
      qEn: "Coverage of requirements via EP/BVA requires:",
      qVi: "Bao phủ yêu cầu qua EP/BVA cần:",
      c: opt("Mapping tests back to requirement IDs", "Ánh xạ kiểm thử ngược ID yêu cầu"),
      w: [
        opt("Deleting requirement IDs", "Xóa ID yêu cầu"),
        opt("Renaming tests randomly", "Đổi tên test ngẫu nhiên"),
        opt("Avoiding logs", "Tránh log"),
      ],
    },
    {
      qEn: "Path-sensitive defects appear when:",
      qVi: "Khiếm khuyết nhạy đường đi xuất hiện khi:",
      c: opt("Different sequences lead to different faulty behavior", "Trình tự khác cho hành vi lỗi khác"),
      w: [
        opt("All paths always identical", "Mọi đường luôn giống nhau"),
        opt("CPU speed infinite", "CPU vô hạn tốc độ"),
        opt("RAM size zero", "RAM bằng 0"),
      ],
    },
    {
      qEn: "Test idea catalogs help:",
      qVi: "Danh mục ý tưởng kiểm thử giúp:",
      c: opt("Reuse domain-specific defect triggers", "Tái sử dụng kích hoạt khiếm khuyết theo miền"),
      w: [
        opt("Eliminate thinking", "Loại suy nghĩ"),
        opt("Hide charters", "Giấu charter"),
        opt("Replace automation", "Thay tự động"),
      ],
    },
    {
      qEn: "Statement coverage does NOT guarantee:",
      qVi: "Bao phủ câu lệnh KHÔNG đảm bảo:",
      c: opt("All decisions evaluated both ways", "Mọi quyết định được đánh giá hai hướng"),
      w: [
        opt("Some statements executed", "Một số câu được thực thi"),
        opt("Basic smoke sanity sometimes", "Đôi khi smoke/sanity cơ bản"),
        opt("Tool instrumentation possible", "Có thể gắn công cụ"),
      ],
    },
    {
      qEn: "Model-based testing uses:",
      qVi: "Kiểm thử dựa trên mô hình dùng:",
      c: opt("Abstract models to derive concrete tests", "Mô hình trừu tượng để suy ca cụ thể"),
      w: [
        opt("Only sticky notes randomly", "Chỉ sticky note ngẫu nhiên"),
        opt("Only fridge magnets", "Chỉ nam châm tủ lạnh"),
        opt("Only bingo cards", "Chỉ thẻ bingo"),
      ],
    },
    {
      qEn: "Testing \"alternate flows\" in use cases targets:",
      qVi: "Kiểm thử luồng thay thế trong use case nhắm:",
      c: opt("Exceptions and recovery behaviors", "Ngoại lệ và hành vi phục hồi"),
      w: [
        opt("Only main sunny success", "Chỉ thành công chính"),
        opt("Printer fonts only", "Chỉ font máy in"),
        opt("Desk lamp wattage only", "Chỉ watt đèn bàn"),
      ],
    },
    {
      qEn: "Equivalence partitioning applies to:",
      qVi: "Phân vùng tương đương áp dụng cho:",
      c: opt("Inputs, outputs, time, interfaces and internal values", "Đầu vào, đầu ra, thời gian, giao diện, giá trị nội bộ"),
      w: [
        opt("Only GPU shaders", "Chỉ shader GPU"),
        opt("Only payroll overtime", "Chỉ làm thêm lương"),
        opt("Only subway fares", "Chỉ giá vé metro"),
      ],
    },
    {
      qEn: "Weak areas after exploratory sessions feed:",
      qVi: "Vùng yếu sau phiên exploratory đưa vào:",
      c: opt("Charter refinements and scripted regression seeds", "Tinh chỉnh charter và hạt giống hồi quy có script"),
      w: [
        opt("Deleting logs", "Xóa log"),
        opt("Ignoring defects", "Bỏ qua khiếm khuyết"),
        opt("Stopping all automation", "Dừng mọi tự động"),
      ],
    },
    {
      qEn: "Testability of acceptance criteria improves when:",
      qVi: "Khả năng kiểm thử tiêu chí chấp nhận tốt hơn khi:",
      c: opt("Criteria are measurable and unambiguous", "Tiêu chí đo được và không mơ hồ"),
      w: [
        opt("Criteria are poetic only", "Tiêu chí chỉ thơ"),
        opt("Criteria change hourly secretly", "Tiêu chí đổi hàng giờ bí mật"),
        opt("Criteria forbid verification", "Tiêu chí cấm xác minh"),
      ],
    },
    {
      qEn: "Branch coverage ensures:",
      qVi: "Bao phủ nhánh đảm bảo:",
      c: opt("Each outcome of decision points exercised", "Mỗi kết quả điểm quyết định được thực thi"),
      w: [
        opt("Every loop unrolled infinitely", "Mọi vòng lặp mở vô hạn"),
        opt("Every SQL cartesian join", "Mọi join Descartes SQL"),
        opt("Every printer driver installed", "Mọi driver máy in"),
      ],
    },
  ];
}

export function generateChapter4(count, seedBase) {
  const stems = stemsArray();
  const out = [];
  for (let i = 0; i < count; i++) {
    const s = stems[i % stems.length];
    const pool = [...s.w, ...stems.flatMap((x) => x.w)].filter(
      (o) => o.en !== s.c.en
    );
    out.push(buildQ(seedBase + i * 7949, s.qEn, s.qVi, s.c, pool, X));
  }
  return out;
}
