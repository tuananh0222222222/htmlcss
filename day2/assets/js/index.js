'use strict';

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");


const navElementArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElementArr.length; i++) {
    navElementArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    })
}

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    window.scrollY >= 200 ? header.classList.add("active")
        : header.classList.remove("active");
})

console.log(header)