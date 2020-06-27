function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  start = new TelaInicial();
  gameOver = new GameOver();
  jogo.setup();
  cenas = {
    jogo, 
    start,
    gameOver
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}      