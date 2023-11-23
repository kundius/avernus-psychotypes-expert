import "./forms";
import "./modals";
import "./scrolls";
import "./accordion";

const removeFocusableListener = () => {
  document.querySelector("body").classList.remove("page-focusable");
  document.removeEventListener("click", removeFocusableListener);
};

document.addEventListener(
  "keyup",
  function (e) {
    if (e.keyCode === 9) {
      document.querySelector("body").classList.add("page-focusable");
      document.addEventListener("click", removeFocusableListener);
    }
  },
  false
);
