export function dishable(id){
    document.querySelectorAll(`[data-id="${id}"]`).style.pointerEvents = 'none';
        
  }
  