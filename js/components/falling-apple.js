function createFallingApple() {
  const apple = document.createElement("img");
  apple.src = "./assets/images/apple.png";
  apple.classList.add("falling-apple");

  apple.style.left = `${Math.random() * window.innerWidth}px`;

  document.body.appendChild(apple);

  setTimeout(() => {
    apple.remove();
  }, 2500);
}

createFallingApple();

document.querySelectorAll("body > *").forEach((element) => {
  element.addEventListener("click", createFallingApple);
});
