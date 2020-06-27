class TelaInicial {
  constructor() {}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imgStart, 0, 0, width, height);
  }

  _texto() { 
    textFont(fonteStart);
    let tituloCor = [80 + sin(frameCount*0.1)*25, 41, 93 + sin(frameCount*0.1)*25];
    escreverTexto("Vulpes", width/12+10, tituloCor, width/3.5, height/2-(width/12)+20+5*sin(frameCount*.1), 5);
    escreverTexto("Aventura", width/12, tituloCor, width/2.5, height/2+5*cos(frameCount*.1), 5);
  }
  _botao() {
    botaoGerenciador.y = height/7*5;
    botaoGerenciador.draw();
  }
}