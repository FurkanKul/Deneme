function toggleMenu() {
  const sideMenu = document.getElementById("side-menu");
  if (sideMenu.classList.contains("closed")) {
      sideMenu.classList.remove("closed");
      sideMenu.classList.add("open");
  } else {
      sideMenu.classList.remove("open");
      sideMenu.classList.add("closed");
  }
}
