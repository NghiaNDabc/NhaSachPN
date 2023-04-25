const login = document.querySelector('.user-login');
        const modal = document.querySelector('.js-modal');
        const close = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')

        function showBuyTickets(){
            modal.classList.add('open');
        }

            login.addEventListener('click',showBuyTickets)
        

        function endShow(){
            modal.classList.remove('open')
        }
        
       close.addEventListener('click',endShow);
       modal.addEventListener('click',endShow)

       modalContainer.addEventListener('click',function (event){
        event.stopPropagation()
        })