document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initAlumniCardsActivator();
	}
});

function isTouchDevice() {
	return (
		window.matchMedia("(pointer: coarse)").matches &&
		window.matchMedia("(hover: none)").matches
	);
}

function initAlumniCardsActivator() {
	const alumniContainers = document.querySelectorAll(".alumni-card-container");
	alumniContainers.forEach((container) => {
		container.addEventListener("click", (event) => {
			console.log("card clicked");
			if (!isTouchDevice()) {
				console.log("Not touch device");
				return;
			} else {
				console.log("Touch device");
			}
			if (container.classList.contains("active-card")) {
				container.classList.remove("active-card");
				container.classList.add("inactive-card");
			} else {
				alumniContainers.forEach((container2) => {
					container2.classList.remove("active-card");
					container2.classList.add("inactive-card");
				});
				container.classList.remove("inactive-card");
				container.classList.add("active-card");
			}
		});
	});
}
