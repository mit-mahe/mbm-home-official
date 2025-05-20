document.addEventListener("readystatechange", () => {
	if (event.target.readyState === "complete") {
		initThemeSwitcher();
	}
});

function initThemeSwitcher() {
	const header = document.querySelector(".header");
	const headerElements = document.querySelectorAll(".darkNavElements");
	const dropDownElements = document.querySelectorAll(".ddown");
	const whiteSwitch = document.querySelectorAll(".whiteSwitch");
	const windowHeight = window.innerHeight;

	whiteSwitch.forEach((section) => {
		window.addEventListener("scroll", (event) => {
			const rect = section.getBoundingClientRect();

			if (rect.top > windowHeight / 8 || rect.bottom <= windowHeight / 8) {
				console.log("Dark mode?");
				header.classList.add("dark-theme");
				headerElements.forEach((item) =>
					item.classList.add("brightNavElements")
				);
				headerElements.forEach((item) =>
					item.classList.add("brightNavElements:hover")
				);
				dropDownElements.forEach((cell) => cell.classList.add("ddownDark"));
			} else {
				console.log("Light mode?");
				header.classList.remove("dark-theme");
				headerElements.forEach((item) =>
					item.classList.remove("brightNavElements")
				);
				headerElements.forEach((item) =>
					item.classList.remove("brightNavElements:hover")
				);
				dropDownElements.forEach((cell) => cell.classList.remove("ddownDark"));
			}
		});
	});
}
