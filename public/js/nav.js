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

// /* -------------------------------------------------------------------------- */
// /*                                 Drawer Menu                                */
// /* -------------------------------------------------------------------------- */
// let drawerOpenIcon = document.getElementById("drawer-open-icon");
// let drawerCloseIcon = document.getElementById("drawer-close-icon");

// document.addEventListener("click", function (e) {
//   if (drawerToggle.checked) {
//     drawerOpenIcon.style.display = "none";
//     drawerCloseIcon.style.display = "block";
//   } else {
//     drawerOpenIcon.style.display = "block";
//     drawerCloseIcon.style.display = "none";
//   }
// });

// let drawerButton = document.getElementsByClassName("drawer-button");

// for (let i = 0; i < drawerButton.length; i++) {
//   drawerButton[i].addEventListener("click", function () {
//     drawerToggle.checked = false;
//   });
// }
