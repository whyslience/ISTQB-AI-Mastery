# Chapter 0: Syllabus Introduction & Front Matter / Chương 0: Giới thiệu và Phần đầu Giáo trình

## Certified Tester Foundation Level Syllabus v4.0.1 / Giáo trình CTFL v4.0.1

**International Software Testing Qualifications Board / Tổ chức Chứng chỉ Kiểm thử Phần mềm Quốc tế**

### Copyright Notice / Thông báo Bản quyền

Copyright © International Software Testing Qualifications Board (ISTQB®). ISTQB® is a registered trademark of the International Software Testing Qualifications Board.

Bản quyền © International Software Testing Qualifications Board (ISTQB®). ISTQB® là nhãn hiệu đã đăng ký của International Software Testing Qualifications Board.

Copyright © 2024 the authors of the Foundation Level v4.0.1 syllabus: Renzo Cerquozzi, Wim Decoutere, Jean-François Riverin, Arnika Hryszko, Martin Klonk, Meile Posthuma, Eric Riou du Cosquer (chair), Adam Roman, Lucjan Stapp, Stephanie Ulrich (vice chair), Eshraka Zakaria.

Bản quyền © 2024 các tác giả giáo trình Foundation Level v4.0.1: Renzo Cerquozzi, Wim Decoutere, Jean-François Riverin, Arnika Hryszko, Martin Klonk, Meile Posthuma, Eric Riou du Cosquer (chủ trì), Adam Roman, Lucjan Stapp, Stephanie Ulrich (phó chủ trì), Eshraka Zakaria.

Copyright © 2023 the authors of the Foundation Level v4.0 syllabus (and prior editions as listed in the official document).

Bản quyền © 2023 các tác giả giáo trình Foundation Level v4.0 (và các phiên bản trước như liệt kê trong tài liệu chính thức).

All rights reserved. Extracts for non-commercial use may be copied if the source is acknowledged. Accredited training providers and authors of articles or books may use this syllabus when the authors and ISTQB® are acknowledged. Any other use requires written approval from ISTQB®.

Đã bảo lưu mọi quyền. Trích dẫn phi thương mại được phép sao chép nếu ghi rõ nguồn. Các nhà cung cấp đào tạo được công nhận và tác giả bài báo/sách có thể sử dụng giáo trình khi ghi nhận tác giả và ISTQB®. Mọi sử dụng khác cần được ISTQB® chấp thuận bằng văn bản.

---

## Revision History / Lịch sử Phiên bản

| Version | Date | Remarks |
| :--- | :--- | :--- |
| CTFL v4.0.1 | 15.09.2024 | CTFL v4.0.1 – Errata |
| CTFL v4.0 | 21.04.2023 | CTFL v4.0 – General release version |
| CTFL v3.1.1 | 01.07.2021 | CTFL v3.1.1 – Copyright and logo update |
| CTFL v3.1 | 11.11.2019 | CTFL v3.1 – Maintenance release with minor updates |
| ISTQB 2018 | 27.04.2018 | CTFL v3.0 – Candidate general release version |
| ISTQB 2011 | 1.04.2011 | CTFL Syllabus Maintenance Release |
| ISTQB 2010 | 30.03.2010 | CTFL Syllabus Maintenance Release |
| ISTQB 2007 | 01.05.2007 | CTFL Syllabus Maintenance Release |
| ISTQB 2005 | 01.07.2005 | Certified Tester Foundation Level Syllabus v1.0 |
| ASQF V2.2 | 07.2003 | ASQF Syllabus Foundation Level Version v2.2 |
| ISEB V2.0 | 25.02.1999 | ISEB Software Testing Foundation Syllabus v2.0 |

---

## Acknowledgements / Lời cảm ơn

This document was formally released by the Product Owner / working group chair Eric Riou du Cosquer on 15.09.2024. It was produced by the ISTQB joint Foundation Level & Agile Working Groups, with extensive review by Member Boards and contributors worldwide. For the full list of contributors, technical reviewers, and ballot participants, see the official ISTQB PDF or `ISTQB_CTFL_Syllabus_v4.0.1.txt` in this project.

