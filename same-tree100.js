var isSameTree = function (p, q) {
  if (JSON.stringify(p) === JSON.stringify(q)) {
    return true;
  } else return false;
};

console.log(isSameTree([1, 2, 1], [1, 2, 1]));
