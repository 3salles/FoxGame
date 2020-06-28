function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  inimigos = [];
  cenarios = [];
  start = new TelaInicial();
  historia = new Historia();
  historia.setup();
  gameOver = new GameOver();
  jogo.setup();
  cenas = {
    jogo, 
    start,
    historia,
    gameOver
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2, height/2);
}

function keyPressed() {
  cenas[cenaAtual].keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}      