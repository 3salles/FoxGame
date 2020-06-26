class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenarios = [];
    for(let i = 0; i< cenarioCount; i++){cenarios.push(new Cenario(imagemCenarios[i], i*2));}
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 90, 110, 43, 36);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 20);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 20);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    frameRate(10)
    somDoJogo.loop();
    somDoJogo.setVolume(0.1);

    
  }

  keyPressed(key) {
    if (key === 'ArrowUp' || 'Space') {
      personagem.pula();
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

    personagem.exibe();
    personagem.aplicaGravidade();


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

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      somDano.play();
      if(vida.vidas === 0){
      gameOver.draw();
      somDoJogo.stop();
      somelemorrer.play();
      noLoop();
      }
      
    }
  }

}