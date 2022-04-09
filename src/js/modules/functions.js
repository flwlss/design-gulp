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

window.onscroll = function () { scrollFunction() };
export function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("headerNav").style.cssText = `background-color: white; transition: 0.5s`
  } else {
    document.getElementById("headerNav").style.cssText = `background-color: ; transition: 0.5s`
  }
}