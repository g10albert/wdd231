const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menuBtn.innerHTML = "X"
  } else {
    menuBtn.innerHTML = "☰"
  }
});
