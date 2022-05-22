const containerA = document.querySelector(".container-a"); // Eyelash extension
const containerB = document.querySelector(".container-b"); // Eyelash infill
const currency = "£";

//import the json file and convert to js object
//if done passing the 'data' into a function call as an argument
// fetch("../pricelist data/extensions.json")
fetch("./pricelist data/extensions.json")
  .then((resp) => resp.json())
  .then((data) => myJSONtoArray(data));

//it's get a js object as an argument and convert to a nested array
function myJSONtoArray(obj) {
  let entries = Object.values(obj).map((item) => Object.values(item));
  deployContA(entries);
}

//same procedure with more difficult JSON
// fetch("../pricelist data/infills.json")
fetch("./pricelist data/infills.json")
  .then((resp) => resp.json())
  .then((data) => myJSONtoArray_2(data));

function myJSONtoArray_2(obj) {
  let entries = Object.values(obj).map((item) =>
    Object.values(item).map((item, index) => {
      if (index !== 0) {
        return Object.values(item);
      } else {
        return item;
      }
    })
  );
  deployContB(entries);
}

//making the layout A using the array
function deployContA(arr) {
  for (let x = 0; x < arr.length; x++) {
    addElement(containerA, "p", arr[x][0], ["item-a"]);
    addElement(containerA, "h4", currency + arr[x][1], ["item-b"]);
  }
}

//making the layout B using the array
function deployContB(arr) {
  for (let x = 0; x < arr.length; x++) {
    addElement(containerB, "p", arr[x][0], ["item-a"]);
    addElement(containerB, "div", "", ["sub-container"]);
    let subContainer = containerB.lastChild;
    for (let y = 1; y < arr[x].length; y++) {
      if (arr[x][y][1]) {
        addElement(subContainer, "h3", arr[x][y][0], ["sub-item-a"]);
        addElement(subContainer, "h4", currency + arr[x][y][1], ["sub-item-b"]);
      }
    }
  }
}

function addElement(elemTo, elem, text, classes) {
  //create a new element
  let newElem = document.createElement(elem);
  //and give it some content
  let newContent = document.createTextNode(text);
  //add the text node to the newly created element
  newElem.appendChild(newContent);
  //add class list to the newly created tag
  for (let i = 0; i < classes.length; i++) {
    newElem.classList.add(classes[i]);
  }
  //add the newly created element and it's content into DOM
  elemTo.appendChild(newElem);
}
