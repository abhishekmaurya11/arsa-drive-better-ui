const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');
let zero = 0;

next_btn.addEventListener('click', function () {
if (zero === -900) return;
    zero -= 100;
    if(zero < -900) return;
    slider.style.transform = `translateX(${zero}px)`;  

});

prev_btn.addEventListener('click', function () {
    if (zero === 0) return;
    zero += 100;

    if (zero > 0) return;


    slider.style.transform = `translateX(${zero}px)`;
});