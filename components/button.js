function mouseOnButton(x, y, w, h) {
  return mouseX >= (x-(w/2)) && mouseX <= (x+(w/2)) && mouseY >= (y-(h/2)) && mouseY <= (y+(h/2));
  
}

function drawButton(x, y, w, h, texto, onClick, isVisible=false, style) {
  push()
  const pos = {x, y, w, h};
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
  rect(x, y, w, h, 4);
  
  
  // Style the text.
  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(style?.fontStyle || defaultStyle.fontStyle);
  textSize(style?.fontSize || defaultStyle.fontSize);  
  if(!mouseOn){
    fill(style?.fontColor || defaultStyle.fontColor);
  }else{
    fill(style?.hover?.fontColor || defaultStyle.hover.fontColor);
  }
  text(texto, x, y);
  function click(){    
    if((mouseOn || JSON.stringify(focusing) === JSON.stringify(pos)) && onClick){
      onClick();
    }
  }
  
  pop();
  return {texto, pos, mouseOn, click, isVisible}
}