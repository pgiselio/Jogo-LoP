/**
 * @param {number} x - posição do eixo x
 * @param {number} y - posição do eixo y
 * @param {number} w - largura do botão
 * @param {number} h - altura do botão
 * @param {string} texto - texto dentro do botão
 * @param {string} link - função a ser executada ao clicar no botão
 * @param {boolean} isActive - ativa/desativa interações do botão como hover e click `default: false`
 * @param {Object} style - estilo do botão
 * @param {string} style.backgroundColor - preenchimento padrão
 * @param {string} style.fontColor - cor da fonte
 * @param {number} style.fontSize - tamanho da fonte
 * @param {'normal' | 'bold' | 'italic' | 'bold italic'} style.fontStyle - estilo da fonte
 * @param {Object} style.hover - estilo do botão ao passar o mouse
 * @param {string} style.hover.backgroundColor - preenchimento ao passar o mouse
 * @param {string} style.hover.fontColor - cor da fonte ao passar o mouse
 * @param {boolean} forceHover - força o hover do botão `default: false`
 */
class assetCredit {
  constructor(x, y, texto, link, isActive) {
    this.pos = { x, y };
    this.texto = texto;
    this.link = link;
    this.textsize = textWidth(this.texto);
    this.isActive = isActive || false;
    this.draw();
  }

  draw() {
    push();
    textAlign(LEFT, CENTER);
    text(this.texto, this.pos.x, this.pos.y);
    this.button = drawButton(
        this.textsize + this.pos.x + 30,
        this.pos.y - 1,
        50,
        12,
        "link",
        () => window.open(this.link, "_blank"),
        this.isActive,
        {
          ...buttonBlackStyle,
          fontSize: 11,
          fontColor: "#CCC",
          hover: { ...buttonBlackStyle.hover, fontColor: "#CCC" },
        }
      );
    pop();
  }
}
