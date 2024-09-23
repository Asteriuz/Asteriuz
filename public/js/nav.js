// /* -------------------------------------------------------------------------- */
// /*                              Scroll Functions                              */
// /* -------------------------------------------------------------------------- */

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 101) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
    setTimeout(() => {
      scrollProgress.style.opacity = 1;
    }, 10);
  } else {
    scrollProgress.style.opacity = 0;
    setTimeout(() => {
      if (scrollProgress.style.opacity == 0) {
        scrollProgress.style.display = "none";
      }
    }, 500);
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#f54141 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

let prevScrollpos = window.scrollY;

window.onscroll = function () {
  calcScrollValue();
  //   hideNav();
};

window.onload = calcScrollValue;

/* -------------------------------------------------------------------------- */
/*                                 Drawer Menu                                */
/* -------------------------------------------------------------------------- */
let drawerButton = document.getElementById("drawer-button");
let drawerOpenIcon = document.getElementById("drawer-open-icon");
let drawerCloseIcon = document.getElementById("drawer-close-icon");
let overlay = document.getElementById("overlay");
let nav = document.getElementById("nav");

function toggleButtonIcons() {
  drawerOpenIcon.classList.toggle("hidden");
  drawerCloseIcon.classList.toggle("hidden");
}

drawerButton.addEventListener("click", () => {
  nav.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
  toggleButtonIcons();
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  nav.classList.add("-translate-x-full");
  drawerOpenIcon.classList.remove("hidden");
  drawerCloseIcon.classList.add("hidden");
});

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.add("hidden");
    nav.classList.add("-translate-x-full");
    drawerOpenIcon.classList.remove("hidden");
    drawerCloseIcon.classList.add("hidden");
  });
});
