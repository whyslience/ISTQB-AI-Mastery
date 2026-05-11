# Chapter 1: Fundamentals of Testing / Chương 1: Cơ bản về Kiểm thử

> **ISTQB CTFL v4.0.1** · **180 minutes** / **180 phút** giảng dạy tối thiểu (theo giáo trình chính thức).

## Keywords / Từ khóa

coverage, debugging, defect, error, failure, quality, quality assurance, root cause, test analysis, test basis, test case, test completion, test condition, test control, test data, test design, test execution, test implementation, test monitoring, test object, test objective, test planning, test procedure, test process, test result, testing, testware, traceability, validation, verification

độ bao phủ, gỡ lỗi, khiếm khuyết, lỗi (error), thất bại (failure), chất lượng, đảm bảo chất lượng, nguyên nhân gốc, phân tích kiểm thử, cơ sở kiểm thử, ca kiểm thử, kết thúc kiểm thử, điều kiện kiểm thử, kiểm soát kiểm thử, dữ liệu kiểm thử, thiết kế kiểm thử, thực thi kiểm thử, triển khai kiểm thử, giám sát kiểm thử, đối tượng kiểm thử, mục tiêu kiểm thử, lập kế hoạch kiểm thử, thủ tục kiểm thử (procedure), quy trình kiểm thử (process), kết quả kiểm thử, kiểm thử, tài liệu kiểm thử (testware), truy xuất nguồn gốc, xác thực (validation), xác minh (verification)

## Learning Objectives for Chapter 1 / Mục tiêu học tập Chương 1

### 1.1 What is Testing? / Kiểm thử là gì?

* **FL-1.1.1 (K1)** Identify typical test objectives / **FL-1.1.1 (K1)** Nhận diện các mục tiêu kiểm thử điển hình
* **FL-1.1.2 (K2)** Differentiate testing from debugging / **FL-1.1.2 (K2)** Phân biệt kiểm thử và gỡ lỗi

### 1.2 Why is Testing Necessary? / Tại sao cần Kiểm thử?

* **FL-1.2.1 (K2)** Exemplify why testing is necessary / **FL-1.2.1 (K2)** Minh họa vì sao cần kiểm thử
* **FL-1.2.2 (K1)** Recall the relation between testing and quality assurance / **FL-1.2.2 (K1)** Ghi nhớ mối quan hệ giữa kiểm thử và đảm bảo chất lượng
* **FL-1.2.3 (K2)** Distinguish between root cause, error, defect, and failure / **FL-1.2.3 (K2)** Phân biệt nguyên nhân gốc, lỗi (error), khiếm khuyết và thất bại

### 1.3 Testing Principles / Nguyên tắc Kiểm thử

* **FL-1.3.1 (K2)** Explain the seven testing principles / **FL-1.3.1 (K2)** Giải thích bảy nguyên tắc kiểm thử

### 1.4 Test Activities, Testware and Test Roles / Hoạt động Kiểm thử, Testware và Vai trò

* **FL-1.4.1 (K2)** Explain the different test activities and related tasks / **FL-1.4.1 (K2)** Giải thích các hoạt động kiểm thử và nhiệm vụ liên quan
* **FL-1.4.2 (K2)** Explain the impact of context on the test process / **FL-1.4.2 (K2)** Giải thích tác động của ngữ cảnh lên quy trình kiểm thử
* **FL-1.4.3 (K2)** Differentiate the testware that supports the test activities / **FL-1.4.3 (K2)** Phân biệt testware hỗ trợ từng hoạt động kiểm thử
* **FL-1.4.4 (K2)** Explain the value of maintaining traceability / **FL-1.4.4 (K2)** Giải thích giá trị duy trì khả năng truy xuất nguồn gốc
* **FL-1.4.5 (K2)** Compare the different roles in testing / **FL-1.4.5 (K2)** So sánh các vai trò trong kiểm thử

### 1.5 Essential Skills and Good Practices in Testing / Kỹ năng Cốt lõi và Thực hành Tốt

* **FL-1.5.1 (K2)** Give examples of the generic skills required for testing / **FL-1.5.1 (K2)** Đưa ví dụ kỹ năng tổng quát cần cho kiểm thử
* **FL-1.5.2 (K1)** Recall the advantages of the whole team approach / **FL-1.5.2 (K1)** Ghi nhớ lợi ích của phương pháp whole team
* **FL-1.5.3 (K2)** Distinguish the benefits and drawbacks of independence of testing / **FL-1.5.3 (K2)** Phân biệt lợi ích và hạn chế của tính độc lập trong kiểm thử

---

## 1.1 What is Testing? / Kiểm thử là gì?

