const Next = document.querySelector(".Next")
const Previous = document.querySelector(".Previous")
const container = document.querySelector(".images");

let counter = 0;

Next.addEventListener("click", nextSlide);
Previous.addEventListener("click", prevSlide);

//inputs the next button function
function nextSlide(){
    //animation to the image slider
    container.animate([{opacity: "0.1"}, {opacity: "1.0"}], {duration: 1000, fill: "forwards"})
    if(counter === 6){
        counter = -1;
    }
    counter++;

    container.style.backgroundImage = `url(images/bcg-${counter}.jpg`
}

//inputs the previous button function
function prevSlide(){
    //animation to the image slider
    container.animate([{opacity: "0.1"}, {opacity: "1.0"}], {duration: 1000, fill: "forwards"})
    if(counter === 0){
        counter = 7;
    }
    counter--;

    container.style.backgroundImage = `url(images/bcg-${counter}.jpg`
}