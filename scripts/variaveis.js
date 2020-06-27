let imagemgameover, imagemCenarios, imagemPersonagem, imagemInimigo, imagemInimigoGrande, imagemTelaInicial, imagemGameOver, imagemVida;
let somelemorrer, somdoPulo, somDojogo, somDano, somInicial;
let InimigoVoador, InimigoGrande, personagem, inimigo;
let cenarios, pontuacao;
let fonteTelaInicial, fonteGameOver, jogo, botaoGerenciador, telaInicial, botaoReiniciar;
let cenas, cenaAtual = 'estoria';
let gameOver, vida, cenariosIntroducao, imagemIntroducao, estoria;
let imagemFugindo, imagemHunter, imagemGalinha, imagemCoelho, fugindo, hunter;
let inimigoHunter;
let fita;

const cenarioCount = 5, introCount = 6;
const matrizPersonagem = geraMatrizDePosicoes(1, 4, 45, 35), matrizInimigo  = geraMatrizDePosicoes(7, 4, 104, 104); 
const matrizInimigoVoador = geraMatrizDePosicoes(5, 3, 200, 150), matrizInimigoGrande = geraMatrizDePosicoes(5, 5, 400, 400);
const matrizFugindo = geraMatrizDePosicoes(1, 4, 45, 35), matrizInimigoHunter = geraMatrizDePosicoes(2, 3, 170, 222);
let inimigos = [];