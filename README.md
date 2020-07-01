# Vulpes Aventura

Este jogo foi feito durante a semana de #ImersaoGameDev da Alura.

## História
Vulpes é uma raposa que teve sua floresta invadida por caçadores, então ele foge em busca de uma
nova floresta. No caminho, precisa enfrentar alguns monstros de uma floresta encantada e dos 
caçadores. 

## Mecanismo de jogo
O mecanismo do jogo consiste em Vulpes pular os inimigos enquantos eles vem ao seu encontro. Podendo também pegar uns power ups: a **galinha**, dando-lhe um escudo de 30 segundos sem levar dano, e o **coelho**, dando-lhe vida extra.
O jogo finaliza quando Vulpes chegar a 10 mil km de distância percorrida.

## Código
Dentro do arquivo helper.js, tem uma função chamada geradorDeMatriz. Ela é usada para pegar qualquer imagem de sprite e ler a posição de cada um, sem precisar fazer cálculos. A ordem dos parâmetos são: **número de linhas**, **número de colunas**, **largura da imagem individual do personagem** e **altura da imagem individual do personagem**.
Para saber a altura e largura da imagem do personagem, basta pegar a altura da imagem e dividir pelo número de linhas; e a largura da imagem e dividir pelo números de linhas.