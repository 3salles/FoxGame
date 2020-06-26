let imagemgameover, imagemCenarios, imagemPersonagem, imagemInimigo, imagemInimigoGrande, imagemTelaInicial, imagemGameOver, imagemVida;
let somelemorrer, somdoPulo, somDojogo, somDano, somInicial;
let InimigoVoador, InimigoGrande, personagem, inimigo;
let cenarios, pontuacao;
let fonteTelaInicial, fonteGameOver, jogo, botaoGerenciador, telaInicial, botaoReiniciar;
let cenas, cenaAtual = 'telaInicial';
let gameOver, vida;

let fita;

const cenarioCount = 5;
const matrizPersonagem = geraMatrizDePosicoes(1, 4, 45, 35), matrizInimigo  = geraMatrizDePosicoes(7, 4, 104, 104); 
const matrizInimigoVoador = geraMatrizDePosicoes(5, 3, 200, 150), matrizInimigoGrande = geraMatrizDePosicoes(5, 5, 400, 400);
const inimigos = [];