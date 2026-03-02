import "../components/header.js";
import { navToggler, intersectionObserver } from "../components/navbar.js";
import {
  themeBtnToggler,
  applyTheme,
  activeThemeOption,
} from "../components/theme.js";

intersectionObserver();
navToggler();
themeBtnToggler();
applyTheme();
activeThemeOption();
