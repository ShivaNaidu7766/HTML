// Get the ball and grid elements
var square = document.getElementById("ball");
var grid = document.getElementById("grid");
// Set the initial position and velocity of the square
var x = 0;
var y = 0;
var xVelocity = 1;
var yVelocity = 1;
// Animate the ball
setInterval(function() {
  // Update the position of the balls
  x += xVelocity;
  y += yVelocity;
  square.style.left = x + "px";
  square.style.top = y + "px";
  // Check for collision with the edges of the grid
  if (x + 50 > grid.offsetWidth || x < 0) {
    xVelocity = -xVelocity;
  }
  if (y + 50 > grid.offsetHeight || y < 0) {
    yVelocity = -yVelocity;
  }
}, 10);