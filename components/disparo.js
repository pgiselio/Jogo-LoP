class Disparo {
  constructor() {
    this.x = personagem.x + personagem.width / 2;
    this.y = canvas.height / 2;
    this.disparoAtivo = false;
  }
  checkCollision(x, y) {
    return (
      x >= this.x - this.width / 2 &&
      x <= this.x + this.width / 2 &&
      y >= this.y - this.height / 2 &&
      y <= this.y + this.height / 2
    );
  }
  // Essa função desenha o disparo na tela
  draw() {
    push();
    if (this.disparoAtivo) {
      fill("red");
      ellipse(this.x, this.y, 10, 5);
    }
    if (this.disparoAtivo && PLAYING && !PAUSED) {
      this.x = this.x + 12;
    }
    if (this.x > canvas.width) {
      this.reset();
    }
    pop();
  }

  //Usada em sketch.js
  keyboardTrigger() {
    if (keyCode == keybind.shoot[0] || keyCode == keybind.shoot[1]) {
      this.start();
    }
  }
  mouseTrigger() {
    this.start();
  }
  start() {
    if (PLAYING) {
      this.y = personagem.y;
      this.x = personagem.x + personagem.width / 2;
      tiroSound.play();
      this.disparoAtivo = true;
    }
  }
  reset() {
    this.x = personagem.x + personagem.width / 2;
    this.disparoAtivo = false;
  }
}
