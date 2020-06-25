const colorArr = [
"rgba(165, 139, 124, 1)",
"rgba(199, 102, 4, 1)",
"rgba(183, 183, 183, 1)",
"rgba(183, 183, 183, 0.8)",
"rgba(183, 183, 183, 0.5)",
"rgba(154, 206, 201, 1)",
"rgba(237, 106, 90, 1)",
"rgba(54, 201, 198, 1)",
"rgba(154, 206, 201, 1)",
"rgba(154, 206, 201, 0.5)",
"rgba(154, 226, 201, 1)",
"rgba(187, 190, 100, 1)",
"rgba(142, 85, 114, 1)",
"rgba(268, 156, 180, 0.5)"
];

quotesArr = [];

getQuotes();

function showNewQuote(quotesArr) {	
	let rng = Math.floor(Math.random()*quotesArr.length);
	const textDisplay = document.getElementById("text");
	const authorDisplay = document.getElementById("author")
	
	textDisplay.innerText = quotesArr[rng].quoteText;
	authorDisplay.textContent = quotesArr[rng].quoteAuthor;
	updateTweetBtn(quotesArr[rng].quoteText)
	changeBackgroundColor();
}

function updateTweetBtn(text) {
	let url = "https://twitter.com/intent/tweet?text=" + "\'" + text + "\'";		
	const tweetLink = document.getElementById("tweet-quote")
	tweetLink.setAttribute("href", url)
}

async function getQuotes() {
	let url = "https://calm-basin-43726.herokuapp.com/25";
	
 const response = await fetch(url);
 data = await response.json();
	
 data.quotes.forEach(quote => {				
		if( quote.quote.length < 150 && quote.author != undefined ) {						
			quotesArr.push({
				quoteText: quote.quote,
				quoteAuthor: quote.author
			})
		} 			
	})
	
	showNewQuote(quotesArr)		
}


const newQuoteBtn = document.getElementById("new-quote")
newQuoteBtn.addEventListener("click", function() {	
	showNewQuote(quotesArr)
})

function changeBackgroundColor() {
	let rng = Math.floor(Math.random()*colorArr.length);
	document.body.style.background = colorArr[rng];
	document.getElementById("new-quote").style.background = colorArr[rng];
}





