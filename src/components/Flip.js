export function flip(index){
  const element = document.querySelector(`[data-idx="${index}"]` ); 
  
      element.style.transform = "rotateY(0)";
  
  }

