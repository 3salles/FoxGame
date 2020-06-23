let imagemCenario, imagensCenarios;
let imagemInimigo;
let imagemFimDeJogo
let cenarios;
let trilha;
let somDoPulo;
let somGameOver;
let personagem;
let inimigo;

const LAYER_SCENARIO_COUNT = 5;

function preload(){
  imagensCenarios = [];
  imagensCenarios.push(loadImage('imagens/cenario/layer1.png'),loadImage('imagens/cenario/layer2.png'),loadImage('imagens/cenario/layer3.png'),loadImage('imagens/cenario/layer4.png'),loadImage('imagens/cenario/layer5.png'))
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  //for(let i=0;i<LAYER_SCENARIO_COUNT;i++){    imagensCenarios.push(loadImage(`imagens/cenario/layer${1+i}.png`));
 // }
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/hiena.png');
  imagemFimDeJogo = loadImage('imagens/assets/gameover.png');
  trilha = loadSound('sons/trilha-jogo1.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/game-overSong.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenarios = [];
  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    cenarios.push(new Cenario(imagensCenarios[i], 2/(1/Math.max(i,1))));
  }

  personagem = new Personagem(geraMatrizDePosicoes(1, 4, 45, 35), imagemPersonagem, 0, 90, 110, 43, 36);
  inimigo = new Inimigo(geraMatrizDePosicoes(1, 4, 48, 34), imagemInimigo, width-144, 144, 102, 48, 34);
  frameRate(8);
  trilha.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  for(let i=0;i<LAYER_SCENARIO_COUNT;i++){
    let cenario = cenarios[i];
    cenario.exibe();

    cenario.move();

  }
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  
  if (personagem.estaColidindo(inimigo)){
    image(imagemFimDeJogo,0,0, width, height);  
    noLoop();
    trilha.stop();
    somGameOver.play();
  }
  
}