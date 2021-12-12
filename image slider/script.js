const Next = document.querySelector(".Next")
const Previous = document.querySelector(".Previous")
const container = document.querySelector("images");

let counter = 0;

Next.addEventListener("click", nextSlide);
Previous.addEventListener("click", prevSlide);

function nextSlide(){
    counter ++;

    container.style.backgroundImage = 
 //   "url{images/toa-heftiba-uKRat_CK080-unsplash.jpg-$)
    {counter}.jpg"
}
