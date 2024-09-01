// Nav icon
const navBtn = document.querySelector(".nav__toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

console.log(navBtn);
console.log(menuIcon);
navBtn.onclick = function () {
    menuIcon.classList.toggle("menu-icon--active");
    nav.classList.toggle("nav--mobile");
    document.body.classList.toggle("no-scroll");
};
