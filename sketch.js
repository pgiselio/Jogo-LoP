const MENU = 'menu';
const CREDITS = 'credits';
const PLAY = 'play';
const CONTROLS = 'controls';
const PAUSE = 'pause';


var TELA = MENU;
var PLAYING = false;

let authorImg;
let voltarBtn, jogarBtn, controlesBtn, creditosBtn, testeDoisBtn, testeBtn;
let buttons = [];
let focusing;
let interactives = [];
let interactivesCoordinates = {};
let focusingCoordinates = {x: 0, y: 0};

let canvas;

function preload() {
  authorImg = loadImage('assets/author.png');
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.elt.addEventListener('contextmenu', e => e.preventDefault())
 
  textFont('Arial');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(theme.pallete[1]);
  rectMode(CENTER);
  
  coordinatesHeader();
  
  
  if(TELA == MENU){
    drawTelaMenu();
  }else if(TELA != PAUSE){
    voltarBtn = drawButton(30, 30, 40, 40, "🡨", ()=> TELA = MENU, {backgroundColor: theme.pallete[1]});
  }
  if(TELA == PLAY){
    drawTelaPlay();
  }
  if(TELA == CONTROLS){
    drawTelaControls();
  }
  if(TELA == CREDITS){
    drawTelaCreditos();
  }
  if(TELA == PAUSE){
    drawTelaPause();
  }else{
    buttons = [];
  }
  let navigationFocus = focusBox(focusing);
}

function mouseClicked() {
  resetFocus();
  onClickMenu();
  buttons.forEach((button) => 
    button.click()            
  );
}

function escDetect(){
  if(key === "Escape" && !PLAYING){
    TELA = MENU
    resetFocus();
  }
}

function keyPressed() {
  escDetect();
  menuNavigation();
}