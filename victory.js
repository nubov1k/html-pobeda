// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 10 February 2025 02:57:50 PM (UTC+3)

document.addEventListener('DOMContentLoaded', () => {
  const victoryElement = document.getElementById("victory-years");
  const date = new Date("1986-01-01");

  setInterval(() => {
    const calculate = (new Date() - date) / (1000 * 60 * 60 * 24) / 365;
    victoryElement.innerText = calculate;
  }, 100);
});