"use strict";

const openClass = "is-open";
const btn = document.getElementsByClassName("js-accordion");

for (var i = btn.length - 1; i >= 0; i--) {
  btnAction(btn[i]);
}
// is-openを付ける
function btnAction(btnDOM) {
  btnDOM.addEventListener("click", function () {
    this.classList.toggle(openClass);
  });
}
