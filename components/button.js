function mouseOnButton(x, y, w, h) {
  return (
    mouseX >= x - w / 2 &&
    mouseX <= x + w / 2 &&
    mouseY >= y - h / 2 &&
    mouseY <= y + h / 2
  );
}

/**
 * @param {number} x - posição do eixo x
 * @param {number} y - posição do eixo y
 * @param {number} w - largura do botão
 * @param {number} h - altura do botão
 * @param {string} texto - texto dentro do botão
 * @param {Function} onClick - função a ser executada ao clicar no botão
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
function drawButton(x, y, w, h, texto, onClick, isActive = false, style, forceHover = false) {
  push();

  let pos = { x, y, w, h };

  /**
   * Define a função a ser executada ao clicar no botão
   * @param {Function} callback
   */
  function setOnClick(callback) {
    if (typeof callback !== "function") return;
    onClick = callback;
  }

  // Style the text.
  textAlign(CENTER, CENTER);
  textStyle(style?.fontStyle || defaultButtonStyle.fontStyle);
  textSize(style?.fontSize || defaultButtonStyle.fontSize);
  if (!!!w) pos.w = textWidth(texto) + 30;
  if (!!!h) pos.h = (style?.fontSize || defaultButtonStyle.fontSize) + 20;

  let mouseOn = mouseOnButton(pos.x, pos.y, pos.w, pos.h);

  if ((!mouseOn || !isActive) && !forceHover) {
    fill(style?.backgroundColor || defaultButtonStyle.backgroundColor);
  } else {
    fill(style?.hover?.backgroundColor || defaultButtonStyle.hover.backgroundColor);
  }

  strokeWeight(1.2);
  if (
    mouseOn &&
    mouseIsPressed &&
    mouseButton === LEFT &&
    isActive &&
    onClick
  ) {
    stroke("#fff");
  }
  rectMode(CENTER);
  rect(pos.x, pos.y, pos.w, pos.h, 4);

  noStroke();
  if ((!mouseOn || !isActive) && !forceHover) {
    fill(style?.fontColor || defaultButtonStyle.fontColor);
  } else {
    fill(style?.hover?.fontColor || defaultButtonStyle.hover.fontColor);
  }
  text(texto, pos.x, pos.y);

  function click() {
    if (
      (mouseOn || JSON.stringify(focusing) === JSON.stringify(pos)) &&
      onClick
    ) {
      onClick();
    }
  }

  pop();
  return { texto, pos, mouseOn, click, isVisible: isActive, setOnClick };
}
