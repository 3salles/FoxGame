class TelaFinal {
  constructor() {
    this.etapa = 0;
    this.etapaTexto = [
      "Parabéns!! Vulpes encontrou um novo lar.",
      "Obrigada!"
    ]
  }
  setup(){
    let matrizVulpes = geradorDeMatriz(1, 4, 45, 35);
    this.vulpes = new Personagem(matrizVulpes, assetsFinal["etapa2"], 0, 100, 90, 110, 43, 36);
    this.cenario = new Cenario(assetsFinal["etapa1"], 3);
  }
  keyPressed(key){
    if (key === "Enter"){
      this.etapa++;
      if(this.etapa === 2){
        cenaAtual = "start"
      }
    }
  }
  draw(){
    this.cenario.exibe();
    this.cenario.move();
    this.vulpes.exibe();
    textFont(fonteGameOver);
    fill("#FFFFFF60")
    rect(15, height-650, width-30, 250, 20);
    escreverTexto(this.etapaTexto[this.etapa], 80, "black", 30, height-600 );
    const textoContinuar = "Aperte ENTER para continuar"
    escreverTexto(textoContinuar, 50, "black", width - textWidth(textoContinuar)-30, 250);
  }
  
}