Software systems are an integral part of our daily life. Most people have had experience with software that did not work as expected. Software that does not work correctly can lead to many problems, including loss of money, time, or business reputation, and even injury or death. Software testing assesses software quality and helps reduce the risk of software failure in operation.

Hệ thống phần mềm là một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Hầu hết mọi người đều đã từng có kinh nghiệm với phần mềm hoạt động không đúng như mong đợi. Phần mềm hoạt động không chính xác có thể dẫn đến nhiều vấn đề, bao gồm mất mát tiền bạc, thời gian hoặc uy tín kinh doanh, thậm chí gây thương tích hoặc tử vong. Kiểm thử phần mềm đánh giá chất lượng phần mềm và giúp giảm thiểu rủi ro thất bại của phần mềm khi vận hành.

Software testing is a set of activities to discover defects and evaluate the quality of software work products. These work products, when being tested, are known as test objects.

Kiểm thử phần mềm là một tập hợp các hoạt động nhằm phát hiện các khiếm khuyết và đánh giá chất lượng của các sản phẩm làm việc phần mềm. Các sản phẩm này, khi được kiểm thử, được gọi là các đối tượng kiểm thử.

A common misconception of testing is that it only consists of running tests (i.e., executing the software). However, software testing also includes activities such as planning, analyzing, designing, and implementing tests, reporting test results and investigating the quality of the test object.

Một quan niệm sai lầm phổ biến về kiểm thử là nó chỉ bao gồm việc chạy các bài kiểm thử (nghĩa là thực thi phần mềm). Tuy nhiên, kiểm thử phần mềm cũng bao gồm các hoạt động như lập kế hoạch, phân tích, thiết kế và triển khai các bài kiểm thử, báo cáo kết quả kiểm thử và điều tra chất lượng của đối tượng kiểm thử.

Some testing involves the execution of the test object, which is called dynamic testing. Other testing does not involve the execution of the test object and is called static testing. Static testing includes reviews and static analysis.

Một số loại kiểm thử liên quan đến việc thực thi đối tượng kiểm thử, được gọi là kiểm thử động. Các loại kiểm thử khác không liên quan đến việc thực thi đối tượng kiểm thử và được gọi là kiểm thử tĩnh. Kiểm thử tĩnh bao gồm các hoạt động đánh giá (review) và phân tích tĩnh.

Testing also includes evaluating the work products to see if they meet the specified requirements. This is called verification. Testing also includes evaluating the work products to see if they meet the users’ and other stakeholders’ needs in its operational environment. This is called validation.

Kiểm thử cũng bao gồm việc đánh giá các sản phẩm làm việc để xem chúng có đáp ứng các yêu cầu đã đặc tả hay không. Điều này được gọi là xác minh (verification). Kiểm thử cũng bao gồm việc đánh giá các sản phẩm làm việc để xem chúng có đáp ứng nhu cầu của người dùng và các bên liên quan khác trong môi trường vận hành hay không. Điều này được gọi là xác thực (validation).

### 1.1.1 Test Objectives / Mục tiêu Kiểm thử

For any given project, the objectives of testing may include:

Đối với bất kỳ dự án nào, các mục tiêu kiểm thử có thể bao gồm:

* Evaluating work products such as requirements, user stories, designs, and code.
* Đánh giá các sản phẩm làm việc như yêu cầu, user story, thiết kế và mã nguồn.
* Causing failures and finding defects.
* Gây ra các lỗi (failure) và tìm kiếm các khiếm khuyết (defect).
* Ensuring required coverage of a test object.
* Đảm bảo độ bao phủ cần thiết cho đối tượng kiểm thử.
* Reducing the risk level of inadequate software quality.
* Giảm thiểu mức độ rủi ro của chất lượng phần mềm không đạt yêu cầu.
* Verifying whether specified requirements have been fulfilled.
* Xác minh xem các yêu cầu đã đặc tả đã được hoàn thành hay chưa.
* Verifying whether the test object complies with contractual, legal, and regulatory requirements.
* Xác minh xem đối tượng kiểm thử có tuân thủ các yêu cầu về hợp đồng, pháp lý và quy định hay không.
* Providing information to stakeholders to allow them to make informed decisions.
* Cung cấp thông tin cho các bên liên quan để họ có thể đưa ra các quyết định sáng suốt.
* Building confidence in the quality of the test object.
* Xây dựng niềm tin vào chất lượng của đối tượng kiểm thử.
* Validating whether the test object is complete and works as expected by the users and other stakeholders.
* Xác thực xem đối tượng kiểm thử có đầy đủ và hoạt động như mong đợi của người dùng và các bên liên quan khác hay không.

Objectives of testing can vary, depending upon the context of the component or system being tested, the test level, and the software development lifecycle (SDLC) model.

