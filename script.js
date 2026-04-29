const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Capital of Japan?",
    answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    correct: 1
  },
  {
    question: "What is 9 x 3?",
    answers: ["27", "21", "18", "30"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let locked = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  locked = false;
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];

  // Fade out
  questionEl.style.opacity = 0;

  setTimeout(() => {
    questionEl.innerText = q.question;
    questionEl.style.opacity = 1;
    questionEl.classList.add("fade-in");

    progressEl.innerText = `Q ${currentQuestion + 1}/${questions.length}`;
    scoreEl.innerText = `Score: ${score}`;

    answersEl.innerHTML = "";

    q.answers.forEach((ans, i) => {
      const btn = document.createElement("button");
      btn.innerText = ans;
      btn.classList.add("answer-btn");

      btn.onclick = () => selectAnswer(btn, i);
      answersEl.appendChild(btn);
    });

  }, 300);
}

function selectAnswer(button, index) {
  if (locked) return;
  locked = true;

  const correct = questions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correct) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
  });

  if (index === correct) {
    score++;
  }

  scoreEl.innerText = `Score: ${score}`;

  // Delay before showing next button
  setTimeout(() => {
    nextBtn.style.display = "block";
  }, 800);
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
  answersEl.innerHTML = "";

  questionEl.innerHTML = `
    🎉 Game Complete!<br><br>
    <span style="font-size: 24px;">Score: ${score}/${questions.length}</span>
  `;

  questionEl.style.textAlign = "center";
  nextBtn.style.display = "none";

  // Glow effect on finish
  questionEl.style.textShadow = "0 0 20px #00f7ff";
}

loadQuestion();
