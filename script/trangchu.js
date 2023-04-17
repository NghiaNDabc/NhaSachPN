
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var preBtn = document.querySelector('#prev');
var nextBtn = document.querySelector('#next');

function showSlide(n){
    // n = parseInt(n);
    for(var i = 0; i < slides.length; i++)
        slides[i].style.display = 'none';
    slides[n].style.display = 'block';
}
function preSlide(){
    currentSlide --;
    if(currentSlide < 0)
        currentSlide = slides.length - 1;
    showSlide(currentSlide);
}
function nextSlide(){
    currentSlide ++;
    if(currentSlide  >= slides.length)
        currentSlide = 0;
    showSlide(currentSlide);
}
preBtn.addEventListener('click',preSlide);
nextBtn.addEventListener('click',nextSlide);

setInterval(nextSlide,2000);
