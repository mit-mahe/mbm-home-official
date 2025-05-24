document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		initAchievementCardsActivator();
	}
});

function initAchievementCardsActivator() {
	const isTouchDevice =
		window.matchMedia("(pointer: coarse)").matches &&
		window.matchMedia("(hover: none)").matches;

	if (!isTouchDevice) return; // Exits if not a touch device

	const achievementCards = document.querySelectorAll(".achieve-card");
	achievementCards.forEach((card) => {
		card.addEventListener("click", (event) => {
			console.log("card clicked");
			if (card.classList.contains("active-card")) {
				card.classList.remove("active-card");
				card.classList.add("inactive-card");
			} else {
				achievementCards.forEach((card2) => {
					card2.classList.remove("active-card");
					card2.classList.add("inactive-card");
				});
				card.classList.remove("inactive-card");
				card.classList.add("active-card");
			}
		});
	});
}
