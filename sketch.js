function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  estoria = new Historia();
  estoria.setup()
  jogo.setup();
  cenas = {
    jogo, 
    telaInicial,
    gameOver,
    estoria
  }
}

function keyPressed() {
  jogo.keyPressed(key);
  introducao.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}      