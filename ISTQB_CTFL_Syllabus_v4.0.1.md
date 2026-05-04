# Certified Tester Foundation Level Syllabus v4.0.1

**International Software Testing Qualifications Board**

## Copyright Notice
Copyright © International Software Testing Qualifications Board (hereinafter called ISTQB®).
ISTQB® is a registered trademark of the International Software Testing Qualifications Board.

Copyright © 2024 the authors of the Foundation Level v4.0.1 syllabus: Renzo Cerquozzi, Wim Decoutere, Jean-François Riverin, Arnika Hryszko, Martin Klonk, Meile Posthuma, Eric Riou du Cosquer (chair), Adam Roman, Lucjan Stapp, Stephanie Ulrich (vice chair), Eshraka Zakaria.

Copyright © 2023 the authors of the Foundation Level v4.0 syllabus: Renzo Cerquozzi, Wim Decoutere, Klaudia Dussa-Zieger, Jean-François Riverin, Arnika Hryszko, Martin Klonk, Michaël Pilaeten, Meile Posthuma, Stuart Reid, Eric Riou du Cosquer (chair), Adam Roman, Lucjan Stapp, Stephanie Ulrich (vice chair), Eshraka Zakaria.

(Full copyright details available in the source document)

All rights reserved. The authors hereby transfer the copyright to the ISTQB®. The authors and ISTQB® have agreed to the following conditions of use:
* Extracts, for non-commercial use, from this document may be copied if the source is acknowledged.
* Any Accredited Training Provider may use this syllabus as the basis for a training course if the authors and the ISTQB® are acknowledged as the source and copyright owners.
* Any individual or group of individuals may use this syllabus as the basis for articles and books, if the authors and the ISTQB® are acknowledged as the source and copyright owners.
* Any other use of this syllabus is prohibited without first obtaining the approval in writing of the ISTQB®.
* Any ISTQB®-recognized Member Board may translate this syllabus provided they reproduce the Copyright Notice in the translated version.

---

## Revision History

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

## Acknowledgements
(Refer to the source document for the full list of contributors and reviewers.)

---

## 0. Introduction

### 0.1. Purpose of this Syllabus
This syllabus forms the basis for the International Software Testing Qualification at the Foundation Level. The ISTQB® provides this syllabus as follows:
1. To member boards, to translate into their local language and to accredit training providers.
2. To certification bodies, to derive examination questions.
3. To training providers, to produce courseware and determine appropriate teaching methods.
4. To certification candidates, to prepare for the certification exam.
To the international software and systems engineering community, to advance the profession of software and systems testing.

### 0.2. The Certified Tester Foundation Level in Software Testing
The Foundation Level qualification is aimed at anyone involved in software testing (testers, test analysts, developers, project managers, etc.). Holders of the Foundation Certificate will be able to go on to higher-level software testing qualifications.

### 0.3. Career Path for Testers
The ISTQB® scheme provides support for testing professionals at all stages of their careers. Options include Core Advanced Levels (Test Analyst, Technical Test Analyst, Test Manager), Expert Level, and various Specialist certifications (Automation, AI, Performance, etc.). Visit www.istqb.org for the latest information.

### 0.4. Business Outcomes
A Foundation Level Certified Tester can:
* **FL-BO1**: Understand what testing is and why it is beneficial
* **FL-BO2**: Understand fundamental concepts of software testing
* **FL-BO3**: Identify the test approach and activities to be implemented depending on the context of testing
* **FL-BO4**: Assess and improve the quality of documentation
* **FL-BO5**: Increase the effectiveness and efficiency of testing
* **FL-BO6**: Align the test process with the software development lifecycle
* **FL-BO7**: Understand test management principles
* **FL-BO8**: Write and communicate clear and understandable defect reports
* **FL-BO9**: Understand the factors that influence the priorities and efforts related to testing
* **FL-BO10**: Work as part of a cross-functional team
* **FL-BO11**: Know risks and benefits related to test automation
* **FL-BO12**: Identify essential skills required for testing
* **FL-BO13**: Understand the impact of risk on testing
* **FL-BO14**: Effectively report on test progress and quality

