const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/content/chapters/chapter-2.md');
let content = fs.readFileSync(file, 'utf-8');

// 1. Good Testing Practices
content = content.replace(
  /For every development activity, there is a corresponding test activity\./g,
  "For every development activity, there is a corresponding test activity. / Đối với mỗi hoạt động phát triển, đều có một hoạt động kiểm thử tương ứng."
);
content = content.replace(
  /Different test levels have specific, different objectives to avoid redundancy\./g,
  "Different test levels have specific, different objectives to avoid redundancy. / Các mức độ kiểm thử khác nhau có các mục tiêu cụ thể và khác nhau để tránh trùng lặp."
);
content = content.replace(
  /Test analysis and design for a given level begins during the corresponding development phase\./g,
  "Test analysis and design for a given level begins during the corresponding development phase. / Phân tích và thiết kế kiểm thử cho một mức độ nhất định bắt đầu trong giai đoạn phát triển tương ứng."
);
content = content.replace(
  /Testers review work products as soon as drafts are available\./g,
  "Testers review work products as soon as drafts are available. / Kiểm thử viên xem xét các sản phẩm làm việc ngay khi có bản thảo."
);

// 2. DevOps
content = content.replace(
  /\*\*DevOps\*\* bridges development and operations\. From a testing perspective:/g,
  "**DevOps** bridges development and operations. From a testing perspective: / **DevOps** kết nối phát triển và vận hành. Từ góc độ kiểm thử:"
);
content = content.replace(
  /Fast feedback on code quality\./g,
  "Fast feedback on code quality. / Phản hồi nhanh về chất lượng mã nguồn."
);
content = content.replace(
  /CI promotes shift left by encouraging component tests and static analysis with code submission\./g,
  "CI promotes shift left by encouraging component tests and static analysis with code submission. / CI thúc đẩy dịch chuyển sang trái bằng cách khuyến khích kiểm thử thành phần và phân tích tĩnh ngay khi đẩy mã."
);
content = content.replace(
  /Automated CI\/CD pipelines establish stable test environments\./g,
  "Automated CI/CD pipelines establish stable test environments. / Các đường ống CI/CD tự động thiết lập môi trường kiểm thử ổn định."
);
content = content.replace(
  /Increased visibility on non-functional characteristics\./g,
  "Increased visibility on non-functional characteristics. / Tăng khả năng hiển thị các đặc tính phi chức năng."
);
content = content.replace(
  /Reduced repetitive manual testing; minimized regression risk\./g,
  "Reduced repetitive manual testing; minimized regression risk. / Giảm bớt kiểm thử thủ công lặp lại; giảm thiểu rủi ro hồi quy."
);

// 3. Shift Left
content = content.replace(
  /Testing performed earlier in the SDLC\./g,
  "Testing performed earlier in the SDLC. / Kiểm thử được thực hiện sớm hơn trong vòng đời phát triển (SDLC)."
);
content = content.replace(
  /Does \*\*not\*\* mean eliminating later testing\./g,
  "Does **not** mean eliminating later testing. / **Không** có nghĩa là loại bỏ các bước kiểm thử sau này."
);
content = content.replace(
  /Practices: reviewing specifications from a tester's perspective; writing test cases before code; using CI\/CD; static analysis before dynamic testing; non-functional testing at component level where possible\./g,
  "Practices: reviewing specifications from a tester's perspective; writing test cases before code; using CI/CD; static analysis before dynamic testing; non-functional testing at component level where possible. / Thực hành: xem xét đặc tả từ góc độ người kiểm thử; viết ca kiểm thử trước khi viết code; sử dụng CI/CD; phân tích tĩnh trước kiểm thử động; kiểm thử phi chức năng ở mức thành phần nếu có thể."
);

// 4. Test Types
content = content.replace(
  /Evaluates \"what\" the system should do\. Objectives: functional completeness, correctness, appropriateness\./g,
  'Evaluates "what" the system should do. Objectives: functional completeness, correctness, appropriateness. / Đánh giá hệ thống làm được "cái gì". Mục tiêu: tính đầy đủ, tính đúng đắn và tính phù hợp về chức năng.'
);
content = content.replace(
  /Evaluates \"how well\" the system behaves\. Based on ISO 25010: performance efficiency, compatibility, usability \(interaction capability\), reliability, security, maintainability, portability \(flexibility\), safety\./g,
  'Evaluates "how well" the system behaves. Based on ISO 25010: performance efficiency, compatibility, usability, reliability, security, maintainability, portability, safety. / Đánh giá hệ thống hoạt động "tốt như thế nào". Dựa trên ISO 25010: hiệu quả hiệu suất, tính tương thích, tính khả dụng, độ tin cậy, bảo mật, khả năng bảo trì, tính di động, an toàn.'
);

fs.writeFileSync(file, content);
console.log("Chapter 2 Polishing complete!");
