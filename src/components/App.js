import travel from '../data/travel/travel.js';


const cards = travel.items.concat(travel.items)


export const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = 'Travel Memory';
  const score = document.createElement("h6")
  score.className = 'score'
  score.textContent = 'Turns:'
  el.appendChild(score)
  el.appendChild(button())
  el.appendChild(CardContainer())

  return el; 
 };

 const button= ()=> {
   const buttom= document.createElement('button')
   buttom.className = 'start'
   buttom.textContent= 'New Game'
   buttom.addEventListener('click',(e)=>{ 
     e.preventDefault();
     location.reload();
    });
    return buttom
}


  const Card = (card) => {
      const cardEl = document.createElement('div')
      cardEl.className = 'cardContent'
      const titleEl = document.createElement('p')
      titleEl.textContent = card.id
      titleEl.className = 'text'
      const img = document.createElement('img');
      img.className = 'picture'
      img.src = card.image
      cardEl.appendChild(img)
      cardEl.appendChild(titleEl)

      return cardEl
 }

 const CardContainer = () => {
  const container = document.createElement('div')
  container.className = 'content'
  shuffle(cards).forEach(function(card) {
    container.appendChild(Card(card))
   
  })
  
  return container
}

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




/*function changeContent (Content){
  const cleanContent= document.getElementsByClassName("img");
  cleanContent.remove()
  return Content
}*/


/*const CardContainerShuffle = () => {
  const box= document.createElement('div')
  box.className = 'content'
  shuffle(cards).forEach(function(card) {
    box.appendChild(Card(card))
   
  });

  return box
}*/


/**const boton = document.getElementsByClassName("start");
boton.addEventListener("click",(event) => {
  const but = CardContainer(cards,event.target)
  document.getElementsByClassName.innerHTML = but

})*/


/*const mix = document.getElementsByClassName("start");
mix.addEventListener('click', (event) => {
    const change = shuffle(cards,event.target)
  
    
    document.getElementsByClassName("content").innerHTML= CardContainer
});
*/






