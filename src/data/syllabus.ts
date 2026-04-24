export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface SyllabusChapter {
  id: string;
  chapterNumber: number;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  teacherAdviceEn: string;
  teacherAdviceVi: string;
  hasMindmaps?: boolean;
  quiz: QuizQuestion[];
}

export const syllabusData: SyllabusChapter[] = [
  {
    "id": "chapter-1",
    "chapterNumber": 1,
    "titleEn": "Fundamentals of Testing",
    "titleVi": "Các Khái Niệm Cơ Bản về Kiểm Thử",
    "descriptionEn": "Bilingual study guide for Chapter 1",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 1",
    "teacherAdviceEn": "Top 5 Exam Traps / 5 Bẫy Thi Hàng đầu",
    "teacherAdviceVi": "Testing proves no bugs exist --- This is false. Remember Principle 1: presence, not absence.",
    "hasMindmaps": true,
    "quiz": [
      {
        "question": "Which of the following is a typical test objective?",
        "options": [
          "To prove the absence of defects",
          "To cause failures and find defects",
          "To replace quality assurance",
          "To perform debugging"
        ],
        "correct": "To cause failures and find defects",
        "explanation": "- **b) Correct / Đúng:** \"Causing failures and finding defects\" is explicitly listed as a typical test objective in the syllabus.  - **a) Incorrect / Sai:** Testing shows the presence, not the absence of defects (Principle 1).  - **c) Incorrect / Sai:** Testing does not replace QA; testing is a form of QC, while QA is process-oriented.  - **d) Incorrect / Sai:** Debugging is a separate activity from testing."
      },
      {
        "question": "What is the main difference between testing and debugging?",
        "options": [
          "Testing finds the root cause; debugging removes defects",
          "Testing triggers failures and finds defects; debugging diagnoses and fixes defects",
          "Testing is performed by developers; debugging by testers",
          "They are the same activity with different names"
        ],
        "correct": "Testing triggers failures and finds defects; debugging diagnoses and fixes defects",
        "explanation": "- **b) Correct / Đúng:** Testing discovers defects (often by triggering failures), while debugging is the process of reproducing, diagnosing, and fixing the underlying defect.  - **a) Incorrect / Sai:** Root cause analysis is part of debugging, not testing.  - **c) Incorrect / Sai:** Both activities can involve testers and developers; role is not the differentiator.  - **d) Incorrect / Sai:** They are explicitly defined as separate activities in the syllabus."
      },
      {
        "question": "Which sequence correctly describes the chain from human mistake to system malfunction?",
        "options": [
          "Defect → Error → Failure",
          "Error → Defect → Failure",
          "Failure → Defect → Error",
          "Error → Failure → Defect"
        ],
        "correct": "Error → Defect → Failure",
        "explanation": "- **b) Correct / Đúng:** Humans make **errors** (mistakes), which create **defects** (faults in work products), which may cause **failures** when executed.  - The other options reverse the causal chain."
      },
      {
        "question": "Which principle states that testing everything is not feasible except in trivial cases?",
        "options": [
          "Early testing saves time and money",
          "Defects cluster together",
          "Exhaustive testing is impossible",
          "Tests wear out"
        ],
        "correct": "Exhaustive testing is impossible",
        "explanation": "- **c) Correct / Đúng:** Principle 2 explicitly states that exhaustive testing is impossible except in trivial cases.  - **a) Incorrect / Sai:** This is Principle 3, about cost of quality.  - **b) Incorrect / Sai:** This is Principle 4, about the Pareto distribution of defects.  - **d) Incorrect / Sai:** This is Principle 5, about the decreasing effectiveness of repeated tests."
      },
      {
        "question": "Which test activity answers the question \"How to test?\"",
        "options": [
          "Test Analysis",
          "Test Design",
          "Test Implementation",
          "Test Execution"
        ],
        "correct": "Test Design",
        "explanation": "- **b) Correct / Đúng:** Test design elaborates test conditions into test cases and defines how to test.  - **a) Incorrect / Sai:** Test analysis answers \"What to test?\"  - **c) Incorrect / Sai:** Implementation prepares the testware and environment for execution.  - **d) Incorrect / Sai:** Execution runs the tests and compares results."
      },
      {
        "question": "What is a key benefit of maintaining traceability between the test basis and testware?",
        "options": [
          "It eliminates the need for regression testing",
          "It helps evaluate coverage and assess the impact of changes",
          "It replaces the test plan",
          "It guarantees the absence of defects"
        ],
        "correct": "It helps evaluate coverage and assess the impact of changes",
        "explanation": "- **b) Correct / Đúng:** Traceability supports coverage evaluation and impact analysis, as stated in the syllabus.  - **a) Incorrect / Sai:** Traceability does not eliminate regression testing.  - **c) Incorrect / Sai:** Traceability complements but does not replace a test plan.  - **d) Incorrect / Sai:** No activity can guarantee the absence of defects (Principle 1)."
      },
      {
        "question": "Which of the following is a drawback of high independence in testing?",
        "options": [
          "Testers may verify assumptions made by stakeholders",
          "Testers may be isolated from the development team",
          "Testers find fewer defects than developers",
          "Testers improve team dynamics"
        ],
        "correct": "Testers may be isolated from the development team",
        "explanation": "- **b) Correct / Đúng:** Isolation from the development team is an explicitly listed drawback of independence.  - **a) Incorrect / Sai:** Verifying assumptions is a benefit, not a drawback.  - **c) Incorrect / Sai:** Independent testers typically find different defects, not necessarily fewer.  - **d) Incorrect / Sai:** Isolation can harm, not improve, team dynamics."
      },
      {
        "question": "The whole team approach is a practice originating from:",
        "options": [
          "Scrum",
          "Extreme Programming (XP)",
          "Waterfall",
          "V-Model"
        ],
        "correct": "Extreme Programming (XP)",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly states the whole team approach comes from Extreme Programming (XP).  - **a/c/d) Incorrect / Sai:** While Scrum uses cross-functional teams, the \"whole team approach\" as a specific practice originates from XP."
      }
    ]
  },
  {
    "id": "chapter-2",
    "chapterNumber": 2,
    "titleEn": "Testing Throughout the Software Development Lifecycle",
    "titleVi": "Kiểm thử trong suốt Vòng đời Phát triển Phần mềm",
    "descriptionEn": "Bilingual study guide for Chapter 2",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 2",
    "teacherAdviceEn": "Shift left eliminates late testing --- False. It adds early testing; late testing remains.",
    "teacherAdviceVi": "TDD, ATDD, and BDD are the same --- They are similar but distinct. TDD = unit/code focus; ATDD = acceptance criteria focus; BDD = natural language behavior focus.",
    "hasMindmaps": false,
    "quiz": [
      {
        "question": "Which of the following is a good testing practice that applies to all SDLCs?",
        "options": [
          "Test documentation must be exhaustive regardless of the SDLC",
          "Test analysis for a given test level should begin during the corresponding development phase",
          "Only one test level should be used to avoid redundancy",
          "Dynamic testing should only begin after system deployment"
        ],
        "correct": "Test analysis for a given test level should begin during the corresponding development phase",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly states this as a universal good practice supporting early testing.  - **a) Incorrect / Sai:** Agile favors lightweight documentation.  - **c) Incorrect / Sai:** Multiple test levels with different objectives avoid redundancy while ensuring comprehensiveness.  - **d) Incorrect / Sai:** Dynamic testing begins when executable code is available, not after deployment."
      },
      {
        "question": "In Behavior-Driven Development (BDD), test cases are typically written in:",
        "options": [
          "Machine code",
          "SQL queries",
          "A simple form of natural language (Given/When/Then)",
          "UML diagrams only"
        ],
        "correct": "A simple form of natural language (Given/When/Then)",
        "explanation": "- **c) Correct / Đúng:** BDD uses natural language (Given/When/Then) to express desired behavior.  - The other options are not characteristic of BDD."
      },
      {
        "question": "Which test level focuses on testing the interfaces between components?",
        "options": [
          "Component testing",
          "Component integration testing",
          "System testing",
          "Acceptance testing"
        ],
        "correct": "Component integration testing",
        "explanation": "- **b) Correct / Đúng:** Component integration testing explicitly focuses on interfaces and interactions between components.  - **a) Incorrect / Sai:** Component testing focuses on components in isolation.  - **c) Incorrect / Sai:** System testing focuses on the entire system.  - **d) Incorrect / Sai:** Acceptance testing focuses on business readiness."
      },
      {
        "question": "Which of the following is a non-functional quality characteristic according to ISO 25010?",
        "options": [
          "Functional completeness",
          "Functional correctness",
          "Performance efficiency",
          "Functional appropriateness"
        ],
        "correct": "Performance efficiency",
        "explanation": "- **c) Correct / Đúng:** Performance efficiency is explicitly listed as a non-functional quality characteristic.  - **a, b, d) Incorrect / Sai:** These are functional testing objectives."
      },
      {
        "question": "What is the primary purpose of regression testing?",
        "options": [
          "To confirm that a defect has been fixed",
          "To check for adverse consequences caused by a change",
          "To evaluate work products before execution",
          "To perform static analysis on source code"
        ],
        "correct": "To check for adverse consequences caused by a change",
        "explanation": "- **b) Correct / Đúng:** Regression testing confirms no adverse consequences in unchanged or related areas after a change.  - **a) Incorrect / Sai:** That is confirmation testing.  - **c/d) Incorrect / Sai:** These describe static testing activities."
      },
      {
        "question": "Which of the following best describes \"shift left\"?",
        "options": [
          "Eliminating all testing activities after code implementation",
          "Moving testing activities to earlier phases of the SDLC",
          "Transferring testers to the left side of the office",
          "Using only manual testing in early phases"
        ],
        "correct": "Moving testing activities to earlier phases of the SDLC",
        "explanation": "- **b) Correct / Đúng:** Shift left means testing earlier in the SDLC, not removing later testing.  - **a) Incorrect / Sai:** Later testing is not eliminated.  - **c) Incorrect / Sai:** This is a literal misinterpretation.  - **d) Incorrect / Sai:** Shift left includes automated static analysis and component tests."
      },
      {
        "question": "Which test level is ideally performed by the intended users?",
        "options": [
          "System testing",
          "Component testing",
          "Acceptance testing",
          "Component integration testing"
        ],
        "correct": "Acceptance testing",
        "explanation": "- **c) Correct / Đúng:** Acceptance testing ideally involves the intended users to validate business needs.  - The other levels are typically performed by developers or independent test teams."
      },
      {
        "question": "Which of the following is a trigger for maintenance testing?",
        "options": [
          "Initial development of a new system",
          "Retirement of an application",
          "Writing the first user story",
          "Creating the project charter"
        ],
        "correct": "Retirement of an application",
        "explanation": "- **b) Correct / Đúng:** Retirement is explicitly listed as a trigger for maintenance testing (archiving, retrieval procedures).  - **a/c/d) Incorrect / Sai:** These are new project activities, not maintenance triggers."
      }
    ]
  },
  {
    "id": "chapter-3",
    "chapterNumber": 3,
    "titleEn": "Static Testing",
    "titleVi": "Kiểm thử Tĩnh",
    "descriptionEn": "Bilingual study guide for Chapter 3",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 3",
    "teacherAdviceEn": "Static testing only finds documentation defects --- False. It also finds code defects (unreachable code, complexity).",
    "teacherAdviceVi": "All anomalies = defects --- False. Anomalies include questions and recommendations.",
    "hasMindmaps": false,
    "quiz": [
      {
        "question": "Which of the following is a typical defect easier to find through static testing than dynamic testing?",
        "options": [
          "Incorrect calculation result during execution",
          "Slow response time under load",
          "Unreachable code in the source",
          "Memory leak during runtime"
        ],
        "correct": "Unreachable code in the source",
        "explanation": "- **c) Correct / Đúng:** Unreachable code is explicitly listed as a defect detectable by static analysis but not by dynamic testing (since it never executes).  - **a/b/d) Incorrect / Sai:** These require execution and are found through dynamic testing."
      },
      {
        "question": "In the review process, during which activity are anomalies analyzed and their status decided?",
        "options": [
          "Planning",
          "Individual review",
          "Communication and analysis",
          "Fixing and reporting"
        ],
        "correct": "Communication and analysis",
        "explanation": "- **c) Correct / Đúng:** The communication and analysis activity involves analyzing anomalies and deciding status, ownership, and actions.  - **a) Incorrect / Sai:** Planning defines scope, not anomaly status.  - **b) Incorrect / Sai:** Individual review identifies anomalies; analysis happens later.  - **d) Incorrect / Sai:** Fixing occurs after analysis and decision-making."
      },
      {
        "question": "Which role is responsible for ensuring effective running of review meetings?",
        "options": [
          "Author",
          "Manager",
          "Moderator",
          "Review leader"
        ],
        "correct": "Moderator",
        "explanation": "- **c) Correct / Đúng:** The moderator ensures effective meetings, mediation, time management, and a safe environment.  - **a) Incorrect / Sai:** The author creates/fixes the work product.  - **b) Incorrect / Sai:** The manager provides resources.  - **d) Incorrect / Sai:** The review leader organizes the review but the moderator runs the meeting."
      },
      {
        "question": "Which review type is the most formal and collects metrics to improve the SDLC?",
        "options": [
          "Informal review",
          "Walkthrough",
          "Technical review",
          "Inspection"
        ],
        "correct": "Inspection",
        "explanation": "- **d) Correct / Đúng:** Inspection is the most formal type and explicitly collects metrics for process improvement.  - **c) Incorrect / Sai:** Technical review is formal but does not emphasize metrics collection as its primary goal.  - **a/b) Incorrect / Sai:** These are less formal."
      },
      {
        "question": "Which of the following is a benefit of early and frequent stakeholder feedback?",
        "options": [
          "Eliminates the need for dynamic testing",
          "Prevents misunderstandings about requirements",
          "Removes all defects before coding begins",
          "Replaces the test plan"
        ],
        "correct": "Prevents misunderstandings about requirements",
        "explanation": "- **b) Correct / Đúng:** Early feedback prevents misunderstandings and ensures changes are implemented correctly.  - **a/c) Incorrect / Sai:** Neither eliminates dynamic testing nor removes all defects.  - **d) Incorrect / Sai:** Feedback complements but does not replace planning."
      },
      {
        "question": "In an inspection, who should NOT act as the review leader or moderator?",
        "options": [
          "The manager",
          "The author",
          "A reviewer",
          "The scribe"
        ],
        "correct": "The author",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly states the author cannot act as review leader or moderator in inspections.  - The other roles may participate in these capacities."
      },
      {
        "question": "Static testing can be applied to which of the following work products?",
        "options": [
          "Compiled executable binaries from a third party",
          "Source code and requirement specifications",
          "Running production logs",
          "Dynamic memory allocations"
        ],
        "correct": "Source code and requirement specifications",
        "explanation": "- **b) Correct / Đúng:** Source code and requirements are explicitly listed as examinable work products.  - **a) Incorrect / Sai:** 3rd party executable code is inappropriate due to legal restrictions.  - **c/d) Incorrect / Sai:** These relate to dynamic execution."
      },
      {
        "question": "Which success factor for reviews explicitly states that evaluation of participants should never be an objective?",
        "options": [
          "Choosing the appropriate review type",
          "Defining clear objectives and measurable exit criteria",
          "Providing adequate training",
          "Making reviews part of the culture"
        ],
        "correct": "Defining clear objectives and measurable exit criteria",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly links \"evaluation of participants should never be an objective\" to defining clear objectives and exit criteria.  - The other options are valid success factors but do not carry this specific statement."
      }
    ]
  },
  {
    "id": "chapter-4",
    "chapterNumber": 4,
    "titleEn": "Test Analysis and Design",
    "titleVi": "Phân tích và Thiết kế Kiểm thử",
    "descriptionEn": "Bilingual study guide for Chapter 4",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 4",
    "teacherAdviceEn": "EP partitions can overlap --- False. They must be disjoint.",
    "teacherAdviceVi": "100% statement coverage = thorough testing --- False. Branch coverage is stronger.",
    "hasMindmaps": false,
    "quiz": [
      {
        "question": "In equivalence partitioning, which of the following is true about partitions?",
        "options": [
          "They may overlap to ensure thorough testing",
          "They must be non-empty and must not overlap",
          "They should only include valid values",
          "They are only applicable to output data"
        ],
        "correct": "They must be non-empty and must not overlap",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly states partitions must not overlap and must be non-empty.  - **a) Incorrect / Sai:** Overlapping violates EP rules.  - **c) Incorrect / Sai:** Both valid and invalid partitions must be identified.  - **d) Incorrect / Sai:** EP applies to inputs, outputs, configuration, internal values, time, and interface parameters."
      },
      {
        "question": "Using 3-value BVA for a range accepting values from 10 to 20, which set includes all coverage items for the lower boundary?",
        "options": [
          "9, 10",
          "10, 11",
          "9, 10, 11",
          "8, 9, 10"
        ],
        "correct": "9, 10, 11",
        "explanation": "- **c) Correct / Đúng:** 3-value BVA tests the boundary (10) and both neighbors (9 outside, 11 inside).  - **a) Incorrect / Sai:** This is 2-value BVA for the lower boundary.  - **b) Incorrect / Sai:** This misses the outside neighbor (9).  - **d) Incorrect / Sai:** Tests too far from the boundary."
      },
      {
        "question": "In decision table testing, what are the coverage items?",
        "options": [
          "Individual conditions",
          "Rows in the table",
          "Columns containing feasible combinations of conditions",
          "All actions"
        ],
        "correct": "Columns containing feasible combinations of conditions",
        "explanation": "- **c) Correct / Đúng:** Coverage items are the columns (decision rules) containing feasible combinations.  - **a/b/d) Incorrect / Sai:** These are not the coverage items for decision table testing."
      },
      {
        "question": "Which coverage criterion for state transition testing is the strongest?",
        "options": [
          "All states coverage",
          "Valid transitions coverage",
          "All transitions coverage",
          "Each choice coverage"
        ],
        "correct": "All transitions coverage",
        "explanation": "- **c) Correct / Đúng:** All transitions coverage includes valid and invalid transitions and subsumes the others.  - **a) Incorrect / Sai:** Weakest; can be achieved without exercising all transitions.  - **b) Incorrect / Sai:** Most widely used but weaker than all transitions.  - **d) Incorrect / Sai:** This is an EP coverage criterion, not state transition."
      },
      {
        "question": "Which statement is true regarding branch coverage?",
        "options": [
          "100% statement coverage guarantees 100% branch coverage",
          "Branch coverage subsumes statement coverage",
          "Branch testing only covers conditional branches",
          "Branch coverage is weaker than statement coverage"
        ],
        "correct": "Branch coverage subsumes statement coverage",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly states branch coverage subsumes statement coverage.  - **a) Incorrect / Sai:** The reverse is true: branch coverage guarantees statement coverage, not vice versa.  - **c) Incorrect / Sai:** Branch testing covers both unconditional and conditional branches.  - **d) Incorrect / Sai:** Branch coverage is stronger, not weaker."
      },
      {
        "question": "Which test technique is most effective when specifications are inadequate and there is significant time pressure?",
        "options": [
          "Decision table testing",
          "State transition testing",
          "Exploratory testing",
          "Statement testing"
        ],
        "correct": "Exploratory testing",
        "explanation": "- **c) Correct / Đúng:** Exploratory testing is explicitly recommended for poor specifications and time pressure.  - **a/b) Incorrect / Sai:** These require structured specifications.  - **d) Incorrect / Sai:** This requires code access and is not suited for specification gaps."
      },
      {
        "question": "In ATDD, which type of test cases are typically created first?",
        "options": [
          "Negative test cases",
          "Non-functional test cases",
          "Positive test cases",
          "Regression test cases"
        ],
        "correct": "Positive test cases",
        "explanation": "- **c) Correct / Đúng:** The syllabus states positive test cases confirming correct behavior are done first, followed by negative testing, then non-functional.  - **a/b) Incorrect / Sai:** These come after positive tests.  - **d) Incorrect / Sai:** Regression tests are not part of the ATDD derivation sequence."
      },
      {
        "question": "What does the INVEST acronym stand for in the context of user stories?",
        "options": [
          "Integrated, Negotiable, Valuable, Estimable, Small, Testable",
          "Independent, Negotiable, Valuable, Estimable, Small, Testable",
          "Independent, Non-negotiable, Valuable, Estimable, Small, Testable",
          "Independent, Negotiable, Verifiable, Estimable, Small, Testable"
        ],
        "correct": "Independent, Negotiable, Valuable, Estimable, Small, Testable",
        "explanation": "- **b) Correct / Đúng:** Independent, Negotiable, Valuable, Estimable, Small, Testable.  - **a) Incorrect / Sai:** \"Integrated\" is wrong.  - **c) Incorrect / Sai:** \"Non-negotiable\" contradicts the correct term.  - **d) Incorrect / Sai:** \"Verifiable\" is wrong."
      },
      {
        "question": "Which of the following is a weakness of white-box testing?",
        "options": [
          "It cannot be used for component testing",
          "It may not detect defects of omission if a requirement is not implemented",
          "It requires executable code to be available",
          "It provides no objective coverage measure"
        ],
        "correct": "It may not detect defects of omission if a requirement is not implemented",
        "explanation": "- **b) Correct / Đúng:** If software does not implement a requirement, white-box testing may not detect the omission.  - **a) Incorrect / Sai:** White-box is well-suited for component testing.  - **c) Incorrect / Sai:** It can be used in static testing (dry runs) before execution.  - **d) Incorrect / Sai:** It provides objective coverage measures (statement, branch)."
      },
      {
        "question": "A tester uses their knowledge of common developer mistakes to anticipate defects. Which technique is this?",
        "options": [
          "Checklist-based testing",
          "Error guessing",
          "Exploratory testing",
          "Equivalence partitioning"
        ],
        "correct": "Error guessing",
        "explanation": "- **b) Correct / Đúng:** Error guessing uses tester knowledge to anticipate errors and defects.  - **a) Incorrect / Sai:** Uses predefined checklists, not personal anticipation of developer mistakes.  - **c) Incorrect / Sai:** Simultaneous design/execution, not specifically anticipation based on developer tendencies.  - **d) Incorrect / Sai:** A black-box technique based on data partitioning."
      }
    ]
  },
  {
    "id": "chapter-5",
    "chapterNumber": 5,
    "titleEn": "Managing the Test Activities",
    "titleVi": "Quản lý Các Hoạt động Kiểm thử",
    "descriptionEn": "Bilingual study guide for Chapter 5",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 5",
    "teacherAdviceEn": "Entry criteria = Exit criteria --- They are opposites. Entry = start; Exit = done.",
    "teacherAdviceVi": "Risk level = only impact --- It is likelihood × impact.",
    "hasMindmaps": false,
    "quiz": [
      {
        "question": "Which of the following is typically included in a test plan?",
        "options": [
          "Detailed code implementation",
          "Test approach and risk register",
          "Marketing strategy for the product",
          "End-user training materials"
        ],
        "correct": "Test approach and risk register",
        "explanation": "- **b) Correct / Đúng:** Test approach and risk register are explicitly listed as typical test plan contents.  - **a/c/d) Incorrect / Sai:** These are outside the scope of a test plan."
      },
      {
        "question": "Using three-point estimation, if a=4, m=7, and b=16 person-days, what is the final estimate E?",
        "options": [
          "7",
          "8",
          "9",
          "10"
        ],
        "correct": "8",
        "explanation": "- **b) Correct / Đúng:** E = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8.  - The other values are miscalculations."
      },
      {
        "question": "In Agile, exit criteria are often called:",
        "options": [
          "Definition of Ready",
          "Definition of Done",
          "Sprint Backlog",
          "Product Vision"
        ],
        "correct": "Definition of Done",
        "explanation": "- **b) Correct / Đúng:** The syllabus explicitly states exit criteria are often called Definition of Done in Agile.  - **a) Incorrect / Sai:** Definition of Ready corresponds to entry criteria.  - **c/d) Incorrect / Sai:** These are not related to exit criteria."
      },
      {
        "question": "Which of the following is a project risk rather than a product risk?",
        "options": [
          "Incorrect calculation in the billing module",
          "Insufficient skills in the test team",
          "Security vulnerability in user authentication",
          "Poor user experience"
        ],
        "correct": "Insufficient skills in the test team",
        "explanation": "- **b) Correct / Đúng:** Insufficient skills is a people issue affecting project management/control.  - **a/c/d) Incorrect / Sai:** These relate to product quality characteristics."
      },
      {
        "question": "Which test case prioritization strategy executes tests linked to the most important requirements first?",
        "options": [
          "Risk-based prioritization",
          "Coverage-based prioritization",
          "Requirements-based prioritization",
          "Random prioritization"
        ],
        "correct": "Requirements-based prioritization",
        "explanation": "- **c) Correct / Đúng:** Requirements-based prioritization uses requirement priorities defined by stakeholders.  - **a) Incorrect / Sai:** Uses risk analysis, not requirement importance directly.  - **b) Incorrect / Sai:** Uses coverage metrics.  - **d) Incorrect / Sai:** Not a valid syllabus strategy."
      },
      {
        "question": "In the testing quadrants model, which quadrant contains exploratory testing?",
        "options": [
          "Q1",
          "Q2",
          "Q3",
          "Q4"
        ],
        "correct": "Q3",
        "explanation": "- **c) Correct / Đúng:** Q3 is business-facing and critiques the product; it contains exploratory testing, usability testing, and UAT.  - **a) Incorrect / Sai:** Q1 is technology-facing, support team (component tests).  - **b) Incorrect / Sai:** Q2 is business-facing, support team (functional tests).  - **d) Incorrect / Sai:** Q4 is technology-facing, critique product (non-functional tests)."
      },
      {
        "question": "Which of the following is a control directive?",
        "options": [
          "Collecting test metrics",
          "Reprioritizing tests when a risk becomes an issue",
          "Writing the test plan",
          "Executing test cases"
        ],
        "correct": "Reprioritizing tests when a risk becomes an issue",
        "explanation": "- **b) Correct / Đúng:** Reprioritizing tests based on monitoring information is a control directive.  - **a) Incorrect / Sai:** This is monitoring.  - **c) Incorrect / Sai:** This is planning.  - **d) Incorrect / Sai:** This is execution."
      },
      {
        "question": "What is the primary purpose of configuration management in testing?",
        "options": [
          "To write test cases",
          "To uniquely identify, version control, and track work products",
          "To execute automated tests",
          "To estimate test effort"
        ],
        "correct": "To uniquely identify, version control, and track work products",
        "explanation": "- **b) Correct / Đúng:** CM ensures unique identification, version control, and traceability of configuration items.  - **a/c/d) Incorrect / Sai:** These are not CM functions."
      },
      {
        "question": "Which of the following must be included in a defect report?",
        "options": [
          "The developer's home address",
          "Expected and actual results",
          "The marketing budget",
          "The company's stock price"
        ],
        "correct": "Expected and actual results",
        "explanation": "- **b) Correct / Đúng:** Expected and actual results are mandatory components of a defect report.  - **a/c/d) Incorrect / Sai:** These are irrelevant to defect reporting."
      },
      {
        "question": "Which estimation technique involves experts making estimates in isolation, then discussing deviations, and re-estimating until consensus is reached?",
        "options": [
          "Extrapolation",
          "Estimation based on ratios",
          "Wideband Delphi",
          "Three-point estimation"
        ],
        "correct": "Wideband Delphi",
        "explanation": "- **c) Correct / Đúng:** Wideband Delphi is defined as an iterative expert-based technique with isolated estimation and consensus building.  - **a/b) Incorrect / Sai:** These are metrics-based.  - **d) Incorrect / Sai:** Uses three estimates but does not involve iterative consensus discussion."
      }
    ]
  },
  {
    "id": "chapter-6",
    "chapterNumber": 6,
    "titleEn": "Test Tools",
    "titleVi": "Công cụ Kiểm thử",
    "descriptionEn": "Bilingual study guide for Chapter 6",
    "descriptionVi": "Hướng dẫn học tập song ngữ cho Chương 6",
    "teacherAdviceEn": "Automation replaces testers --- False. It supports testers and frees them for deeper work.",
    "teacherAdviceVi": "Open source is risk-free --- False. Abandonment and update frequency are risks.",
    "hasMindmaps": false,
    "quiz": [
      {
        "question": "Which of the following is a potential benefit of test automation?",
        "options": [
          "Eliminating the need for test planning",
          "Reducing test execution times and providing faster feedback",
          "Removing all human involvement from testing",
          "Guaranteeing the absence of defects"
        ],
        "correct": "Reducing test execution times and providing faster feedback",
        "explanation": "- **b) Correct / Đúng:** Faster execution and feedback are explicitly listed benefits.  - **a) Incorrect / Sai:** Planning remains essential.  - **c) Incorrect / Sai:** Human critical thinking is still required.  - **d) Incorrect / Sai:** No activity guarantees absence of defects."
      },
      {
        "question": "Which of the following is a risk of using an open-source test tool?",
        "options": [
          "It is always more expensive than commercial tools",
          "It may be abandoned with no further updates",
          "It automatically complies with all regulatory requirements",
          "It eliminates the need for test environment setup"
        ],
        "correct": "It may be abandoned with no further updates",
        "explanation": "- **b) Correct / Đúng:** Abandonment is explicitly listed as an open-source risk.  - **a) Incorrect / Sai:** Open-source is often less expensive.  - **c) Incorrect / Sai:** Open-source does not guarantee regulatory compliance.  - **d) Incorrect / Sai:** Environment setup is still required."
      },
      {
        "question": "Which tool category supports the DevOps delivery pipeline and automated build processes?",
        "options": [
          "Test design tool",
          "DevOps tool",
          "Non-functional testing tool",
          "Static testing tool"
        ],
        "correct": "DevOps tool",
        "explanation": "- **b) Correct / Đúng:** DevOps tools support CI/CD pipelines and automated builds.  - The other categories serve different primary purposes."
      },
      {
        "question": "Which of the following statements about test tools is true according to the syllabus?",
        "options": [
          "A spreadsheet cannot be considered a test tool",
          "Test automation removes the need for manual testing entirely",
          "Simply acquiring a tool guarantees success",
          "Tools require effort for introduction, maintenance, and training"
        ],
        "correct": "Tools require effort for introduction, maintenance, and training",
        "explanation": "- **d) Correct / Đúng:** The syllabus explicitly states each new tool requires effort for introduction, maintenance, and training.  - **a) Incorrect / Sai:** Spreadsheets are explicitly listed as test tools.  - **b) Incorrect / Sai:** Manual testing, especially from the user perspective, remains necessary.  - **c) Incorrect / Sai:** Simply acquiring a tool does not guarantee success."
      },
      {
        "question": "Over-reliance on a test tool may lead to:",
        "options": [
          "Improved critical thinking by testers",
          "Ignoring the need for human critical thinking",
          "Reduced consistency in test execution",
          "Slower time-to-market"
        ],
        "correct": "Ignoring the need for human critical thinking",
        "explanation": "- **b) Correct / Đúng:** Over-reliance on tools is explicitly listed as a risk that leads to ignoring human critical thinking.  - **a) Incorrect / Sai:** Over-reliance reduces, not improves, critical thinking.  - **c) Incorrect / Sai:** Tools increase consistency, not reduce it.  - **d) Incorrect / Sai:** Tools generally improve time-to-market."
      }
    ]
  }
];
