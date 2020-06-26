class Animacao {
  constructor(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY 
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
    this.isBlinking =false;
    this._backup = imagem;
  }
  
    exibe(){
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual].x, this.matriz[this.frameAtual].y, this.larguraSprite, this.alturaSprite);   
    
    this.anima();
  }
  blink(){
    this.isBlinking = true;
    this.imagem.filter(INVERT);
  }
  stopBlinking(){
    this.image = this._backup;
    this.isBlinking = false;
  }
  anima(){
    this.frameAtual++
    
    if(this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
    if (this.isBlinking){
      this.blink();
  }
  }
}