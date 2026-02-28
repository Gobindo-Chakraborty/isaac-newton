export function themeToggler() {
  const themeBtn = document.querySelector(".theme-btn");
  const themeOptions = document.querySelector(".theme-options");
  const themeBtnArrow = themeBtn.querySelector(".icon-arrow-up");

  themeBtn.addEventListener("click", (e) => {
    themeOptions.classList.toggle("open-theme-options");
    themeBtn.classList.toggle("theme-btn-active");
    themeBtnArrow.classList.toggle("rotate-theme-arrow");
  });
}
