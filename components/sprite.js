// Gerado por IA e adapatdo por @pgiselio
// IA: Github Copilot
// Prompt: não anotei, mas foi algo como "p5.js sprite animated class"
class Sprite {
    constructor(spriteSheet, frameWidth, frameHeight, numFrames) {
        this.spriteSheet = spriteSheet;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.numFrames = numFrames;

        this.spriteLine = 0;
        this.currentFrame = 0;
        this.imageWidth = this.frameWidth;
        this.imageHeight = this.frameHeight;
    }

    show(x, y) {
        const frameX = this.currentFrame * this.frameWidth;
        const frameY = this.spriteLine * this.frameHeight;
        image(
            this.spriteSheet,
            x,
            y,
            this.imageWidth,
            this.imageHeight,
            frameX,
            frameY,
            this.frameWidth,
            this.frameHeight
        );
    }

    animate() {
        this.currentFrame = (this.currentFrame + 1) % this.numFrames;
    }
}
// IA: Github Copilot