document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const navMenu = document.querySelector(".nav-menu");
  const menuIcon = document.querySelector(".menu-icon");

  menuButton.addEventListener("click", function () {
    if (navMenu.classList.contains("active")) {
      // If the menu is already open, close it
      navMenu.classList.remove("active");
      menuIcon.innerHTML = "&#9776;"; // Change icon back to hamburger
    } else {
      // If the menu is closed, open it
      navMenu.classList.add("active");
      menuButton.classList.add("active");
      menuIcon.innerHTML = "&times;"; // Change icon to X
    }
  });
});
