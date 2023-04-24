
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


// const slider = document.querySelector('.slide');
// const prevButton = document.querySelector('#prev');
// const nextButton = document.querySelector('#next');

// let counter = 0;

// prevButton.addEventListener('click', () => {
//   if (counter > 0) {
//     counter--;
//     slider.style.transform = `translateX(-${counter * 100}%)`;
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (counter < 2) {
//     counter++;
//     slider.style.transform = `translateX(-${counter * 100}%)`;
//   }
// });

// setInterval(() => {
//   if (counter < 2) {
//     counter++;
//     slider.style.transform = `translateX(-${counter * 100}%)`;
//   } else {
//     counter = 0;
//     slider.style.transform = 'translateX(0)';
//   }
// }, 5000);