Các mục tiêu kiểm thử có thể thay đổi, tùy thuộc vào ngữ cảnh của thành phần hoặc hệ thống đang được kiểm thử, mức độ kiểm thử và mô hình vòng đời phát triển phần mềm (SDLC).

### 1.1.2 Testing and Debugging / Kiểm thử và Gỡ lỗi

Testing and debugging are separate activities. Testing can trigger failures that are caused by defects (dynamic testing) or can directly find defects in the test object (static testing).

Kiểm thử và gỡ lỗi là các hoạt động riêng biệt. Kiểm thử có thể kích hoạt các lỗi (failure) gây ra bởi các khiếm khuyết (kiểm thử động) hoặc có thể trực tiếp tìm thấy khiếm khuyết trong đối tượng kiểm thử (kiểm thử tĩnh).

When dynamic testing triggers a failure, debugging is the activity that finds, analyzes, and eliminates the cause of the failure in the test object.

Khi kiểm thử động kích hoạt một lỗi, gỡ lỗi là hoạt động tìm kiếm, phân tích và loại bỏ nguyên nhân gây ra lỗi trong đối tượng kiểm thử.

The typical steps of debugging are:

Các bước điển hình của gỡ lỗi là:

* Reproduction of a failure.
* Tái hiện lại lỗi.
* Diagnosis (finding the defect that caused the failure).
* Chẩn đoán (tìm khiếm khuyết đã gây ra lỗi).
* Fixing the defect and then performing confirmation testing to ensure the defect is fixed.
* Sửa chữa khiếm khuyết và sau đó thực hiện kiểm thử xác nhận để đảm bảo khiếm khuyết đã được sửa.

In some cases, testers are responsible for the initial report and the final confirmation testing, while developers do the debugging and the fixing. However, in Agile development and in some other SDLCs, testers may be involved in debugging and fixing.

Trong một số trường hợp, người kiểm thử chịu trách nhiệm báo cáo ban đầu và kiểm thử xác nhận cuối cùng, trong khi các nhà phát triển thực hiện gỡ lỗi và sửa chữa. Tuy nhiên, trong phát triển Agile và trong một số SDLC khác, người kiểm thử có thể tham gia vào việc gỡ lỗi và sửa chữa.

## 1.2 Why is Testing Necessary? / Tại sao cần Kiểm thử?

Testing as a form of quality control helps in achieving the agreed goals within the set constraints of time and budget. Testing’s contributions to success should not be restricted to the test team activities. Any stakeholder can use their testing skills to bring the project closer to success.

Kiểm thử như một hình thức kiểm soát chất lượng giúp đạt được các mục tiêu đã thỏa thuận trong các giới hạn về thời gian và ngân sách đã định. Đóng góp của kiểm thử vào thành công không nên bị giới hạn trong các hoạt động của nhóm kiểm thử. Bất kỳ bên liên quan nào cũng có thể sử dụng các kỹ năng kiểm thử của mình để đưa dự án đến gần hơn với thành công.

### 1.2.1 Testing’s Contributions to Success / Đóng góp của Kiểm thử vào Thành công

Testing can contribute to success in many ways:

Kiểm thử có thể đóng góp vào thành công theo nhiều cách:

* Having testers involved in requirements reviews or user story refinement can detect defects in these work products. The identification and removal of requirements defects reduces the risk of developing incorrect or untestable features.
* Việc có người kiểm thử tham gia vào các buổi đánh giá yêu cầu hoặc tinh chỉnh user story có thể phát hiện các khiếm khuyết trong các sản phẩm làm việc này. Việc xác định và loại bỏ các khiếm khuyết về yêu cầu giúp giảm rủi ro phát triển các tính năng không chính xác hoặc không thể kiểm thử.
* Having testers work closely with system designers while the system is being designed can increase each party’s understanding of the design and how to test it. This increased understanding can reduce the risk of defects in the design and allow for the identification of necessary tests at an early stage.
* Việc người kiểm thử làm việc chặt chẽ với các nhà thiết kế hệ thống trong khi hệ thống đang được thiết kế có thể làm tăng sự hiểu biết của mỗi bên về thiết kế và cách kiểm thử nó. Sự hiểu biết tăng lên này có thể giảm rủi ro khiếm khuyết trong thiết kế và cho phép xác định các bài kiểm thử cần thiết ở giai đoạn sớm.
* Having testers work closely with developers while the code is being developed can increase each party’s understanding of the code and how to test it. This increased understanding can reduce the risk of defects in the code and the tests.
* Việc người kiểm thử làm việc chặt chẽ với các nhà phát triển trong khi mã nguồn đang được phát triển có thể làm tăng sự hiểu biết của mỗi bên về mã nguồn và cách kiểm thử nó. Sự hiểu biết tăng lên này có thể giảm rủi ro khiếm khuyết trong mã nguồn và các bài kiểm thử.
* Having testers verify and validate the software before its release can detect defects that might otherwise have been missed. This supports the process of removing the defects that caused the failures (debugging). This also increases the probability that the software meets stakeholder needs and satisfies requirements.
* Việc người kiểm thử xác minh và xác thực phần mềm trước khi phát hành có thể phát hiện các khiếm khuyết mà lẽ ra đã bị bỏ sót. Điều này hỗ trợ quá trình loại bỏ các khiếm khuyết đã gây ra lỗi (gỡ lỗi). Điều này cũng làm tăng khả năng phần mềm đáp ứng nhu cầu của các bên liên quan và thỏa mãn các yêu cầu.

