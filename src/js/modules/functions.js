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