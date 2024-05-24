/**
 *
 * @param {[]} layers
 * @param {number} layers[].speed
 * @param {any} layers[].image
 *
 */
let paralaxPositions = [];
function paralaxBackground(layers, static = false) {
  for (let i = 0; i < layers.length; i++) {
    let layer = layers[i];

    let imageNewWidth =
      (layer.image.width / layer.image.height) * canvas.height;
    // let proportion = (imageNewWidth - canvas.width)/((canvas.width/canvas.height)*2);
    let proportion = layer.image.width;
    if (paralaxPositions[i] == undefined) paralaxPositions[i] = 1;
    if (!static) {
      if (paralaxPositions[i] * layer.speed < proportion) {
        paralaxPositions[i] += 1;
      } else {
        paralaxPositions[i] = 1;
      }
    }

    for (let o = 0; o < 2; o++) {
      if (o == 0)
        image(
          layer.image,
          0,
          0,
          canvas.width,
          canvas.height,
          paralaxPositions[i] * layer.speed,
          0,
          imageNewWidth,
          canvas.height,
          COVER,
          RIGHT
        );
      else
        image(
          layer.image,
          0,
          0,
          canvas.width,
          canvas.height,
          paralaxPositions[i] * layer.speed - proportion,
          0,
          imageNewWidth,
          canvas.height,
          COVER,
          RIGHT
        );
    }
  }
}
