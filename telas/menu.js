function drawTelaMenu(){
  fill(theme.fontColor);
  textSize(35);
  text("MENU", canvas.width/2, 140);
  
  jogarBtn = drawButton(canvas.width/2, canvas.height/2 - 30, 150, 45, "Jogar", () =>  TELA = FASES);
  
  controlesBtn = drawButton(canvas.width/2, jogarBtn.pos.y + jogarBtn.pos.h + 10, 150, 45, "Controles", () =>  TELA = CONTROLS);
  
  creditosBtn = drawButton(canvas.width/2, controlesBtn.pos.y + controlesBtn.pos.h + 10, 150, 45, "Créditos", () =>  TELA = CREDITS);
  
  testeDoisBtn = drawButton(canvas.width/2 + 160, controlesBtn.pos.y, 150, 45, "Teste 2", () =>  TELA = CONTROLS);
  
  testeBtn = drawButton(canvas.width/2 + 160, creditosBtn.pos.y, 100, 45, "Teste", () =>  TELA = PAUSE);
  
  setInteractives([testeDoisBtn, jogarBtn, testeBtn,controlesBtn, creditosBtn]);
  
}

//Consertar inconsistências, watch mudança de telas?
//Refatorar, tenho qse ctz q não precisa de tanta variável
function menuNavigation(){
  if((TELA == MENU || TELA != "fase") && !PLAYING){
    if(!focusing){
      resetFocus();
      setFocusedItem({x:0, y:0});
      return;
    }
    var includeskey = (e) => e == key;
    
    if(keybind.up.some(includeskey)){
      if(focusingCoordinates.y > 0 )
        focusingCoordinates.y--;
    }else if(keybind.down.some(includeskey)){
      if(focusingCoordinates?.y < interactivesCoordinates?.y?.length-1){
          focusingCoordinates.y++;
      }
    }else if(keybind.left.some(includeskey)){
      if(focusingCoordinates.x > 0 )
        focusingCoordinates.x--;
    }else if(keybind.right.some(includeskey)){
       if(focusingCoordinates?.x < interactivesCoordinates?.x?.length-1)
          focusingCoordinates.x++;
    }
    switch(key){
      case "Enter":
        if(focusing){
          let item = getInteractiveFocusedElement();
          item.click();
          resetFocus();
        }
        
      break;
    }
    if(key != "Escape" && key != "Enter")    
      setFocusedItem();
  }
}

function onClickMenu(){
  if(TELA == MENU){
    jogarBtn.click();
    controlesBtn.click();
    creditosBtn.click();
    testeBtn.click();
    
  } else if(voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU;
  }
}