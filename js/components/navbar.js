export function navToggler() {
  const togglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");

  function toggleNav() {
    togglers.forEach((toggler) => {
      toggler.addEventListener("click", () => {
        navbar.classList.toggle("nav-active");
        overlay.classList.toggle("active");
      });
    });
  }

  toggleNav();
}
