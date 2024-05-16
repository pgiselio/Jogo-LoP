function drawTelaFase1(){
  
 background(fundo1);
  
  
  image(aviao, xav,yav,70, 70)
  if(mouseIsPressed){
    disparoAtivo=true;
    yd= yav+35;
    xd= xav +50;
  }
  if(disparoAtivo){
    ellipse(xd, yd, 5,5)
    xd=xd+8;
  }

}