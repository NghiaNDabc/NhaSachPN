var userIcon  = document.querySelector('.userIcon');
var myAccount = document.querySelector('.my-account')
function showUser(){
    if(myAccount.style.display === 'none')
      myAccount.style.display = 'block'
      else myAccount.style.display = 'none'
}
userIcon.addEventListener('click',showUser)

var menu = document.querySelector(".header-menu");
var menuPosition = menu.offsetTop;

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 120) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});