### 0.5. Examinable Learning Objectives and Cognitive Level of Knowledge
Learning objectives (LO) are classified as:
* **K1**: Remember
* **K2**: Understand
* **K3**: Apply

### 0.6. The Foundation Level Certificate Exam
The exam is based on this syllabus. All sections are examinable except for the Introduction and Appendices.

### 0.7. Accreditation
ISTQB® Member Boards accredit training providers whose course material follows this syllabus.

### 0.8. Handling of Standards
Standards are referenced to provide a framework or source of additional information but are not intended for examination themselves.

### 0.9. Staying Current
The software industry changes rapidly. Supporting documentation and changes to standards can be found on www.istqb.org.

### 0.10. Level of Detail
The syllabus focuses on test concepts and techniques that can be applied to all software projects independent of the SDLC employed.

### 0.11. How this Syllabus is Organized
The syllabus requires a minimum of 1135 minutes of instruction across six chapters:
* **Chapter 1**: Fundamentals of Testing (180 minutes)
* **Chapter 2**: Testing Throughout the Software Development Lifecycle (130 minutes)
* **Chapter 3**: Static Testing (80 minutes)
* **Chapter 4**: Test Analysis and Design (390 minutes)
* **Chapter 5**: Managing the Test Activities (335 minutes)
* **Chapter 6**: Test Tools (20 minutes)

---

## 1. Fundamentals of Testing (180 minutes)

**Keywords**: coverage, debugging, defect, error, failure, quality, quality assurance, root cause, test analysis, test basis, test case, test completion, test condition, test control, test data, test design, test execution, test implementation, test monitoring, test object, test objective, test planning, test procedure, test process, test result, testing, testware, traceability, validation, verification

### Learning Objectives for Chapter 1:
* **FL-1.1.1 (K1)**: Identify typical test objectives
* **FL-1.1.2 (K2)**: Differentiate testing from debugging
* **FL-1.2.1 (K2)**: Exemplify why testing is necessary
* **FL-1.2.2 (K1)**: Recall the relation between testing and quality assurance
* **FL-1.2.3 (K2)**: Distinguish between root cause, error, defect, and failure
* **FL-1.3.1 (K2)**: Explain the seven testing principles
* **FL-1.4.1 (K2)**: Explain the different test activities and related tasks
* **FL-1.4.2 (K2)**: Explain the impact of context on the test process
* **FL-1.4.3 (K2)**: Differentiate the testware that supports the test activities
* **FL-1.4.4 (K2)**: Explain the value of maintaining traceability
* **FL-1.4.5 (K2)**: Compare the different roles in testing
* **FL-1.5.1 (K2)**: Give examples of the generic skills required for testing
* **FL-1.5.2 (K1)**: Recall the advantages of the whole team approach
* **FL-1.5.3 (K2)**: Distinguish the benefits and drawbacks of independence of testing

### 1.1. What is Testing?
Software testing assesses software quality and helps reducing the risk of software failure in operation. It is a set of activities to discover defects and evaluate the quality of software work products (test objects).
* **Verification**: Checking whether the system meets specified requirements.
* **Validation**: Checking whether the system meets users' and other stakeholders' needs in its operational environment.
* **Dynamic testing**: Involves execution of software.
* **Static testing**: Does not involve execution (reviews, static analysis).

#### 1.1.1. Test Objectives
* Evaluating work products (requirements, designs, code).
* Causing failures and finding defects.
* Ensuring required coverage.
* Reducing risk levels.
* Verifying requirements fulfillment.
* Building confidence in quality.
* Providing information to stakeholders.

#### 1.1.2. Testing and Debugging
Testing triggers failures or finds defects. Debugging finds, analyzes, and eliminates the causes of failures (defects).

### 1.2. Why is Testing Necessary?
Testing helps identify defects and provides a means of evaluating quality throughout the SDLC.