### 1.2.2 Testing and Quality Assurance (QA) / Kiểm thử và Đảm bảo Chất lượng (QA)

While people often use the terms testing and quality assurance (QA) interchangeably, testing and QA are not the same.

Mặc dù mọi người thường sử dụng các thuật ngữ kiểm thử và đảm bảo chất lượng (QA) thay thế cho nhau, nhưng kiểm thử và QA không giống nhau.

* Quality Management is an umbrella term that includes all activities that direct and control an organization with regard to quality. Quality management includes both QA and QC.
* Quản lý Chất lượng là một thuật ngữ bao quát bao gồm tất cả các hoạt động định hướng và kiểm soát một tổ chức về mặt chất lượng. Quản lý chất lượng bao gồm cả QA và QC.
* QA is typically focused on adherence to proper processes in order to provide confidence that the appropriate levels of quality will be achieved. When processes are carried out properly, the work products created by those processes are generally of higher quality, which contributes to defect prevention.
* QA thường tập trung vào việc tuân thủ các quy trình phù hợp nhằm mang lại niềm tin rằng các mức độ chất lượng thích hợp sẽ đạt được. Khi các quy trình được thực hiện đúng cách, các sản phẩm làm việc được tạo ra bởi các quy trình đó thường có chất lượng cao hơn, góp phần ngăn ngừa khiếm khuyết.
* Testing is a major part of Quality Control (QC). QC is a product-oriented, corrective approach that focuses on those activities that support the achievement of appropriate levels of quality.
* Kiểm thử là một phần quan trọng của Kiểm soát Chất lượng (QC). QC là một cách tiếp cận hướng sản phẩm, mang tính khắc phục, tập trung vào các hoạt động hỗ trợ việc đạt được các mức độ chất lượng thích hợp.

### 1.2.3 Errors, Defects, Failures, and Root Causes / Sai lầm, Khiếm khuyết, Lỗi và Nguyên nhân gốc rễ

A person can make an error (mistake), which can lead to the introduction of a defect (fault or bug) in a work product, such as a requirements specification or a piece of code. If a defect in the code is executed, this may cause a failure, but not necessarily in all circumstances.

Một người có thể mắc một sai lầm (error), điều này có thể dẫn đến việc đưa một khiếm khuyết (defect - còn gọi là lỗi hoặc bug) vào một sản phẩm làm việc, chẳng hạn như đặc tả yêu cầu hoặc một đoạn mã. Nếu một khiếm khuyết trong mã được thực thi, điều này có thể gây ra một lỗi (failure), nhưng không nhất thiết trong mọi trường hợp.

Errors may occur for many reasons, such as:

Sai lầm có thể xảy ra vì nhiều lý do, chẳng hạn như:

* Time pressure
* Áp lực thời gian
* Human fallibility
* Sự không hoàn hảo của con người
* Inexperienced or insufficiently skilled project participants
* Những người tham gia dự án chưa có kinh nghiệm hoặc kỹ năng chưa đủ
* Miscommunication between project participants
* Sự hiểu lầm giữa các thành viên tham gia dự án
* Complexity of the code, design, architecture, the underlying problem to be solved, and/or the technologies used
* Sự phức tạp của mã nguồn, thiết kế, kiến trúc, vấn đề cơ bản cần giải quyết và/hoặc các công nghệ được sử dụng
* Misunderstandings about intra-system and inter-system interfaces
* Hiểu lầm về các giao diện nội bộ hệ thống và giữa các hệ thống
* New, unfamiliar technologies
* Các công nghệ mới, lạ lẫm

Failures can also be caused by environmental conditions, such as radiation, electromagnetic fields, and pollution.

Lỗi cũng có thể do điều kiện môi trường gây ra, chẳng hạn như bức xạ, từ trường và ô nhiễm.

