var validPath = function (n, edges, source, destination) {
  if (n === 1 && edges.length === 0) {
    return true;
  }

  let nextValues = [source];
  let nextNodes = edges;

  while (nextValues.length > 0) {
    // find all connections to the source node
    let firstArray = nextNodes.filter((pair) => {
      if (nextValues.includes(pair[0]) || nextValues.includes(pair[1])) {
        return pair;
      }
    });

    console.log(firstArray);

    nextNodes = nextNodes.filter((pair) => {
      if (!nextValues.includes(pair[0]) && !nextValues.includes(pair[1])) {
        return pair;
      }
    });

    console.log(nextNodes);

    let testValues = nextValues;
    nextValues = [];
    for (let i = 0; i < firstArray.length; i++) {
      let element1 = firstArray[i][0];
      let element2 = firstArray[i][1];
      if (element1 === destination || element2 === destination) {
        return true;
      }
      if (testValues.includes(element1)) {
        nextValues.push(element2);
      } else {
        nextValues.push(element1);
      }
    }
  }
  return false;
};

console.log(
  validPath(
    10,
    [
      [0, 7],
      [0, 8],
      [6, 1],
      [2, 0],
      [0, 4],
      [5, 8],
      [4, 7],
      [1, 3],
      [3, 5],
      [6, 5],
    ],
    7,
    5
  )
);
