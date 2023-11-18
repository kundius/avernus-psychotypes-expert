import { throttle } from "throttle-debounce";

const scrollup = document.querySelector(".ui-scrollup");
const scrollHandler = throttle(10, () => {
  if (window.scrollY > 400) {
    scrollup.classList.add("ui-scrollup_fixed");
  } else {
    scrollup.classList.remove("ui-scrollup_fixed");
  }
});

window.addEventListener("scroll", scrollHandler);

const scrolls = document.querySelectorAll("[data-scroll]") || [];
scrolls.forEach((scroll) =>
  scroll.addEventListener("click", (e) => {
    e.preventDefault();

    let offset = 0;
    let top = 0;
    let left = 0;
    if (scroll.dataset.scroll) {
      let target = document.querySelector(scroll.dataset.scroll);
      if (target) {
        top = target.offsetTop - offset;
      }
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: top,
      },
      2000
    );
  })
);