A root cause is a fundamental reason for the occurrence of a problem (e.g., a defect or failure). Root causes are identified through root cause analysis, which is typically performed when a defect or failure occurs, to minimize the probability of similar defects or failures occurring in the future.

Nguyên nhân gốc rễ là lý do cơ bản dẫn đến việc xảy ra một vấn đề (ví dụ: một khiếm khuyết hoặc lỗi). Nguyên nhân gốc rễ được xác định thông qua phân tích nguyên nhân gốc rễ, thường được thực hiện khi một khiếm khuyết hoặc lỗi xảy ra, để giảm thiểu khả năng xảy ra các khiếm khuyết hoặc lỗi tương tự trong tương lai.

## 1.3 Testing Principles / Các Nguyên tắc Kiểm thử

A number of testing principles have been suggested over the past 50 years and offer general guidelines common for all testing.

Một số nguyên tắc kiểm thử đã được đề xuất trong 50 năm qua và cung cấp các hướng dẫn chung phổ biến cho tất cả hoạt động kiểm thử.

1.  **Testing shows the presence of defects, not their absence.** Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.
    **Kiểm thử cho thấy sự hiện diện của khiếm khuyết, không phải sự vắng mặt của chúng.** Kiểm thử có thể cho thấy các khiếm khuyết đang hiện diện, nhưng không thể chứng minh rằng không có khiếm khuyết nào. Kiểm thử làm giảm khả năng các khiếm khuyết chưa được phát hiện còn sót lại trong phần mềm nhưng, ngay cả khi không tìm thấy khiếm khuyết nào, đó không phải là bằng chứng của sự đúng đắn.
2.  **Exhaustive testing is impossible.** Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, risk analysis, test techniques, and priorities should be used to focus test efforts.
    **Kiểm thử toàn diện là không thể.** Kiểm thử mọi thứ (tất cả các kết hợp của đầu vào và điều kiện tiên quyết) là không khả thi trừ các trường hợp tầm thường. Thay vì kiểm thử toàn diện, nên sử dụng phân tích rủi ro, các kỹ thuật kiểm thử và các mức ưu tiên để tập trung nỗ lực kiểm thử.
3.  **Early testing saves time and money.** To find defects early, static and dynamic test activities should be started as early as possible in the SDLC. Early testing is sometimes referred to as shift left. Testing early in the SDLC helps reduce or eliminate costly changes.
    **Kiểm thử sớm tiết kiệm thời gian và tiền bạc.** Để tìm thấy khiếm khuyết sớm, các hoạt động kiểm thử tĩnh và động nên được bắt đầu càng sớm càng tốt trong SDLC. Kiểm thử sớm đôi khi được gọi là "dịch trái" (shift left). Kiểm thử sớm trong SDLC giúp giảm thiểu hoặc loại bỏ các thay đổi tốn kém.
4.  **Defects cluster together.** A small number of modules usually contains most of the defects discovered during pre-release testing, or is responsible for most of the operational failures. Predicted defect clusters, and the actual observed defect clusters in test or operation, are an important input into a risk analysis used to focus the test effort.
    **Khiếm khuyết tập trung cùng nhau.** Một số ít các mô-đun thường chứa hầu hết các khiếm khuyết được phát hiện trong quá trình kiểm thử trước khi phát hành, hoặc chịu trách nhiệm cho hầu hết các lỗi vận hành. Các cụm khiếm khuyết dự đoán, và các cụm khiếm khuyết thực tế quan sát được trong kiểm thử hoặc vận hành, là thông tin đầu vào quan trọng cho phân tích rủi ro được sử dụng để tập trung nỗ lực kiểm thử.
5.  **Tests wear out.** If the same tests are repeated over and over again, eventually these tests no longer find any new defects. To detect new defects, existing tests and test data may need changing, and new tests may need to be written. (Regression testing is still used to confirm that changes have not affected the software).
    **Các bài kiểm thử bị "mòn".** Nếu các bài kiểm thử tương tự được lặp đi lặp lại nhiều lần, cuối cùng các bài kiểm thử này sẽ không còn tìm thấy bất kỳ khiếm khuyết mới nào. Để phát hiện các khiếm khuyết mới, các bài kiểm thử và dữ liệu kiểm thử hiện tại có thể cần phải thay đổi, và các bài kiểm thử mới có thể cần phải được viết. (Kiểm thử hồi quy vẫn được sử dụng để xác nhận rằng các thay đổi không ảnh hưởng đến phần mềm).
6.  **Testing is context dependent.** Testing is done differently in different contexts. For example, safety-critical industrial control software is tested differently from an e-commerce mobile app. As another example, testing in an Agile project is done differently than in a sequential project.
    **Kiểm thử phụ thuộc vào ngữ cảnh.** Kiểm thử được thực hiện khác nhau trong các ngữ cảnh khác nhau. Ví dụ, phần mềm điều khiển công nghiệp quan trọng về an toàn được kiểm thử khác với ứng dụng di động thương mại điện tử. Một ví dụ khác, kiểm thử trong một dự án Agile được thực hiện khác với trong một dự án tuần tự.
