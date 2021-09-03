import { cards } from './components/data.js';
import   {Card} from '../components/Card.js';

export const CardContainer = () => {
    const container = document.createElement('div')
    container.className = 'content'
    cards.forEach(function(card) {
      container.appendChild(Card(card))
     
    })
    
    return container
  }
  
