const MENU = 'menu';
const CREDITS = 'credits';
const FASES = 'fases';
const PLAY = 'play';
const CONTROLS = 'controls';
const PAUSE = 'pause';

const FASE1 = 'fase1';


var TELA = MENU;
var PLAYING = false;
var PAUSED = false;

let pedroImg, denisImg;
let voltarBtn, jogarBtn, controlesBtn, creditosBtn, testeDoisBtn, testeBtn;

let fase1Btn, fase2Btn, fase3Btn, fase4Btn;

let buttons = [];
let focusing;
let interactives = [];
let interactivesCoordinates = {};
let focusingCoordinates = {x: 0, y: 0};

var fundo1;
var aviao;
var xav=40;
var yav=50;
var xd;
var yd;
var disparoAtivo=false;

let canvas;

function preload() {
  pedroImg = loadImage('assets/author.png');
  denisImg =loadImage("assets/denis.png")
  aviao =loadImage("assets/nave.png")
  fundo1 =loadImage("assets/fundo.gif")
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
  }else{
    voltarBtn = drawButton(30, 30, 40, 40, "🡨", (()=> TELA = MENU), (TELA != PAUSE && !PLAYING), {backgroundColor: theme.pallete[1]});
  }
  if(TELA == FASES){
    drawTelaFases();
  }
  if(TELA == CONTROLS){
    drawTelaControls();
  }
  if(TELA == CREDITS){
    drawTelaCreditos();
  }
  if(TELA == FASE1){
    PLAYING=true;
    drawFase1();
  }else{
    PLAYING=false;
  }
  if(PAUSED){
    drawTelaPause();
  }
  
  let navigationFocus = focusBox(focusing);

}

function mouseClicked() {
  resetFocus();
  interactives.forEach((item) => {
      item.click();
  });
}

function escDetect(){
  if(key === "Escape" && !PLAYING && !PAUSED){
    TELA = MENU
    resetFocus();
  }
  if(key === "Escape" && PAUSED){
    PAUSED = false;
    resetFocus();
  }
  if(key === "Escape" && PLAYING){
    PAUSED = true;
    resetFocus();
  }
}

function keyPressed() {
  escDetect();
  keyboardNavigation();
}