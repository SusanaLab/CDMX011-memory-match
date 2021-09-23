import {flip} from '../components/Flip.js';
import { dishable } from './dishable.js';


let save= []; 
let delay = 1000;
let contador = 0;
 //let pElement = document.getElementsByClassName("score");           
//let count = document.getElementsByClassName('score').innerHTML = "SCORE: " + contador;


export function Match (id){
   // console.log(id)
   
     
    if (save.includes(id)){
          
       dishable(id) 
       save= []
       console.log(save)  
     }
    
     if(!save.includes(id)){
      save.push(id) 
    
      console.log(save)  
      //flip(id) 
     }
     if(save.length === 2){ 
      flip(save[0])
      flip(save[1])
      save= []
      console.log(save)  
    }
}


     /*if(save.length === 2){ // bloquear clicks si ya 2 tarjetas fueron volteadas
        
      
        let id1 = save[0];
        let id2 = save[1];
        //console.log(id1)
        //console.log(id2)
        flip(id1)
        flip(id2)
        return
    }
        save.push(id)
     //console.log(save)

    if (save[0]===save[1]){ // coincidencia o match
        console.log(save)
        // desabilitar las tarjetas que hicieron match
        let id1 = save[0];
        let id2 = save[1];
        dishable(id1)
        dishable(id2)
        console.log(id1)
        console.log(id2)
        //flip(id1)
        //flip(id2)
       //contador
        contador++;
        //const count = document.getElementsByClassName('score').innerHTML = "SCORE: " + contador; //no sale
        alert("Es un Match, pares encontrados " + contador)
       
        // resetear el arreglo de pares [id1, id2] => []
         save = []
        
    }
    
    else { // no coincidencia
        console.log(save)
            // retornan las tarjetas a su estado inicial
            const id5 = save[0];
            const id6 = save[1];
            flip(id5)
            flip(id6) 
            console.log(id5)
            console.log(id6)
            setTimeout(delay)
            // si el arreglo tiene 2 elementos entonces resetear el arreglo de pares [id1, id2] => []
            if(save.length === 2){
                save = []
            }
            alert("Try again")
    }*/






//$("thecard").addClass("disabledbutton");
/*function change () { 
document.getElementsByTagName("img").setAttribute("class", "democlass");} 
var cuerpoRef = document.getElementById("id"); 
cuerpoRef.setAttribute("class", "democlass");*/