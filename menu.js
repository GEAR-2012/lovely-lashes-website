const toggler = document.querySelector(".menu-wrap .toggler");
const menuItems = document.querySelectorAll(".menu-wrap .menu li");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    toggler.checked = false;
  });
});
