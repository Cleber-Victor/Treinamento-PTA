const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];


const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;  //seta uma constante com a largura da tela
const SCREEN_HEIGHT = screen.height;  //seta uma constante com a altura da tela

let xPosition = 500;  // define posição inicial no eixo X
let yPosition = 300;    // define posição inicial no eixo X

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] //define as teclas possiveis
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //define as direções possiveis

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp"){
        character.classList.add("turnUp");  //faz o boneco virar para cima
        yPosition -= VELOCITY; //muda a posição
        if(yPosition <= 0 ){         // todos esses ifs são para resolver colisao
            VELOCITY = 0;
            yPosition = 0;
        }

        if(xPosition <= 0 ){
            xPosition = 0;
        }

        if(xPosition >=  SCREEN_WIDTH){
            xPosition = SCREEN_WIDTH;
        }

        if (yPosition >= SCREEN_HEIGHT){
            yPosition = SCREEN_HEIGHT;
        }
        
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown"); //faz o boneco virar para baixo
        yPosition += VELOCITY; //muda a posição
        if (yPosition >= SCREEN_HEIGHT){  // todos esses ifs são para resolver colisao
            VELOCITY = 0;
            yPosition = SCREEN_HEIGHT;
        }

        if(xPosition <= 0 ){
            xPosition = 0;
        }

        if(xPosition >=  SCREEN_WIDTH){
            xPosition = SCREEN_WIDTH;
        }

        if(yPosition <= 0 ){
            yPosition = 0;
        }
        
        
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft"); //faz o boneco virar para a esquerda
        xPosition -= VELOCITY; //muda a posição
        if(xPosition <= 0 ){   // todos esses ifs são para resolver colisao
            VELOCITY = 0;
            xPosition = 0;
        }
        if(yPosition <= 0){
            yPosition = 0;
        }

        if (yPosition >= 900){
            yPosition = 900;
        }

        if(xPosition >=  1750){
            xPosition = 1750;
        }
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight"); //faz o boneco virar para a direita
        xPosition += VELOCITY; //muda a posição
        if(xPosition >=  1750){   // todos esses ifs são para resolver colisao
            VELOCITY = 0;
            xPosition = 1750;
        }
        if (yPosition >= 900){
            yPosition = 900;
        }

        if(yPosition <= 0){
            yPosition = 0;
        }

        if(xPosition <= 0 ){
            xPosition = 0;
        }


    }

    

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
