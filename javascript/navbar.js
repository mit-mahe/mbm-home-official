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
            <li><a href="${prefix}pages/phytclub_2025.html">2025</a></li>
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
        <li style="width: fit-content; justify-content: center; align-items: center; margin: 0 auto;">
          <div style="position: relative">
              <img
                src="../images/card-game-images/green-tortoise.png"
                alt="card"width: fit-content; 
                class="biobattle-card biobattle-card1"
              /><img
                src="../images/card-game-images/red-tiger.png"
                alt="card"
                class="biobattle-card biobattle-card2"
              />
          </div>
            <a
          href="https://biobattle.manipalbiomachinesmahe.com/"
          target="_blank"
          ><div>
           
            <p style="margin-left: 1.5rem; font-family: Alata;">BioBattle</p>
          </div></a
        ></li>
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
