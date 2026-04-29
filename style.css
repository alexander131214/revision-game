body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: white;
  overflow-x: hidden;
}

/* Floating background glow */
body::before {
  content: "";
  position: fixed;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #00f7ff55, transparent);
  top: -200px;
  left: -200px;
  filter: blur(100px);
  z-index: -1;
}

.app {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #00f7ff;
  text-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff;
}

.tagline {
  opacity: 0.7;
}

/* Glass card */
.quiz-container {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.1);
}

/* Top bar */
.top-bar {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.8;
}

/* Question */
#question {
  margin-top: 15px;
  transition: all 0.4s ease;
}

/* Answers */
.answers {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

/* Neon buttons */
.answer-btn {
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: rgba(0,0,0,0.6);
  color: #00f7ff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Glow hover */
.answer-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #00f7ff;
}

/* Ripple effect */
.answer-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  background: rgba(0,247,255,0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  transition: width 0.4s ease, height 0.4s ease;
}

.answer-btn:active::after {
  width: 200px;
  height: 200px;
}

/* Correct / wrong */
.correct {
  background: #00ff88 !important;
  color: black;
  box-shadow: 0 0 20px #00ff88;
}

.wrong {
  background: #ff3b3b !important;
  color: white;
  box-shadow: 0 0 20px #ff3b3b;
}

/* Next button */
.next-btn {
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #00f7ff, #00ff88);
  color: black;
  font-weight: bold;
  cursor: pointer;
  display: none;
  transition: 0.3s;
}

.next-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 0 20px #00f7ff;
}

/* Fade animation */
.fade-in {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {opacity: 0; transform: translateY(10px);}
  to {opacity: 1; transform: translateY(0);}
}
