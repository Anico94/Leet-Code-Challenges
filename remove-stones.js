// Option 1

var minStoneSum = function (piles, k) {
  while (k > 0) {
    piles.sort((a, b) => a - b);
    console.log(piles);
    const halfValue = Math.ceil(piles.pop() / 2);
    piles.push(halfValue);
    console.log(piles);
    k--;
  }
  // use reduce to sum all the values in the pile
  return piles.reduce((accumulator, pile) => accumulator + pile, 0);
};

console.log(
  minStoneSum([8916, 7289, 8226, 4395, 589, 450, 5965, 7617, 5218, 6227], 7)
);

// Option 2

var minStoneSum = function (piles, k) {
  let sortedPiles = piles;
  let storedValues = [];
  while (k > 0) {
    sortedPiles = sortedPiles.sort((a, b) => a - b);
    let halfValue = Math.ceil(sortedPiles.pop() / 2);
    storedValues.push(halfValue);
    k--;
    while (sortedPiles[sortedPiles.length - 1] > storedValues[0]) {
      if (k === 0) {
        break;
      }
      storedValues.push(Math.ceil(sortedPiles.pop() / 2));
      k--;
    }
    sortedPiles = [...storedValues, ...sortedPiles];
    storedValues = [];
  }
  // use reduce to sum all the values in the pile
  return sortedPiles.reduce((accumulator, pile) => accumulator + pile, 0);
};
