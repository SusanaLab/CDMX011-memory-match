export const button= ()=> {
    const buttom= document.createElement('button')
    buttom.className = 'start'
    buttom.textContent= 'New Game'
    buttom.addEventListener('click',(e)=>{ 
        //let onclick="history.go(0)"
        e.buttom.preventDefault();
        location.reload();
     })
     return buttom;
 }
 //import   {shuffle} from '../components/shuffle.js';