const questions = [
  { question: "What is the formula for density?", answers: ["mass × volume", "mass ÷ volume", "volume ÷ mass", "mass + volume"], correct: 1 },
  { question: "What is the unit of density?", answers: ["kg", "m³", "kg/m³", "N"], correct: 2 },
  { question: "What is pressure?", answers: ["Force per unit area", "Mass per unit volume", "Energy transfer", "Speed over time"], correct: 0 },
  { question: "What is the unit of pressure?", answers: ["Newton", "Pascal", "Joule", "Watt"], correct: 1 },
  { question: "What happens when you rub a balloon on your hair?", answers: ["It loses electrons", "It gains electrons", "Nothing changes", "It heats up"], correct: 1 },
  { question: "What causes static electricity?", answers: ["Moving protons", "Transfer of electrons", "Heat energy", "Magnetic force"], correct: 1 },
  { question: "Which wave has the longest wavelength?", answers: ["Gamma rays", "X-rays", "Radio waves", "Ultraviolet"], correct: 2 },
  { question: "Which wave has the highest frequency?", answers: ["Radio waves", "Microwaves", "Infrared", "Gamma rays"], correct: 3 },
  { question: "What type of wave is light?", answers: ["Sound wave", "Mechanical wave", "Electromagnetic wave", "Water wave"], correct: 2 },
  { question: "What does a magnet attract?", answers: ["Plastic", "Wood", "Iron", "Glass"], correct: 2 },
  { question: "What are the poles of a magnet?", answers: ["Top and bottom", "Left and right", "North and South", "Positive and negative"], correct: 2 },
  { question: "What happens when like poles meet?", answers: ["They attract", "They repel", "Nothing happens", "They explode"], correct: 1 },
  { question: "What happens when opposite poles meet?", answers: ["They repel", "They attract", "They cancel out", "Nothing happens"], correct: 1 },
  { question: "What is speed?", answers: ["Distance ÷ time", "Time ÷ distance", "Force × mass", "Energy ÷ time"], correct: 0 },
  { question: "What is the unit of speed?", answers: ["m/s", "kg", "N", "J"], correct: 0 },
  { question: "What is acceleration?", answers: ["Change in speed", "Constant speed", "Distance travelled", "Force applied"], correct: 0 },
  { question: "What is the unit of force?", answers: ["Joule", "Newton", "Watt", "Pascal"], correct: 1 },
  { question: "What does gravity do?", answers: ["Push objects apart", "Pull objects together", "Stop motion", "Create light"], correct: 1 },
  { question: "Which material is a good conductor?", answers: ["Plastic", "Wood", "Copper", "Rubber"], correct: 2 },
  { question: "What is kinetic energy?", answers: ["Energy stored in objects", "Energy of movement", "Heat energy", "Sound energy"], correct: 1 }
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

  questionEl.innerText = q.question;
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
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.innerHTML = `🎉 Game Complete!<br>Score: ${score}/${questions.length}`;
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();
