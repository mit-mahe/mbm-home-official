document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readyState: Complete");
		initCarousel();
	}
});

function initCarousel() {
	let currentIndex = 1;
	let imageCount = 6;
	let imageContainer = document.querySelector(".image");
	let image = document.querySelectorAll(".image li");
	let images = document.querySelectorAll(".image li img"); //getting all images so they can be used to check for any click on them
	console.log(image);
	console.log(images);

	function activateImage(index) {
		for (let i = 0; i < image.length; i++) {
			image[i].classList.remove("image-active");
			image[i].classList.add("image-inactive");
		}
		image[index].classList.remove("image-inactive");
		image[index].classList.add("image-active");
		let imageListStyle = window.getComputedStyle(
			image[(index + 1) % imageCount]
		);
		let imageListMarginLeft = parseFloat(imageListStyle.marginLeft);
		console.log(imageListMarginLeft);
		let imageStyle = window.getComputedStyle(images[(index + 1) % imageCount]);
		let imageWidth = parseFloat(imageStyle.width);
		console.log(imageWidth);
		const activeImageWidth = parseFloat(
			window.getComputedStyle(image[index]).width
		);
		imageContainer.style.transform =
			"translateX(calc(50vw - " +
			(imageListMarginLeft +
				index * (imageWidth + 2 * imageListMarginLeft) +
				activeImageWidth / 2) +
			"px)";
		console.log(index);
		let transformPixels = index * imageWidth;
		console.log(transformPixels);
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % imageCount; //hehehhee smart ik
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
}
