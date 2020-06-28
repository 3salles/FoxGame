function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  trilhaSonora.loop();
  trilhaSonora.setVolume(0.1);
  inimigos = [];
  bonus = [];
  start = new TelaInicial();
  jogo = new Jogo();
  historia = new Historia();
  historia.setup();
  gameOver = new GameOver();
  jogo.setup();
  final = new TelaFinal();
  final.setup();
  cenas = {
    jogo, 
    start,
    historia,
    gameOver,
    final
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2, height/2);
}

function keyPressed() {
  cenas[cenaAtual].keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}      