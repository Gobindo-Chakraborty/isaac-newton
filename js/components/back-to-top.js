const backToTop = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});
