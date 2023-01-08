var arrangeCoins = function (n) {
  if (n === 0) {
    return 0;
  }

  let row = 0;
  let currentRowLength = 1;

  while (n > 0) {
    if (n >= currentRowLength) {
      n = n - currentRowLength;
      row++;
      currentRowLength++;
    } else {
      return row;
    }
  }
  return row;
};
