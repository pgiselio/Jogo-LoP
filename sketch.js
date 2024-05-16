const MENU = 'menu';
const CREDITS = 'credits';
const FASES = 'fases';
const PLAY = 'play';
const CONTROLS = 'controls';
const PAUSE = 'pause';

const FASE1 = 'fase1';


var TELA = MENU;
var PLAYING = false;

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
  }else if(TELA != PAUSE){
    voltarBtn = drawButton(30, 30, 40, 40, "🡨", ()=> TELA = MENU, {backgroundColor: theme.pallete[1]});
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
    drawTelaFase1();
   
    if(mouseIsPressed && ! disparoAtivo){
      disparoAtivo=true;
          yd= yav+35;
          xd= xav +50;
        }
        if(disparoAtivo){
          fill("red")
      ellipse(xd, yd, 10,5)
          xd=xd+12;
        }
        if (xd>640){
      disparoAtivo=false;
        }
  }else{
    PLAYING=false;
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
  onClickFases();
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
  naveControl();
}