// navbar.js

window.addEventListener("DOMContentLoaded", () => {
	const isInSubfolder = window.location.pathname.includes("/pages/");
	const prefix = isInSubfolder ? "../" : "";

	const navbarHTML = `
  <div id="loading-screen">
    <div id="loader"></div>
  </div>
  <header>
    <nav aria-label="primary-nav" id="top_navbar">
      <div class="nav-toggle-container">
        <input class="nav-toggle-icon" id="nav-menu-toggle" type="checkbox" title="Nav Toggle" />
      </div>
      <ul class="big-ddown">
        <li><a href="${prefix}pages/team.html">Team</a></li>
        <li class="has-ddown" tabindex="0">
          <a>Projects &#x25BE;</a>
          <ul class="ddown">
            <li><a href="${prefix}pages/caapi_2024.html">2024</a></li>
            <li><a href="${prefix}pages/carbanel_2023.html">2023</a></li>
            <li><a href="${prefix}pages/ampifin_2022.html">2022</a></li>
            <li><a href="${prefix}pages/celltinel_2021.html">2021</a></li>
            <li><a href="${prefix}pages/breakingBond_2020.html">2020</a></li>
          </ul>
        </li>
        <li><a href="${prefix}pages/research.html">Research</a></li>
        <li><a href="${prefix}pages/achievements.html">Achievements</a></li>
        <li><a href="${prefix}pages/alumni.html">Alumni</a></li>
      </ul>
    </nav>
  </header>
  <a href="${prefix}">
    <img src="${prefix}images/LOGO_min.png" class="logo" />
  </a>
  `;

	const placeholder = document.getElementById("navbar-placeholder");
	if (placeholder) {
		placeholder.innerHTML = navbarHTML;
	} else {
		console.warn("Navbar placeholder not found.");
	}
});
