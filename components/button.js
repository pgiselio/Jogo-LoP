function mouseOnButton(x, y, w, h) {
  return mouseX >= (x-(w/2)) && mouseX <= (x+(w/2)) && mouseY >= (y-(h/2)) && mouseY <= (y+(h/2));
  
}


/**
 * @param {number} x - posição do eixo x
 * @param {number} y - posição do eixo y 
 * @param {number} w - largura do botão
 * @param {number} h - altura do botão
 * @param {string} texto - texto dentro do botão
 * @param {Function} onClick - função a ser executada ao clicar no botão
 * @param {boolean} isVisible - visibilidade do botão/dispoliniplidade de clique (default: false)
 * @param {Object} style - estilo do botão
 * @param {string} style.backgroundColor - preenchimento padrão
 * @param {string} style.fontColor - cor da fonte
 * @param {number} style.fontSize - tamanho da fonte
 * @param {Object} style.hover - estilo do botão ao passar o mouse
 * @param {string} style.hover.backgroundColor - preenchimento ao passar o mouse
 * @param {string} style.hover.fontColor - cor da fonte ao passar o mouse
 */
function drawButton(x, y, w, h, texto, onClick, isVisible=false, style) {
  push()
  
  let pos = {x, y, w, h};
  let defaultStyle = {
    backgroundColor: "#5F374B00",
    fontColor: "#FFF",
    fontSize: 22,
    fontStyle: NORMAL,
    hover: {
      backgroundColor: "#430A5D",
      fontColor: "#FFF",
    },
  }

  // Style the text.
  textAlign(CENTER, CENTER); 
  textStyle(style?.fontStyle || defaultStyle.fontStyle);
  textSize(style?.fontSize || defaultStyle.fontSize);
  if(!!!w) pos.w = (textWidth(texto) + 30);
  if(!!!h) pos.h = ((style?.fontSize || defaultStyle.fontSize) + 20);
 
  let mouseOn = mouseOnButton(pos.x, pos.y, pos.w, pos.h);
  
  if(!mouseOn){
    fill(style?.backgroundColor || defaultStyle.backgroundColor);
  }else{
    fill(style?.hover?.backgroundColor || theme.pallete[0]);
  }
  
  strokeWeight(1.2);
  if(mouseOn && mouseIsPressed && mouseButton === LEFT){
    stroke("#fff");
  }
  rectMode(CENTER);
  rect(pos.x, pos.y, pos.w , pos.h, 4);
  
  
  noStroke();
  if(!mouseOn){
    fill(style?.fontColor || defaultStyle.fontColor);
  }else{
    fill(style?.hover?.fontColor || defaultStyle.hover.fontColor);
  }
  text(texto, pos.x, pos.y);
  function click(){    
    if((mouseOn || JSON.stringify(focusing) === JSON.stringify(pos)) && onClick){
      onClick();
    }
  }
  
  pop();
  return {texto, pos, mouseOn, click, isVisible}
}