document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		initCarousel();
	}
});

function initCarousel() {
	let currentIndex = 1;
	const imageContainer = document.querySelector(".image");
	const image = document.querySelectorAll(".image li");
	const imageCount = image.length;
	const images = document.querySelectorAll(".image li img"); //getting all images so they can be used to check for any click on them
	console.log(image);
	console.log(images);

	function activateImage(index) {
		for (let i = 0; i < image.length; i++) {
			image[i].classList.remove("image-active");
			image[i].classList.add("image-inactive");
		}
		image[index].classList.remove("image-inactive");
		image[index].classList.add("image-active");

		const imageListStyle = window.getComputedStyle(
			image[(index + 1) % imageCount]
		);
		const imageListMarginLeft = parseFloat(imageListStyle.marginLeft);
		const imageStyle = window.getComputedStyle(
			images[(index + 1) % imageCount]
		);
		const imageWidth = parseFloat(imageStyle.width);

		const activeImageWidth = parseFloat(
			window.getComputedStyle(image[index]).width
		);

		imageContainer.style.transform =
			"translateX(calc(50vw - " +
			(imageListMarginLeft +
				index * (imageWidth + 2 * imageListMarginLeft) +
				activeImageWidth / 2) +
			"px)";
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % imageCount; //hehehhee smart ik
		activateImage(currentIndex);
	}

	function previousImage() {
		currentIndex = (currentIndex + imageCount - 1) % imageCount; //hehehhee smart ik
		activateImage(currentIndex);
	}

	nextImage();

	let autoplay = setInterval(nextImage, 4000); // didn't know auto play was this simple

	images.forEach(function (singleImg, index) {
		singleImg.addEventListener("click", function () {
			currentIndex = index; //updating the index of the image where click happened
			activateImage(currentIndex); //activating that one lul

			clearInterval(autoplay); //just to reset timer so it wont abruptly activate next image once general timer runs down
			autoplay = setInterval(nextImage, 4000);
		});
	});

	function onSwipe(element, callback) {
		var startX, startY, endX, endY;
		var minDistance = 50; // Minimum distance for swipe detection

		element.addEventListener("touchstart", function (event) {
			startX = event.touches[0].clientX;
			startY = event.touches[0].clientY;
		});

		element.addEventListener("touchend", function (event) {
			endX = event.changedTouches[0].clientX;
			endY = event.changedTouches[0].clientY;

			var deltaX = Math.abs(endX - startX);
			var deltaY = Math.abs(endY - startY);

			if (deltaX > minDistance) {
				if (deltaX > deltaY) {
					// Horizontal swipe
					if (endX > startX) {
						// Right swipe
						callback("right");
					} else {
						// Left swipe
						callback("left");
					}
				}
			}
		});
	}

	onSwipe(imageContainer, function (direction) {
		if (direction === "left") {
			nextImage();
			clearInterval(autoplay);
			autoplay = setInterval(nextImage, 4000);
		} else if (direction === "right") {
			nextImage();
			clearInterval(autoplay);
			autoplay = setInterval(nextImage, 4000);
		}
	});
}
