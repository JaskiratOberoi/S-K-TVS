var menuBtn = document.getElementsByClassName("fa-bars");
var body = document.getElementById("body");
let menu = document.getElementById("mobile-navbar");

menuBtn[0].addEventListener("click", menuToggle);

function menuToggle(e) {
  e.preventDefault();
  if (menu.style.top === "-300px") {
    menuOpen();
  } else {
    menuClose();
  }
}

function menuOpen() {
  menu.style.top = "-40px";
  body.style.paddingTop = "250px";
}

function menuClose() {
  menu.style.top = "-300px";
  menu.children[0].style.boxShadow = "none";
  body.style.paddingTop = "0px";
}

//tabbed functions

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Image CArousel

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
