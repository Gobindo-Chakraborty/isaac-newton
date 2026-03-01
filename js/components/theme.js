export function themeBtnToggler() {
  const themeBtn = document.querySelector(".theme-btn");
  const themeOptions = document.querySelector(".theme-options");
  const themeBtnArrow = themeBtn.querySelector(".icon-arrow-up");

  themeBtn.addEventListener("click", () => {
    themeOptions.classList.toggle("open-theme-options");
    themeBtn.classList.toggle("theme-btn-active");
    themeBtnArrow.classList.toggle("rotate-theme-arrow");
  });
}

export function applyTheme() {
  const buttons = document.querySelectorAll("[data-theme]");
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

  function setTheme(theme) {
    if (theme === "auto") {
      const isLight = systemTheme.matches;
      root.setAttribute("data-theme", isLight ? "light" : "dark");
    } else {
      root.setAttribute("data-theme", theme);
    }
    localStorage.setItem("isaac-newton-theme", theme);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTheme(btn.dataset.theme);
    });
  });

  const savedTheme = localStorage.getItem("isaac-newton-theme") || "dark";
  setTheme(savedTheme);

  systemTheme.addEventListener("change", () => {
    if (localStorage.getItem("isaac-newton-theme") === "auto") {
      setTheme("auto");
    }
  });
}

export function activeThemeOption() {
  const buttonsContainer = document.querySelector(".theme-options");
  const buttons = buttonsContainer.querySelectorAll(".theme-option");

  function matchThemeOption() {
    const currentTheme = localStorage.getItem("isaac-newton-theme") || "dark";

    buttons.forEach((btn) => {
      if (btn.dataset.theme === currentTheme) {
        btn.classList.add("theme-option-active");
      } else {
        btn.classList.remove("theme-option-active");
      }
    });
  }

  matchThemeOption();

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      matchThemeOption();
    });
  });
}
