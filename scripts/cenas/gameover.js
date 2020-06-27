class GameOver {
  constructor() {}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    background(0);
    image(imgGameOver, width / 2 - 200, height-600);
    fill("fff");
  }

  _texto() {
    textFont(fonteGameOver);
    textAlign(CENTER);
    textSize(100);
    text('Pontos: ' + parseInt(pontuacao.pontos) + " Km.", width / 2, height / 2);
  }
  _botao() {
    botaoReiniciar = new BotaoReiniciar("Reiniciar", width/2, height/7*5);
    botaoReiniciar.draw();
  }
}