Tài liệu được phát hành chính thức bởi Product Owner / chủ trì nhóm làm việc Eric Riou du Cosquer ngày 15.09.2024. Nó do các nhóm làm việc Foundation Level & Agile của ISTQB soạn thảo, với sự đánh giá rộng rãi từ các Hội đồng Thành viên và nhiều cộng tác viên trên thế giới. Để xem danh sách đầy đủ người đóng góp, người review kỹ thuật và tham gia bỏ phiếu, xem tệp PDF chính thức của ISTQB hoặc `ISTQB_CTFL_Syllabus_v4.0.1.txt` trong dự án này.

---

## 0. Introduction / Giới thiệu

### 0.1. Purpose of this Syllabus / Mục đích của Giáo trình

This syllabus forms the basis for the International Software Testing Qualification at the Foundation Level. The ISTQB® provides this syllabus as follows:

Giáo trình này là cơ sở cho chứng chỉ Kiểm thử Phần mềm trình độ Foundation Level. ISTQB® cung cấp giáo trình cho các mục đích sau:

1. To member boards, to translate into their local language and to accredit training providers. Member boards may adapt the syllabus to their particular language needs and modify references to local publications.
1. Cho các hội đồng thành viên: dịch sang ngôn ngữ địa phương và công nhận nhà cung cấp đào tạo. Các hội đồng có thể điều chỉnh giáo trình theo ngôn ngữ và tham chiếu địa phương.

2. To certification bodies, to derive examination questions in their local language adapted to the learning objectives for this syllabus.
2. Cho các tổ chức cấp chứng chỉ: xây dựng đề thi bằng ngôn ngữ địa phương phù hợp mục tiêu học tập trong giáo trình.

3. To training providers, to produce courseware and determine appropriate teaching methods.
3. Cho nhà cung cấp đào tạo: soạn tài liệu khóa học và phương pháp giảng dạy phù hợp.

4. To certification candidates, to prepare for the certification exam (either as part of a training course or independently).
4. Cho thí sinh: chuẩn bị kỳ thi chứng chỉ (trong khóa học hoặc tự học).

To the international software and systems engineering community, to advance the profession of software and systems testing, and as a basis for books and articles.

Đối với cộng đồng kỹ sư phần mềm và hệ thống quốc tế: thúc đẩy nghề nghiệp kiểm thử phần mềm và hệ thống, và làm cơ sở cho sách và bài báo.

### 0.2. The Certified Tester Foundation Level in Software Testing / Foundation Level trong Kiểm thử Phần mềm

The Foundation Level qualification is aimed at anyone involved in software testing. This includes testers, test analysts, test engineers, test consultants, test managers, software developers, and development team members. It is also appropriate for anyone who wants a basic understanding of software testing, such as project managers, quality managers, product owners, business analysts, IT directors, and management consultants. Holders of the Foundation Certificate will be able to go on to higher-level software testing qualifications.

Chương trình Foundation Level hướng đến mọi người tham gia kiểm thử phần mềm: kiểm thử viên, chuyên viên phân tích kiểm thử, kỹ sư kiểm thử, tư vấn kiểm thử, quản lý kiểm thử, lập trình viên và thành viên nhóm phát triển. Cũng phù hợp cho người cần hiểu cơ bản về kiểm thử như quản lý dự án, quản lý chất lượng, product owner, nhà phân tích nghiệp vụ, giám đốc IT và tư vấn quản lý. Người đạt chứng chỉ Foundation có thể tiếp tục các cấp chứng chỉ kiểm thử cao hơn.

### 0.3. Career Path for Testers / Lộ trình Nghề nghiệp cho Kiểm thử viên

