function drawTelaPause(){
  push();
  PLAYING = false;
  background("#4D4D4D91");
  fill("#FFFFFF00");
  stroke("#EEE4B1")
  strokeWeight(3)
  rect(canvas.width/2, canvas.height/2 + 10, 330, 260, 10)
  fill("#EEE4B1")
  textSize(30);
  stroke("black")
  text("PAUSADO", canvas.width/2, canvas.height/2 - 70 )
  let continuar = drawButton(canvas.width/2, canvas.height/2  - 15, 250, 40, "Continuar jogo", () => PAUSED = false, PAUSED);
  let controls = drawButton(canvas.width/2, canvas.height/2 + 35, 250, 40, "Controles", ()=> {TELA = CONTROLS; PAUSED = false}, PAUSED);
  let menu = drawButton(canvas.width/2, canvas.height/2 + 85, 250, 40, "Voltar para o menu", ()=> {TELA = MENU ; PAUSED = false}, PAUSED);
  setInteractives([continuar, controls, menu]);
  pop();
}