import travel from '../data/travel/travel.js';
import { CardContainer} from '../components/contenedor.js';
import { button } from '../components/button.js';
import {shuffle} from '../components/shuffle.js';


const cards = travel.items.concat(travel.items)


export const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = 'Travel Memory';
  const score = document.createElement("h6")
  score.className = 'score'
  score.textContent = 'Turns:'
  el.appendChild(score)
  const mix = shuffle(cards)
  el.appendChild(button())
  el.appendChild(CardContainer(mix))
 
  return el; 
 };
 


