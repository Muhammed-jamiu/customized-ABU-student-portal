// document.getElementById("btn").onclick = function () {
//   showMe.style.display = "block";
// };

document.getElementById("clickMe").onclick = function shownGame() {
  showMe.style.display = "block";

  document.getElementById("clickMe").ondblclick = function () {
    showMe.style.display = "none";
  };
};
