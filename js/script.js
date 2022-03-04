
// HAMBURGER MENU
let elHamburgerBtn = document.querySelector(".hamburger");
let elNavbar =document.querySelector(".header__navbar");

// hamburger menu click
elHamburgerBtn.addEventListener("click", () =>{
    elNavbar.classList.toggle("active")
})