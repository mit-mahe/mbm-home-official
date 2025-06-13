document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initMenuToggleButton();
	}
});

function initMenuToggleButton() {
	const navToggle = document.querySelector(".nav-toggle-icon");
	console.log(navToggle);
	const bigDropdown = document.querySelector(".big-ddown");
	console.log(bigDropdown);
	navToggle.addEventListener("change", (event) => {
		if (navToggle.checked) {
			bigDropdown.classList.remove("big-ddown-hidden");
			bigDropdown.classList.add("big-ddown-shown");
		} else {
			bigDropdown.classList.remove("big-ddown-shown");
			bigDropdown.classList.add("big-ddown-hidden");
		}
	});
}
