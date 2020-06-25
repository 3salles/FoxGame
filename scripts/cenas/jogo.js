class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    cenarios = [];
    for(let i = 0; i< cenarioCount; i++){cenarios.push(new Cenario(imagemCenarios[i], i*2));}
    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 90, 110, 43, 36);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 20, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 20, 100);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 100);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    frameRate(10)
    somDoJogo.loop();
    
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
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();


    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }

      inimigo.velocidade = parseInt(random(20, 50));
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imagemgameover, width / 2 - 200, height / 2.5);
      somDoJogo.stop();
      somelemorrer.play();
      noLoop();

    }
  }

}