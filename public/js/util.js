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
