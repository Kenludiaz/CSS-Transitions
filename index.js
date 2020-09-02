var elements = document.getElementsByClassName("nav-item");

var myFunction = function() {
    alert("Hello");
};

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', myFunction);
  });