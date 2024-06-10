function drawTelaControls(){
    push();
    textStyle(BOLD);
    textSize(30);
  
    fill(theme.fontColor);
    text("Controles", canvas.width/2, 80);

    textStyle(NORMAL);
    textSize(20);
    let arrowsKeysImg = image(keysImg, canvas.width/2 - 180, 150, 92*0.8, 64*0.8, 0, 0, keysImg.width, 64);
    text("ou", canvas.width/2 - 78, 190);
    let wasdImg = image(keysImg, canvas.width/2 - 180 + 130, 150, 92*0.8, 64*0.8, 0, 64, keysImg.width, 64);
    text("para se mover.", canvas.width/2 + 110, 190);
    let mouseImg = image(keysImg, canvas.width/2 - 160, 250, 92*0.8, 64*0.8, 0, 128, keysImg.width, 64);
    text("ou", canvas.width/2 - 82, 285);
    let spaceImg = image(spaceBarImg, canvas.width/2 - 150 + 100, 270, spaceBarImg.width*0.9, spaceBarImg.height*0.9);
    text("para atirar.", canvas.width/2 + spaceBarImg.width*0.9 + 10, 285);

    fill("#430A5D50");
    noStroke();
    rect(canvas.width/2 + 16 - 160, 260, 16, 16, 26, 0, 0, 0);
    

    setInteractives([voltarBtn]);
    pop();
}

function drawTelaControlsPause(){
    background("#4d4d4db7");
    
    push();
    fill("#00000050");
    noStroke();
    rect(canvas.width/2, canvas.height/2, canvas.width, canvas.height)
    pop();

    fill(255);
    drawTelaControls()

    let voltar = drawButton(
        canvas.width - 70,
        canvas.height - 40,
        105,
        40,
        "         Voltar",
        () => (CONTROLSPAUSE = false),
        CONTROLSPAUSE,
        {
          fontSize: 17,
          hover: { backgroundColor: theme.pallete[0] },
        }
      );
      drawButton(
        voltarBtn.pos.x - 30,
        voltarBtn.pos.y,
        35,
        30,
        "Esc",
        undefined,
        CONTROLSPAUSE,
        {...buttonBlackStyle, fontSize: 14, fontColor: "#BBB", hover: {fontColor: "#FFF"}},
        mouseOnButton(voltarBtn.pos.x, voltarBtn.pos.y, voltarBtn.pos.w, voltarBtn.pos.h)
      );
    setInteractives([voltar]);
}