function solution(keyinput, board) {
  let [boardX, boardY] = board;
  let [x, y] = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "up":
        if (y + 1 <= boardY / 2) y++;
        break;
      case "down":
        if (y - 1 >= -boardY / 2) y--;
        break;
      case "left":
        if (x - 1 >= -boardX / 2) x--;
        break;
      case "right":
        if (x + 1 <= boardX / 2) x++;
        break;
      default:
        break;
    }
  }

  return [x, y];
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
