var userIcon  = document.querySelector('.userIcon');
var myAccount = document.querySelector('.my-account')
function showUser(){
    if(myAccount.style.display === 'none')
      myAccount.style.display = 'block'
      else myAccount.style.display = 'none'
}
userIcon.addEventListener('click',showUser)

var menu = document.querySelector(".js-header-menu");


window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 120) {
    menu.classList.add("active");
    menu.classList.remove("header-menu");
  } else {
    menu.classList.remove("active");
    menu.classList.add("header-menu");
  }
});
var ontop = document.querySelector(".ontop")

window.addEventListener("scroll",function(){
  if (window.pageYOffset >= 120) {
    ontop.classList.add("active-ontop");
  } else {
    ontop.classList.remove("active-ontop");
  }
})
function updatePosition() {
  var currentPosition = window.pageYOffset;
  currentPosition -= 60;
  console.log(currentPosition);
  if(currentPosition <= 0){
    window.scrollTo(0, currentPosition)
    return;
  } 
  window.scrollTo(0, currentPosition);
  setTimeout(updatePosition, 10);
}
var button = document.querySelector('.ontop');
button.addEventListener('click', updatePosition);