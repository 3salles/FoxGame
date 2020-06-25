let imagemgameover, imagemCenarios, imagemPersonagem, imagemInimigo, imagemInimigoGrande, imagemTelaInicial;
let somelemorrer, somdoPulo, somDojogo;
let InimigoVoador, InimigoGrande, personagem, inimigo;
let cenarios, pontuacao;
let fonteTelaInicial, jogo, botaoGerenciador, telaInicial;
let cenas, cenaAtual = 'telaInicial';
let gameover;

let inimigosAtual = 0; 

const cenarioCount = 5;
const matrizPersonagem = geraMatrizDePosicoes(1, 4, 45, 35), matrizInimigo  = geraMatrizDePosicoes(7, 4, 104, 104); 
const matrizInimigoVoador = geraMatrizDePosicoes(5, 3, 200, 150), matrizInimigoGrande = geraMatrizDePosicoes(5, 5, 400, 400);
const inimigos = [];