export const button= ()=> {
    const buttom= document.createElement('button')
    buttom.className = 'start'
    buttom.textContent= 'New Game'
    buttom.addEventListener('click',(e)=>{ 
      e.preventDefault();
      location.reload();
     });
     return buttom
  }