#### 1.2.1. Testing’s Contributions to Success
Testing provides cost-effective defect detection and evaluation of quality, contributing to release decisions and meeting contractual/legal requirements.

#### 1.2.2. Testing and Quality Assurance (QA)
* **Testing**: Product-oriented, corrective approach (Quality Control).
* **QA**: Process-oriented, preventive approach.

#### 1.2.3. Errors, Defects, Failures, and Root Causes
* **Error (Mistake)** -> **Defect (Fault/Bug)** -> **Failure**.
* **Root Cause**: The fundamental reason for a problem. Addressing it prevents similar issues.

### 1.3. Testing Principles
1. Testing shows the presence, not the absence of defects.
2. Exhaustive testing is impossible.
3. Early testing saves time and money.
4. Defects cluster together (Pareto principle).
5. Tests wear out (Pesticide paradox).
6. Testing is context dependent.
7. Absence-of-defects fallacy.

### 1.4. Test Activities, Testware and Test Roles
#### 1.4.1. Test Activities and Tasks
* **Test planning**: Defining objectives and approach.
* **Test monitoring and control**: Checking progress and taking corrective actions.
* **Test analysis**: "What to test?" (identifying testable features).
* **Test design**: "How to test?" (creating test cases).
* **Test implementation**: Creating testware (data, scripts).
* **Test execution**: Running tests and logging results.
* **Test completion**: Archiving testware, reporting, and lessons learned.

#### 1.4.2. Test Process in Context
Factors include stakeholders, team skills, business domain, technical factors, and project constraints.

#### 1.4.3. Testware
Work products from test activities:
* **Planning**: Test plan, schedule, risk register.
* **Monitoring**: Progress reports.
* **Analysis**: Test conditions, defect reports (on basis).
* **Design**: Test cases, charters, data requirements.
* **Implementation**: Procedures, scripts, suites, environments.
* **Execution**: Logs, defect reports.
* **Completion**: Completion reports, action items.

#### 1.4.4. Traceability between the Test Basis and Testware
Maintaining traceability supports coverage evaluation, impact analysis, audits, and reporting.

#### 1.4.5. Roles in Testing
* **Test management role**: Overall responsibility for process, team, and planning.
* **Testing role**: Responsibility for technical engineering (analysis, design, execution).

### 1.5. Essential Skills and Good Practices in Testing
#### 1.5.1. Generic Skills Required for Testing
Testing knowledge, thoroughness, communication skills, analytical thinking, technical knowledge, and domain knowledge.

#### 1.5.2. Whole Team Approach
Everyone is responsible for quality. Benefits include synergy, improved communication, and knowledge transfer.

#### 1.5.3. Independence of Testing
* **Benefits**: Recognize different failures/defects, challenge assumptions.
* **Drawbacks**: Isolation from developers, communication problems, seen as a bottleneck.

---

## 2. Testing Throughout the Software Development Lifecycle (130 minutes)

**Keywords**: acceptance testing, black-box testing, component integration testing, component testing, confirmation testing, functional testing, integration testing, maintenance testing, non-functional testing, regression testing, shift left, system integration testing, system testing, test level, test object, test type, white-box testing

### Learning Objectives for Chapter 2:
* **FL-2.1.1 (K2)**: Explain the impact of the chosen software development lifecycle on testing
* **FL-2.1.2 (K1)**: Recall good testing practices that apply to all SDLCs
* **FL-2.1.3 (K1)**: Recall examples of test-first approaches
* **FL-2.1.4 (K2)**: Summarize DevOps impact on testing
* **FL-2.1.5 (K2)**: Explain shift left
* **FL-2.1.6 (K2)**: Explain retrospectives for process improvement
* **FL-2.2.1 (K2)**: Distinguish different test levels
* **FL-2.2.2 (K2)**: Distinguish different test types
* **FL-2.2.3 (K2)**: Distinguish confirmation testing from regression testing
* **FL-2.3.1 (K2)**: Summarize maintenance testing and its triggers

