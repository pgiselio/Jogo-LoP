function drawTelaPause(){
  push();
  background("#4D4D4D91");
  fill("#FFFFFF00");
  stroke("#EEE4B1")
  strokeWeight(2)
  rect(canvas.width/2, canvas.height/2 + 10, 330, 260, 10)
  fill("#EEE4B1")
  textSize(30);
  stroke("black")
  text("PAUSADO", canvas.width/2, canvas.height/2 - 70 )
  let continuar = drawButton(canvas.width/2, canvas.height/2  - 15, 250, 40, "Continuar jogo", ()=> TELA = MENU);
  let controls = drawButton(canvas.width/2, canvas.height/2 + 35, 250, 40, "Controles", ()=> TELA = CONTROLS);
  let menu = drawButton(canvas.width/2, canvas.height/2 + 85, 250, 40, "Voltar para o menu", ()=> TELA = MENU);
  buttons.push(continuar, controls, menu);
  setInteractives(buttons);
  pop();
}
