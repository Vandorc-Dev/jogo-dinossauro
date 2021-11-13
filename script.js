

const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');
let posicao = 0;

let sePulando = false;

function escutaKeyup(event){
    if(event.keyCode === 32){  //O 32 número corresponde a tecla ESPAÇO, notacção de keyCode
        if(!sePulando){
            pulo();
        }
    }

}

function pulo(){
    sePulando = true

    let upInterval = setInterval(() => {
        if(posicao >= 150){
            clearInterval(upInterval);

            //Descer
            let downInterval = setInterval(() => {
                if (posicao <= 0){
                    clearInterval(downInterval);
                    sePulando = false;
                }else{
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20);

        }else{
            //Subir
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
    }, 20); //Modificando esse número torna altera a velocidade de subir/descer
}

//Criando cactus


function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosicao = 1000;
    let randomTime = Math.random() * 5000;




    

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    fundo.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosicao -= 10;
        cactus.style.left = cactusPosicao + 'px';

        if(cactusPosicao < -60){
            clearInterval(leftInterval);
            fundo.removeChild(cactus);
        } else if (cactusPosicao > 0 && cactusPosicao < 60 && posicao < 60){
            //Game over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo!</h1>';
        } else {
            cactusPosicao -= 10;
            cactus.style.left = cactusPosicao + 'px'
        }
    }, 20)

    setTimeout(createCactus, randomTime)

}

createCactus();



document.addEventListener('keyup', escutaKeyup);



