export function flip(dataId){
  const element = document.querySelector(`[data-id="${dataId}"]` );
  if (element.className === "thecard") {
  
      element.style.transform = "rotateY(180deg)";
  
  }
  console.log("hola flip")
}

