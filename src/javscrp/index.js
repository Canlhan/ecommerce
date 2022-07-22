
let menuButton = document.getElementById("menu_item");
let menuList = document.querySelector(".menu_list");                        

menuButton.addEventListener("click", (e) => {
  menuList.classList.toggle("closed");
  menuList.classList.remove("animation");
});

window.addEventListener("resize", (e) => {
  if (window.outerWidth <= 1100) {
    menuList.classList.remove("animation");
  } else {
    menuList.classList.add("animation");
    menuList.classList.add("closed");
  }
});