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
 
 
 export const button= ()=> {
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
  //contenedor padre
  const cardEl = document.createElement('div')
  cardEl.className = 'cardContent'
  //pasar la funcion cuando se ejecute el clic
  //midle.onclick = flip()
  const midle = document.createElement('div')
  midle.className = 'thecard'
  midle.addEventListener('click',()=>{ 
    var element = event.currentTarget;
	if (element.className === "thecard") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
      //alert("Try again")
    }
    else  {
      element.style.transform = "rotateY(180deg)";
      
      //alert("It's a match")
    }
  }
   });
   
  //contenedor hijo enfrente
  const front = document.createElement('div')
  front.className = 'front'
  const img = document.createElement('img');
  img.className = 'picture'
  img.src = card.image
  //contenedor hijo atras
  const back = document.createElement('div')
  back.className = 'back'
  const picture = document.createElement('img');
  picture.className = 'pictureBack'
  picture.src = 'https://i.pinimg.com/564x/19/89/ad/1989ad9a6471fb4287372dfda3979f1f.jpg'
  front.appendChild(img) 
  back.appendChild(picture) 
  midle.appendChild(back)
  midle.appendChild(front)
  cardEl.appendChild(midle)

  return cardEl
}


 export const CardContainer = () => {
  const container = document.createElement('div')
  container.className = 'content'
  shuffle(cards).forEach(function(card) {
    container.appendChild(Card(card))
    //giro de carta
    
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
/*
let cardSelected = [];
let cardId = [];

function Match (){
var cards = document.querySelector('thecard')
cardSelected.push(travel[cards].id)
cardId.push(cards)


}*/
