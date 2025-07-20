document.addEventListener("DOMContentLoaded", () => {
	const galleryItems = document.querySelectorAll(".gallery-item");

	const images = Array.from(galleryItems).map(item => ({
		src: item.querySelector("img").getAttribute("src"),
		caption: item.querySelector("figcaption")?.textContent || ""
	}));

	const lightbox = document.createElement("div");
	lightbox.id = "lightbox";
	lightbox.classList.add("hidden");
	lightbox.innerHTML = `
		<span id="closeBtn">&times;</span>
		<img id="lightbox-img" alt="image" />
		<div id="lightbox-caption"></div>
		<span id="prevBtn">&#10094;</span>
		<span id="nextBtn">&#10095;</span>
	`;
	document.body.appendChild(lightbox);

	const lightboxImg = document.getElementById("lightbox-img");
	const lightboxCaption = document.getElementById("lightbox-caption");
	const closeBtn = document.getElementById("closeBtn");
	const nextBtn = document.getElementById("nextBtn");
	const prevBtn = document.getElementById("prevBtn");

	let currentIndex = 0;
	function showLightbox(index) {
		currentIndex = index;
		lightboxImg.src = images[index].src;
		lightboxCaption.textContent = images[index].caption;
		lightbox.classList.remove("hidden");
	}

	function closeLightbox() {
		lightbox.classList.add("hidden");
	}

	function showNext() {
		currentIndex = (currentIndex + 1) % images.length;
		showLightbox(currentIndex);
	}

	function showPrev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		showLightbox(currentIndex);
	}

	galleryItems.forEach((item, index) => {
		item.addEventListener("click", () => showLightbox(index));
	});

	closeBtn.addEventListener("click", closeLightbox);
	nextBtn.addEventListener("click", showNext);
	prevBtn.addEventListener("click", showPrev);

	// keyboard navigation
	document.addEventListener("keydown", e => {
		if (e.key === "Escape") closeLightbox();
		else if (e.key === "ArrowRight") showNext();
		else if (e.key === "ArrowLeft") showPrev();
	});
});
