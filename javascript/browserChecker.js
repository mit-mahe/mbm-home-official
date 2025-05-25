document.addEventListener("DOMContentLoaded", (event) => {
	console.log("DOM Content Loaded");
	initBrowserChecker();
});

function initBrowserChecker() {
	function isSafari() {
		return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	}
	console.log("isSafari = " + isSafari());
	const videos = document.querySelectorAll("video");

	if (isSafari()) {
		for (const video of videos) {
			for (const source of video.querySelectorAll("source")) {
				if (source.type.includes("webm")) {
					source.remove();
				}
			}
			video.load();
		}
	}
}
