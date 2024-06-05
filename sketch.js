const MENU = 'menu';
const CREDITS = 'credits';
const FASES = 'fases';
const CONTROLS = 'controls';
const PAUSE = 'pause';
const FASE1 = 'fase1';
const FASE2 = 'fase2';
const FASE3 = 'fase3';


//Variáveis de controle de estado do jogo
var TELA = MENU;
var PLAYING = false; //Jogo em execução e não pausado
var PAUSED = false;
var GAMEOVER = false;
var WIN = false;
var showHitbox = false;

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
var fundoFlorestaSky = [];
var fundoMar = [];
var fundoMenuImg;

var fasesPreview = [];

//Imagens do personagem
var personagemSpriteSheet;
var personagemSprite;
var vidasImg;

var explosionSpriteSheet;
var olhudoImg;
var roundedShape;

//Sons e músicas
var softcoreMusic;
var tiroSound;

let evilEmpireFont;
let canvas;

//Entidades do jogo
var personagem;
var inimigos = [];
var disparos = [];

//Variáveis de status de jogo
var pontos=0;
var inimigosPerdidos=0;

var musica = true;

function preload() {

  personagemSpriteSheet = loadImage('assets/littleWitch.png');
  softcoreMusic = loadSound('assets/sounds/softcore2.mp3');
  tiroSound = loadSound('assets/sounds/MagicSmite.wav');
  pedroImg = loadImage('assets/pedro.png');
  denisImg =loadImage("assets/denis.png");

  keysImg =loadImage("assets/keys.png");
  spaceBarImg =loadImage("assets/spacebarKey.png");
  enterKeyImg =loadImage("assets/enterKey2.png");

  fundoFloresta[0] =loadImage("assets/fundos/forest/parallax-forest-back-trees.png");
  fundoFloresta[1] =loadImage("assets/fundos/forest/parallax-forest-middle-trees.png");
  fundoFloresta[2] =loadImage("assets/fundos/forest/parallax-forest-front-trees.png");
  fundoFloresta[3] =loadImage("assets/fundos/forest/parallax-forest-lights.png");

  fundoFlorestaSky[0] =loadImage("assets/fundos/forestsky/parallax-mountain-bg.png");
  fundoFlorestaSky[1] =loadImage("assets/fundos/forestsky/parallax-mountain-montain-far.png");
  fundoFlorestaSky[2] =loadImage("assets/fundos/forestsky/parallax-mountain-mountains.png");
  fundoFlorestaSky[3] =loadImage("assets/fundos/forestsky/parallax-mountain-trees.png");
  fundoFlorestaSky[4] =loadImage("assets/fundos/forestsky/parallax-mountain-foreground-trees.png");

  fundoMar[0] =loadImage("assets/fundos/seasky/1.png");
  fundoMar[1] =loadImage("assets/fundos/seasky/2.png");
  fundoMar[2] =loadImage("assets/fundos/seasky/3.png");
  fundoMar[3] =loadImage("assets/fundos/seasky/4.png");

  fasesPreview[0] =loadImage("assets/imgs/previewFase1.png");
  fasesPreview[1] =loadImage("assets/imgs/previewFase2.png");

  explosionSpriteSheet = loadImage('assets/explosion.png');

  fundoMenuImg =loadImage("assets/fundos/background.jpg");
  vidasImg =loadImage("assets/vidas.gif");
  olhudoImg = loadImage("assets/olhudo.png");
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

  personagemSprite = new Sprite(personagemSpriteSheet, 58, 46, 8);
  personagem = new Personagem();

  disparos= [new Disparo(), new Disparo()];

  roundedShape = createGraphics(80, 80);
  roundedShape
    .noStroke()
    .ellipse(
      roundedShape.width / 2,
      roundedShape.height / 2,
      roundedShape.width,
      roundedShape.width
    );

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
    voltarBtn = drawButton(
      canvas.width - 70,
      canvas.height - 40,
      105,
      40,
      "         Voltar",
      () => (TELA = MENU),
      TELA != PAUSE && !PLAYING,
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
      TELA != PAUSE && !PLAYING,
      {...buttonBlackStyle, fontSize: 14, fontColor: "#BBB", hover: {fontColor: "#FFF"}},
      mouseOnButton(voltarBtn.pos.x, voltarBtn.pos.y, voltarBtn.pos.w, voltarBtn.pos.h)
    );
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
  }else if(TELA == FASE2){
    PLAYING=true;
    drawFase2();
  }else if(TELA == FASE3){
    PLAYING=true;
    drawFase3();
  }else{
    PLAYING=false;
    softcoreMusic.stop();
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
  let disparoDisponivel = disparos.find(
    (disparo) => disparo.disparoAtivo == false
  );
  if (disparoDisponivel) {
    disparoDisponivel.mouseTrigger();
    personagem.mouseTrigger();
  }
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
  if(disparoDisponivel) {
    disparoDisponivel.keyboardTrigger();
    personagem.keyboardTrigger();
  }
}

function resetaJogo(){
  personagem.reset();
  disparos.forEach((disparo) => {
    disparo.reset();
  });
  inimigos = [];
  inimigosPerdidos = 0;
  pontos = 0;
  GAMEOVER = false;
  WIN = false;
  PAUSED = false;
  personagemSprite.currentFrame = 0;
  personagemSprite.spriteLine = 0;
}