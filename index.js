var quotes =[
	{
	quote:	'“Be yourself; everyone else is already taken.”',
	author: '― Oscar Wilde '
	},
	{
		quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” `,
		author: '― Marilyn Monroe'
	},
	{
		quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” `,
		author: '― Marilyn Monroe'
	},
	{
		quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” `,
		author: '―Dr. Seuss'

	},

	{
		quote: `“Be the change that you wish to see in the world.” `,
		author: '― Mahatma Gandhi'

	}


]


function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteName').innerHTML = quotes[randomNumber].quote;
	document.getElementById('author').innerHTML = quotes[randomNumber].author;

}