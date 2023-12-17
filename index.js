const questions = [
  {
    que: "Which programming language is used for building web pages?",
    a: "Python",
    b: "JavaScript",
    c: "Ruby",
    d: "Swift",
    correct: "b",
  },
  {
    que: "What protocol is used for secure communication over a computer network?",
    a: "HTTP",
    b: "FTP",
    c: "SSH",
    d: "SMTP",
    correct: "c",
  },
  {
    que: "What does CPU stand for in a computer system?",
    a: "Central Processing Unit",
    b: "Computer Processing Unit",
    c: "Core Processing Unit",
    d: "Centralized Processing Unit",
    correct: "a",
  },
  {
    que: "Which of the following is a relational database management system?",
    a: "MongoDB",
    b: "SQLite",
    c: "Redis",
    d: "Elasticsearch",
    correct: "b",
  },
  {
    que: "What is the process of converting source code into machine code?",
    a: "Compilation",
    b: "Interpretation",
    c: "Execution",
    d: "Debugging",
    correct: "a",
  },
  {
    que: "Which technology allows multiple virtual servers to run on a single physical server?",
    a: "Virtualization",
    b: "Containerization",
    c: "Cloud Computing",
    d: "Parallel Computing",
    correct: "a",
  },
  {
    que: "Which data structure uses Last In, First Out (LIFO) principle?",
    a: "Queue",
    b: "Stack",
    c: "Tree",
    d: "Linked List",
    correct: "b",
  },
  {
    que: "What is the primary function of an operating system?",
    a: "Manage hardware resources",
    b: "Run applications",
    c: "Connect to the internet",
    d: "Create documents",
    correct: "a",
  },
  {
    que: "Which company developed the programming language 'C'?",
    a: "Microsoft",
    b: "IBM",
    c: "Bell Labs",
    d: "Oracle",
    correct: "c",
  },
  {
    que: "What is the purpose of CSS in web development?",
    a: "Define the structure of a webpage",
    b: "Manage page layout",
    c: "Style the appearance of elements",
    d: "Handle user interactions",
    correct: "c",
  },
  {
    que: "What type of language is HTML?",
    a: "Programming",
    b: "Markup",
    c: "Scripting",
    d: "Query",
    correct: "b",
  },
  {
    que: "Which programming language is often used for data analysis and scientific computing?",
    a: "JavaScript",
    b: "Python",
    c: "Ruby",
    d: "PHP",
    correct: "b",
  },
  {
    que: "What does URL stand for?",
    a: "Universal Resource Locator",
    b: "Uniform Reference Link",
    c: "Unified Remote Language",
    d: "Universal Rendering Language",
    correct: "a",
  },
  {
    que: "Which component in a computer system temporarily stores data and instructions?",
    a: "RAM",
    b: "CPU",
    c: "Hard Drive",
    d: "Motherboard",
    correct: "a",
  },
  {
    que: "Which programming paradigm is associated with object-oriented programming?",
    a: "Functional Programming",
    b: "Procedural Programming",
    c: "Imperative Programming",
    d: "Object-Oriented Programming",
    correct: "d",
  },
  {
    que: "What is the purpose of a firewall in a network?",
    a: "Speed up internet connection",
    b: "Block unauthorized access",
    c: "Manage hardware resources",
    d: "Install new software",
    correct: "b",
  },
  {
    que: "Which data structure organizes data in a hierarchical structure with parent-child relationships?",
    a: "Queue",
    b: "Tree",
    c: "Stack",
    d: "Heap",
    correct: "b",
  },
  {
    que: "What does the acronym API stand for?",
    a: "Application Programming Interface",
    b: "Advanced Programming Interface",
    c: "Automated Program Interface",
    d: "Application Process Integration",
    correct: "a",
  },
  {
    que: "What is the file extension for a JavaScript file?",
    a: ".js",
    b: ".html",
    c: ".css",
    d: ".json",
    correct: "a",
  },
  {
    que: "Which of the following is an example of a NoSQL database?",
    a: "MySQL",
    b: "PostgreSQL",
    c: "MongoDB",
    d: "Oracle",
    correct: "c",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1})   ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3> thank You for plying the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    `;
};

loadQuestion();
