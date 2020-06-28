class Bonus extends Animacao {
  constructor(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade) {
    super(matriz, imagem, x,variacaoY ,largura, altura, larguraSprite, alturaSprite,velocidade);
    this.velocidade = velocidade;
    this.x = width ;
  }
  move() {
    this.x = this.x - this.velocidade;
  }
  aparece(){
    this.x = width;
  }
  some(){
    this.x = -100;
  }
}