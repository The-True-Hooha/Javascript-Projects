const sendBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

// function that adds an event listener for the "sendBtn"
sendBtn.addEventListener("click", sendMsg)

function sendMsg (){
    let messageContent = messageIn.value;
    //console.log(messageContent);
    if(messageContent === ""){
        alert("please input a valid text")
    }else{
        messageOut.innerHTML = messageContent;
        messageIn.value = "";
    }
    console.log(messageContent );
}
