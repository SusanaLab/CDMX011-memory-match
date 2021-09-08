

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

export const CardContainer = (data) => {
  const container = document.createElement('div')
  container.className = 'content'
  data.forEach(function(card) {
    container.appendChild(Card(card))
    //giro de carta
    
  })
  
  return container
}

