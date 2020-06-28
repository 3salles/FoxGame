class Pontuacao{
  constructor() {
    this.pontos = 0
  }
  
  exibe() {
    fill('#fff');
    textSize(120);
    escreverTexto(parseInt(this.pontos),120,"white", width-textWidth(parseInt(this.pontos))-30, height-600);
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }
  adicionarBonus(pontos){
    this.pontos += pontos;
  }
}