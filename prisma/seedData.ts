export const ISTQB_TERMS = [
  {
    topic: "Fundamentals of Testing",
    terms: [
      { term: "Testing", def: "A process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation and evaluation of software products." },
      { term: "Debugging", def: "The process of finding, analyzing and removing the causes of failures in software." },
      { term: "Error (Mistake)", def: "A human action that produces an incorrect result." },
      { term: "Defect (Bug)", def: "An imperfection or deficiency in a work product where it does not meet its requirements or specifications." },
      { term: "Failure", def: "An event in which a component or system does not perform a required function within specified limits." },
      { term: "Quality Assurance", def: "Activities focused on providing confidence that quality requirements will be fulfilled." },
      { term: "Quality Control", def: "Activities focused on fulfilling quality requirements, largely achieved through testing." },
      { term: "Exhaustive Testing", def: "A test approach in which the test suite comprises all combinations of input values and preconditions. It is impossible." },
      { term: "Defect Clustering", def: "A small number of modules usually contain most of the defects discovered during pre-release testing." },
      { term: "Pesticide Paradox", def: "If the same tests are repeated over and over again, eventually they will no longer find any new defects." },
      { term: "Absence-of-errors Fallacy", def: "The false belief that finding and fixing defects will ensure the success of a system." },
      { term: "Early Testing", def: "Testing activities should start as early as possible in the software or system development life cycle." },
      { term: "Context Dependent Testing", def: "Testing is done differently in different contexts (e.g., safety-critical vs e-commerce)." },
      { term: "Test Planning", def: "The activity of defining the objectives of testing and the specification of test activities." },
      { term: "Test Monitoring", def: "The continuous comparison of actual progress against the test plan." },
      { term: "Test Control", def: "Taking actions necessary to meet the objectives of the test plan." },
      { term: "Test Analysis", def: "The activity that determines 'what to test' by analyzing the test basis." },
      { term: "Test Design", def: "The activity that determines 'how to test' by defining test cases." },
      { term: "Test Implementation", def: "The activity that prepares the testware needed for test execution (e.g., test scripts)." },
      { term: "Test Execution", def: "Running the tests on the test item." }
    ]
  },
  {
    topic: "Testing Throughout the SDLC",
    terms: [
      { term: "Sequential Development", def: "A model where development activities are performed in a linear sequential order (e.g., Waterfall, V-model)." },
      { term: "Iterative Development", def: "A model where features are specified, designed, built, and tested in a series of cycles." },
      { term: "Incremental Development", def: "A model where the software is built and delivered in pieces." },
      { term: "Agile Development", def: "A group of software development methodologies based on iterative and incremental development." },
      { term: "Component Testing", def: "Testing of individual hardware or software components. Also known as Unit Testing." },
      { term: "Integration Testing", def: "Testing performed to expose defects in the interfaces and interactions between integrated components." },
      { term: "System Testing", def: "Testing an integrated system to verify that it meets specified requirements." },
      { term: "Acceptance Testing", def: "Formal testing with respect to user needs, requirements, and business processes." },
      { term: "Functional Testing", def: "Testing based on an analysis of the specification of the functionality of a component or system." },
      { term: "Non-functional Testing", def: "Testing the attributes of a component or system that do not relate to functionality, e.g., reliability, usability." },
      { term: "White-box Testing", def: "Testing based on an analysis of the internal structure of the component or system." },
      { term: "Black-box Testing", def: "Testing, either functional or non-functional, without reference to the internal structure." },
      { term: "Confirmation Testing", def: "Testing that runs test cases that previously failed to verify that the defect is fixed. (Re-testing)" },
      { term: "Regression Testing", def: "Testing of a previously tested program following modification to ensure that defects have not been introduced." },
      { term: "Maintenance Testing", def: "Testing the changes to an operational system or the impact of a changed environment to an operational system." },
      { term: "Impact Analysis", def: "The evaluation of changes to the documentation and software to determine the scope of testing." },
      { term: "Test Basis", def: "All documents from which the requirements of a component or system can be inferred." },
      { term: "Test Object", def: "The component or system to be tested." },
      { term: "Test Oracle", def: "A source to determine expected results to compare with the actual result." },
      { term: "Traceability", def: "The degree to which a relationship can be established between two or more products of the development process." }
    ]
  },
  {
    topic: "Static Testing",
    terms: [
      { term: "Static Testing", def: "Testing a work product without the work product code being executed." },
      { term: "Dynamic Testing", def: "Testing that involves the execution of the software of a component or system." },
      { term: "Review", def: "An evaluation of a work product to detect discrepancies from planned results and to recommend improvements." },
      { term: "Informal Review", def: "A review not based on a formal procedure, e.g., buddy check." },
      { term: "Walkthrough", def: "A step-by-step presentation by the author of a document to gather information and establish a common understanding." },
      { term: "Technical Review", def: "A peer group discussion activity that focuses on achieving consensus on the technical approach." },
      { term: "Inspection", def: "The most formal review type, led by a trained moderator, using metrics and rules." },
      { term: "Moderator", def: "The person who leads a review meeting and manages the review process." },
      { term: "Scribe", def: "The person who records the issues and decisions during a review meeting." },
      { term: "Reviewer", def: "A participant in a review who identifies and describes anomalies in the product." },
      { term: "Author", def: "The creator of the work product being reviewed." },
      { term: "Manager", def: "The person who decides on the execution of reviews and allocates time in project schedules." },
      { term: "Checklist-based Review", def: "A review technique where reviewers use a list of questions or items to be verified." },
      { term: "Scenario-based Review", def: "A review technique where reviewers are provided with structured guidelines on how to read through the product." },
      { term: "Role-based Review", def: "A review technique where reviewers evaluate the product from the perspective of different stakeholder roles." },
      { term: "Perspective-based Reading", def: "Similar to role-based, but reviewers also use the work product to generate a derived product (like test cases)." },
      { term: "Ad Hoc Review", def: "A review technique where reviewers are provided with little or no guidance." },
      { term: "Anomaly", def: "Any condition that deviates from expectation based on requirements specifications, design documents, etc." },
      { term: "Static Analysis", def: "The process of evaluating a component or system without executing it, based on its form, structure, or content." },
      { term: "Control Flow Analysis", def: "A form of static analysis based on a representation of unique paths in the execution of a component." }
    ]
  },
  {
    topic: "Test Analysis and Design",
    terms: [
      { term: "Test Technique", def: "A procedure used to derive and/or select test cases." },
      { term: "Equivalence Partitioning (EP)", def: "A black-box technique that divides inputs into classes of data from which test cases are derived." },
      { term: "Boundary Value Analysis (BVA)", def: "A black-box technique where test cases are designed based on boundary values." },
      { term: "Decision Table Testing", def: "A black-box technique in which test cases are designed to execute combinations of inputs shown in a decision table." },
      { term: "State Transition Testing", def: "A black-box technique where test cases are designed to execute valid and invalid state transitions." },
      { term: "Use Case Testing", def: "A black-box technique where test cases are designed to execute scenarios of use cases." },
      { term: "Statement Coverage", def: "The percentage of executable statements that have been exercised by a test suite." },
      { term: "Decision Coverage", def: "The percentage of decision outcomes that have been exercised by a test suite." },
      { term: "Experience-based Testing", def: "Testing based on the tester's experience, knowledge, and intuition." },
      { term: "Error Guessing", def: "An experience-based technique where the tester anticipates errors based on experience." },
      { term: "Exploratory Testing", def: "An informal test design technique where the tester actively controls the design of the tests as those tests are performed." },
      { term: "Checklist-based Testing", def: "An experience-based technique where the tester uses a high-level list of items to be noted, checked, or remembered." },
      { term: "Test Condition", def: "An item or event of a component or system that could be verified by one or more test cases." },
      { term: "Test Case", def: "A set of preconditions, inputs, actions, expected results and postconditions, developed based on test conditions." },
      { term: "Test Procedure", def: "A sequence of test cases in execution order, and any associated actions to set up the execution." },
      { term: "Test Suite", def: "A set of test scripts or test procedures to be executed in a specific test run." },
      { term: "Test Charter", def: "A statement of test objectives, and possibly test ideas, used in exploratory testing." },
      { term: "Session-based Testing", def: "An approach to exploratory testing where testing is conducted in time-boxed sessions." },
      { term: "Coverage", def: "The degree to which a specified coverage item has been exercised by a test suite." },
      { term: "Valid Partition", def: "An equivalence partition containing valid values." }
    ]
  },
  {
    topic: "Managing the Test Activities",
    terms: [
      { term: "Test Strategy", def: "A high-level description of the test levels to be performed and the testing within those levels for an organization or programme." },
      { term: "Test Approach", def: "The implementation of the test strategy for a specific project." },
      { term: "Entry Criteria", def: "The set of conditions for officially starting a defined task." },
      { term: "Exit Criteria", def: "The set of conditions for officially completing a defined task." },
      { term: "Test Estimation", def: "The calculated approximation of a result related to various aspects of testing (e.g., effort spent, completion date)." },
      { term: "Metrics-based Estimation", def: "Estimating testing effort based on metrics of former similar projects." },
      { term: "Expert-based Estimation", def: "Estimating testing effort based on the experience of the owners of the testing tasks or by experts." },
      { term: "Test Progress Report", def: "A report produced at regular intervals about the progress of test activities against a baseline." },
      { term: "Test Summary Report", def: "A report that provides an evaluation of the corresponding test items against exit criteria." },
      { term: "Configuration Management", def: "A discipline applying technical and administrative direction to identify and control configuration items." },
      { term: "Risk", def: "A factor that could result in future negative consequences; usually expressed as impact and likelihood." },
      { term: "Product Risk", def: "A risk directly related to the test object (e.g., software might not function according to specification)." },
      { term: "Project Risk", def: "A risk related to the management and control of the test project (e.g., lack of staff, delays)." },
      { term: "Risk-based Testing", def: "An approach to testing to reduce the level of product risks and inform stakeholders of their status." },
      { term: "Defect Report", def: "A document reporting on any flaw in a component or system that can cause the component or system to fail." },
      { term: "Test Manager", def: "The person responsible for project management of testing activities and resources." },
      { term: "Tester", def: "A skilled professional who is involved in the testing of a component or system." },
      { term: "Independence of Testing", def: "Separation of responsibilities, which encourages objective testing." },
      { term: "Test Schedule", def: "A list of activities, tasks or events of the test process, identifying their intended start and finish dates." },
      { term: "Risk Assessment", def: "The process of identifying and subsequently analyzing the identified project or product risk." }
    ]
  },
  {
    topic: "Test Tools",
    terms: [
      { term: "Test Execution Tool", def: "A type of test tool that is able to execute other software using an automated test script." },
      { term: "Test Management Tool", def: "A tool that provides support to the test management and control part of a test process." },
      { term: "Defect Management Tool", def: "A tool that facilitates the recording and status tracking of defects." },
      { term: "Configuration Management Tool", def: "A tool that provides support for the identification and control of configuration items." },
      { term: "Requirements Management Tool", def: "A tool that supports the recording of requirements, requirements attributes, and traceability." },
      { term: "Static Analysis Tool", def: "A tool that analyzes source code or models without executing them to find defects." },
      { term: "Test Data Preparation Tool", def: "A type of tool that enables data to be selected from existing databases or created, generated, manipulated and edited for use in testing." },
      { term: "Performance Testing Tool", def: "A tool to support performance testing that usually has two main facilities: load generation and test transaction measurement." },
      { term: "Coverage Tool", def: "A tool that provides objective measures of what structural elements have been exercised by a test suite." },
      { term: "Data-driven Testing", def: "A scripting technique that stores test input and expected results in a table or spreadsheet, so that a single control script can execute all of the tests in the table." },
      { term: "Keyword-driven Testing", def: "A scripting technique that uses data files to contain not only test data and expected results, but also keywords related to the application being tested." },
      { term: "Model-Based Testing", def: "Testing based on or involving models." },
      { term: "Test Harness", def: "A test environment comprised of stubs and drivers needed to execute a test." },
      { term: "Stub", def: "A skeletal or special-purpose implementation of a software component, used to develop or test a component that calls or is otherwise dependent on it." },
      { term: "Driver", def: "A software component or test tool that replaces a component that takes care of the control and/or the calling of a component or system." },
      { term: "Probe Effect", def: "The effect on the component or system by the measurement instrument when the component or system is being measured." },
      { term: "Intrusive Tool", def: "A tool whose use affects the actual behavior of the software being tested." },
      { term: "Pilot Project", def: "A small-scale trial implementation of a tool to learn more about the tool and assess its suitability." },
      { term: "Open Source Tool", def: "A software tool that is available to all potential users in source code form." },
      { term: "Custom Tool", def: "A software tool developed specifically for a set of users or customers." }
    ]
  }
];

