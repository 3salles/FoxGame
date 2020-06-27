function preload() {
  // Imagens
  imgHistoria = [];
  for (let i = 0; i < historiaCount; i++){
    imgHistoria.push(loadImage(`imagens/cenario/intro/layer${i + 1}.png`));
  }
  imgCenarios = [];
  for(let i = 0; i < cenarioCount; i++){
    imgCenarios.push(loadImage(`imagens/cenario/fase1/layer${1+i}.png`))
  }
  imgVulpes = loadImage('imagens/personagem/correndo.png');
  imgGotinha = loadImage('imagens/inimigos/gotinha.png');
  imgTroll = loadImage('imagens/inimigos/troll.png')
  imgCacador = loadImage('imagens/inimigos/hunter.png');
  imgGalinha = loadImage('imagens/bonus/chicken.png');
  imgCoelho = loadImage('imagens/bonus/coelho.png')
  imgCoracao = loadImage('imagens/assets/coracao.png')
  imgGameOver = loadImage('imagens/assets/game-over.png');
  imgStart = loadImage('imagens/cenario/telaInicial.png');

  // Sons
  trilhaPrincipal = loadSound('sons/trilha-jogo1.mp3');
  trilhaInicial = loadSound('sons/trilha-jogo2.mp3');
  somdoPulo = loadSound('sons/somPulo.mp3');
  somMorreu = loadSound('sons/gameover.mp3');
  somLevouDano = loadSound('sons/damage.mp3');
  
  // Fontes
  fonteStart = loadFont ('imagens/assets/fonteTelaInicial.otf');
  fonteGameOver = loadFont('imagens/assets/fonteGameOver.ttf');

  //JSON
  fita =  loadJSON('cartucho/fita.json');
}