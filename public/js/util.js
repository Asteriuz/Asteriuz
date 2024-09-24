/* -------------------------------------------------------------------------- */
/*                                  ScrollBar                                 */
/* -------------------------------------------------------------------------- */

const body = document.querySelector("body");

window.addEventListener(
  "scroll",
  () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      body.classList.add("scroll-bottom");
    } else if (window.scrollY === 0) {
      body.classList.add("scroll-top");
    } else {
      body.classList.remove("scroll-top");
      body.classList.remove("scroll-bottom");
    }
  },
  { passive: true },
);

/* -------------------------------------------------------------------------- */
/*                                  Matrix Rain                               */
/* -------------------------------------------------------------------------- */

var canvasMatrix = document.getElementById("matrix-bg");
var ctx = canvasMatrix.getContext("2d");

//making the canvas full screen
canvasMatrix.height = window.innerHeight;
canvasMatrix.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 14;
var columns = canvasMatrix.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);

  ctx.fillStyle = "#e22f24"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > canvasMatrix.height && Math.random() > 0.975)
      drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}

setInterval(draw, 35);
