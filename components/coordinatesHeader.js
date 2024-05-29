function coordinatesHeader(){
  push();
  //Header com coor do mouse
  rectMode(CENTER);
  fill(theme.pallete[0]);
  rect(canvas.width/2, 10, canvas.width, 20);
  let debugText = "X: " + mouseX + " |  Y: " + mouseY;
  fill(theme.fontColor);
  textSize(13);
  let mouseCordinates = text(debugText + "FPS: " + frameRate(), canvas.width/2, 10);
  pop();
}