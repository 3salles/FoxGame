class Historia {
  constructor(){
    this.etapa = 0;
    this.etapaTexto = [
      "A floresta de Vulpes foi invadida por caçadores.\nEle conseguiu fugir, porém precisa de um novo lar.",
      "Para isto, ele terá que seguir caminho por uma floresta encantada cheia de monstros.\nO seu novo lar encontra-se a 10 mil km de distancia de onde ele está.",
      "Ajude Vulpes a fugir  dos caçadores e dos montros.\nAperte ESPAÇO ou SETA PARA CIMA para pular.",
      "Vulpes se alimenta de galinha e de coelho, pegue-os para ajudá-lo na jornada." 
    ]
  }
  setup(){
    cenariosHistoria = [];
    for(let i=0; i < historiaCount; i++){cenariosHistoria.push(new Cenario(imgHistoria[i],i*2));}
    let matrizVulpes = geradorDeMatriz(1, 4, 45, 35);
    this.vulpes = new Personagem(matrizVulpes, assetsHistoria["etapa2"], 0, 30, 90, 110, 43, 36);
    let matrizCacador = geradorDeMatriz(2, 3, 170, 222);
    cacador = new Inimigo(matrizCacador, assetsHistoria["etapa1"], width, 0, 170, 222, 170, 222, 15);
    let matrizCoelho = geradorDeMatriz(3, 3, 200, 238);
    let matrizGalinha = geradorDeMatriz(6, 4, 148, 110);
    this.bonus = [
      new Inimigo(matrizCoelho, assetsHistoria["etapa4_2"], width, 0, 100, 119, 200, 238, 20),
      new Inimigo(matrizGalinha, assetsHistoria["etapa4_1"], width, 0, 148, 110, 148, 110, 15)
    ]
    this.inimigos = [
      new Inimigo(matrizGotinha, imgGotinha, width - 52, 30, 52, 52, 104, 104, 20),
      new Inimigo(matrizTroll, imgTroll, width, 0, 200, 200, 400, 400, 15)
    ]
  }

  keyPressed(key){
    if (key === "Enter"){
      this.etapa++;
      if (this.etapa === 4){
        cenaAtual = "jogo";
      }
    }
    if (key === "x"){
      cenaAtual = "jogo";
    }
  }
  draw(){
      for(let i=0; i<historiaCount; i++){
        let contandoHistoria = cenariosHistoria[i];
        contandoHistoria.exibe();
        contandoHistoria.move();
      }

      textFont(fonteGameOver);
      switch(this.etapa){
        case 0:
          cacador.exibe();
          cacador.move();
          break;
        case 1:
          this.vulpes.exibe();
          break;
        case 2:
          for(let i=0; i< this.inimigos.length; i++){
            let enemy = this.inimigos[i];
            enemy.exibe();
            enemy.move();
          }
          break;
        case 3:
          for (let i=0; i<this.bonus.length; i++){
            let powers = this.bonus[i];
            powers.exibe();
            powers.move();
          }
          break;
      }
      fill("#FFFFFF60")
      rect(15, height-650, width-30, 250, 20);
      escreverTexto(this.etapaTexto[this.etapa], 80, "black", 30, height-600 )
      textSize(50);
      const textoPularHistoria = "Aperte X para pular história";
      escreverTexto(textoPularHistoria, 50, "black", width - textWidth(textoPularHistoria)-1000, 250);
      const textoContinuar = "Aperte ENTER para continuar"
      escreverTexto(textoContinuar, 50, "black", width - textWidth(textoContinuar)-30, 250);
  }
}