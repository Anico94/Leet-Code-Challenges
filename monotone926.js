var minFlipsMonoIncr = function (s) {
  //count the number of 1's and 0's in the string

  const totalOnes = Array.from(s).filter((num) => num === "1").length;
  const totalZeros = s.length - totalOnes;

  let flips0 = 0;
  let flips1 = 0;

  let ones = totalOnes;
  let zeros = totalZeros;
  let string = s;

  while (s.length > 0 && ones !== 0) {
    const currentLast = s[s.length - 1];

    if (currentLast === "0") {
      flips1++;
    } else {
      ones--;
    }
    s = s.slice(0, s.length - 1);
  }

  while (string.length > 0 && zeros !== 0) {
    const currentFirst = string[0];

    if (currentFirst === "1") {
      flips0++;
    } else {
      zeros--;
    }
    string = string.slice(1);
  }

  return Math.min(flips1, flips0, totalOnes, totalZeros);
};

console.log(minFlipsMonoIncr("0101100011"));
