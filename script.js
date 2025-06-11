const botao = document.getElementById("botao");
const conteudo = document.getElementById("conteudo");
const html = document.getElementById("html");

const data = new Date(2022, 6, 21); // 21 de julho de 2022
const tempo = document.getElementById("tempo");

function atualizarTempo() {
  const agora = new Date();
  let diferenca = agora - data;

  const segundosTotais = Math.floor(diferenca / 1000);

  const segundos = segundosTotais % 60;
  const minutos = Math.floor(segundosTotais / 60) % 60;
  const horas = Math.floor(segundosTotais / 3600) % 24;
  const dias = Math.floor(segundosTotais / 86400); // total de dias
  const anos = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);
  const diasRestantes = (dias % 365) % 30;

  tempo.innerHTML =
    `❤️Eu te amo fazem<br>` +
    `<strong>${anos}</strong> anos,<br>` +
    `<strong>${meses}</strong> meses,<br>` +
    `<strong>${diasRestantes}</strong> dias,<br>` +
    `<strong>${horas}</strong> horas,<br>` +
    `<strong>${minutos}</strong> minutos,<br>` +
    `<strong>${segundos}</strong> segundos❤️`;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);


/*
function atualizarTempo(){
  let data = new Date(2022, 7, 21);
  let hoje = new Date();
  const diferencams = hoje - data; // diferença em milissegundos
  const diferencaseg =  diferencams / 1000; // diferença em segundos
  const diferencamin = diferencaseg / 60; // diferença em minutos
  const diferencahora = diferencamin / 60; // diferença em horas
  const diferencadia = diferencahora / 24; // diferença em dias
  const diferencames = diferencadia / 30; // diferença em meses
  const diferencaano = diferencadia / 365; // diferença em anos
  const tempo = document.getElementById("tempo");
  tempo.innerHTML = `Eu te amo fazem <br>` + `${Math.floor(diferencaano)} anos, ` + `${Math.floor(diferencames)} meses, ` + `${Math.floor(diferencadia)} dias, ` + `${Math.floor(diferencahora)} horas, ` + `${Math.floor(diferencamin)} minutos e ` + `${Math.floor(diferencaseg)} segundos`; //exibe a diferença de tempo
                                 //transforma a data em string no formato pt-BR
}
setInterval(atualizarTempo, 1000); //atualiza a cada segundo
atualizarTempo(); //chama a função para atualizar o tempo ao carregar a página
*/

  function ajustarSlide() {
    const slide = document.querySelector(".slide-container");
    const largura = window.innerWidth;

    if (slide) {
      if (largura < 600) {
        slide.style.width = "300px";
        slide.style.height = "500px";
      } else {
        slide.style.width = "600px";
        slide.style.height = "600px";
      }
    }
  }

  window.onload = ajustarSlide; //ao carregar a página
  window.addEventListener("resize", ajustarSlide); //chama a funcao "ajustarSlide" toda vez que a pessoa redimensionar a janela

    botao.addEventListener("click", () => {
      botao.style.display = "none";
      conteudo.style.display = "block";
      conteudo.classList.add("aparecer");
      html.classList.add("cordefundo");

    });

    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg"];
    let atual = 0;

    function mudarSlide(direcao) {
  const img = document.getElementById("foto");
  
  // Apaga imagem com efeito
  img.style.opacity = 0;

  setTimeout(() => {
    atual += direcao;
    if (atual < 0) atual = fotos.length - 1;
    if (atual >= fotos.length) atual = 0;
    
    img.src = fotos[atual];

    // Reaparece com transição
    img.style.opacity = 1;
  }, 600); // tempo suficiente para a opacidade sumir
}

    

    /*
    function mudarSlide(direcao) {
      atual += direcao;
      if (atual < 0) atual = fotos.length - 1;
      if (atual >= fotos.length) atual = 0;
      document.getElementById("foto").src = fotos[atual];
    }
      */