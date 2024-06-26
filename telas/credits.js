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
  imageMode(CENTER);
  pedroImg.mask(roundedShape);
  denisImg.mask(roundedShape);
  let imgsSize = 70;
  let img1Pos = { x: 70, y: 80 };
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
  text("ASSETS:", 70, img2Pos.y + 40);
  textSize(13);
  textAlign(LEFT);
  assetsCredits[0] = new assetCredit(
    30,
    img2Pos.y + 60,
    `"Arrow keys, wsad, mouse icon" by InanZen licensed CC0: `,
    "https://opengameart.org/content/arrow-keys-wsad-mouse-icon",
    TELA == CREDITS
  );
  assetsCredits[1] = new assetCredit(
    30,
    assetsCredits[0].pos.y + 20,
    `"Forest Background" by ansimuz licensed CC0: `,
    "https://opengameart.org/content/forest-background",
    TELA == CREDITS
  );
  assetsCredits[2] = new assetCredit(
    30,
    assetsCredits[1].pos.y + 20,
    `"Mountain at Dusk Background" by ansimuz licensed CC0: `,
    "https://opengameart.org/content/mountain-at-dusk-background",
    TELA == CREDITS
  );
  assetsCredits[3] = new assetCredit(
    30,
    assetsCredits[2].pos.y + 20,
    `"Background" by jkjkke licensed CC-BY 3.0: `,
    "https://opengameart.org/content/background-6",
    TELA == CREDITS
  );
  assetsCredits[4] = new assetCredit(
    30,
    assetsCredits[3].pos.y + 20,
    `"Monstro 1 Pixel Art" by Jean Michel V. Chevrand: `,
    "https://jeanchevrand.wixsite.com/jeanmichelvchevrand/pixel-art#comp-jgbhv9p7",
    TELA == CREDITS
  );
  assetsCredits[5] = new assetCredit(
    30,
    assetsCredits[4].pos.y + 20,
    `"Little Witch" by @kala_ixia (https://twitter.com/kala_ixia) licensed CC0: `,
    "https://opengameart.org/content/little-witch-0",
    TELA == CREDITS
  );
  assetsCredits[6] = new assetCredit(
    30,
    assetsCredits[5].pos.y + 20,
    `"Explosion" by Sogomn licensed CC0: `,
    "https://opengameart.org/content/explosion-3",
    TELA == CREDITS
  );
  assetsCredits[7] = new assetCredit(
    30,
    assetsCredits[6].pos.y + 20,
    `(SOUND) "Magic Smite" by Sogomn licensed CC0: `,
    "https://opengameart.org/content/magic-smite",
    TELA == CREDITS
  );
  assetsCredits[8] = new assetCredit(
    30,
    assetsCredits[7].pos.y + 20,
    `"Moon and Sea Pixel Art Background" by Craftpix studio licensed OGA-BY 3.0: `,
    "https://opengameart.org/content/moon-and-sea-pixel-art-background",
    TELA == CREDITS
  );
  assetsCredits[9] = new assetCredit(
    30,
    assetsCredits[8].pos.y + 20,
    `"Sunset Clouds Over The Sea Pixel Background" by Craftpix studio licensed OGA-BY 3.0: `,
    "https://opengameart.org/content/sunset-clouds-over-the-sea-pixel-background",
    TELA == CREDITS
  );
  assetsCredits[10] = new assetCredit(
    30,
    assetsCredits[9].pos.y + 20,
    `(MUSIC) "Softcore - the neighbourhood" instrumental edit by RockstarBeats: `,
    "https://www.youtube.com/watch?v=z4g9pA0EnXA",
    TELA == CREDITS
  );
  assetsCredits[11] = new assetCredit(
    30,
    assetsCredits[10].pos.y + 20,
    `"Heart 16x16" by NicoleMarieProductions licensed CC-BY 3.0: `,
    "https://opengameart.org/content/heart-1616",
    TELA == CREDITS
  );
  pop();
  setInteractives([voltarBtn, ...assetsCredits.map((asset) => asset.button)]);
}
