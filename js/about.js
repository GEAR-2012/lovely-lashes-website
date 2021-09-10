// This script fetch the about me text from json file and make the about me text content
const textContainer = document.querySelector("#about__text-container");
const signature = document.querySelector("#about__sign");

fetch("text content data/about.json")
  .then((response) => response.json())
  .then((paragraphs) => {
    paragraphs.forEach((paragraph) => {
      const paragraphElement = makeParagrap(paragraph);
      textContainer.insertBefore(paragraphElement, signature);
    });
  });

function makeParagrap(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}
