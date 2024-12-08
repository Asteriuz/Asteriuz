/* -------------------------------------------------------------------------- */
/*                                  ScrollBar                                 */
/* -------------------------------------------------------------------------- */

const body = document.querySelector("body");

globalThis.addEventListener(
  "scroll",
  () => {
    if (globalThis.innerHeight + globalThis.scrollY >= document.body.offsetHeight) {
      body.classList.add("scroll-bottom");
    } else if (globalThis.scrollY === 0) {
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

// Function to initialize the canvas and drops
function initializeCanvas() {
  // Making the canvas full screen
  canvasMatrix.height = globalThis.innerHeight;
  canvasMatrix.width = globalThis.innerWidth;

  // Calculate number of columns for the rain
  columns = canvasMatrix.width / font_size;

  // Reinitialize the drops array
  drops = [];
  for (var x = 0; x < columns; x++) {
    drops[x] = 1;
  }
}

// Chinese characters - taken from the unicode charset
var matrix =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
// Converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 14;
var columns; // Number of columns for the rain
var drops = []; // Array of drops

// Initialize canvas and drops
initializeCanvas();

// Drawing the characters
function draw() {
  // Black BG for the canvas
  // Translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);

  ctx.fillStyle = "#e22f24"; // Red text
  ctx.font = font_size + "px arial";
  // Looping over drops
  for (var i = 0; i < drops.length; i++) {
    // A random character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    // x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    // Sending the drop back to the top randomly after it has crossed the screen
    // Adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > canvasMatrix.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Incrementing Y coordinate
    drops[i]++;
  }
}

// Redraw on browser resize
window.addEventListener("resize", () => {
  initializeCanvas();
});

// Run the animation
setInterval(draw, 35);
