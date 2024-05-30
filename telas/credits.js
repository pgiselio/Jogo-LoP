let assetsCredits = [];
function drawTelaCreditos() {
  // fill("#141318");
  // rect(canvas.width/2, 15, canvas.width, 30);
  // push();
  // fill("#fff");

  // textFont(evilEmpireFont);
  // textSize(30);
  // text("C R É D I T O S", canvas.width / 2, 25);
  // pop();

  push();
  let roundedShape = createGraphics(80, 80);
  roundedShape
    .noStroke()
    .ellipse(
      roundedShape.width / 2,
      roundedShape.height / 2,
      roundedShape.width,
      roundedShape.width
    );
  imageMode(CENTER);
  pedroImg.mask(roundedShape);
  denisImg.mask(roundedShape);
  let imgsSize = 80;
  let img1Pos = { x: 70, y: 90 };
  let img2Pos = { x: canvas.width - 70, y: img1Pos.y - 10 + imgsSize };
  image(pedroImg, img1Pos.x, img1Pos.y, imgsSize, imgsSize);
  image(denisImg, img2Pos.x, img2Pos.y, imgsSize, imgsSize);

  fill("#eee");
  textSize(18);
  textStyle(BOLD);
  text(
    "Pedro Giselio de O. Silva",
    textWidth(this.str) / 2 + imgsSize - 30 + img1Pos.x,
    img1Pos.y - 10
  );
  text(
    "Denis Emanoel da S. Camara",
    img2Pos.x - textWidth(this.str) / 2 - imgsSize + 20,
    img2Pos.y - 10
  );
  textStyle(NORMAL);
  text(
    "pgiselio@hotmail.com",
    textWidth(this.str) / 2 + imgsSize - 40 + img1Pos.x,
    img1Pos.y + 15
  );
  text(
    "dendenemanoel@gmail.com",
    img2Pos.x - textWidth(this.str) / 2 - imgsSize + 20,
    img2Pos.y + 15
  );

  textSize(18);
  text("ASSETS:", 70, img2Pos.y + 60);
  textSize(13);
  textAlign(LEFT);
  assetsCredits[0] = new assetCredit(
    30,
    img2Pos.y + 100,
    `"Arrow keys, wsad, mouse icon" by InanZen licensed CC0: `,
    "https://opengameart.org/content/arrow-keys-wsad-mouse-icon",
    TELA == CREDITS
  );
  assetsCredits[1] = new assetCredit(
    30,
    img2Pos.y + 120,
    `"Forest Background" by ansimuz licensed CC0: `,
    "https://opengameart.org/content/forest-background",
    TELA == CREDITS
  );
  assetsCredits[2] = new assetCredit(
    30,
    img2Pos.y + 140,
    `"Mountain at Dusk Background" by ansimuz licensed CC0: `,
    "https://opengameart.org/content/mountain-at-dusk-background",
    TELA == CREDITS
  );
  assetsCredits[3] = new assetCredit(
    30,
    img2Pos.y + 160,
    `"Background" by jkjkke licensed CC-BY 3.0: `,
    "https://opengameart.org/content/background-6",
    TELA == CREDITS
  );
  assetsCredits[4] = new assetCredit(
    30,
    img2Pos.y + 180,
    `"Monstro 1 Pixel Art" by Jean Michel V. Chevrand: `,
    "https://jeanchevrand.wixsite.com/jeanmichelvchevrand/pixel-art#comp-jgbhv9p7",
    TELA == CREDITS
  );
  pop();
  setInteractives([voltarBtn, ...assetsCredits.map((asset) => asset.button)]);
}
