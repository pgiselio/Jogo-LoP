class Personagem {
  constructor() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.width = 145 * 0.3;
    this.height = 88 * 0.3;
    this.vidas = 3;
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
    image(aviaoImg, this.x, this.y, this.width, this.height);
    // rect(this.x, this.y, this.width, this.height);
    pop();
  }

  // Adiciona ações ao personagem de movimentação e disparo
  actions() {
    push();
    if (
      (mouseIsPressed ||
        keyIsDown(keybind.shoot[0]) ||
        keyIsDown(keybind.shoot[1])) &&
      !disparoAtivo
    ) {
      disparoAtivo = true;
      yDisparo = this.y;
      xDisparo = this.x + this.width / 2;
    }
    if (disparoAtivo) {
      fill("red");
      ellipse(xDisparo, yDisparo, 10, 5);
      xDisparo = xDisparo + 12;
    }
    if (xDisparo > 640) {
      disparoAtivo = false;
    }

    if (PLAYING && keyIsPressed) {
      if (
        (keyIsDown(keybind.up[0]) || keyIsDown(keybind.up[1])) &&
        this.y > 50
      ) {
        this.y -= 10;
      }
      if (
        (keyIsDown(keybind.down[0]) || keyIsDown(keybind.down[1])) &&
        this.y <= canvas.height - 40
      ) {
        this.y += 10;
      }
    }
    pop();
  }
}
