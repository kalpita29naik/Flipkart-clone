var modal = document.getElementById("myModal");

var btn = document.getElementById("learn-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const showMoreButton = document.querySelector(".show-more");
  const hiddenItems = document.querySelectorAll(".list .hidden");

  showMoreButton.addEventListener("click", function () {
    hiddenItems.forEach((item) => item.classList.remove("hidden"));
    this.style.display = "none";
  });
});

// know more modal
var modal3 = document.getElementById("know-more-modal");

var btn3 = document.getElementById("know-more-btn");

var span = document.getElementsByClassName("close")[1];

btn3.onclick = function () {
  modal3.style.display = "block";
};

span.onclick = function () {
  modal3.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
