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
  }

  draw() {
    push();
    imageMode(CENTER);
    image(olhudoImg, this.x, this.y, this.width, this.height);
    // Use a linha abaixo para verificar a área de colisão do inimigo
    // rect(this.x, this.y, this.width, this.height);
    pop();
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
      this.reset();
      pontos -= 15;
    }
    pop();
  }
  reset() {
    this.x = canvas.width + 80;
    this.y = random(80, canvas.height - 50);
    this.life = this.maxLife;
  }
}
