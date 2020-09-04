
// var elements = document.querySelector(".blue .nav-list");

// var myFunction = function() {
    
//     this.style.opacity = ".6";
// };
// let myOtherFunction = function() {
//     this.style.opacity = "1";
// }

// let toggleAll = function() {

// } 
// let unToggle = function() {

// }

// elements.addEventListener("mouseover", myFunction, false);
// elements.addEventListener("mouseout", myOtherFunction, false);


// let navItem = document.querySelectorAll(".blue .nav-item");
// Array.from(navItem, item => item.addEventListener("click", hovered, false));



// function hovered(()=> {this.classList.toggle("nav-item-hover");}) {
//     alert(this.value);
//     // this.classList.toggle
// }

// First
let navButton = document.querySelector(".green .nav-button");
let navList = document.querySelector(".green .nav-bar");
const displayDropdown = () => {
    navList.classList.toggle("nav-bar-toggled");
    // alert(this);
}
navButton.addEventListener("click", displayDropdown, false);

// Second
let navButton2 = document.querySelector(".blue  .nav-button");
let navList2 = document.querySelector(".blue  .nav-bar");
const displayDropdown2 = () => {
    navList2.classList.toggle("nav-bar-toggled");
    // alert(this);
}
navButton2.addEventListener("click", displayDropdown2, false);
