function drawTelaCreditos(){
  push();
  let roundedShape = createGraphics(80, 80);
  roundedShape.noStroke().ellipse(roundedShape.width / 2, roundedShape.height / 2, roundedShape.width, roundedShape.width);
  imageMode(CENTER);
  pedroImg.mask(roundedShape);
  denisImg.mask(roundedShape);
  image(pedroImg, 70, 100, 80, 80);
  image(denisImg, canvas.width - 70, 200, 80, 80);
  
  
  fill(theme.fontColor);
  textSize(18);
  textStyle(BOLD);
  text("Pedro Giselio de O. Silva", 230, 90);
  text("Denis Emanoel da S. Camara", canvas.width - 250, 190);
  
  textStyle(NORMAL);
  text("pgiselio@hotmail.com", 211, 115);
  text("dendenemanoel@gmail.com", canvas.width - 240, 215);
  
  
  
  
  textSize(18);
  text("WAIT!", canvas.width/2, 280);
  pop();
  setInteractives([voltarBtn]);
  
  
}