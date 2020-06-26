function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  jogo.setup();
  cenas = {
    jogo, 
    telaInicial,
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