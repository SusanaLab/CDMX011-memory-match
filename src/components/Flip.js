export function flip(id){
  const element = document.querySelector(`[id="${id}"]` );
  if (element.className === "thecard") {
  
      element.style.transform = "rotateY(180deg)";
  
  }
}

