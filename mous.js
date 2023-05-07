var isMoving = false;
var intervalId;

function start() {
  if (!isMoving) {
    isMoving = true;
    intervalId = setInterval(moveMouse, 2);
  }
}
 
function stop() {
  if (isMoving) {
    isMoving = false;
    clearInterval(intervalId);
  }
}


function moveMouse() {
  var randomX = Math.floor(Math.random() * window.innerWidth);
  var randomY = Math.floor(Math.random() * window.innerHeight);
  window.scrollTo(randomX, randomY);
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    start();
  }
});
