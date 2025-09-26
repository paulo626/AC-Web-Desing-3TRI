let numero = 0;
function Mudarcor(){
    
    var vermelho = document.getElementById("Vermelho");
    var amarelo = document.getElementById("Amarelo");
    var verde = document.getElementById("Verde");

    if(numero == 0){
        vermelho.style.opacity = "1";
        verde.style.opacity = "0.3";
        numero = 1;
    }
    else if(numero == 1){
        vermelho.style.opacity = "0.3";
        amarelo.style.opacity = "1";
        numero = 2;
    }
    else{
        amarelo.style.opacity = "0.3";
        verde.style.opacity = "1";
        numero = 0;
    }
}



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Jogar() {
  const placar1 = document.getElementById("PontosJogador1");
  const placar2 = document.getElementById("PontosJogador2");
  const Jogador = document.getElementById("Jogador");
  const tempo = Math.floor(Math.random() * 2000) + 1000;
  await delay(tempo);
  Jogador.style.backgroundColor = "yellow";
  const inicio = performance.now();

  return new Promise((resolve) => {
    
    const listener = (event) => {
      const fim = performance.now();
      const tempoReacao = (fim - inicio).toFixed(2);

      if (event.key === 'q' || event.key === 'Q') {
        placar1.textContent = parseInt(placar1.textContent) + 1;
        Refazer();
      } else if (event.key === 'p' || event.key === 'P') {
        placar2.textContent = parseInt(placar2.textContent) + 1;
        Refazer();
      }
    };

    const Refazer = () => {
      document.removeEventListener('keydown', listener);
      Jogador.style.backgroundColor = "rgb(60, 60, 60)";
      resolve();
    };

    document.addEventListener('keydown', listener);
  });
}
