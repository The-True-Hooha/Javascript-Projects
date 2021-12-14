const btns = document.querySelectorAll(".btn-grey");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal")
const clearBtn = document.querySelector(".btn-clear");


//a for loop that ensures all the button can be clicked and displays on the screen
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (){
        let number = btns[i].getAttribute("data-num");
        if(screen.value += number){
            console.log("yes it is working");
        }else{
            console.log(err);
        }
    })
}

//displays the equal button to the screen
equalBtn.addEventListener("click", function(){
    let value = eval(screen.value);
    screen.value = value;
})

//deletes any value when the clear button is clicked
clearBtn.addEventListener("click", function (){
    screen.value = "";
})

