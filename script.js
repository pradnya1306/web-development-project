var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
		"link": "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",
		"link": "https://en.wikipedia.org/wiki/Karl_Marx"
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
		"link": "https://en.wikipedia.org/wiki/B._R._Ambedkar"
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
		"link": "https://en.wikipedia.org/wiki/Che_Guevara"
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
		"link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
	}
];


document.getElementById('qutes').innerHTML=quotes[0].quote
document.getElementById('authors').innerHTML=quotes[0].author
var bgColors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];


function changeColor(){

    var body_color=Math.floor(Math.random() * bgColors.length)
    document.body.style.backgroundColor=bgColors[body_color]
    var qutes_change=Math.floor(Math.random() * quotes.length)
    document.getElementById('qutes').innerHTML=quotes[qutes_change].quote
    document.getElementById('authors').innerHTML=quotes[qutes_change].author
    var div_color=Math.floor(Math.random() * bgColors.length)
    document.getElementById('div2').style.backgroundColor=bgColors[div_color]
    

}
    
      