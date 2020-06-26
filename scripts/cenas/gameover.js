class GameOver {
  constructor() {}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    background(0);
    image(imagemgameover, width / 2 - 200, height-600);
    fill("fff");
  }

  _texto() {
    textFont(fonteGameOver);
    textAlign(CENTER);
    textSize(100);
    text('Seus Pontos: ' + parseInt(pontuacao.pontos), width / 2, height / 2);
  }
  _botao() {
    botaoReiniciar.y = height/7*5;
    botaoReiniciar.draw();
  }
}
