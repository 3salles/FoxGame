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
