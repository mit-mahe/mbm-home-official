// Navbar Toggle

function toggleMenu() {
    const navOverlay = document.getElementById('navOverlay');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('menuCloseIcon');

    // Toggle the menu
    navOverlay.classList.toggle('show');
    
    // Toggle icons
    if (navOverlay.classList.contains('show')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = ''; // can scroll
    }
}

    // Back to hamburger icon
document.querySelectorAll('#navOverlay a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navOverlay').classList.remove('show');
        document.getElementById('hamburgerIcon').style.display = 'block';
        document.getElementById('menuCloseIcon').style.display = 'none';
        document.body.style.overflow = '';
    });
});
