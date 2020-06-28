let imgVulpes, imgGotinha, imgTroll, imgCacador;//Imagens persongens
let imgGalinha, imgCoelho, imgCoracao; // Imagens Power Ups
let imgGameOver, imgCenarios,   imgStart, imgHistoria, imgFinal; // Imagens de telas
let troll, vulpes, gotinha, cacador; // Personagens
let galinha, coelho; //Power Ups
let cenas, cenaAtual = 'start', start, gameOver, jogo, final; // Cenas do jogo
let cenarios, cenariosHistoria; // Cenarios do Jogo
let pontuacao, vida; // Objetos do jogo
let botaoGerenciador, botaoReiniciar; // Botões do jogo
let trilhaPrincipal, trilhaInicial, trilhaSonora; // Trilhas sonoras do jogo
let somLevouDano, somMorreu, somdoPulo;// Sons do jogo
let fonteStart, fonteGameOver; // Fontes de texto
let fita;


const cenarioCount = 5, historiaCount = 6;
const matrizVulpes = geradorDeMatriz(1, 4, 45, 35), matrizGotinha  = geradorDeMatriz(7, 4, 104, 104); 
const matrizTroll = geradorDeMatriz(5, 5, 400, 400), matrizCacador = geradorDeMatriz(2, 3, 170, 222);
let inimigos = [];