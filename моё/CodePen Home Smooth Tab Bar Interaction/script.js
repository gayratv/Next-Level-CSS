/*
 * Copyright (c) 2021. Write by Gayrat
 */

// By @AbubakerSaeed96 (Twitter)
// ===================

// Inspiration:
// Taras Migulko's dribbble shot: https://dribbble.com/shots/6798414
// Aaron Iker's codepen pen: https://codepen.io/aaroniker/pen/bGbBQaR

// Thank You For Viewing!
// Say 👋🏻 or hire me 👉🏻 abubaker.saeed.1996@gmail.com
// ================================================================

// Helpers
// =======
const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

// Main
// ====
const t = $("#tab");
const ics = $$(".icon");
const c = $(".circle");

let s = {
  animating: false,
  animated: true,
};

// On Load
setTimeout(() => {
  ics[1].removeAttribute("style");
  ics[2].removeAttribute("style");
  c.removeAttribute("style");
  c.setAttribute("data-animating", "false");
}, 2000);

// On Event
ics.forEach((i, index) => {
  i.addEventListener("click", ({ target }) => {
    if (s.animated === true && index != c.getAttribute("data-active")) {
      t.style.setProperty("--x", target.getAttribute("data-x") * 101 + "px");

      $(".active").classList.remove("active");
      i.classList.add("active");

      c.setAttribute("data-animating", "true");
      s.animating = true;
      s.animated = false;

      setTimeout(() => {
        c.setAttribute("data-active", index);
        c.setAttribute("data-animating", "false");
        s.animating = false;
        s.animated = true;
      }, 2000);
    }
  });
});

// Professional Abubaker ;P
// =====================
const twitter = $(".abs-twitter");
window.addEventListener(
  "mousemove",
  () => twitter.classList.add("abs-twitter--show"),
  { once: true }
);