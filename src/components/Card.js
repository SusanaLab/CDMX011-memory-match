export const Card = (card) => {
    //Div pasdre para ambos lados
      const cardEl = document.createElement('div')
      cardEl.className = 'cardContent'
      cardEl.appendChild(front)
      cardEl.appendChild(back)
      //crear nuevo div para la imagen de atras
      const back = document.createElement('div');
      back.className = 'cardContent'
      const picture = document.createElement('img');
      picture.className = 'picture'
      picture.src = 'https://i.pinimg.com/564x/19/89/ad/1989ad9a6471fb4287372dfda3979f1f.jpg'
      back.appendChild(img)
    //Div para la imagen de enfrente
      const front = document.createElement('div')
      const titleEl = document.createElement('p')
      titleEl.textContent = card.id
      titleEl.className = 'text'
      const img = document.createElement('img');
      img.className = 'picture'
      img.src = card.image
      front.appendChild(img)
      front.appendChild(titleEl)
      return cardEl
 }



/*export const Card = (card) => {
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
  }*/
  