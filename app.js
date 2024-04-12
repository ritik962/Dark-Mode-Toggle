const bodyEl = document.querySelector("body");

const inputEl = document.querySelector("input");

inputEl.addEventListener("change", (evt) => {
  if (evt.target.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
});
