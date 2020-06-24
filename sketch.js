let imagemCenarios, imagemProtagonista, imagemHiena;
let gameOver, cenarios, protagonista, inimigoHiena;
let trilha, somDoPulo, somGameOver;

const cenarioCount = 5;

function preload(){
  imagemCenarios = [];
  for(let i=0;i<cenarioCount;i++){ imagemCenarios.push(loadImage(`imagens/cenario/layer${1+i}.png`));
  }
  imagemProtagonista = loadImage('imagens/personagem/correndo.png');
  imagemHiena = loadImage('imagens/inimigos/hiena.png');
  gameOver = loadImage('imagens/assets/gameover.png');
  trilha = loadSound('sons/trilha-jogo1.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/game-overSong.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenarios = [];
  for(let i=0;i<cenarioCount;i++){cenarios.push(new Cenario(imagemCenarios[i], i*2));}
  protagonista = new Personagem(geraMatrizDePosicoes(1, 4, 45, 35), imagemProtagonista, 0, 90, 110, 43, 36);
  inimigo = new Inimigo(geraMatrizDePosicoes(1, 4, 48, 34), imagemHiena, width-144, 144, 102, 48, 34);
  frameRate(8);
  trilha.loop();
}

function draw() {
  for(let i=0;i<cenarioCount;i++){
    let cenario = cenarios[i];
    cenario.exibe();
    cenario.move();
  }

  protagonista.exibe();
  protagonista.aplicaGravidade();


  inimigo.exibe();
  inimigo.move();
  
  
  if (protagonista.estaColidindo(inimigo)){
    image(gameOver,0,0, width, height);  
    noLoop();
    trilha.stop();
    somGameOver.play();
  }
  
}

function keyPressed(){
  if(key === 'ArrowUp'){
    protagonista.pula();
    somDoPulo.play();
  }
}
