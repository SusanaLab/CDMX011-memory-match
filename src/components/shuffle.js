export function shuffle (cards) {
	for (let i = cards.length-1; i > 0; i--) {
		const randomNumber = Math.floor(Math.random() * (i + 1)+1);
    //Retorna un numero aleatorio 
    //console.log((i+1)+1)
    //console.log(randomNumber)
		const selected = cards[i];  
    //console.log(selected)
		cards[i] = cards[randomNumber];
    //console.log(cards[i])
		cards[randomNumber] = selected;
    //console.log(cards[randomNumber])
	}
  return cards
}