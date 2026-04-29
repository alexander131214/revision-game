const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "What is 10 / 2?",
    answers: ["2", "3", "5", "8"],
    correct: 2
  },
  {
    question: "5 x 6 = ?",
    answers: ["11", "30", "25", "20"],
    correct: 1
  },
  {
    question: "Which is a planet?",
    answers: ["Moon", "Sun", "Mars", "Star"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  answered = false;
  nextBtn.style.display = "none";

  let q = questions[currentQuestion];
  questionEl.innerText = q.question;
  progressEl.innerText = `Question ${currentQuestion + 1} / ${questions.length}`;

  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("answer-btn");

    btn.onclick = () => selectAnswer(btn, index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  if (answered) return;
  answered = true;

  let q = questions[currentQuestion];

  if (index === q.correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  scoreEl.innerText = `Score: ${score}`;
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinal();
  }
};

function showFinal() {
  questionEl.innerText = "Game Over 🎉";
  answersEl.innerHTML = "";
  progressEl.innerText = "";
  nextBtn.style.display = "none";

  scoreEl.innerText = `Final Score: ${score} / ${questions.length}`;
}

loadQuestion();
