document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initAnimation();
	}
});

function initAnimation() {
	// const video = document.getElementById("animation");

	// const canPlayWebMVP9 = video.canPlayType('video/webm; codecs="vp9"');

	// if (!canPlayWebMVP9) {
	// 	for (const source of video.querySelectorAll("source")) {
	// 		if (source.type.includes("webm")) {
	// 			source.remove();
	// 		}
	// 	}
	// 	video.load();
	// }
	function isSafari() {
		return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	}
	console.log("isSafari = " + isSafari());
	console.log(navigator.userAgent);

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
