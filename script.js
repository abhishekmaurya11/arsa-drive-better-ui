const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');
const accordian_sec = document.querySelector('.accordian-sec');
const accordian_container = document.querySelector('.accordian-container');
const accordian_btn = document.querySelector('.accordian-btn');
const accordian_content = document.querySelector('.accordian-content');
const accordian_header = document.querySelector('.accordian-header');



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


document.addEventListener("DOMContentLoaded", () => {
    const accordianHeaders = document.querySelectorAll(".accordian-header");

    accordianHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const currentItem = header.parentElement;
            
            // Optional: Close other open accordion items
            document.querySelectorAll(".accordian-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Toggle the active class on the clicked item
            currentItem.classList.toggle("active");
        });
    });
});



