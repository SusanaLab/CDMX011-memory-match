import { CardContainer} from '../components/contenedor.js';
import {button} from '../components/button.js';
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


//



