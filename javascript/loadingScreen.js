// const loaderContainer = document.getElementById("loader-container");

// if (!loaderContainer) {
// 	console.error("Loader container element not found");
// } else {
// 	let loaderElement = document.createElement("img");
// 	loaderElement.id = "loader-video";
// 	loaderElement.style.zIndex = 20000;
// 	loaderElement.src = "loadingAnim/loading.gif";

// 	loaderElement.addEventListener("load", () => {
// 		hideLoader();
// 	});

// 	function hideLoader() {
// 		if (loaderContainer) {
// 			loaderContainer.parentNode.removeChild(loaderContainer);
// 		}
// 	}

// 	loaderContainer.appendChild(loaderElement);
// }

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		document.getElementById("loading-screen").style.display = "none";
	}
});
