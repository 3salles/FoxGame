function geraMatrizDePosicoes(nLinhas, nColunas, largura, altura) {
  const matriz = [];
  for (let i = 0; i < nLinhas; i++) {
    for (let j = 0; j < nColunas; j++) {
      matriz.push({
        x: j * largura,
        y: i * altura
      });
    }
  }
  return matriz;
}
function drawText(value, size, cor, posX, posY,dropShadow=0){
  textSize(size);
  if (dropShadow){
      fill("black");
      text(value, posX+dropShadow, posY+dropShadow);
  }
  fill(cor);
  text(value, posX, posY);

}