### 2.1. Testing in the Context of a Software Development Lifecycle (SDLC)
SDLC models include sequential (Waterfall, V-model) and iterative/incremental (Unified Process, Scrum).

#### 2.1.1. Impact of the SDLC on Testing
Affects scope, timing, documentation, techniques, automation, and roles.

#### 2.1.2. SDLC and Good Testing Practices
* Every dev activity has a corresponding test activity.
* Different test levels have specific objectives.
* Test analysis/design begins early.
* Testers involved in reviewing work products early.

#### 2.1.3. Testing as a Driver for Software Development
* **TDD**: Tests written before code.
* **ATDD**: Tests derived from acceptance criteria.
* **BDD**: Desired behavior expressed in natural language (Given/When/Then).

#### 2.1.4. DevOps and Testing
Aims for synergy between development and operations. Benefits include fast feedback, CI/CD promotion of shift left, and automated regression tests.

#### 2.1.5. Shift Left
Performing testing earlier in the SDLC. Includes reviewing specifications early and writing tests before code.

#### 2.1.6. Retrospectives and Process Improvement
Meetings at milestones to discuss what was successful and what could be improved.

### 2.2. Test Levels and Test Types
#### 2.2.1. Test Levels
1. **Component testing**: Testing in isolation.
2. **Component integration testing**: Interfaces/interactions between components.
3. **System testing**: Overall behavior of the entire system.
4. **System integration testing**: Interfaces with external systems/services.
5. **Acceptance testing**: Validation for deployment readiness (UAT, Alpha, Beta).

#### 2.2.2. Test Types
* **Functional testing**: "What" the system does.
* **Non-functional testing**: "How well" it behaves (performance, security, usability).
* **Black-box testing**: Specification-based.
* **White-box testing**: Structure-based.

#### 2.2.3. Confirmation Testing and Regression Testing
* **Confirmation testing**: Confirms a defect is fixed.
* **Regression testing**: Confirms no adverse effects from changes.

### 2.3. Maintenance Testing
Triggered by modifications, upgrades/migrations, or retirement.

---

## 3. Static Testing (80 minutes)

**Keywords**: anomaly, dynamic testing, formal review, informal review, inspection, review, static analysis, static testing, technical review, walkthrough

### Learning Objectives for Chapter 3:
* **FL-3.1.1 (K1)**: Recognize types of work products examinable by static testing
* **FL-3.1.2 (K2)**: Explain the value of static testing
* **FL-3.1.3 (K2)**: Compare static and dynamic testing
* **FL-3.2.1 (K1)**: Identify benefits of early stakeholder feedback
* **FL-3.2.2 (K2)**: Summarize review process activities
* **FL-3.2.3 (K1)**: Recall responsibilities in reviews
* **FL-3.2.4 (K2)**: Compare different review types
* **FL-3.2.5 (K1)**: Recall success factors for reviews

### 3.1. Static Testing Basics
Evaluation through manual examination (reviews) or tools (static analysis) without executing code.

#### 3.1.1. Work Products Examinable
Requirements, code, test plans, test cases, backlog items, contracts, etc.

#### 3.1.2. Value of Static Testing
Detects defects early, reduces costs, improves communication, and finds defects dynamic testing might miss (e.g., unreachable code).

#### 3.1.3. Differences between Static and Dynamic Testing
Static finds defects directly; dynamic finds failures. Static can apply to non-executable products.

### 3.2. Feedback and Review Process
#### 3.2.2. Review Process Activities
1. **Planning**: Scope and effort.
2. **Review initiation**: Preparing participants.
3. **Individual review**: Identifying anomalies.
4. **Communication and analysis**: Discussing anomalies.
5. **Fixing and reporting**: Correcting defects and reporting results.

#### 3.2.3. Roles in Reviews
Manager, Author, Moderator (Facilitator), Scribe (Recorder), Reviewer, Review leader.

#### 3.2.4. Review Types
* **Informal review**: No defined process.
* **Walkthrough**: Led by the author.
* **Technical Review**: Led by a moderator, consensus-focused.
* **Inspection**: Most formal, documented process and metrics.