The ISTQB® scheme provides support for testing professionals at all stages of their careers. Individuals may continue to Core Advanced Levels (Test Analyst, Technical Test Analyst, Test Manager), Expert Level, Agile-related certifications, and the Specialist stream (e.g., test automation, AI testing, performance, security, acceptance testing, domain-specific schemes). Visit https://www.istqb.org for the latest information.

Lộ trình ISTQB® hỗ trợ chuyên gia kiểm thử ở mọi giai đoạn sự nghiệp. Có thể học tiếp cấp Advanced lõi (Test Analyst, Technical Test Analyst, Test Manager), Expert Level, chứng chỉ liên quan Agile, và dòng Specialist(ví dụ: tự động hóa, AI, hiệu năng, bảo mật, kiểm thử chấp nhận, theo lĩnh vực). Xem https://www.istqb.org để cập nhật mới nhất.

### 0.4. Business Outcomes / Kết quả Nghiệp vụ (Business Outcomes)

This section lists the 14 Business Outcomes expected of a person who has achieved the Foundation Level certification.

Mục này liệt kê 14 kết quả nghiệp vụ kỳ vọng ở người đạt chứng chỉ Foundation Level.

A Foundation Level Certified Tester can:

Người đạt chứng chỉ Foundation Level có thể:

* **FL-BO1**: Understand what testing is and why it is beneficial / **FL-BO1**: Hiểu kiểm thử là gì và vì sao có lợi
* **FL-BO2**: Understand fundamental concepts of software testing / **FL-BO2**: Hiểu các khái niệm nền tảng về kiểm thử phần mềm
* **FL-BO3**: Identify the test approach and activities to be implemented depending on the context of testing / **FL-BO3**: Xác định phương pháp và hoạt động kiểm thử phù hợp ngữ cảnh
* **FL-BO4**: Assess and improve the quality of documentation / **FL-BO4**: Đánh giá và cải thiện chất lượng tài liệu
* **FL-BO5**: Increase the effectiveness and efficiency of testing / **FL-BO5**: Tăng hiệu quả và hiệu suất kiểm thử
* **FL-BO6**: Align the test process with the software development lifecycle / **FL-BO6**: Đồng bộ quy trình kiểm thử với vòng đời phát triển phần mềm
* **FL-BO7**: Understand test management principles / **FL-BO7**: Hiểu các nguyên tắc quản lý kiểm thử
* **FL-BO8**: Write and communicate clear and understandable defect reports / **FL-BO8**: Viết và truyền đạt báo cáo lỗi rõ ràng, dễ hiểu
* **FL-BO9**: Understand the factors that influence the priorities and efforts related to testing / **FL-BO9**: Hiểu các yếu tố ảnh hưởng ưu tiên và nỗ lực kiểm thử
* **FL-BO10**: Work as part of a cross-functional team / **FL-BO10**: Làm việc trong nhóm liên chức năng
* **FL-BO11**: Know risks and benefits related to test automation / **FL-BO11**: Biết rủi ro và lợi ích của tự động hóa kiểm thử
* **FL-BO12**: Identify essential skills required for testing / **FL-BO12**: Nhận diện kỹ năng thiết yếu cho kiểm thử
* **FL-BO13**: Understand the impact of risk on testing / **FL-BO13**: Hiểu tác động của rủi ro đối với kiểm thử
* **FL-BO14**: Effectively report on test progress and quality / **FL-BO14**: Báo cáo hiệu quả tiến độ và chất lượng kiểm thử

### 0.5. Examinable Learning Objectives and Cognitive Level of Knowledge / Mục tiêu Học tập và Mức Nhận thức

Learning objectives support business outcomes and are used to create the Certified Tester Foundation Level exams. In general, all contents of chapters 1–6 are examinable at least at K1; specific levels appear at the beginning of each chapter.

Mục tiêu học tập hỗ trợ business outcomes và dùng để ra đề thi Foundation. Nhìn chung, toàn bộ nội dung chương 1–6 đều có thể được kiểm tra ở mức tối thiểu K1; mức cụ thể ghi ở đầu mỗi chương.

