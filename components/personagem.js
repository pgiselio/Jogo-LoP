let isAnimating = false;
class Personagem {
  constructor() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.width = 58 * 1.1;
    this.height = 46 * 1.1;
    this.maxLife = 4;
    this.vidas = this.maxLife;
    this.velocidade = 10;
    this.sprite = new Sprite(personagemSpriteSheet, 58, 46, 8);
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
    this.sprite.show(this.x, this.y);
    this.sprite.imageWidth = this.width;
    this.sprite.imageHeight = this.height;
    // Para a animação do sprite no último frame
    if(this.sprite.currentFrame >= (this.sprite.numFrames - 1) && isAnimating){
      isAnimating = false;
      this.sprite.spriteLine = 0;
    }
    if(PLAYING && !PAUSED && isAnimating && frameCount % 10 == 0){
      this.sprite.animate();
    }else if(frameCount % 10 == 0 && !PAUSED) {
      this.sprite.animate()
    }
    disparos.forEach((disparo) => {
      disparo.draw();
    });
    pop();
    
    if(showHitbox){
      push();
      rect(personagem.x + personagem.width / 2 - 2, personagem.y + personagem.height / 2 - 2, 5, 5);
      rect(personagem.x - personagem.width / 2 + 2, personagem.y - personagem.height / 2 + 2, 5, 5);
      rect(personagem.x + personagem.width / 2 - 2, personagem.y - personagem.height / 2 + 2, 5, 5);
      rect(personagem.x - personagem.width / 2 + 2, personagem.y + personagem.height / 2 - 2, 5, 5);

        noFill();
        stroke("#f00");
        rect(this.x, this.y, this.width, this.height);
      pop();
    }
  }

  // Adiciona ações ao personagem de movimentação e disparo
  actions() {
    push();
    if (PLAYING && keyIsPressed) {
      if (
        (keyIsDown(keybind.up[0]) || keyIsDown(keybind.up[1])) &&
        this.y > this.height + 30
      ) {
        this.y -= this.velocidade;
      }
      if (
        (keyIsDown(keybind.down[0]) || keyIsDown(keybind.down[1])) &&
        this.y <= canvas.height - this.height/2 - 15
      ) {
        this.y += this.velocidade;
      }
      if (
        (keyIsDown(keybind.left[0]) || keyIsDown(keybind.left[1])) &&
        this.x > this.width/2
      ) {
        this.x -= this.velocidade;
      }
      if (
        (keyIsDown(keybind.right[0]) || keyIsDown(keybind.right[1])) &&
        this.x <= canvas.width - this.width/2
      ) {
        this.x += this.velocidade;
      }
    }
    pop();
  }
  mouseTrigger() {
    if(PLAYING && !PAUSED){
        this.shoot();
    }
  }
  keyboardTrigger() {
    if(PLAYING && !PAUSED){
      if((keyCode == keybind.shoot[0] || keyCode == keybind.shoot[1])){
        this.shoot();
      }
    }
  }
  shoot() {
    this.sprite.spriteLine = 1;
    this.sprite.currentFrame = 3;
    isAnimating = true;
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
