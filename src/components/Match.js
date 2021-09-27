import {flip} from '../components/Flip.js';
import { dishable } from './dishable.js';


let save= []; 
let done =[]; 
let cardIndex = [];
let contador = 1;

export function Match (id, idx){
 
  if (save.includes(id)){
      done.push(id); 
      save= [];
      cardIndex= []; 
      //console.log(save);    
      dishable(id);     
   }
  if (done.includes(id) ){
     alert("It`s a Match. Pairs found " + contador )
     contador++;
  } 
  if(!save.includes(id) && !done.includes(id)){
   save.push(id); 
   cardIndex.push(idx);
   //console.log(save);  
   }   
  if(save.length === 2){  
    setTimeout(() => {
        flip(cardIndex[1]);
        flip(cardIndex[0]);
        save= [];
        cardIndex= [];
        //console.log(save); 
    }, 1000);
  if (contador.length === 9){  
      alert("congratulations, you've finished the game.")
     //console.log(done)
  } 
 }   
}

