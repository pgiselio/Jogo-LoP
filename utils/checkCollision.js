function checkRectsCollision(rect1, rect2) {
  function checkAPoint(x, y) {
    return (
      x >= rect2.x - rect2.width / 2 &&
      x <= rect2.x + rect2.width / 2 &&
      y >= rect2.y - rect2.height / 2 &&
      y <= rect2.y + rect2.height / 2
    );
  }
  return (
    checkAPoint(
      rect1.x + rect1.width / 2 - 2,
      rect1.y + rect1.height / 2 - 2
    ) ||
    checkAPoint(
      rect1.x - rect1.width / 2 + 2,
      rect1.y - rect1.height / 2 + 2
    ) ||
    checkAPoint(
      rect1.x + rect1.width / 2 - 2,
      rect1.y - rect1.height / 2 + 2
    ) ||
    checkAPoint(
      rect1.x - rect1.width / 2 + 2,
      rect1.y + rect1.height / 2 - 2
    ) ||
    checkAPoint(rect1.x, rect1.y)
  );
}
