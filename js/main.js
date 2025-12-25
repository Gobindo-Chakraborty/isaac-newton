const page = document.body.dataset.page;

if (page === "index") {
  import("./pages/index.js");
} else if (page === "dive-deeper") {
  import("./pages/dive-deeper.js");
}
