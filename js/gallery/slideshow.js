// This script unhide all slideshow in all gallery when a picture clicked and arrange the slideshow to work

const slideshowContainers = document.querySelectorAll(".fullscreen-slideshow");
let galleryName;
let image;
let leftArrow;
let rightArrow;
let imageIndex;

// Initially hide all slideshow in all gallery until a gallery picture clicked
slideshowContainers.forEach((slideshowContainer) => {
  slideshowContainer.classList.add("hide");
});

function imagesBackward(e) {
  if (imageIndex === 0) {
    imageIndex = imageURLArraysObj[galleryName].length - 1;
  } else {
    imageIndex--;
  }
  setImageUrl(imageIndex);
}

function imagesForward(e) {
  if (imageIndex === imageURLArraysObj[galleryName].length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  setImageUrl(imageIndex);
}

function hideSlideshow(e) {
  const elementTagName = e.target.tagName;
  if (elementTagName !== "I") {
    slideshowContainer.classList.add("hide");
  }
}

function setImageUrl(url) {
  image.style.backgroundImage = "url(" + imageURLArraysObj[galleryName][url] + ")";
}

function openSlideshow(that) {
  imageIndex = parseInt(that.id, 10);
  slideshowContainer = that.parentElement.parentElement.firstElementChild;
  slideshowContainer.onclick = hideSlideshow;
  leftArrow = slideshowContainer.children[0];
  leftArrow.onclick = imagesBackward;
  rightArrow = slideshowContainer.children[1];
  rightArrow.onclick = imagesForward;
  image = slideshowContainer.children[2];
  galleryName = that.parentElement.parentElement.dataset.name;
  setImageUrl(imageIndex);
  slideshowContainer.classList.remove("hide");
}
