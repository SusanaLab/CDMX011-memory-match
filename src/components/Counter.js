export function score (){
    const element = document.getElementById("cardContent");
    const scoreElement = document.getElementById("score");
    let contador = 0;
        element.click = function () {
            contador++;
            scoreElement.textContent = "Score:" + contador;
        }
    return scoreElement
}