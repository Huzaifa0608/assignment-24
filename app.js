let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timers;
    let duration = 0;
    let remainingSeconds = 0;

    function updateTimer() {
      remainingSeconds--;
      if (remainingSeconds < 0) {
        clearInterval(timers);
        alert("Timer has ended!");
        return;
      }

      hours = Math.floor(remainingSeconds / 3600);
      minutes = Math.floor((remainingSeconds % 3600) / 60);
      seconds = remainingSeconds % 60;

      const timeString = `${(hours < 10 ? "0" : "")}${hours}:${(minutes < 10 ? "0" : "")}${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
      document.getElementById("timer").textContent = timeString;
    }

    function startTimer() {
      stopTimer();
      duration = parseInt(document.getElementById("durationInput").value);
      if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration in seconds.");
        return;
      }

      remainingSeconds = duration;
      timers = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
      clearInterval(timers);
    }

    function resetTimer() {
      clearInterval(timers);
      document.getElementById("durationInput").value = "";
      seconds = 0;
      minutes = 0;
      hours = 0;
      remainingSeconds = 0;
      document.getElementById("timer").textContent = "00:00:00";
    }


    var hour = 0
var min = 0;
var sec = 0
var secVal = document.getElementById("sec")
var minVal = document.getElementById("min")
var hourVal = document.getElementById("hour")

var interval;

function renderVal(){
    hourVal.innerHTML = hour
    minVal.innerHTML = min 
    secVal.innerHTML = sec 
}
function start(){
    
    sec++
    if(sec == 60){
        min++
        sec = 0 
        if(min == 60){
            hour++
            min = 0
        }
    }
   renderVal()

  
}
function timer(){
    interval = setInterval(function(){
        start()
    },1000)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    sec = 0 
    min = 0
    hour = 0
    renderVal()
    stop()
}




