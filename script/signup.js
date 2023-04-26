const checkEmail =  /^(?=.*[@])(?=.*[.]).+\@.+\..+$/;
const suFnameAlert = document.getElementById("su-fname-alert")
const suFnameLable =document.getElementById("su-fname-lable")
const alertEmail = document.getElementById("su-email-alert")
const signupButton = document.querySelector(".signup-button")
const suEmailLable = document.getElementById("su-email-lable")
const suPassLable = document.getElementById("su-pass-lable")
const suPasscfLable = document.getElementById("su-passcf-lable")
const suPasscfAlert = document.getElementById("su-passcf-alert")
const suPassAlert = document.getElementById("su-pass-alert")
function checkSignUp(){
    var fname = document.getElementById("signup-fullname").value;
    if(fname == ""){
        suFnameAlert.innerHTML = "Mục "+ "<b>Họ và Tên</b>"+" là bắt buộc."
        suFnameLable.classList.add('color')
    }
    else{
        suFnameAlert.innerHTML = "";
        suFnameLable.classList.remove('color')
    }
    var email1= document.getElementById("signup-email").value;
    if(email1 == "")
    {
        alertEmail.innerHTML = "Mục "+ "<b>Email</b>"+" là bắt buộc."
            suEmailLable.classList.add('color');
    }
    else{
        if(checkEmail.exec(email1))  
        {   
            suEmailLable.classList.remove('color');   
            alertEmail.innerHTML =""
        }
        else 
        {
            alertEmail.innerHTML = "Địa chỉ email trong mục "+ "<b>E-mail</b>"+" là không hợp lệ."
            suEmailLable.classList.add('color');
        }
    }
    var pass = document.getElementById("signup-pass").value;
    var passcf = document.getElementById("signup-confirm").value;
    if(pass == ""){
        suPassLable.classList.add('color');
        suPassAlert.innerHTML= "Mục"+ " <b>Mật khẩu</b>"+" là bắt buộc"
    }
    if(passcf == ""){
        suPasscfLable.classList.add('color');
        suPasscfAlert.innerHTML= "Mục"+ " <b>Xác nhận mật khẩu</b>"+" là bắt buộc"
    }
    if(pass == passcf)
    {
        suPassLable.classList.remove('color');
        suPasscfLable.classList.remove('color');
        suPassAlert.innerHTML= ""
        suPasscfAlert.innerHTML  = ""
    }
    else
    {
        suPassLable.classList.add('color');
        suPasscfLable.classList.add('color');
        suPassAlert.innerHTML= "Mật khẩu trong các mục"+"<b> Xác nhận mật khẩu</b>"+" và " + "<b>Mật khẩu</b>"+" không khớp."
        suPasscfAlert.innerHTML  = "Mật khẩu trong các mục"+"<b> Xác nhận mật khẩu</b>"+" và "+"<b>Mật khẩu</b>"+" không khớp." 
    }
}

   
function abc()
{
    alertEmail.innerHTML = "Địa chỉ email trong mục "+ "<b>E-mail</b>"+" là không hợp lệ."  
}

signupButton.addEventListener("click",checkSignUp)
