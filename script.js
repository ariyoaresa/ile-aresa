function opn() {
    document.getElementById("nav").style.top = "0px"
    document.getElementById("open").style.opacity = "0"
}
function clse() {
    document.getElementById("nav").style.top = "-2000px"
    document.getElementById("open").style.opacity = "1"
}
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish)
  function vanish() {
    loader.classList.add("disappear")
}
window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById("to-top");
  if (window.pageYOffset > (window.innerHeight * 1)) {
    scrollButton.style.display = "flex"
  } else {
    scrollButton.style.display = "none"
  }
})