7.  **Absence-of-defects fallacy.** Some organizations expect that testers can run all possible tests and find all possible defects, but principles 1 and 2, respectively, show that this is impossible. Further, it is a fallacy (i.e., a mistaken belief) to expect that just finding and fixing a large number of defects will ensure the success of a system.
    **Ảo tưởng về sự vắng mặt của khiếm khuyết.** Một số tổ chức kỳ vọng rằng người kiểm thử có thể chạy tất cả các bài kiểm thử có thể và tìm thấy tất cả các khiếm khuyết có thể, nhưng nguyên tắc 1 và 2 lần lượt chỉ ra rằng điều này là không thể. Hơn nữa, đó là một ảo tưởng (tức là một niềm tin sai lầm) khi kỳ vọng rằng chỉ việc tìm và sửa một số lượng lớn các khiếm khuyết sẽ đảm bảo sự thành công của một hệ thống.

## 1.4 Test Activities, Testware and Test Roles / Các hoạt động kiểm thử, Tài liệu kiểm thử và Vai trò kiểm thử

Testing is a process that consists of a set of activities. There is no single universal software test process, but there are common sets of test activities without which testing is less likely to achieve its objectives.

Kiểm thử là một quy trình bao gồm một tập hợp các hoạt động. Không có một quy trình kiểm thử phần mềm phổ quát duy nhất, nhưng có các tập hợp các hoạt động kiểm thử chung mà nếu thiếu chúng, kiểm thử sẽ ít có khả năng đạt được các mục tiêu của mình.

### 1.4.1 Test Activities and Tasks / Các hoạt động và nhiệm vụ kiểm thử

The following sets of activities are common in many test processes:

Các tập hợp hoạt động sau đây là phổ biến trong nhiều quy trình kiểm thử:

* Test planning: involves defining the test objectives and the test approach for meeting the objectives within constraints.
* Lập kế hoạch kiểm thử: bao gồm việc định nghĩa các mục tiêu kiểm thử và cách tiếp cận kiểm thử để đáp ứng các mục tiêu trong các giới hạn.
* Test monitoring and control: involves checking progress against the test plan and taking any necessary actions to meet the objectives.
* Theo dõi và kiểm soát kiểm thử: bao gồm việc kiểm tra tiến độ so với kế hoạch kiểm thử và thực hiện bất kỳ hành động cần thiết nào để đạt được các mục tiêu.
* Test analysis: involves what to test by analyzing the test basis (e.g., requirements, design, code) to identify testable features and define associated test conditions.
* Phân tích kiểm thử: bao gồm việc xác định kiểm thử cái gì bằng cách phân tích cơ sở kiểm thử (ví dụ: yêu cầu, thiết kế, mã nguồn) để xác định các tính năng có thể kiểm thử và định nghĩa các điều kiện kiểm thử liên quan.
* Test design: involves how to test by transforming test conditions into test cases and other testware (e.g., test charters).
* Thiết kế kiểm thử: bao gồm việc xác định kiểm thử như thế nào bằng cách chuyển đổi các điều kiện kiểm thử thành các ca kiểm thử và các tài liệu kiểm thử khác (ví dụ: điều lệ kiểm thử).
* Test implementation: involves having everything in place for test execution by creating or acquiring the testware necessary for test execution (e.g., test data, test procedures).
* Triển khai kiểm thử: bao gồm việc chuẩn bị mọi thứ sẵn sàng cho việc thực thi kiểm thử bằng cách tạo hoặc thu thập các tài liệu kiểm thử cần thiết (ví dụ: dữ liệu kiểm thử, thủ tục kiểm thử).
* Test execution: involves running the tests in accordance with the test execution schedule.
* Thực thi kiểm thử: bao gồm việc chạy các bài kiểm thử theo lịch trình thực thi kiểm thử.
* Test completion: involves finalizing all testing activities and making the test results and testware available for future use.
* Kết thúc kiểm thử: bao gồm việc hoàn tất tất cả các hoạt động kiểm thử và cung cấp kết quả kiểm thử cũng như tài liệu kiểm thử cho việc sử dụng trong tương lai.

### 1.4.2 Test Process in Context / Quy trình kiểm thử trong ngữ cảnh

The test process is not fixed. The way testing is carried out depends on many factors, including:

Quy trình kiểm thử không cố định. Cách thực hiện kiểm thử phụ thuộc vào nhiều yếu tố, bao gồm:

