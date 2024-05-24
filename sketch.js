const MENU = 'menu';
const CREDITS = 'credits';
const FASES = 'fases';
const PLAY = 'play';
const CONTROLS = 'controls';
const PAUSE = 'pause';
const GAMEOVER = 'gameover';

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

var fundo1Img;
var aviaoImg;

var softcoreMusic;

let evilEmpireFont;

let canvas;

var personagem;
var olhudo1;
var olhudo2;
var pontos=0;
var vidas=4;

var disparos = [];
function preload() {
  softcoreMusic = loadSound('assets/sounds/softcore2.mp3');
  pedroImg = loadImage('assets/author.png');
  denisImg =loadImage("assets/denis.png")
  aviaoImg =loadImage("assets/nave.png")
  fundo1Img =loadImage("assets/fundo.gif")
  vidasImg =loadImage("assets/vidas.gif")
  monstroImg =loadImage("assets/olhudo.gif")
  evilEmpireFont = loadFont('assets/fonts/evil-empire.otf');
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.elt.addEventListener('contextmenu', e => e.preventDefault());
  softcoreMusic.loop();
  softcoreMusic.setVolume(0.2);

  personagem = new Personagem();
  olhudo1 = new Olhudo();
  olhudo2 = new Olhudo();

  disparos= [new Disparo(), new Disparo(), new Disparo()];
  textFont(theme.textFont);
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
  if(TELA == GAMEOVER){
    drawTelaGameover();
  }else{
    scaleTaxaGO = 0.8;
  }

  if(TELA == FASE1){
    PLAYING=true;
    drawFase1();
    
  }else{
    PLAYING=false;
    softcoreMusic.pause();
  }
  if(PAUSED){
    drawTelaPause();
    softcoreMusic.setVolume(0.02, 0.5);
  }else{
    softcoreMusic.setVolume(0.2, 0.5);
  }
  
  let navigationFocus = focusBox(focusing);
  if(PLAYING && !softcoreMusic.isPlaying()){
      softcoreMusic.play();
  }
}

function mouseClicked() {
  resetFocus();
  interactives.forEach((item) => {
      item.click();
  });
  let disparoDisponivel = disparos.find(disparo => disparo.disparoAtivo == false);
  if(disparoDisponivel) disparoDisponivel.mouseTrigger();
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

function keyReleased() {
  let disparoDisponivel = disparos.find(disparo => disparo.disparoAtivo == false);
  if(disparoDisponivel) disparoDisponivel.keyboardTrigger();
}