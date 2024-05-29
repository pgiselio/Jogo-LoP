const MENU = 'menu';
const CREDITS = 'credits';
const FASES = 'fases';
const CONTROLS = 'controls';
const PAUSE = 'pause';
const FASE1 = 'fase1';


//Variáveis de controle de estado do jogo
var TELA = MENU;
var PLAYING = false; //Jogo em execução e não pausado
var PAUSED = false;
var GAMEOVER = false;
var WIN = false;

let pedroImg, denisImg;

let voltarBtn;

let buttons = [];

//Gerenciamento de foco dos itens clicáveis ou selecionáveis com o teclado
let focusing;
let interactives = [];
let interactivesCoordinates = {};
let focusingCoordinates = {x: 0, y: 0};

//Imagens dos controles
var keysImg;
var spaceBarImg;
var enterKeyImg;

//Imagens do fundo
var fundoFloresta = [];
var fundoMenuImg;

var personagemImg;
var vidasImg;
var olhudoImg;

var softcoreMusic;
var tiroSound;

let evilEmpireFont;

let canvas;

//Entidades do jogo
var personagem;
var inimigos = [];
var disparos = [];

//Variáveis de controle de jogo
var pontos=0;
var musica = true;
let tiroSoundPlayed = false;

function preload() {
  softcoreMusic = loadSound('assets/sounds/softcore2.mp3');
  tiroSound = loadSound('assets/sounds/tiroSound.wav');
  pedroImg = loadImage('assets/author.png');
  denisImg =loadImage("assets/denis.png");
  personagemImg =loadImage("assets/nave.png");

  keysImg =loadImage("assets/keys.png");
  spaceBarImg =loadImage("assets/spacebarKey.png");
  enterKeyImg =loadImage("assets/enterKey2.png");
  fundoFloresta[0] =loadImage("assets/fundos/forest/parallax-forest-back-trees.png");
  fundoFloresta[1] =loadImage("assets/fundos/forest/parallax-forest-middle-trees.png");
  fundoFloresta[2] =loadImage("assets/fundos/forest/parallax-forest-front-trees.png");
  fundoFloresta[3] =loadImage("assets/fundos/forest/parallax-forest-lights.png");
  fundoMenuImg =loadImage("assets/fundos/background.jpg");
  vidasImg =loadImage("assets/vidas.gif");
  olhudoImg = loadImage("assets/olhudo.gif");
  evilEmpireFont = loadFont('assets/fonts/evil-empire.otf');
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.elt.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('visibilitychange', () => {
    if(document.hidden && PLAYING && !PAUSED){
      PAUSED = true;
    }
  
  });
  softcoreMusic.loop();
  softcoreMusic.setVolume(0.2);
  softcoreMusic.pause();

  personagem = new Personagem();

  disparos= [new Disparo(), new Disparo()];

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
    voltarBtn = drawButton( canvas.width - 70, canvas.height - 40, 105, 40, "[Esc] Voltar", (()=> TELA = MENU), (TELA != PAUSE && !PLAYING), {backgroundColor: theme.pallete[1], fontSize: 17, hover: {backgroundColor: theme.pallete[0]}});
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
    softcoreMusic.pause();
  }
  if(GAMEOVER){
    drawTelaGameover();
  }else{
    scaleTaxaGO = 0.8;
  }
  if(WIN){
    drawTelaWin();
  }else{
    scaleTaxaW = 0.8;
  }
  if(PAUSED && !GAMEOVER && !WIN ){
    drawTelaPause();
    softcoreMusic.setVolume(0.02, 0.5);
  }else if(!GAMEOVER){
    softcoreMusic.setVolume(0.2, 0.5);
  }
  

  //o focusBox deve ficar sempre no final
  focusBox(focusing);
  if(PLAYING && !softcoreMusic.isPlaying() && musica){
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

function escTrigger(){
  if(key === "Escape" && !PLAYING && !PAUSED){
    TELA = MENU
    resetFocus();
  }
  if(key === "Escape" && PAUSED && !GAMEOVER && !WIN){
    PAUSED = false;
    resetFocus();
  }
  if(key === "Escape" && PLAYING && !GAMEOVER && !WIN){
    PAUSED = true;
    resetFocus();
  }
}

function keyPressed() {
  escTrigger();
  keyboardNavigation();
}

function keyReleased() {
  let disparoDisponivel = disparos.find(disparo => disparo.disparoAtivo == false);
  if(disparoDisponivel) disparoDisponivel.keyboardTrigger();
}