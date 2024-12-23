const quoteElement = document.querySelector(".quote"); 
const authorElement = document.querySelector(".author");
const button = document.querySelector(".new-quote-button");

let newQuote = [
    {
        quote: "In three words I can sum up everything I've learned about life: It goes on.",
        author: "Robert Frost"
    },
    {
        quote: 'I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.',
        author : " Booker T. Washington"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde" 
    },
    {
        quote: "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only good for wallowing in." ,
        author: " Katherine Mansfield"
    },
    {
        quote: "To succeed in life, you need three things: a wishbone, a backbone and a funnybone" ,
        author: " Reba McEntire"
    },
    {
        quote: "We must be willing to let go of the life we planned so as to have the life that is waiting for us." ,
        author: " Joseph Campbell"
    },
    {
        quote: "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving." ,
        author: "  Tina Turner"
    },
    {
        quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience." ,
        author: " Eleanor Roosevelt"
    },
    {
        quote: "I was taught that the way of progress was neither swift nor easy." ,
        author: "  Marie Curie"
    },
    {
        quote: "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver." ,
        author: " Betty White"
    },

];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * newQuote.length);
    const selectedQuote = newQuote[randomIndex];
    quoteElement.textContent = `"${selectedQuote.quote}"`;
    authorElement.textContent = `- ${selectedQuote.author}`;
}
displayRandomQuote();
if (button) {
    button.addEventListener("click", displayRandomQuote);
}