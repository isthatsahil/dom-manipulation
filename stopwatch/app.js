const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const timer = document.getElementById("timer");
const playPauseIcon = document.getElementById("play");
let intervalId = 0;
let seconds = 0;
startStopBtn.addEventListener("click", function () {
  if (playPauseIcon.getAttribute("id") === "play") {
    playPauseIcon.setAttribute("id", "pause");
    playPauseIcon.className = "fas fa-pause";
    intervalId = setInterval(() => {
      seconds++;
      timer.innerText = new Date(seconds * 1000).toISOString().slice(11, 19);
    }, 1000);
  } else {
    playPauseIcon.setAttribute("id", "play");
    playPauseIcon.className = "fas fa-play";
    clearInterval(intervalId);
  }
});

resetBtn.addEventListener("click", function () {
  if (intervalId) clearInterval(intervalId);
  playPauseIcon.setAttribute("id", "play");
  playPauseIcon.className = "fas fa-play";
  timer.innerText = "00:00:00";
  seconds = 0;
});
