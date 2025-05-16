// Navbar Toggle
const navbarToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".nav_links");
const navbarIcon = navbarToggle.querySelector("i");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

    // Toggle icon
    if (navbarMenu.classList.contains("active")) {
        navbarIcon.classList.remove("fa-bars");
        navbarIcon.classList.add("fa-times");
    } else {
        navbarIcon.classList.remove("fa-times");
        navbarIcon.classList.add("fa-bars");
    }
});