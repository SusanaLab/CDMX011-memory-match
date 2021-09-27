import travel from '../data/travel/travel.js';
import {button} from '../components/button.js';
import {shuffle} from '../components/shuffle.js';
import {CardContainer} from '../components/contenedor.js';

const cards = travel.items.concat(travel.items)


export const App = () => {
  const el = document.createElement('body');
  const header = document.createElement('header')
  header.className = 'App';
  header.textContent = 'Travel Memory';
  let score = document.createElement("h6")
  score.className = 'score' 
  header.appendChild(score)
 
  const mix = shuffle(cards)
  header.appendChild(button())
  el.appendChild(header)
  el.appendChild(CardContainer(mix))
 
  return el; 
 };
 


 