document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('ReadyButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('ReadyLight').style.backgroundColor = "Yellow";
}
function illuminateGreen() {
    clearLights();
    document.getElementById('goLight').style.backgroundColor = "green";
  }

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('ReadyLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}