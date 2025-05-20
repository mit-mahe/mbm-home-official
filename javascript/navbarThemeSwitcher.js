document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initThemeSwitcher();
	}
});

function initThemeSwitcher() {
	const header = document.querySelector(".header");
	const headerElements = document.querySelectorAll(".darkNavElements");
	const dropDownElements = document.querySelectorAll(".ddown");
	const windowHeight = window.innerHeight;

	window.addEventListener("scroll", (event) => {
		const darkSwitch = document.querySelectorAll(".darkTheme");
		let darkNavbar = false;
		darkSwitch.forEach((section) => {
			const rect = section.getBoundingClientRect();

			if (rect.top <= windowHeight / 12 && rect.bottom > windowHeight / 12) {
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
