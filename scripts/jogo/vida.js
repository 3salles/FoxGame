class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 40;
    this.altura = 40;
    this.margem = 15;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      image(imagemVida, this.margem+this.largura*i*1.5+this.margem*2, this.margem +sin(frameCount*(i+5)), this.largura, this.altura)
    }

  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++
    }
  }

  perdeVida() {
    this.vidas--
  }
}