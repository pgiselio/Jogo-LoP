

//Consertar inconsistências, watch mudança de telas?
//Refatorar, tenho qse ctz q não precisa de tanta variável
function keyboardNavigation(){
    var includeskey = (e) => e == keyCode;
    if(!PLAYING  && key !== "Escape"){
      if(!focusing){
        resetFocus();
        setFocusedItem();
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

      if(key == "Enter" && focusing){
        let item = getInteractiveFocusedElement();
        if(item) item.click();
        resetFocus();
      }
      
      if(key != "Escape" && key != "Enter")    
        setFocusedItem();
    }
  }