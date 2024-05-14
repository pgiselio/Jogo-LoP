let scaleTaxa = 0.9;
let toggleScale = true;
function coordinatesHeader(){
  push();
  //Header com coor do mouse
  fill(theme.pallete[0]);
  rect(canvas.width/2, 10, canvas.width, 20);
  let debugText = "X: " + mouseX + " |  Y: " + mouseY;
  fill(theme.fontColor);
  textSize(13);
  let mouseCordinates = text(debugText, canvas.width/2, 10);
  pop();
}