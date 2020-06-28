function preload() {
  // Cenarios
  imgHistoria = [];
  for (let i = 0; i < historiaCount; i++){
    imgHistoria.push(loadImage(`imagens/cenario/intro/layer${i + 1}.png`));
  }
  imgFase1 = [];
  for(let i = 0; i < cenarioCount; i++){
    imgFase1.push(loadImage(`imagens/cenario/fase1/layer${1+i}.png`));
  }
  imgFase2 = [];
  for (let i = 0; i < cenarioCount2; i++){
    imgFase2.push(loadImage(`imagens/cenario/fase2/layer${i+1}.png`));
  }
  imgFase3 = [];
  for (let i=0; i < cenarioCount3; i++){
    imgFase3.push(loadImage(`imagens/cenario/fase3/layer${i+1}.png`));
  }
  imgFase4 = [];
  for (let i=0; i<cenarioCount; i++){
    imgFase4.push(loadImage(`imagens/cenario/fase4/layer${i+1}.png`));
  }

  // Imagens
  imgVulpes = loadImage('imagens/personagem/correndo.png');
  imgGotinha = loadImage('imagens/inimigos/gotinha.png');
  imgTroll = loadImage('imagens/inimigos/troll.png')
  imgCacador = loadImage('imagens/inimigos/hunter.png');
  imgGalinha = loadImage('imagens/bonus/chicken.png');
  imgCoelho = loadImage('imagens/bonus/coelho.png')
  imgCoracao = loadImage('imagens/assets/coracao.png')
  imgGameOver = loadImage('imagens/assets/game-over.png');
  imgStart = loadImage('imagens/cenario/telaInicial.png');
  imgFinal = loadImage('imagens/cenario/final/outono.png');

  // Sons
  trilhaSonora = loadSound('sons/trilhaSonora.mp3');
  somPowerUp = loadSound('sons/bonus.mp3');
  somdoPulo = loadSound('sons/somPulo.mp3');
  somMorreu = loadSound('sons/gameover.mp3');
  somLevouDano = loadSound('sons/damage.mp3');
  
  // Fontes
  fonteStart = loadFont ('imagens/assets/fonteTelaInicial.otf');
  fonteGameOver = loadFont('imagens/assets/fonteGameOver.ttf');

  //JSON
  fita =  loadJSON('cartucho/fita.json');

  //Arquivos para a historia
  assetsHistoria = {
    etapa1: loadImage('imagens/inimigos/hunter.png'),
    etapa2: loadImage('imagens/personagem/correndo.png'),
    etapa3_1: loadImage('imagens/inimigos/gotinha.png'),
    etapa3_2: loadImage('imagens/inimigos/troll.png'),
    etapa4_1: loadImage('imagens/bonus/chicken.png'),
    etapa4_2: loadImage('imagens/bonus/coelho.png')
  }
  
  //Arquivos para o final
  assetsFinal = {
    etapa1: loadImage('imagens/cenario/final/outono.png'),
    etapa2: loadImage('imagens/personagem/correndo.png')
  }

}