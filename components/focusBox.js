function focusBox(position){
  if(!position) return;
  push();
  rectMode(CENTER);
  translate(position.x, position.y);


  scale(scaleTaxa);
  if(scaleTaxa.toFixed(2) == 0.98){
    toggleScale = true;
  }else if(scaleTaxa.toFixed(2) == 1.1) {
    toggleScale = false;
  }
  if(toggleScale)
    scaleTaxa += 0.004;
  else if(!toggleScale ) scaleTaxa -= 0.005;

  fill("#ffffff00");
  stroke(theme.pallete[3]);
  strokeWeight(3);
  
  rect(0, 0, position.w+10, position.h+9, 4);
  pop();
}