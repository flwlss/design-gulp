export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = ''
  }
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className)
  })
}

/// navBar change color
/// navBar change color
/// navBar change color
window.onscroll = function () { scrollFunction() };
export function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("headerNav").style.cssText = `background-color: white; transition: 0.5s`
  } else {
    document.getElementById("headerNav").style.cssText = `background-color: ; transition: 0.5s`
  }
}

// plavniy scroll
// plavniy scroll
// plavniy scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById('menu-toggle').checked = false;
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// open/close forms
// open/close forms
// open/close forms
var arrowOne = document.querySelector(".arrow-one");
var openOne = document.querySelector(".form-one");
var closeOne = document.querySelector(".form-close-one");
arrowOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  openOne.classList.add("forma");
});
closeOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  openOne.classList.remove("forma");
});


var arrowTwo = document.querySelector(".arrow-two");
var openTwo = document.querySelector(".form-two");
var closeTwo = document.querySelector(".form-close-two");
arrowTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  openTwo.classList.add("forma");
});
closeTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  openTwo.classList.remove("forma");
});


var arrowThree = document.querySelector(".arrow-three");
var openThree = document.querySelector(".form-three");
var closeThree = document.querySelector(".form-close-three");
arrowThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  openThree.classList.add("forma");
});
closeThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  openThree.classList.remove("forma");
});


var arrowFour = document.querySelector(".arrow-four");
var openFour = document.querySelector(".form-four");
var closeFour = document.querySelector(".form-close-four");
arrowFour.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFour.classList.add("forma");
});
closeFour.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFour.classList.remove("forma");
});


var arrowFive = document.querySelector(".arrow-five");
var openFive = document.querySelector(".form-five");
var closeFive = document.querySelector(".form-close-five");
arrowFive.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFive.classList.add("forma");
});
closeFive.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFive.classList.remove("forma");
});


var arrowSix = document.querySelector(".arrow-six");
var openSix = document.querySelector(".form-six");
var closeSix = document.querySelector(".form-close-six");
arrowSix.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSix.classList.add("forma");
});
closeSix.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSix.classList.remove("forma");
});



var arrowSix = document.querySelector(".arrow-six");
var openSix = document.querySelector(".form-six");
var closeSix = document.querySelector(".form-close-six");
arrowSix.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSix.classList.add("forma");
});
closeSix.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSix.classList.remove("forma");
});

// number mask
// number mask
// number mask
var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);