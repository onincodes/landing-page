// Challenge #2, #5
let body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";

let header = document.getElementById("header");
header.style.backgroundColor = "black";

let contactMobile = document.getElementById("contact-mobile");
contactMobile.style.backgroundColor = "black";

let contactDesktop = document.getElementById("contact-desktop");
contactDesktop.style.backgroundColor = "black";

// Challenge #3
let navText = document.getElementsByClassName("nav-link");

// Challenge #3, #4
let availableDate = document.getElementsByClassName("iphone-date");
availableDate[0].textContent = "Now available.";
availableDate[1].textContent = "Now available.";

// Challenge #3, #5
let iphoneDescription = document.getElementsByClassName("iphone-description");
iphoneDescription[0].style.color = "white";
iphoneDescription[1].style.color = "white";

// Challenge #3, #6
let emailSent = document.getElementsByClassName("submit");

function thankYou() {
  alert("Thank you for subscribing!");
}

emailSent[0].addEventListener("click", thankYou);
emailSent[1].addEventListener("click", thankYou);
