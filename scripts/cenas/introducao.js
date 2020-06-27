class Historia {
  constructor() {}
  setup(){
    cenariosIntroducao = [];
    for(let i = 0; i< introCount; i++){cenariosIntroducao.push(new Cenario(imagemIntroducao[i], i*2));}
  }
  draw() {
    this._imagemDeFundo();
    this._fundoTexto();
    this._texto();
    this._animacao();
  }
  _imagemDeFundo(){
    for(let i = 0; i<introCount; i++){
      let historia = cenariosIntroducao[i];
      historia.exibe();
      historia.move();
    }
  }
  _fundoTexto(){
    fill("#FFFFFF60");
    rect(15, height-650, width-30,250,20);
  }
  _texto(){
    const texto = "A floresta de Vulpes foi invadida por caçadores. Ele conseguiu fugir, porém precisa de um novo lar.\nEle ouviu rumores de uma floresta segura. Porém, ele precisa percorrer 10 mil km até lá.";
    drawText(texto,Math.max(width*0.02,20),  "black",30,height-600 + cos(frameCount*.3))
  }
  _animacao(){
    personagem.exibe();
  }
}