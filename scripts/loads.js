function preload() {
  imagemIntroducao = [];
  for (let i = 0; i < introCount; i++){
    imagemIntroducao.push(loadImage(`imagens/cenario/intro/layer${i + 1}.png`));
  }
  imagemCenarios = [];
  for(let i = 0; i < cenarioCount; i++){
    imagemCenarios.push(loadImage(`imagens/cenario/fase1/layer${1+i}.png`));
  }
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemVida = loadImage('imagens/assets/coracao.png')
  imagemgameover = loadImage('imagens/assets/game-over.png');
  imagemFugindo = loadImage('imagens/personagem/fugindo.png')
  imagemGunter = loadImage('imagens/inimigos/hunter.png');
  imagemGalinha = loadImage('imagens/bonus/chicken.png');
  imagemCoelho = loadImage('imagens/bonus/coelho.png');
  somDoJogo = loadSound('sons/trilha-jogo1.mp3');
  somdoPulo = loadSound('sons/somPulo.mp3');
  somelemorrer = loadSound('sons/gameover.mp3');
  somDano = loadSound('sons/damage.mp3');
  somInicial = loadSound('sons/trilha-jogo2.mp3');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont ('imagens/assets/fonteTelaInicial.otf');
  fonteGameOver = loadFont('imagens/assets/fonteGameOver.ttf');
  fita =  loadJSON('cartucho/fita.json');
}