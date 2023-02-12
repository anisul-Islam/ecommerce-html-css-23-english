const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  if (navMenu.className === "hidden") {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
});
