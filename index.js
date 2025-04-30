document.getElementById("timey").textContent="Let's Tickie"
let seconds=0;
let cd=setInterval(time,1000);
function time(){
  document.getElementById("timey").textContent=seconds;
  seconds++;
}