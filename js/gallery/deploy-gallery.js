// This script read image url-s from json file and fill up the gallery container based on it.

const gallery = document.querySelector("#gallery");
const imageURLArray = [];

// Fetch thumbnail url-s from json file and push into an array
fetch("../images/gallery/imageUrlList.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((url, index) => {
      makeImageElement(url, index);
      imageURLArray.push(url);
    });
  });

// Making the image elements and add all to the gallery
function makeImageElement(url, index) {
  const elem = document.createElement("div");
  elem.id = index;
  elem.className = "img";
  elem.style.backgroundImage = "url(" + url + ")";
  elem.setAttribute("onclick", "openSlideshow(this)");
  gallery.appendChild(elem);
}
