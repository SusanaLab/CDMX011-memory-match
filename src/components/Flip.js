export function flip(index){
  const element = document.querySelector(`[data-idx="${index}"]` ); //manera dinamica de acceder a un atributo
  if (element.className === "thecard") {
  
      element.style.transform = "rotateY(0)";
  
  }
  //console.log("hola flip")
}

