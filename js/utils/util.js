export function changeCopyRightYear() {
  const yearElement = document.querySelector(".copyright-year");
  const currentYear = new Date().getFullYear();

  if (yearElement) {
    yearElement.textContent = currentYear;
  }
}
