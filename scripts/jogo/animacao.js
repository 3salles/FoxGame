class Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = height - altura;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.frameAtual =0;
  }
    exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura,   this.matriz[this.frameAtual].x, this.matriz[this.frameAtual].y, this.larguraSprite, this.alturaSprite);
    this.anima();
  }
    anima(){
    this.frameAtual++;
    
    if (this.frameAtual >= this.matriz.length -1){
      this.frameAtual = 0;
   }
    }
}