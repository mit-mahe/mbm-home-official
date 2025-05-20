document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initApp();
	}
});

function initApp() {
	console.log(animationContainer);
	console.log(animation);
	animation.onended = (event) => {
		console.log("Animation ended");
		let maxWidthQuery = window.matchMedia("(max-width: 1024px)");
		if (maxWidthQuery.matches) {
			animation.style.maxWidth = "90vw";
		} else {
			animation.style.maxWidth = "40vw";
		}
		// animation.style.display = "inline-block";
		animationContainer.classList.add("theDarkCanvas");
		animationContainer.classList.add("darkTheme");
		document.documentElement.style.setProperty("--HEADER-BGCOLOR", "#344546");
		document.documentElement.style.setProperty("--HEADER-COLOR", "#f8f5ee");
		animationContainer.classList.add("translateDown");
		animationContent.style.display = "inline-block";
		// animationContent.classList.add("slideIn");
	};
}
