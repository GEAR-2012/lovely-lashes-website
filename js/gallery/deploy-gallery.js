// This script reads image url-s from all json file from all gallery folders and fills up all gallery container based on those data.

const galleriesWithSlideshow = document.querySelectorAll(".gallery-with-slideshow");
const imageURLArraysObj = {};

galleriesWithSlideshow.forEach((galleryWithSlideshow) => {
  const galleryWithSlideshowName = galleryWithSlideshow.dataset.name;
  const galleryCont = galleryWithSlideshow.children[1];

  // const jsonUrl = "../../images/gallery_" + galleryWithSlideshowName + "/imageUrlList.json";
  const jsonUrl = "./images/gallery_" + galleryWithSlideshowName + "/imageUrlList.json";
  const imageURLArray = [];

  // Fetch image url-s from json file and push into an array
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((url, index) => {
        makeImageElement(url, index);
        imageURLArray.push(url);
      });
      imageURLArraysObj[galleryWithSlideshowName] = imageURLArray;
    });

  // Making the image elements and add all to the gallery
  function makeImageElement(url, index) {
    const imgElement = document.createElement("div");
    imgElement.id = index;
    imgElement.className = "img";
    imgElement.style.backgroundImage = "url(" + url + ")";
    imgElement.setAttribute("onclick", "openSlideshow(this)");
    galleryCont.appendChild(imgElement);
  }
});
