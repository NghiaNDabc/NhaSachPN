var userIcon  = document.querySelector('.userIcon');
var myAccount = document.querySelector('.my-account')
function showUser(){
    if(myAccount.style.display === 'none')
      myAccount.style.display = 'block'
      else myAccount.style.display = 'none'
}
userIcon.addEventListener('click',showUser)