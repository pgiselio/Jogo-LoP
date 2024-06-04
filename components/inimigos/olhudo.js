var olhudoImg;

class Olhudo {
  constructor(velocidade, maxLife) {
    this.x = canvas.width + 80;
    this.y = random(80, 350);
    this.width = 100 * 0.7;
    this.height = 56 * 0.7;
    this.velocidade = velocidade || 2;
    this.maxLife = maxLife || 2;
    this.life = this.maxLife;
    this.goingZigzag = true;
  }

  draw() {
    push();
      imageMode(CENTER);
      image(olhudoImg, this.x, this.y, this.width, this.height);
    pop();

    push();
    // Desenha a barra de vida
      rectMode(CORNER);
      fill("#000");
      rect(this.x - 40/2, this.y - 30, 40, 5);
      fill("#0f0");
      for(let i = 1; i <= this.life; i++){
        rect(this.x - 40/2 + (40*i)/this.maxLife - 40/this.maxLife, this.y - 30, 40/this.maxLife, 5);
      } 
    pop();

    if(showHitbox) {
      push();
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
    let colisao =
      this.checkCollision(
        personagem.x + personagem.width / 2 - 2,
        personagem.y + personagem.height / 2 - 2
      ) ||
      this.checkCollision(
        personagem.x - personagem.width / 2 + 2,
        personagem.y - personagem.height / 2 + 2
      ) ||
      this.checkCollision(
        personagem.x + personagem.width / 2 - 2,
        personagem.y - personagem.height / 2 + 2
      ) ||
      this.checkCollision(
        personagem.x - personagem.width / 2 + 2,
        personagem.y + personagem.height / 2 - 2
      );

    disparos.forEach((disparo) => {
      let disparoColisao = this.checkCollision(disparo.x, disparo.y);
      if (disparoColisao && disparo.disparoAtivo) {
        this.life--;
        if (this.life < 1) {
          this.reset();
          pontos += 15;
        }
        disparo.reset();
      }
    });

    if (colisao) {
      this.reset();
      personagem.recebeuDano();
    }
    if (this.x > -80) {
      this.x -= this.velocidade;
    } else {
      inimigosPerdidos++;
      this.reset();
      pontos -= 15;
    }
    pop();
  }
  moveY() {
    if (!(this.y < canvas.height - 50 && this.y > 80 )) {
      this.goingZigzag = !this.goingZigzag;
    }
    if(this.goingZigzag) {
      this.y += this.velocidade;
    }else {
      this.y -= this.velocidade;
    }
  }
  reset() {
    this.x = canvas.width + 80;
    this.y = random(80, canvas.height - 50);
    this.life = this.maxLife;
  }
}
