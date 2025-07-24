// footer.js
window.addEventListener("DOMContentLoaded", () => {
	const isInPagesFolder = window.location.pathname.includes("/pages/");
	const prefix = isInPagesFolder ? "../" : "";

	const footerHTML = `
  <footer class="darkTheme">
    <div class="info-container">
      <div class="contactUs" id="contactUs">
        <h2 class="Titles homeTitle green-underline">Contact us</h2>
        <p class="footer-content">
          Email:
          <a href="mailto:manipalbiomachines.igem@gmail.com">manipalbiomachines.igem@gmail.com</a>
          <br /><br />
          Address: Manipal Institute of Technology, Udupi - Karkala Rd, Eshwar Nagar, Manipal,
          Karnataka, PIN code: 576104
        </p>
        <div class="socialMedia">
          <a href="https://www.instagram.com/manipalbiomachines/" target="_blank">
            <img src="${prefix}images/footer/social_media_icons/insta.png" alt="insta icon" />
          </a>
          <a href="https://www.linkedin.com/company/manipal-biomachines/posts/?feedView=all" target="_blank">
            <img src="${prefix}images/footer/social_media_icons/linkedin.png" alt="linkedin icon" />
          </a>
          <a href="https://linktr.ee/manipal_biomachines" target="_blank">
            <img src="${prefix}images/footer/social_media_icons/linktree.svg" alt="linktree icon" />
          </a>
        </div>
      </div>
      <div class="verticalLine"></div>
      <div class="sponsors">
        <h2 class="Titles homeTitle green-underline">Sponsors</h2>
        <div class="gridForSponsors">
          <img src="${prefix}images/footer/sponsor_logos/biorender.png" alt="BioRender" />
          <img src="${prefix}images/footer/sponsor_logos/IDT.png" alt="IDT" />
          <img src="${prefix}images/footer/sponsor_logos/genscript.png" alt="Genscript" />
          <img src="${prefix}images/footer/sponsor_logos/SnapGene.png" alt="SnapGene" />
          <img src="${prefix}images/footer/sponsor_logos/TWIST.png" alt="TWIST" />
          <img src="${prefix}images/footer/sponsor_logos/NewEngland.png" alt="New England BioLabs" />
          <img src="${prefix}images/footer/sponsor_logos/ManipalLOGO.png" alt="Manipal Academy of Higher Education" />
        </div>
      </div>
    </div>
    <p class="fine-print">&copy; Manipal BioMachines 2025</p>
  </footer>
  `;

	const placeholder = document.getElementById("footer-placeholder");
	if (placeholder) {
		placeholder.innerHTML = footerHTML;
	} else {
		console.warn("Footer placeholder not found.");
	}
});
