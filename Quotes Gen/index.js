const quotes = [
    {
        name: "David the psalmist",
        quote: "The Lord is my shepherd I shall not want."
    },
    {
        name: "Owen",
        quote: "you be ekpa"
    },
    {
        name: "David Hero",
        quote: "Hard to describe the way life particles simulates in the universe."
    },
    {
        name: "Lecrae",
        quote: "Freedom's got the price nobody is paying"
    },
    {
        name: "Abraham Lincoln",
        quote: "Freedom that isn't free, we must fight for our cause"
    },
    {
        name: "Ereyomi the Wisest",
        quote: "baba go and sleep"
    }
]

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote (){

    let number = Math.floor(Math.random() * quotes.length);
    //console.log(number);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}

/*const easyQuotes = [
    {
        name: "author 1",
        quotes: "quote 1"
    },
]
*/
