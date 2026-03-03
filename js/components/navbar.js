export function navToggler() {
  const togglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const navbarList = document.querySelector(".navbar-list");
  const closeMenuBtn = document.querySelector(".close-menu-btn");

  function toggleNav() {
    togglers.forEach((toggler) => {
      toggler.addEventListener("click", () => {
        navbar.classList.toggle("nav-active");
        overlay.classList.toggle("active");
        navbarOverlay.classList.toggle("active");
        navbarList.classList.toggle("navbar-list__active");
        closeMenuBtn.classList.toggle("close-menu-btn__active");
      });
    });
  }

  toggleNav();
}

export function intersectionObserver() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function removeActive() {
    navLinks.forEach((link) => {
      link.classList.remove("is-active");
    });
  }

  function activateLink(id) {
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("is-active");
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          removeActive();
          activateLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}
