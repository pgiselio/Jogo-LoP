
function getInteractiveFocusedElement(){
  let first = interactives.find((e) => {
      return (e.pos.x == interactivesCoordinates?.x[focusingCoordinates?.x] && e.pos.y ==interactivesCoordinates?.y[focusingCoordinates?.y]);
    })
  return first;
}
function setFocusedItem(indice) {
  
  let item = getInteractiveFocusedElement();
  if(item) focusing = item.pos;
  
  // console.log(indice);
  // if(indice>= 0 && indice <= interactives.length){
  //   let item = interactives[indice];
  //   if(item?.pos) focusing = item.pos;
  // }else {
  //   focusing = undefined;
  // }
}

function resetFocus(){
  focusing = undefined;
  focusingCoordinates = {x: 0, y: 0}
}

function setInteractives(list){
  if(keyIsPressed){
    let y = [];
    let x = [];
    interactivesCoordinates = {x, y};
    
  list.forEach((item) =>{
   if (!y.includes(item.pos.y)) {
      y.push(item.pos.y);
    }
    if (!x.includes(item.pos.x)) {
      x.push(item.pos.x);
    }
  });
    interactivesCoordinates.x.sort((a, b) => {
    if(a < b ) return -1;
    else if(a > b) return 1;
    return 0;
  })
    interactivesCoordinates.y.sort((a, b) => {
    if(a < b ) return -1;
    else if(a > b) return 1;
    return 0;
  })
  interactives = list;
  }
}