var olhudoImg;

class Olhudo {
  constructor(velocidade, maxLife) {
    this.width = 100 * 0.7;
    this.height = 56 * 0.7;
    this.x = canvas.width + 80;
    this.y = random(this.height + 50, canvas.height - 50);
    this.velocidade = velocidade || 2;
    this.maxLife = maxLife || 2;
    this.life = this.maxLife;
    this.goingZigzag = true;
    this.sprite = new Sprite(olhudoImg, 100, 56, 6);
    this.killSprite = new Sprite(explosionSpriteSheet, 32, 32, 6);
  }

  draw() {
    push();
    imageMode(CENTER);
    this.sprite.show(this.x, this.y);
    this.sprite.imageWidth = this.width;
    this.sprite.imageHeight = this.height;
    if (frameCount % 15 == 0 && !PAUSED) this.sprite.animate();
    pop();

    push();
    // Desenha a barra de vida
    rectMode(CORNER);
    fill("#000");
    rect(this.x - 40 / 2, this.y - 30, 40, 5);
    fill("#0f0");
    for (let i = 1; i <= this.life; i++) {
      rect(
        this.x - 40 / 2 + (40 * i) / this.maxLife - 40 / this.maxLife,
        this.y - 30,
        40 / this.maxLife,
        5
      );
    }
    pop();

    if (this.life < 1) {
      push();
      imageMode(CENTER);

      this.killSprite.show(this.x, this.y);
      this.killSprite.imageWidth = this.width;
      this.killSprite.imageHeight = this.width;
      if (
        frameCount % 2 == 0 &&
        this.killSprite.currentFrame <= this.killSprite.numFrames
      ) {
        this.killSprite.animate();
      } else if (
        this.killSprite.currentFrame >=
        this.killSprite.numFrames - 1
      ) {
        this.reset();
      }
      pop();
    }

    if (showHitbox) {
      push();
      rect(this.x + this.width / 2 - 2, this.y + this.height / 2 - 2, 5, 5);
      rect(this.x - this.width / 2 + 2, this.y - this.height / 2 + 2, 5, 5);
      rect(this.x + this.width / 2 - 2, this.y - this.height / 2 + 2, 5, 5);
      rect(this.x - this.width / 2 + 2, this.y + this.height / 2 - 2, 5, 5);
      noFill();
      stroke("#f00");
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
  }
  checkCollision(x, y) {
    return (
      x >= this.x - this.width / 2 &&
      x <= this.x + this.width / 2 &&
      y >= this.y - this.height / 2 &&
      y <= this.y + this.height / 2
    );
  }
  setMaxLife(maxLife) {
    this.maxLife = maxLife;
  }
  move() {
    push();

    // Verifica se houve colisão com o personagem
    let houveColisao =
      checkRectsCollision(this, personagem) ||
      checkRectsCollision(personagem, this);

    disparos.forEach((disparo) => {
      let disparoColisao = this.checkCollision(disparo.x, disparo.y);
      if (this.life > 0 && disparoColisao && disparo.disparoAtivo) {
        this.life--;
        if (this.life < 1) {
          pontos += 15;
        }
        disparo.reset();
      }
    });

    if (this.life > 0 && houveColisao) {
      this.life = 0;
      personagem.recebeuDano();
    }

    if (this.x > -80) {
      this.x -= this.velocidade;
    } else if (this.life > 0) {
      inimigosPerdidos++;
      this.reset();
      pontos -= 15;
    }
    pop();
  }
  moveY() {
    if (!(this.y < canvas.height - 50 && this.y > this.height + 50)) {
      this.goingZigzag = !this.goingZigzag;
    }
    if (this.goingZigzag) {
      this.y += this.velocidade;
    } else {
      this.y -= this.velocidade;
    }
  }
  reset() {
    this.x = canvas.width + 80;
    this.y = random(this.height + 50, canvas.height - 50);
    this.life = this.maxLife;
    this.killSprite.currentFrame = 0;
  }
}
