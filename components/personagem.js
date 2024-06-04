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
    personagemSprite.show(this.x, this.y);
    personagemSprite.imageWidth = this.width;
    personagemSprite.imageHeight = this.height;
    // Para a animação do sprite no último frame
    if(personagemSprite.currentFrame >= (personagemSprite.numFrames - 1) && isAnimating){
      isAnimating = false;
      personagemSprite.currentFrame = 0;
      personagemSprite.spriteLine = 0;
    }
    if(PLAYING && !PAUSED && isAnimating && frameCount % 10 == 0){
      personagemSprite.animate();
    }else if(frameCount % 10 == 0 && !PAUSED) {
      personagemSprite.animate()
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
    personagemSprite.spriteLine = 1;
    personagemSprite.currentFrame = 3;
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
