document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.querySelector(".anim");
	const context = canvas.getContext("2d");

	const pinSpacer = document.querySelector(".pin-spacer");
	const outerDiv = document.querySelector(".theCanvas");

	const header = document.querySelector(".header");
	const headerElements = document.querySelectorAll(".darkNavElements");
	const dropDownElements = document.querySelectorAll(".ddown");

	const allcontent = document.querySelectorAll(".projectPageDarkBG");
	const bottomContent = document.querySelector(".projectPageWhiteBG");

	const whiteSwitch = document.querySelector(".aSwitch");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight; //general practice apparently

	const basePath = "ampifin_anim/png_0";
	const numberOfImages = 43; //change depending on the video
	const imagePaths = [];

	const renderingWidth = 60;
	const renderingHeight = 120;

	function vwToPx(vw) {
		const px = (vw / 100) * window.innerWidth;
		return px;
	}

	function vhToPx(vh) {
		const px = (vh / 100) * window.innerHeight;
		return px;
	}

	const renderingWidthRES = vwToPx(renderingWidth);
	const renderingHeightRES = vhToPx(renderingHeight);

	function formatNumber(number, width) {
		let numberStr = number.toString();
		while (numberStr.length < width) {
			numberStr = "0" + numberStr;
		}
		return numberStr; // so if the number was 1 -> 001, 12 -> 012 ,  width changes at call
	}

	for (let i = 1; i <= numberOfImages; i++) {
		const formattedNumber = formatNumber(i, 3);
		const imagePath = `${basePath}${formattedNumber}.png`; //merging base path with the number and extention
		imagePaths.push(imagePath); //appending to array
	}

	function renderFrame(frameIndex) {
		const img = new Image(); //image object itseems : )
		img.src = imagePaths[frameIndex]; // that easy, setting the source using a string that holds path

		img.onload = function () {
			context.clearRect(0, 0, canvas.width, canvas.height);
			const xOffset =
				(canvas.width - renderingWidthRES) / 2 - canvas.width * 0.2;
			const yOffset = (canvas.height - renderingHeightRES) / 2;

			// Draw the image on the canvas with specified dimensions
			context.drawImage(
				img,
				xOffset,
				yOffset,
				renderingWidthRES,
				renderingHeightRES
			);
		};

		img.onerror = function () {
			console.error("Error loading image: " + imagePaths[frameIndex]); //just in case
		};
	}

	// Example usage: render the first image
	renderFrame(0);

	gsap.registerPlugin(ScrollTrigger); // I LOVE THIS

	const startOuterOffset = vhToPx(9.259);
	const startInnerOffset = vhToPx(11.111);
	const endOffset = vhToPx(400);

	const outerStartStr = `top+=${startOuterOffset} top`;
	const innerStartStr = `top top+=${startInnerOffset}`;
	const endStr = `+=${endOffset}`;

	ScrollTrigger.create({
		trigger: ".theCanvas",
		pin: true, // so the outer div wont just keep scrolling up
		start: outerStartStr,
		end: endStr, //until the anim done, stay on screen
	});

	gsap.to(
		{},
		{
			// Use an empty object instead of {window}
			scrollTrigger: {
				scrub: 1,
				trigger: ".theCanvas",
				start: innerStartStr,
				end: endStr,
				onUpdate: function (self) {
					// Pass 'self' to access ScrollTrigger instance
					const progress = self.progress; // returns a value between 0 & 1 that shows how much scrolling is done so far
					const frameIndex = Math.round(progress * (numberOfImages - 1)); // select the frame based on that
					renderFrame(frameIndex);
					if (frameIndex === numberOfImages - 1) {
						canvas.classList.remove("anim");
						canvas.classList.add("resized");

						header.classList.add("dark-theme");
						headerElements.forEach((item) =>
							item.classList.add("brightNavElements")
						);
						headerElements.forEach((item) =>
							item.classList.add("brightNavElements:hover")
						);
						dropDownElements.forEach((cell) => cell.classList.add("ddownDark"));

						outerDiv.classList.add("theDarkCanvas");
						allcontent.forEach((contentBox) =>
							contentBox.classList.add("show")
						);
					} else {
						canvas.classList.remove("resized");
						canvas.classList.add("anim");

						header.classList.remove("dark-theme");
						headerElements.forEach((item) =>
							item.classList.remove("brightNavElements")
						);
						headerElements.forEach((item) =>
							item.classList.remove("brightNavElements:hover")
						);
						dropDownElements.forEach((cell) =>
							cell.classList.remove("ddownDark")
						);

						outerDiv.classList.remove("theDarkCanvas");
						allcontent.forEach((contentBox) =>
							contentBox.classList.remove("show")
						);
					}
				},
			},
		}
	);

	const brightSwitchObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				header.classList.remove("dark-theme");
				headerElements.forEach((item) =>
					item.classList.remove("brightNavElements")
				);
				headerElements.forEach((item) =>
					item.classList.remove("brightNavElements:hover")
				);
				dropDownElements.forEach((cell) => cell.classList.remove("ddownDark"));
			} else {
				header.classList.add("dark-theme");
				headerElements.forEach((item) =>
					item.classList.add("brightNavElements")
				);
				headerElements.forEach((item) =>
					item.classList.add("brightNavElements:hover")
				);
				dropDownElements.forEach((cell) => cell.classList.add("ddownDark"));
			}
		});
	});

	brightSwitchObserver.observe(whiteSwitch);

	console.log(typeof bottomContent);

	const contentObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				bottomContent.classList.add("show");
			} else {
				bottomContent.classList.remove("show");
			}
		});
	});

	contentObserver.observe(bottomContent);
});