* **K1**: Remember / **K1**: Ghi nhớ
* **K2**: Understand / **K2**: Hiểu
* **K3**: Apply / **K3**: Áp dụng

Further details are in Appendix A. All terms listed as chapter keywords shall be remembered (K1), even if not repeated in the learning objectives.

Chi tiết thêm ở Phụ lục A. Mọi từ khóa (keywords) đầu chương đều cần ghi nhớ (K1), kể cả khi không lặp lại trong danh sách mục tiêu.

### 0.6. The Foundation Level Certificate Exam / Kỳ thi Chứng chỉ Foundation Level

The exam is based on this syllabus. Answers may require knowledge from more than one section. All sections are examinable except the Introduction (this chapter) and the Appendices. References in Chapter 7 are not examinable beyond what the syllabus summarizes from them.

Kỳ thi dựa trên giáo trình này. Câu trả lời có thể cần kiến thức từ nhiều mục. Mọi phần đều có thể ra đề trừ phần Giới thiệu và Phụ lục. Tài liệu tham khảo Chương 7 không thi nội dung vượt quá phần giáo trình tóm tắt.

### 0.7. Accreditation / Công nhận (Accreditation)

An ISTQB® Member Board may accredit training providers whose course material follows this syllabus. Accredited courses may include an ISTQB® exam as part of the course.

Hội đồng Thành viên ISTQB® có thể công nhận nhà cung cấp đào tạo có tài liệu phù hợp giáo trình. Khóa được công nhận có thể gắn kỳ thi ISTQB® trong khóa học.

### 0.8. Handling of Standards / Cách sử dụng Tiêu chuẩn

Standards are referenced to provide a framework or source of additional information but are not intended for examination themselves beyond the syllabus summary.

Tiêu chuẩn được trích dẫn để cung khung hoặc thông tin bổ sung; không yêu cầu thi trực tiếp nội dung tiêu chuẩn ngoài phần giáo trình đã tóm tắt.

### 0.9. Staying Current / Cập nhật Kiến thức

The software industry changes rapidly. Supporting documentation and changes to standards can be found on https://www.istqb.org.

Ngành phần mềm thay đổi nhanh. Tài liệu hỗ trợ và cập nhật tiêu chuẩn có tại https://www.istqb.org.

### 0.10. Level of Detail / Mức độ Chi tiết

The syllabus focuses on test concepts and techniques that can be applied to all software projects independent of the SDLC employed.

Giáo trình tập trung khái niệm và kỹ thuật kiểm thử áp dụng được cho mọi dự án phần mềm, không phụ thuộc mô hình SDLC.

### 0.11. How this Syllabus is Organized / Cấu trúc Giáo trình

The syllabus requires a minimum of **1135 minutes** of instruction across six chapters:

Giáo trình quy định tối thiểu **1135 phút** giảng dạy, trải trên sáu chương:

* **Chapter 1**: Fundamentals of Testing (180 minutes) / **Chương 1**: Cơ bản về Kiểm thử (180 phút)
* **Chapter 2**: Testing Throughout the Software Development Lifecycle (130 minutes) / **Chương 2**: Kiểm thử trong suốt SDLC (130 phút)
* **Chapter 3**: Static Testing (80 minutes) / **Chương 3**: Kiểm thử Tĩnh (80 phút)
* **Chapter 4**: Test Analysis and Design (390 minutes) / **Chương 4**: Phân tích và Thiết kế Kiểm thử (390 phút)
* **Chapter 5**: Managing the Test Activities (335 minutes) / **Chương 5**: Quản lý Hoạt động Kiểm thử (335 phút)
* **Chapter 6**: Test Tools (20 minutes) / **Chương 6**: Công cụ Kiểm thử (20 phút)

Use the chapter files in `src/content/chapters/` for bilingual study content aligned with this outline.

Hãy dùng các tệp chư học trong `src/content/chapters/` để học song ngữ theo cấu trúc này.
