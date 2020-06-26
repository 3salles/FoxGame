class Personagem extends Animacao {
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite, somPulo) {
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);
    
    this.somPulo = somPulo;
    this.y0 = height-altura-y;
    
    this.vPulo = 0;
    this.gravidade = 3;
    this.qntPulos = 2;
    this.alturaPulo = 25;
    this.invencivel = false;
  }
  
  pula() {
    if (this.qntPulos > 0) {
      this.vPulo = -this.alturaPulo;
      this.qntPulos--;
    
    }
  }
  aplicaGravidade() {
    this.y += this.vPulo;
    this.vPulo += this.gravidade;
    
    if (this.y > this.y0){
      this.y = this.y0;
      this.qntPulos = 2;
    }
  }
  tornarInvencivel() {
    this.invencivel = true;
    this.isBlinking = true;
    setTimeout(() => { 
      this.invencivel = false;
      this.isBlinking = false; 
    }, 1000);
  }
  estaColidindo(inimigo) {
    if (this,this.invencivel){ return false;}
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