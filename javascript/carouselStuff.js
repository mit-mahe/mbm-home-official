

var currentIndex = 1; //start place
var imageCount = 6; //hard coded cause i dont want extra code (im lazy)
var imageContainer = document.querySelector('.image');
var image = document.querySelectorAll('.image li');   //if you dont know this kys
var images = document.querySelectorAll('.image li img');  //getting all images so they can be used to check for any click on them


function activateImage(index) {
  imageContainer.style.transform = 'translateX(' + ((-(index * 20.9)) + 37.2) + 'vw)'; //moving the whole thing according to which img is active
  for (var i = 0; i < image.length; i++) {
    image[i].classList.remove('image-active');
    image[i].classList.add('image-inactive');  //de-activating aaaaallllllllllll
  }
  image[index].classList.add('image-active'); //legit just scale 1 -> 1.2 and opacity 0.5 -> 1 lolololol
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageCount;  //hehehhee smart ik
  activateImage(currentIndex);
  
}

nextImage();

var autoplay = setInterval(nextImage, 4000); // didn't know auto play was this simple


images.forEach(function(singleImg,index){
    singleImg.addEventListener("click", function () {
        currentIndex = index;       //updating the index of the image where click happened
        activateImage(currentIndex);    //activating that one lul

        clearInterval(autoplay);               //just to reset timer so it wont abruptly activate next image once general timer runs down
        autoplay = setInterval(nextImage,4000);
    });
});
