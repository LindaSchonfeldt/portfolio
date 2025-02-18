document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button")
  const navMenu = document.querySelector(".nav-menu")
  const menuIcon = document.querySelector(".menu-icon")

  menuButton.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active")
    menuButton.classList.toggle("active")
    menuIcon.textContent = isOpen ? "✖" : "☰" // Använd Unicode-symboler
    menuButton.setAttribute("aria-expanded", isOpen)
  })

  document.addEventListener("click", function (event) {
    if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active")
      menuButton.classList.remove("active")
      menuIcon.textContent = "☰"
      menuButton.setAttribute("aria-expanded", "false")
    }
  })
})