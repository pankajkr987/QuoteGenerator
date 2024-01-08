const API_URL = "https://api.quotable.io/quotes/random";
var quote = document.getElementById("quote");
var author = document.getElementById("author");
async function getQuote(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        //var quote=data[0].content;
        //var author=data[0].author;

        quote.innerHTML = data[0].content;
        author.innerHTML = data[0].author;
        //console.log(author);
        //console.log(data);
        //console.log(quote);
    } catch (error) {
        console.error('error in fetching api', error);
    }

}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML);
}

function shareOnWhatsApp() {
    // Create a WhatsApp share link
    var whatsappLink = 'https://wa.me/?text=' + encodeURIComponent(quote.innerHTML);
    // Open the link in a new tab/window
    window.open(whatsappLink, '_blank');
}
getQuote(API_URL);


