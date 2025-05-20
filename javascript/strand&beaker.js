const basePath = "homepage_anims/dna_strand/png_0";
const numberOfImages = 54; //change depending on the video
const imagePaths = [];

const beakerPath = "homepage_anims/beaker/png_0";
const beakerFrames = 7;
const beakerPaths = [];

const renderingWidth = 100;
const renderingHeight = 100;
const offset = 45;

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
const offsetRES = vhToPx(offset);

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

for (let i = 1; i <= beakerFrames; i++) {
	const formatted = formatNumber(i, 3);
	const beakPath = `${beakerPath}${formatted}.png`; //merging base path with the number and extention
	beakerPaths.push(beakPath); //appending to array
}

function renderFrames() {
	const canvas = document.querySelector(".dna");
	const ctx = canvas.getContext("2d");
	let currentFrame = 0;

	canvas.height = vhToPx(20);
	canvas.width = vwToPx(100);

	function drawFrame() {
		const img = new Image();
		img.onload = function () {
			//ctx.imageSmoothingEnabled = false;
			ctx.drawImage(img, 0, -offsetRES, renderingWidthRES, renderingHeightRES);
			currentFrame++;
			if (currentFrame < imagePaths.length) {
				// Schedule next frame to be drawn
				setTimeout(drawFrame, 25); // Adjust the delay as needed
			}
		};
		img.src = imagePaths[currentFrame];
		console.log(currentFrame);
	}

	// Start rendering the frames
	drawFrame();
}

const renderingBeakerWidth = 50;
const renderingBeakerHeight = 110;
const offsetBeaker = 30;
const hozOffsetBeaker = 5;

const renderingBeakerWidthRES = vwToPx(renderingBeakerWidth);
const renderingBeakerHeightRES = vhToPx(renderingBeakerHeight);
const offsetBeakerRES = vhToPx(offsetBeaker);
const hozoffsetBeakerRES = vwToPx(hozOffsetBeaker);

function renderBeakerFrames() {
	const canvas = document.querySelector(".beakerAnim");
	const ctx = canvas.getContext("2d");
	let currentFrame = 0;

	canvas.height = vwToPx(30);
	canvas.width = vwToPx(30);

	function drawBFrame() {
		const img = new Image();
		img.onload = function () {
			//ctx.imageSmoothingEnabled = false;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(
				img,
				-hozoffsetBeakerRES,
				-offsetBeakerRES,
				renderingBeakerWidthRES,
				renderingBeakerHeightRES
			);
			currentFrame++;
			if (currentFrame >= beakerPaths.length) {
				currentFrame = 0; // Reset frame index to play on loop
			}
			if (currentFrame < beakerPaths.length) {
				// Schedule next frame to be drawn
				setTimeout(drawBFrame, 200); // Adjust the delay as needed
			}
		};
		img.src = beakerPaths[currentFrame];
	}

	// Start rendering the frames
	drawBFrame();
}

renderFrames();

renderBeakerFrames();
