import "../components/header.js";
import "../components/back-to-top.js";
import { navToggler } from "../components/navbar.js";
import {
  themeBtnToggler,
  applyTheme,
  activeThemeOption,
} from "../components/theme.js";
import { changeCopyRightYear } from "../utils/util.js";
import "../components/falling-apple.js";

navToggler();
themeBtnToggler();
applyTheme();
activeThemeOption();
changeCopyRightYear();
