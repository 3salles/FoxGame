class Personagem extends Animacao {
  constructor(imagem, matriz, x, y, largura, altura, larguraSprite, alturaSprite, somPulo) {
    super(imagem, matriz, x, y, largura, altura, larguraSprite, alturaSprite);
    
    this.somPulo = somPulo;
    this.yInicial = height-altura-y;
    
    this.velocidadePulo = 0;
    this.gravidade = 3;
    this.pulosMax = 2;
    this.alturaPulo = 25;
    this.semDano = false;
  }
  
  pula() {
    if (this.pulosMax > 0) {
      this.velocidadePulo = -this.alturaPulo;
      this.pulosMax--;
    
    }
  }
  aplicaGravidade() {
    this.y += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;
    
    if (this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulosMax = 2;
    }
  }
  naoLevaDano(tempo) {
    this.semDano = true;
    this.piscando = true;
    setTimeout(() => { 
      this.semDano = false;
      this.piscando = false; 
    }, tempo);
  }
  colidiu(inimigo) {
    if (this.semDano){ return false;}
  const precisao = .7
  const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
  );
    
    return colisao;
  }
}