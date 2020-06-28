class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenariosFase1 = [];
    for(let i = 0; i< cenarioCount; i++){cenariosFase1.push(new Cenario(imgFase1[i], i*2));}
    cenariosFase2 = [];
    for(let i = 0; i<cenarioCount2; i++){cenariosFase2.push(new Cenario(imgFase2[i], i*2));}
    cenariosFase3 = [];
    for(let i = 0; i<cenarioCount3; i++){cenariosFase3.push(new Cenario(imgFase3[i], i*2));}
    cenariosFase4 = [];
    for(let i = 0; i<cenarioCount; i++){cenariosFase4.push(new Cenario(imgFase4[i], i*2));}

    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);
    vulpes = new Personagem(matrizVulpes, imgVulpes, 0, 30, 90, 110, 43, 36);

    const gotinha = new Inimigo(matrizGotinha, imgGotinha, width - 52, 30, 52, 52, 104, 104, 20);
    const troll = new Inimigo(matrizTroll, imgTroll, width, 0, 200, 200, 400, 400, 15);
    const cacador = new Inimigo(matrizCacador, imgCacador, width, 0, 170, 222, 170, 222, 15);
    const coelho = new Inimigo(matrizCoelho, imgCoelho, width, 0, 100, 119, 200, 238, 20);
    const galinha = new Inimigo(matrizGalinha, imgGalinha, width, 0, 148, 110, 148, 110, 15);

    inimigos = [];
    inimigos.push(gotinha);
    inimigos.push(troll);
    inimigos.push(cacador);
    inimigos.push(coelho);
    inimigos.push(galinha);

    frameRate(10);
    trilhaSonora.loop();
    trilhaSonora.setVolume(0.1);
    
  }

  keyPressed(key) {
    if (key === 'ArrowUp' || 'Space') {
      vulpes.pula();
      somdoPulo.play();
    }
  }

  draw() {
    for(let i = 0; i<cenarioCount; i++){
      let cenarioFase1 = cenariosFase1[i];
      cenarioFase1.exibe();
      cenarioFase1.move();
    }
    if (pontuacao.pontos > 2500){
      for (let i=0; i<cenarioCount2; i++){
        let cenarioFase2 = cenariosFase2[i];
        cenarioFase2.exibe();
        cenarioFase2.move();
      }
    }
    if (pontuacao.pontos > 5000){
      for (let i=0; i<cenarioCount3; i++){
        let cenarioFase3 = cenariosFase3[i];
        cenarioFase3.exibe();
        cenarioFase3.move();
      }
    }
    if (pontuacao.pontos > 7500){
      for (let i=0; i<cenarioCount; i++){
        let cenarioFase4 = cenariosFase4[i];
        cenarioFase4.exibe();
        cenarioFase4.move();
      }
    }
    if (pontuacao.pontos >= 10000){
      cenaAtual = 'final';
    }
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    vulpes.exibe();
    vulpes.aplicaGravidade();


    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }


    if (vulpes.colidiu(inimigo)) {
      vida.perdeVida();
      vulpes.naoLevaDano();
      somLevouDano.play();
      if(vida.vidas === 0){
      gameOver.draw();
      trilhaSonora.stop();
      somMorreu.play();
      noLoop();
      }
    }
  }
}