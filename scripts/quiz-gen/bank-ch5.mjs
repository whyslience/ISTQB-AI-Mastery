import { buildQ, opt } from "./core.mjs";

const X =
  "* **Đúng / Correct:** ISTQB CTFL v4.0.1 — Chapter 5 (Managing the Test Activities).\n* **Sai / Incorrect:** Misstates planning, risk, reporting, CM, or defect workflow concepts.";

function stemsArray() {
  return [
    {
      qEn: "A master test plan typically addresses:",
      qVi: "Kế hoạch kiểm thử master thường đề cập:",
      c: opt("Multiple test levels coordination across project", "Phối hợp nhiều mức kiểm thử trong dự án"),
      w: [
        opt("Only printer warranties", "Chỉ bảo hành máy in"),
        opt("Only cafeteria menus", "Chỉ thực đơn căng tin"),
        opt("Only mascot redesigns", "Chỉ thiết kế mascot"),
      ],
    },
    {
      qEn: "Entry criteria define:",
      qVi: "Tiêu chí đầu vào xác định:",
      c: opt("Prerequisites to start a test phase", "Điều kiện tiên quyết để bắt đầu giai đoạn kiểm thử"),
      w: [
        opt("When testing completely ends forever", "Khi kiểm thử kết thúc hoàn toàn"),
        opt("CEO vacation schedules", "Lịch nghỉ CEO"),
        opt("Office paint refresh cycles", "Chu kỳ sơn văn phòng"),
      ],
    },
    {
      qEn: "Exit criteria define:",
      qVi: "Tiêu chí đầu ra xác định:",
      c: opt("Conditions to stop testing a stage", "Điều kiện dừng kiểm thử một giai đoạn"),
      w: [
        opt("Starting prerequisites only", "Chỉ điều kiện bắt đầu"),
        opt("Marketing slogans", "Khẩu hiệu marketing"),
        opt("GPU shader lengths", "Độ dài shader GPU"),
      ],
    },
    {
      qEn: "Estimation techniques include:",
      qVi: "Kỹ thuật ước lượng gồm:",
      c: opt("Metrics-based and expert-based approaches", "Theo chỉ số và theo chuyên gia"),
      w: [
        opt("Only dice rolls", "Chỉ gieo xúc xắc"),
        opt("Only horoscopes", "Chỉ tử vi"),
        opt("Only subway fares", "Chỉ giá vé metro"),
      ],
    },
    {
      qEn: "Test scheduling allocates:",
      qVi: "Lập lịch kiểm thử phân bổ:",
      c: opt("People, environments and milestones", "Người, môi trường và mốc"),
      w: [
        opt("Only coffee beans", "Chỉ hạt cà phê"),
        opt("Only celebrity tweets", "Chỉ tweet người nổi tiếng"),
        opt("Only postage stamps", "Chỉ tem thư"),
      ],
    },
    {
      qEn: "Test monitoring gathers:",
      qVi: "Giám sát kiểm thử thu thập:",
      c: opt("Progress metrics vs plans and criteria", "Chỉ số tiến độ so kế hoạch và tiêu chí"),
      w: [
        opt("CEO shoe sizes", "Cỡ giày CEO"),
        opt("Printer toner fantasies", "Ảo tưởng mực máy in"),
        opt("Warehouse humidity folklore", "Dân gian độ ẩm kho"),
      ],
    },
    {
      qEn: "Test control applies:",
      qVi: "Kiểm soát kiểm thử áp dụng:",
      c: opt("Corrective actions based on monitoring", "Hành động khắc phục dựa giám sát"),
      w: [
        opt("Random rebranding", "Đổi thương hiệu ngẫu nhiên"),
        opt("Deleting version control", "Xóa version control"),
        opt("Ignoring stakeholders", "Bỏ qua bên liên quan"),
      ],
    },
    {
      qEn: "Product risk relates to:",
      qVi: "Rủi ro sản phẩm liên quan:",
      c: opt("Quality characteristics affecting stakeholders", "Đặc tính chất lượng ảnh hưởng bên liên quan"),
      w: [
        opt("Only HR picnic budgets", "Chỉ ngân sách picnic HR"),
        opt("Only GPU RGB LEDs", "Chỉ LED RGB GPU"),
        opt("Only subway map fonts", "Chỉ font bản đồ metro"),
      ],
    },
    {
      qEn: "Project risk relates to:",
      qVi: "Rủi ro dự án liên quan:",
      c: opt("Management/control factors like schedule and skills", "Yếu tố quản lý/kiểm soát như lịch và kỹ năng"),
      w: [
        opt("Only Pantone codes", "Chỉ mã Pantone"),
        opt("Only ice cream flavors", "Chỉ hương kem"),
        opt("Only zoo ticket pricing", "Chỉ giá vé sở thú"),
      ],
    },
    {
      qEn: "Risk level combines:",
      qVi: "Mức rủi ro kết hợp:",
      c: opt("Likelihood and impact", "Khả năng xảy ra và tác động"),
      w: [
        opt("Salary and age only", "Chỉ lương và tuổi"),
        opt("GPU VRAM brand only", "Chỉ hãng VRAM GPU"),
        opt("Desk height only", "Chỉ chiều cao bàn"),
      ],
    },
    {
      qEn: "Risk-based testing prioritizes:",
      qVi: "Kiểm thử dựa trên rủi ro ưu tiên:",
      c: opt("Tests addressing higher assessed risks first", "Kiểm thử giải quyết rủi ro đánh giá cao trước"),
      w: [
        opt("Alphabetical test case names only", "Chỉ tên ca theo alphabet"),
        opt("Shortest strings only", "Chỉ chuỗi ngắn nhất"),
        opt("Oldest scripts only", "Chỉ script cũ nhất"),
      ],
    },
    {
      qEn: "Residual risk means:",
      qVi: "Rủi ro dư có nghĩa:",
      c: opt("Risk remaining after mitigation efforts", "Rủi ro còn lại sau giảm thiểu"),
      w: [
        opt("Risk eliminated absolutely", "Rủi ro loại tuyệt đối"),
        opt("Risk renamed only", "Chỉ đổi tên rủi ro"),
        opt("Risk exported to Mars", "Chuyển rủi ro lên Sao Hỏa"),
      ],
    },
    {
      qEn: "ISO 31000 frames risk as:",
      qVi: "ISO 31000 khung rủi ro là:",
      c: opt("Uncertainty affecting objectives", "Không chắc chắn ảnh hưởng mục tiêu"),
      w: [
        opt("Certain profit guarantees", "Đảm bảo lợi nhuận chắc chắn"),
        opt("Printer DPI only", "Chỉ DPI máy in"),
        opt("Ice thickness folklore", "Dân gian độ dày băng"),
      ],
    },
    {
      qEn: "Typical test plan sections include:",
      qVi: "Phần điển hình kế hoạch kiểm thử gồm:",
      c: opt("Scope, schedule, approach and risks", "Phạm vi, lịch, phương pháp và rủi ro"),
      w: [
        opt("Only karaoke playlists", "Chỉ playlist karaoke"),
        opt("Only GPU shader trivia", "Chỉ trivia shader GPU"),
        opt("Only stamp albums", "Chỉ album tem"),
      ],
    },
    {
      qEn: "Configuration management for testing ensures:",
      qVi: "Quản lý cấu hình cho kiểm thử đảm bảo:",
      c: opt("Identified versions of test items and testware", "Phiên bản được nhận diện của hạng mục và testware"),
      w: [
        opt("Deleting baselines arbitrarily", "Xóa baseline tuỳ tiện"),
        opt("Ignoring change control", "Bỏ kiểm soát thay đổi"),
        opt("Random branch checkouts only", "Chỉ checkout nhánh ngẫu nhiên"),
      ],
    },
    {
      qEn: "Defect reports typically contain:",
      qVi: "Báo cáo khiếm khuyết thường chứa:",
      c: opt("Reproduction steps and expected vs actual", "Bước tái hiện và mong đợi vs thực tế"),
      w: [
        opt("Only CEO motivational quotes", "Chỉ câu động viên CEO"),
        opt("Only RGB hex palettes", "Chỉ bảng hex RGB"),
        opt("Only subway transfers", "Chỉ chuyển tuyến metro"),
      ],
    },
    {
      qEn: "Defect workflow commonly includes:",
      qVi: "Luồng khiếm khuyết thường gồm:",
      c: opt("Logging, analysis, fixing and confirmation testing", "Ghi log, phân tích, sửa và kiểm thử xác nhận"),
      w: [
        opt("Immediate deletion without triage", "Xóa ngay không phân loại"),
        opt("Only printing posters", "Chỉ in poster"),
        opt("Only renaming mascots", "Chỉ đổi tên mascot"),
      ],
    },
    {
      qEn: "Test completion summarizes:",
      qVi: "Kết thúc kiểm thử tóm tắt:",
      c: opt("Outcomes vs criteria and residual risks", "Kết quả so tiêu chí và rủi ro dư"),
      w: [
        opt("Only cafeteria satisfaction", "Chỉ hài lòng căng tin"),
        opt("Only GPU box art", "Chỉ hình hộp GPU"),
        opt("Only sticker glossiness", "Chỉ độ bóng sticker"),
      ],
    },
    {
      qEn: "Metrics may include:",
      qVi: "Chỉ số có thể gồm:",
      c: opt("Defect density and test pass rates", "Mật độ khiếm khuyết và tỷ lệ đạt kiểm thử"),
      w: [
        opt("Only zoo attendance", "Chỉ lượt vào sở thú"),
        opt("Only desk clutter scores", "Chỉ điểm lộn xộn bàn"),
        opt("Only karaoke pitch scores", "Chỉ điểm cao độ karaoke"),
      ],
    },
    {
      qEn: "Communication channels for status may include:",
      qVi: "Kênh truyền đạt trạng thái có thể gồm:",
      c: opt("Dashboards, chats and formal reports", "Dashboard, chat và báo cáo chính thức"),
      w: [
        opt("Only carrier pigeons exclusively", "Chỉ bồ câu đưa thư"),
        opt("Only fortune cookies", "Chỉ bánh may mắn"),
        opt("Only submarine sonar", "Chỉ sonar tàu ngầm"),
      ],
    },
    {
      qEn: "Inaccuracy factors in estimation include:",
      qVi: "Yếu tố sai lệch ước lượng gồm:",
      c: opt("Assumption drift and changing scope", "Giả định trôi và phạm vi đổi"),
      w: [
        opt("Perfect foresight always", "Tiên tri hoàn hảo luôn"),
        opt("Printer DPI only", "Chỉ DPI máy in"),
        opt("Desk plant leaf counts", "Đếm lá cây bàn"),
      ],
    },
    {
      qEn: "Dependency risks affect:",
      qVi: "Rủi ro phụ thuộc ảnh hưởng:",
      c: opt("Readiness of environments and deliveries", "Sẵn sàng môi trường và giao hàng"),
      w: [
        opt("Only karaoke latency", "Chỉ độ trễ karaoke"),
        opt("Only mascot eyelash curl", "Chỉ cong mi mascot"),
        opt("Only GPU RGB pulse Hz", "Chỉ nhịp Hz RGB GPU"),
      ],
    },
    {
      qEn: "Test policy provides:",
      qVi: "Chính sách kiểm thử cung cấp:",
      c: opt("Organizational principles for testing", "Nguyên tắc tổ chức cho kiểm thử"),
      w: [
        opt("Detailed step-by-step scripts only", "Chỉ script chi tiết từng bước"),
        opt("Payroll deductions tables", "Bảng khấu trừ lương"),
        opt("Coffee grind catalogs", "Danh mục độ xay cà phê"),
      ],
    },
    {
      qEn: "Test strategy outlines:",
      qVi: "Chiến lược kiểm thử phác:",
      c: opt("Overall approach and levels/types mix", "Phương pháp tổng thể và phối mức/loại"),
      w: [
        opt("Individual keystrokes only", "Chỉ từng phím gõ"),
        opt("Printer margins only", "Chỉ lề máy in"),
        opt("Elevator music BPM only", "Chỉ BPM nhạc thang máy"),
      ],
    },
    {
      qEn: "Product risk mitigation via testing may include:",
      qVi: "Giảm rủi ro sản phẩm qua kiểm thử có thể gồm:",
      c: opt("Targeted test types for affected quality attributes", "Loại kiểm thử nhắm đặc tính chất lượng"),
      w: [
        opt("Deleting documented risks", "Xóa rủi ro đã ghi"),
        opt("Ignoring non-functional tests", "Bỏ phi chức năng"),
        opt("Stopping defect reporting", "Ngừng báo cáo khiếm khuyết"),
      ],
    },
    {
      qEn: "Regression test selection after changes considers:",
      qVi: "Chọn kiểm thử hồi quy sau thay đổi xét:",
      c: opt("Impact/risk of affected areas", "Tác động/rủi ro vùng ảnh hưởng"),
      w: [
        opt("Only filenames alphabetically", "Chỉ tên file alphabet"),
        opt("Only shortest filenames", "Chỉ tên file ngắn nhất"),
        opt("Only RGB averages", "Chỉ trung bình RGB"),
      ],
    },
    {
      qEn: "Test progress reports inform:",
      qVi: "Báo cáo tiến độ kiểm thử cho biết:",
      c: opt("Current status vs plans and impediments", "Trạng thái hiện so kế hoạch và trở ngại"),
      w: [
        opt("Only celebrity gossip", "Chỉ tin đồn người nổi tiếng"),
        opt("Only zoo feeding times", "Chỉ giờ cho ăn sở thú"),
        opt("Only GPU box weights", "Chỉ trọng lượng hộp GPU"),
      ],
    },
    {
      qEn: "Quality costs include:",
      qVi: "Chi phí chất lượng gồm:",
      c: opt("Prevention, appraisal, internal and external failure costs", "Phòng ngừa, thẩm định, lỗi nội bộ và bên ngoài"),
      w: [
        opt("Only marketing balloons", "Chỉ bóng marketing"),
        opt("Only desk toys budgets", "Chỉ ngân sách đồ chơi bàn"),
        opt("Only karaoke receipts", "Chỉ hóa đơn karaoke"),
      ],
    },
    {
      qEn: "Baseline in CM allows:",
      qVi: "Baseline trong CM cho phép:",
      c: opt("Controlled evolution via formal change process", "Tiến hóa có kiểm soát qua quy trình thay đổi"),
      w: [
        opt("Unrestricted edits without tracking", "Sửa không hạn không theo dõi"),
        opt("Deleting audit trails", "Xóa vết kiểm toán"),
        opt("Random force pushes only", "Chỉ force push ngẫu nhiên"),
      ],
    },
    {
      qEn: "Defect severity reflects:",
      qVi: "Mức nghiêm trọng khiếm khuyết phản ánh:",
      c: opt("Impact on stakeholders when failures occur", "Tác động lên bên liên quan khi có thất bại"),
      w: [
        opt("Developer mood only", "Chỉ tâm trạng developer"),
        opt("Printer Wi-Fi SSID only", "Chỉ SSID Wi-Fi máy in"),
        opt("Coffee roast darkness only", "Chỉ độ rang cà phê"),
      ],
    },
    {
      qEn: "Defect priority reflects:",
      qVi: "Ưu tiên khiếm khuyết phản ánh:",
      c: opt("Urgency of fixing relative to business needs", "Mức gấp sửa so nhu cầu kinh doanh"),
      w: [
        opt("Always identical to severity", "Luôn giống severity"),
        opt("Developer shoe sizes", "Cỡ giày developer"),
        opt("GPU LED hue angles", "Góc hue LED GPU"),
      ],
    },
    {
      qEn: "Test deliverables handover requires:",
      qVi: "Bàn giao sản phẩm kiểm thử cần:",
      c: opt("Known versions and accessible locations", "Phiên bản đã biết và vị trí truy cập"),
      w: [
        opt("Deleting archives", "Xóa lưu trữ"),
        opt("Losing trace links", "Mất liên kết trace"),
        opt("Secret binaries only", "Chỉ nhị phân bí mật"),
      ],
    },
    {
      qEn: "Escalation occurs when:",
      qVi: "Leo thang xảy ra khi:",
      c: opt("Exit criteria cannot be met without decisions", "Không đạt tiêu chí ra nếu không quyết định"),
      w: [
        opt("All tests always green forever", "Mọi kiểm thử luôn xanh mãi"),
        opt("Coffee machines idle", "Máy cà phê rảnh"),
        opt("Mascot smiles universally", "Mascot cười phổ quát"),
      ],
    },
    {
      qEn: "Audiences for completion reports differ:",
      qVi: "Đối tượng báo cáo hoàn thành khác nhau:",
      c: opt("Management vs team detail expectations", "Kỳ vọng chi tiết quản lý vs đội"),
      w: [
        opt("Everyone wants identical pixel fonts", "Ai cũng muốn font pixel giống"),
        opt("Only zookeepers read reports", "Chỉ người nuôi thú đọc"),
        opt("Only GPUs parse PDFs", "Chỉ GPU đọc PDF"),
      ],
    },
    {
      qEn: "Product risk workshops identify:",
      qVi: "Workshop rủi ro sản phẩm nhận diện:",
      c: opt("Quality risks and mitigation ideas", "Rủi ro chất lượng và ý giảm thiểu"),
      w: [
        opt("Only payroll anomalies", "Chỉ bất thường lương"),
        opt("Only karaoke rankings", "Chỉ xếp hạng karaoke"),
        opt("Only subway graffiti themes", "Chủ đề graffiti metro"),
      ],
    },
    {
      qEn: "Monitoring risk indicators helps:",
      qVi: "Giám sát chỉ số rủi ro giúp:",
      c: opt("Adjust priorities when risks materialize", "Điều chỉnh ưu tiên khi rủi ro hiện thực"),
      w: [
        opt("Freeze scope eternally", "Đóng băng phạm vi vĩnh viễn"),
        opt("Hide defects", "Giấu khiếm khuyết"),
        opt("Delete histories", "Xóa lịch sử"),
      ],
    },
    {
      qEn: "Resource planning covers:",
      qVi: "Lập kế hoạch nguồn lực gồm:",
      c: opt("Skills, tools and environments availability", "Kỹ năng, công cụ và sẵn có môi trường"),
      w: [
        opt("Only fridge magnets inventory", "Chỉ kiểm kê nam châm tủ lạnh"),
        opt("Only GPU LED watt trivia", "Chỉ trivia watt LED GPU"),
        opt("Only postage stamp gum flavor", "Chỉ hương keo tem"),
      ],
    },
    {
      qEn: "Incident-like defect handling aligns with:",
      qVi: "Xử lý khiếm khuyết kiểu incident phù hợp:",
      c: opt("Structured workflows from detection to closure", "Luồng có cấu trúc từ phát hiện đến đóng"),
      w: [
        opt("Deleting tickets randomly", "Xóa ticket ngẫu nhiên"),
        opt("Ignoring stakeholder visibility", "Bỏ hiển thị bên liên quan"),
        opt("Skipping severity rules", "Bỏ quy tắc severity"),
      ],
    },
    {
      qEn: "Traceability supports monitoring by:",
      qVi: "Truy vết hỗ trợ giám sát bằng:",
      c: opt("Linking tests to requirements and risks", "Liên kết kiểm thử với yêu cầu và rủi ro"),
      w: [
        opt("Deleting requirement IDs", "Xóa ID yêu cầu"),
        opt("Renaming tests hourly", "Đổi tên test hàng giờ"),
        opt("Hiding coverage dashboards", "Giấu dashboard bao phủ"),
      ],
    },
    {
      qEn: "Test management across sites needs:",
      qVi: "Quản lý kiểm thử đa địa điểm cần:",
      c: opt("Clear communication norms and artifact ownership", "Quy ước giao tiếp và sở hữu sản phẩm"),
      w: [
        opt("Banning written updates", "Cấm cập nhật văn bản"),
        opt("Only whisper updates", "Chỉ thì thầm"),
        opt("Only fax humor memes", "Chỉ meme fax hài"),
      ],
    },
    {
      qEn: "Tool support for CM often integrates with:",
      qVi: "Công cụ CM thường tích hợp:",
      c: opt("Version control and CI/CD pipelines", "Kiểm soát phiên bản và pipeline CI/CD"),
      w: [
        opt("Only karaoke mixers", "Chỉ mixer karaoke"),
        opt("Only subway turnstiles", "Chỉ cửa xoay metro"),
        opt("Only gumball machines", "Chỉ máy kẹo gum"),
      ],
    },
    {
      qEn: "Defect duplication handling:",
      qVi: "Xử lý khiếm khuyết trùng:",
      c: opt("Links duplicates and preserves audit trail", "Liên kết trùng và giữ vết kiểm toán"),
      w: [
        opt("Deletes all copies silently", "Xóa mọi bản im lặng"),
        opt("Raises severity randomly", "Tăng severity ngẫu nhiên"),
        opt("Merges unrelated bugs", "Gộp bug không liên quan"),
      ],
    },
    {
      qEn: "Test estimation risk buffers address:",
      qVi: "Đệm rủi ro ước lượng kiểm thử cho:",
      c: opt("Unknowns like environment instability", "Ẩn số như môi trường không ổn định"),
      w: [
        opt("Certain zero-variance worlds", "Thế giới phương sai bằng 0 chắc chắn"),
        opt("Perfect clairvoyance", "Tiên tri hoàn hảo"),
        opt("Printer rainbow gradients", "Gradient cầu vồng máy in"),
      ],
    },
  ];
}

export function generateChapter5(count, seedBase) {
  const stems = stemsArray();
  const out = [];
  for (let i = 0; i < count; i++) {
    const s = stems[i % stems.length];
    const pool = [...s.w, ...stems.flatMap((x) => x.w)].filter(
      (o) => o.en !== s.c.en
    );
    out.push(buildQ(seedBase + i * 7969, s.qEn, s.qVi, s.c, pool, X));
  }
  return out;
}
