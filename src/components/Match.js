import { flip } from '../components/Flip.js';
import { dishable } from './dishable.js';

let flippedCards = [];
let matchedCards = [];
let pairsFound = 0;

export function Match(id, idx) {
  if (flippedCards.length < 2) {
    flip(idx);
    flippedCards.push({ id, idx });
  }

  if (flippedCards.length === 2) {
    if (flippedCards[0].id === flippedCards[1].id) {
      pairsFound++;
   
      matchedCards.push(flippedCards[0].id, flippedCards[1].id);
      flippedCards = [];  
      
    } else {
      setTimeout(() => {
        flip(flippedCards[0].idx);
        flip(flippedCards[1].idx);
        flippedCards = [];
      }, 1000);
    }
  }

  if (pairsFound === 9) {
    alert("Congratulations, you've finished the game!");
  }
}