* Stakeholders (needs, expectations, requirements)
* Các bên liên quan (nhu cầu, kỳ vọng, yêu cầu)
* Team members (skills, knowledge, experience)
* Các thành viên trong nhóm (kỹ năng, kiến thức, kinh nghiệm)
* Business domain (criticality, risks, complexity)
* Lĩnh vực kinh doanh (tính quan trọng, rủi ro, độ phức tạp)
* Technical factors (architecture, technology, interfaces)
* Các yếu tố kỹ thuật (kiến trúc, công nghệ, giao diện)
* Project constraints (scope, time, budget)
* Các hạn chế của dự án (phạm vi, thời gian, ngân sách)

### 1.4.3 Testware / Tài liệu kiểm thử (Testware)

Testware is the work products produced during the test process. Testware can include:

Testware là các sản phẩm làm việc được tạo ra trong quá trình kiểm thử. Testware có thể bao gồm:

* Test planning: test plan, test schedule, risk register.
* Lập kế hoạch kiểm thử: kế hoạch kiểm thử, lịch trình kiểm thử, danh mục rủi ro.
* Test monitoring and control: test progress reports, test completion reports.
* Theo dõi và kiểm soát kiểm thử: báo cáo tiến độ kiểm thử, báo cáo kết thúc kiểm thử.
* Test analysis: test conditions, defect reports (on requirements).
* Phân tích kiểm thử: các điều kiện kiểm thử, báo cáo khiếm khuyết (trên yêu cầu).
* Test design: test cases, test charters, test data requirements.
* Thiết kế kiểm thử: các ca kiểm thử, điều lệ kiểm thử, yêu cầu dữ liệu kiểm thử.
* Test implementation: test procedures, test scripts, test suites, test data, test environment requirements.
* Triển khai kiểm thử: quy trình kiểm thử, kịch bản kiểm thử, bộ kiểm thử, dữ liệu kiểm thử, yêu cầu môi trường kiểm thử.
* Test execution: test logs, defect reports.
* Thực thi kiểm thử: nhật ký kiểm thử, báo cáo khiếm khuyết.
* Test completion: test completion reports, action items.
* Kết thúc kiểm thử: báo cáo kết thúc kiểm thử, các mục hành động.

### 1.4.4 Traceability between the Test Basis and Testware / Truy xuất nguồn gốc giữa Cơ sở kiểm thử và Tài liệu kiểm thử

Traceability is the ability to link work products through the test process. Good traceability supports:

Truy xuất nguồn gốc là khả năng liên kết các sản phẩm làm việc thông qua quy trình kiểm thử. Truy xuất nguồn gốc tốt hỗ trợ:

* Analyzing the impact of changes.
* Phân tích tác động của các thay đổi.
* Making testing auditable.
* Giúp việc kiểm thử có thể kiểm tra (audit) được.
* Meeting IT governance criteria.
* Đáp ứng các tiêu chí quản trị IT.
* Improving the understandability of test progress reports and test completion reports to include the status of the test basis.
* Cải thiện tính dễ hiểu của các báo cáo tiến độ kiểm thử và báo cáo kết thúc kiểm thử bằng cách bao gồm trạng thái của cơ sở kiểm thử.
* Relating the technical aspects of testing to stakeholders in terms they can understand.
* Liên kết các khía cạnh kỹ thuật của kiểm thử với các bên liên quan bằng các thuật ngữ mà họ có thể hiểu được.
* Providing information to assess product quality, process capability, and project progress against business goals.
* Cung cấp thông tin để đánh giá chất lượng sản phẩm, khả năng của quy trình và tiến độ dự án so với các mục tiêu kinh doanh.

### 1.4.5 Roles in Testing / Các vai trò trong kiểm thử

The two main roles in testing are the test management role and the testing role.

Hai vai trò chính trong kiểm thử là vai trò quản lý kiểm thử và vai trò kiểm thử.

* **Test management role**: takes overall responsibility for the test process, test team, and leadership of the test activities. The focus is on planning, monitoring, and control.
  **Vai trò quản lý kiểm thử**: chịu trách nhiệm tổng thể về quy trình kiểm thử, nhóm kiểm thử và sự lãnh đạo các hoạt động kiểm thử. Trọng tâm là lập kế hoạch, theo dõi và kiểm soát.
* **Testing role**: takes overall responsibility for the technical engineering aspects of testing. The focus is on test analysis, test design, test implementation, and test execution.
  **Vai trò kiểm thử**: chịu trách nhiệm tổng thể về các khía cạnh kỹ thuật của kiểm thử. Trọng tâm là phân tích kiểm thử, thiết kế kiểm thử, triển khai kiểm thử và thực thi kiểm thử.

