class Personagem {
  constructor() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.width = 145 * 0.3;
    this.height = 88 * 0.3;
    this.maxLife = 4;
    this.vidas = this.maxLife;
    this.velocidade = 8;
  }
  checkCollision(x, y) {
    return (
      x >= this.x - this.width / 2 &&
      x <= this.x + this.width / 2 &&
      y >= this.y - this.height / 2 &&
      y <= this.y + this.height / 2
    );
  }
  // Essa função desenha o personagem na tela
  draw() {
    push();
    imageMode(CENTER);
    image(personagemImg, this.x, this.y, this.width, this.height);
    // rect(this.x, this.y, this.width, this.height);
    disparos.forEach((disparo) => {
      disparo.draw();
    });
    pop();
  }

  // Adiciona ações ao personagem de movimentação e disparo
  actions() {
    push();
    if (PLAYING && keyIsPressed) {
      if (
        (keyIsDown(keybind.up[0]) || keyIsDown(keybind.up[1])) &&
        this.y > 50
      ) {
        this.y -= this.velocidade;
      }
      if (
        (keyIsDown(keybind.down[0]) || keyIsDown(keybind.down[1])) &&
        this.y <= canvas.height - 40
      ) {
        this.y += this.velocidade;
      }
      if (
        (keyIsDown(keybind.left[0]) || keyIsDown(keybind.left[1])) &&
        this.x > 30
      ) {
        this.x -= this.velocidade;
      }
      if (
        (keyIsDown(keybind.right[0]) || keyIsDown(keybind.right[1])) &&
        this.x <= canvas.width - 40
      ) {
        this.x += this.velocidade;
      }
    }
    pop();
  }
  recebeuDano(quantidade) {
    this.vidas -= quantidade || 1;
  }
  reset() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.vidas = this.maxLife;
  }
}
