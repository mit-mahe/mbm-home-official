document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initThemeSwitcher();
	}
});

function initThemeSwitcher() {
	window.addEventListener("scroll", (event) => {
		const darkSwitch = document.querySelectorAll(".darkTheme");
		const navbarRect = top_navbar.getBoundingClientRect();
		let darkNavbar = false;

		darkSwitch.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= navbarRect.bottom && rect.bottom > navbarRect.bottom) {
				darkNavbar = true;
			}
		});

		if (darkNavbar) {
			document.documentElement.style.setProperty("--HEADER-BGCOLOR", "#344546");
			document.documentElement.style.setProperty("--HEADER-COLOR", "#f8f5ee");
		} else {
			document.documentElement.style.setProperty("--HEADER-BGCOLOR", "#f8f5ee");
			document.documentElement.style.setProperty("--HEADER-COLOR", "#344546");
		}
	});
}
