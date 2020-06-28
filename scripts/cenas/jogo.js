class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenarios = [];
    for(let i = 0; i< cenarioCount; i++){cenarios.push(new Cenario(imgCenarios[i], i*2));}
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);
    vulpes = new Personagem(matrizVulpes, imgVulpes, 0, 30, 90, 110, 43, 36);

    const gotinha = new Inimigo(matrizGotinha, imgGotinha, width - 52, 30, 52, 52, 104, 104, 20);
    const troll = new Inimigo(matrizTroll, imgTroll, width, 0, 200, 200, 400, 400, 15);
    const cacador = new Inimigo(matrizCacador, imgCacador, width, 0, 170, 222, 170, 222, 15);

    inimigos = [];
    inimigos.push(gotinha);
    inimigos.push(troll);
    inimigos.push(cacador);

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
      let cenario = cenarios[i];
      cenario.exibe();
      cenario.move();
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