var includeskey = (e) => e == key;

//Consertar inconsistências, watch mudança de telas?
//Refatorar, tenho qse ctz q não precisa de tanta variável
function keyboardNavigation(){
    if((TELA == MENU || TELA != "fase") && !PLAYING  && key !== "Escape"){
      if(!focusing){
        resetFocus();
        setFocusedItem({x:0, y:0});
        return;
      }
      
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