export function generateQuestions() {
  const questions = [];
  const difficulties = ["easy", "medium", "hard"];

  for (const topicData of ISTQB_TERMS) {
    const { topic, terms } = topicData;

    for (let i = 0; i < terms.length; i++) {
      const targetTerm = terms[i];
      
      // Select 3 random incorrect terms from the same topic
      const otherTerms = terms.filter(t => t.term !== targetTerm.term);
      
      // Question Type 1 (Easy): Definition -> Term
      const incorrect1 = [...otherTerms].sort(() => 0.5 - Math.random()).slice(0, 3).map(t => t.term);
      questions.push({
        topic,
        difficulty: "easy",
        question: `What is the correct ISTQB term for: "${targetTerm.def}"?`,
        options: [targetTerm.term, ...incorrect1],
        correct: targetTerm.term,
        explanation: `Khái niệm "${targetTerm.term}" được định nghĩa chính xác trong ISTQB là: ${targetTerm.def}`
      });

      // Question Type 2 (Medium): Term -> Definition
      const incorrectDefs2 = [...otherTerms].sort(() => 0.5 - Math.random()).slice(0, 3).map(t => t.def);
      questions.push({
        topic,
        difficulty: "medium",
        question: `Which of the following best describes the term "${targetTerm.term}"?`,
        options: [targetTerm.def, ...incorrectDefs2],
        correct: targetTerm.def,
        explanation: `Theo ISTQB CTFL 4.0, "${targetTerm.term}" có ý nghĩa là: ${targetTerm.def}`
      });

      // Question Type 3 (Hard): Not characteristic / Exception
      const incorrectDefs3 = [...otherTerms].sort(() => 0.5 - Math.random()).slice(0, 3);
      questions.push({
        topic,
        difficulty: "hard",
        question: `Which of the following statements about "${targetTerm.term}" is INCORRECT?`,
        options: [
          `It is unrelated to ${incorrectDefs3[0].term}`, // False statement (Correct answer)
          `Its definition is: ${targetTerm.def}`, // True
          `It is a key concept in ${topic}`, // True
          `It differs from ${incorrectDefs3[1].term} which is defined as ${incorrectDefs3[1].def}` // True
        ],
        correct: `It is unrelated to ${incorrectDefs3[0].term}`,
        explanation: `Câu sai là phủ định mối liên hệ. "${targetTerm.term}" thực chất là: ${targetTerm.def}`
      });

      // Question Type 4 (Medium): Fill in the blank
      const incorrect4 = [...otherTerms].sort(() => 0.5 - Math.random()).slice(0, 3).map(t => t.term);
      const blankDef = targetTerm.def.replace(targetTerm.term, "_____").replace(targetTerm.term.toLowerCase(), "_____");
      questions.push({
        topic,
        difficulty: "medium",
        question: `Fill in the blank: "_____" is ${blankDef.charAt(0).toLowerCase() + blankDef.slice(1)}`,
        options: [targetTerm.term, ...incorrect4],
        correct: targetTerm.term,
        explanation: `Định nghĩa đầy đủ: ${targetTerm.term} là ${targetTerm.def}`
      });
    }
  }

  // Deduplicate and fix option length (just in case)
  return questions.filter(q => q.options.length === 4);
}
