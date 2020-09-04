
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


let navButton = document.querySelector(".green .nav-button");
let toggle = false;
let navList = document.querySelector(".green .nav-bar");
const displayDropdown = () => {
    navList.classList.toggle("nav-bar-toggled");
    // alert(this);
}
navButton.addEventListener("click", displayDropdown, false);