## 1.5 Essential Skills and Good Practices in Testing / Kỹ năng thiết yếu và Thực hành tốt trong Kiểm thử

### 1.5.1 Generic Skills Required for Testing / Các kỹ năng chung cần thiết cho kiểm thử

Testers need a variety of skills, including:

Người kiểm thử cần nhiều kỹ năng khác nhau, bao gồm:

* Testing knowledge (to increase the effectiveness and efficiency of testing).
* Kiến thức kiểm thử (để tăng hiệu quả và hiệu suất của kiểm thử).
* Thoroughness, carefulness, curiosity, attention to detail, and being methodical.
* Sự thấu đáo, cẩn thận, tò mò, chú ý đến chi tiết và có phương pháp.
* Good communication skills, active listening, and being a team player.
* Kỹ năng giao tiếp tốt, lắng nghe chủ động và là một thành viên tốt trong nhóm.
* Analytical thinking, critical thinking, and creativity.
* Tư duy phân tích, tư duy phản biện và sáng tạo.
* Technical knowledge (to increase the effectiveness and efficiency of testing).
* Kiến thức kỹ thuật (để tăng hiệu quả và hiệu suất của kiểm thử).
* Domain knowledge (to be able to understand the users’ and other stakeholders’ needs).
* Kiến thức lĩnh vực (để có thể hiểu nhu cầu của người dùng và các bên liên quan khác).

### 1.5.2 Whole Team Approach / Cách tiếp cận toàn đội (Whole Team Approach)

One of the important practices for project success is the whole team approach. In this approach, anyone with the necessary skills can contribute to any task, and everyone is responsible for quality.

Một trong những thực hành quan trọng cho thành công của dự án là cách tiếp cận toàn đội. Trong cách tiếp cận này, bất kỳ ai có kỹ năng cần thiết đều có thể đóng góp vào bất kỳ nhiệm vụ nào, và mọi người đều chịu trách nhiệm về chất lượng.

Benefits of the whole team approach include:

Lợi ích của cách tiếp cận toàn đội bao gồm:

* Enhancing communication and collaboration within the team.
* Tăng cường giao tiếp và hợp tác trong nhóm.
* Enabling the various skill sets within the team to be used for the benefit of the project.
* Cho phép các tập hợp kỹ năng khác nhau trong nhóm được sử dụng vì lợi ích của dự án.
* Making everyone responsible for quality.
* Làm cho mọi người đều có trách nhiệm về chất lượng.

### 1.5.3 Independence of Testing / Sự độc lập của kiểm thử

A certain degree of independence often makes the tester more effective at finding defects due to different cognitive biases between authors and testers.

Một mức độ độc lập nhất định thường giúp người kiểm thử hiệu quả hơn trong việc tìm kiếm khiếm khuyết do các định kiến nhận thức khác nhau giữa người tạo ra sản phẩm và người kiểm thử.

Levels of independence can include (from low to high):

Các mức độ độc lập có thể bao gồm (từ thấp đến cao):

* No independent testers (authors testing their own work).
* Không có người kiểm thử độc lập (tác giả tự kiểm thử công việc của mình).
* Independent testers or developers from within the project team (e.g., testing each other’s work).
* Người kiểm thử hoặc nhà phát triển độc lập trong cùng nhóm dự án (ví dụ: kiểm thử công việc của nhau).
* Independent test team or group from within the organization, but external to the project team.
* Nhóm hoặc đội kiểm thử độc lập trong cùng tổ chức, nhưng ngoài nhóm dự án.
* Independent testers from a different organization (e.g., outsourced).
* Người kiểm thử độc lập từ một tổ chức khác (ví dụ: thuê ngoài).

Benefits of independence:

Lợi ích của sự độc lập:

* Independent testers are likely to recognize different types of failures and defects compared to the author.
* Người kiểm thử độc lập có khả năng nhận ra các loại lỗi và khiếm khuyết khác so với tác giả.
* An independent tester can verify, challenge, or disprove assumptions made by stakeholders.
* Một người kiểm thử độc lập có thể xác minh, thách thức hoặc bác bỏ các giả định do các bên liên quan đưa ra.

Drawbacks of independence:

Hạn chế của sự độc lập:

* Isolation from the development team.
* Sự cô lập với nhóm phát triển.
* Developers may lose a sense of responsibility for quality.
* Nhà phát triển có thể mất đi ý thức trách nhiệm về chất lượng.
* Independent testers may be seen as a bottleneck.
* Người kiểm thử độc lập có thể bị coi là nút thắt cổ chai.
* Independent testers may lack important information about the test object.
* Người kiểm thử độc lập có thể thiếu thông tin quan trọng về đối tượng kiểm thử.