---

## 4. Test Analysis and Design (390 minutes)

**Keywords**: equivalence partitioning, boundary value analysis, decision table testing, state transition testing, statement coverage, branch coverage, exploratory testing, checklist-based testing, ATDD, user stories

### Learning Objectives for Chapter 4:
* **FL-4.2.1 (K3)**: Use equivalence partitioning
* **FL-4.2.2 (K3)**: Use boundary value analysis
* **FL-4.2.3 (K3)**: Use decision table testing
* **FL-4.2.4 (K3)**: Use state transition testing
* **FL-4.3.1 (K2)**: Explain statement testing
* **FL-4.3.2 (K2)**: Explain branch testing
* **FL-4.5.3 (K3)**: Use ATDD to derive test cases

### 4.2. Black-Box Test Techniques
* **Equivalence Partitioning (EP)**: Divides data into partitions where values are handled the same.
* **Boundary Value Analysis (BVA)**: Tests boundaries (2-value or 3-value BVA).
* **Decision Table Testing**: Handles complex logical combinations.
* **State Transition Testing**: Based on state diagrams/tables.

### 4.3. White-Box Test Techniques
* **Statement Testing**: Measures percentage of executable statements exercised.
* **Branch Testing**: Measures percentage of control flow transfers (branches) exercised. Branch coverage subsumes statement coverage.

### 4.4. Experience-based Test Techniques
* **Error Guessing**: Anticipating defects based on experience.
* **Exploratory Testing**: Simultaneous design and execution.
* **Checklist-Based Testing**: Using a list of test conditions.

### 4.5. Collaboration-based Test Approaches
* **Collaborative User Story Writing**: Card, Conversation, Confirmation (3 C's).
* **Acceptance Criteria**: Conditions for acceptance (Scenario-oriented or Rule-oriented).
* **ATDD**: Test-first approach deriving tests from acceptance criteria.

---

## 5. Managing the Test Activities (335 minutes)

### 5.1. Test Planning
Typical content includes test scope, objectives, stakeholders, risk register, approach, budget, and schedule.

#### 5.1.3. Entry and Exit Criteria
* **Entry**: Preconditions to start (resources, test basis).
* **Exit**: Conditions to complete (coverage, defect status).

#### 5.1.4. Estimation Techniques
Ratios, Extrapolation, Wideband Delphi (Planning Poker), Three-point estimation.

#### 5.1.6. Test Pyramid
Shows different granularities. Higher layers have lower granularity, lower isolation, and higher execution time.

#### 5.1.7. Testing Quadrants
Q1: Technology facing, support team (Unit). Q2: Business facing, support team (Functional). Q3: Business facing, critique product (Exploratory). Q4: Technology facing, critique product (Non-functional).

### 5.2. Risk Management
#### 5.2.2. Project Risks and Product Risks
* **Project**: Management/control (delays, skills).
* **Product**: Quality characteristics (functionality, performance, security).

### 5.3. Test Monitoring, Control and Completion
Monitoring gathers info; control uses it for corrective action. Completion occurs at milestones.

#### 5.5. Defect Management
A process to log, analyze, classify, and track defects to closure.

---

## 6. Test Tools (20 minutes)
* **Benefits**: Time saved, consistency, objectivity.
* **Risks**: Unrealistic expectations, maintenance effort, tool dependency.

---

## Appendices

### Appendix A: Learning Objectives
Defines K1 (Remember), K2 (Understand), K3 (Apply) levels.

### Appendix B: Business Outcomes Traceability Matrix
(Reconstructed summary table)

| BO | Description | Total LOs |
| :--- | :--- | :--- |
| BO1 | Understand what testing is | 6 |
| BO2 | Understand fundamental concepts | 22 |
| BO5 | Increase effectiveness and efficiency | 20 |
| ... | ... | ... |

### Appendix C: Release Notes
Details changes from v4.0 to v4.0.1 (errata) and major updates from v3.1.1.

---
## Index
(Refer to the source document for the complete alphabetical index of terms.)
