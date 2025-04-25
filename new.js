// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 10 February 2025 02:57:50 PM (UTC+3)
// updated by Ale for PERFORMANCE

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".current-year").forEach((el) => {
    el.innerText = new Date().getFullYear();
  });

  // Don't make epileptics suffer too much
  const brrr = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? (cb) => setTimeout(cb, 1000)
    : requestAnimationFrame;

  const victoryElement = document.getElementById("victory-years");

  const date = new Date("1986-01-01");

  const tick = () => {
    const calculate = (new Date() - date) / (1000 * 60 * 60 * 24) / 365;
    victoryElement.innerText = calculate;
    brrr(tick);
  };

  tick();
});