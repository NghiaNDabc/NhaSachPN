const login = document.querySelector('.user-login');
        const modal = document.querySelector('.js-modal');
        const close = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')

        function show(){
            modal.classList.add('open');
        }

            login.addEventListener('click',show)
        

        function endShow(){
            modal.classList.remove('open')
        }
        
       close.addEventListener('click',endShow);
       modal.addEventListener('click',endShow)

       modalContainer.addEventListener('click',function (event){
        event.stopPropagation()
        })


        const modalLogin = document.querySelector(".modal-login")
        const checkEmail1 =  /^(?=.*[@])(?=.*[.]).+\@.+\..+$/;
        const lgEmailAlert = document.getElementById("lg-email-alert");
        const lgPassAlert = document.getElementById("lg-pass-alert");

        function checkLogin()
        {
            var email2 = document.getElementById("lg-email").value;
            var passW = document.getElementById("lg-pass").value;
            if(email2 == ""){
                lgEmailAlert.innerHTML =  "Mục "+ "<b>Email</b>"+" là bắt buộc."
            }
            else{
                if(checkEmail1.exec(email2))  
                 {   
              
                 lgEmailAlert.innerHTML =""
                }
                 else 
                {
                    lgEmailAlert.innerHTML = "Địa chỉ email trong mục "+ "<b>E-mail</b>"+" là không hợp lệ."
                 }
                 
            }
            if(passW == ""){
                lgPassAlert.innerHTML =  "Mục "+ "<b>Mật khẩu</b>"+" là bắt buộc."
            }
            else lgPassAlert.innerHTML = ""
        }

        
        
        //lgEmailAlert.innerHTML = "Địa chỉ email trong mục "+ "<b>E-mail</b>"+" là không hợp lệ."
        modalLogin.addEventListener('click', checkLogin)