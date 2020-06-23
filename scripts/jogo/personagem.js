class Personagem extends Animacao {
   constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
     
     this.yInicial = height - this.altura;
     this.y = this.yInicial;
     
     this.velocidadeDoPulo = 0;
     this.gravidade = 3;
     this.pulosMax = 2;
   }
  pula () {
    if (this.pulosMax > 0) {
    this.velocidadeDoPulo = - 25;
    this.pulosMax = this.pulosMax - 1;
    }
  }
  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulosMax = 2;
    }
  }
  
  estaColidindo(inimigo) {
    const precisao = 0.7;
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura , inimigo.altura * precisao);
    
    return colisao;
  }
}
  