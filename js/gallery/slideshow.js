// This script unhide the slideshow when a picture clicked and arrange the slideshow to work

const slideshowBackground = document.querySelector("#fullscreen-slideshow");
const image = document.querySelector("#image");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
let imageIndex;

fetch("../images/gallery/full_size_pictures/imageUrlList.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((url) => {
      imageURLArray.push(url);
    });
  });

// Initially hide the slideshow until a gallery picture clicked
slideshowBackground.classList.add("hide");

leftArrow.onclick = imagesBackward;
rightArrow.onclick = imagesForward;
slideshowBackground.onclick = hideSlideshow;

function imagesBackward() {
  if (imageIndex === 0) {
    imageIndex = imageURLArray.length - 1;
  } else {
    imageIndex--;
  }
  setImageUrl(imageIndex);
}

function imagesForward() {
  if (imageIndex === imageURLArray.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  setImageUrl(imageIndex);
}

function setImageUrl(url) {
  image.style.backgroundImage = "url(" + imageURLArray[url] + ")";
}

function hideSlideshow(e) {
  const elementId = e.target.id;
  if (elementId !== "left-arrow" && elementId !== "right-arrow") {
    slideshowBackground.classList.add("hide");
  }
}

function openSlideshow(that) {
  imageIndex = parseInt(that.id, 10);
  setImageUrl(imageIndex);
  slideshowBackground.classList.remove("hide");
}
