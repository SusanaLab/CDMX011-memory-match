import { Match } from '../components/Match.js';


export const Card = (card, index) => {
  //contenedor padre
  const cardEl = document.createElement('div')
  cardEl.className = 'cardContent'
  //pasar la funcion cuando se ejecute el clic
  const midle = document.createElement('div')
  midle.className = 'thecard'
  midle.dataset.id = card.id;
  midle.dataset.idx = index;
  midle.addEventListener('click', (event) => {
    Match(card.id, index)
    var element = event.currentTarget;
    if (element.className === "thecard") {
      element.style.transform = "rotateY(180deg)";
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
  front.appendChild(img);
  back.appendChild(picture);
  midle.appendChild(back);
  midle.appendChild(front);
  cardEl.appendChild(midle);
  return cardEl
}

export const CardContainer = (data) => {
  const container = document.createElement('main')
  container.className = 'content'
  data.forEach(function (card, index) {
    container.appendChild(Card(card, index))
  })
  return container
}
