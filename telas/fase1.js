function drawTelaFase1(){
  
 background(fundo1);
  
  
  image(aviao, xav,yav,70, 70)
  
  if (keyIsPressed){
    if (keyCode === UP_ARROW  && yav>50 && yav <=440) {
      yav=yav-10;
    }
    if (keyCode === DOWN_ARROW && yav>=50 && yav <=400) {
      yav=yav+10;
    }
  }
}