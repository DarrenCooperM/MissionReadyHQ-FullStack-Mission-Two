"use strict";

// navigation variables
const btnScrollTo = document.querySelector(".scrollTo");
const btnScrollToTop = document.querySelector(".scrollToTop");
const btnScrollToAboutMe = document.querySelector(".scrollToAbout");
const btnScrollToMR = document.querySelector(".scrollToMR");
const btnScrollToSocials = document.querySelector(".scrollToSocials");
const btnScrollToContact = document.querySelector(".scrollToContact");
const section0 = document.querySelector("#section0");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
// const section2p5 = document.querySelector("#section--2p5");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const hamBurgerMenu = document.getElementsByClassName("hamBurgerMenu")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

// HAMBURGER MENU

hamBurgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// DARK MODE BUTTON

const text = document.getElementsByTagName("body")[0];
const darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  text.classList.toggle("night");
  console.log(darkMode);
  console.log(text);
});

// 'View My Work' Button scroll to
btnScrollTo.addEventListener("click", function (e) {
  const sectionOne = section1.getBoundingClientRect();
  console.log(sectionOne);
  section1.scrollIntoView({ behavior: "smooth" });
});

// NAVBAR SCROLL-TO FUNCTIONS

// ABOUT ME
btnScrollToAboutMe.addEventListener("click", function (e) {
  const sectionOnePointFive = section1.getBoundingClientRect();
  console.log(sectionOnePointFive);
  section1.scrollIntoView({ behavior: "smooth" });
});

// MISSION READY
btnScrollToMR.addEventListener("click", function (e) {
  const sectionMR = section2.getBoundingClientRect();
  console.log(sectionMR);
  section2.scrollIntoView({ behavior: "smooth" });
});

// SOCIALS
btnScrollToSocials.addEventListener("click", function (e) {
  const sectionSocials = section3.getBoundingClientRect();
  console.log(sectionSocials);
  section3.scrollIntoView({ behavior: "smooth" });
});

// CONTACT FORM
btnScrollToContact.addEventListener("click", function (e) {
  const sectionContact = section4.getBoundingClientRect();
  console.log(sectionContact);
  section4.scrollIntoView({ behavior: "smooth" });
});

// section animations

// BACK TO TOP BUTTON
btnScrollToTop.addEventListener("click", function (e) {
  const sectionZero = section0.getBoundingClientRect();
  console.log(sectionZero);

  section0.scrollIntoView({ behavior: "smooth" });
});

// REGEX
// Form EMAIL

// const input = document.querySelector("input");
// const checkMessage = document.querySelector("#email");
// document.querySelector("button").addEventListener("click", checkPassword);
// function checkPassword() {
//   const regex = /^[A-Z]\w{0,}\d/gm;
//   const result = regex.test(input.value);
//   if (result === true) {
//     checkMessage.textContent = "Email valid";
//   } else {
//     checkMessage.textContent = "Email invalid";
//   }
// }

// FORM CHARACTER COUNT

let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char-count");
const maxNumOfChars = 100;

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumOfChars - numOfEnteredChars;
  characterCounter.textContent = counter + "/100";
};
textArea.addEventListener("input", countCharacters);

// REVIEW COUNTER

const counterValue = document.getElementById("reviewCounter");

let initial = 0; // start it at zero

function incrementByOne() {
  initial = initial + 1;
  counterValue.textContent = initial;
}
// function decrementByOne() {
//   initial = initial - 1;
//   counterValue.textContent = initial;
// }
function reset() {
  initial = 0;
  counterValue.textContent = initial;
}
function submit() {
  initial = 0;
  counterValue.textContent = initial;
  alert("thanks for your review!");
}
