document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initApp();
	}
});

function initApp() {
	console.log(animationContainer);
	console.log(animation);
	const mediaQuery = window.matchMedia("(max-width: 1024px)");
	animation.onended = (event) => {
		console.log("Animation ended");
		// animation.style.display = "inline-block";
		animationContainer.classList.add("theDarkCanvas");
		animationContainer.classList.add("darkTheme");
		document.documentElement.style.setProperty("--HEADER-BGCOLOR", "#344546");
		document.documentElement.style.setProperty("--HEADER-COLOR", "#f8f5ee");
		animationContent.style.display = "inline-block";
		if (!mediaQuery.matches) animationContent.classList.add("scaleUp");
		animationContent.classList.add("increaseFontSize");
		animationContainer.classList.add("animationEnded");
	};
}
