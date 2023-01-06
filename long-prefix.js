var longestCommonPrefix = function (strs) {
  //sort the list of string from shortest to longest
  const sortedStrings = strs.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      0;
    }
  });

  //length of the shortest string
  // const maxLoop = sortedStrings[0].length;

  //array of the letters of the shortest word

  let letters = sortedStrings[0].split("");

  //loop through the strings and compare to the first(shortest)string\

  sortedStrings.slice(1).forEach((element) => {
    console.log(element);
    for (let i = 0; i < letters.length; i++) {
      if (element[i] !== letters[i]) {
        letters = letters.slice(0, i);
        console.log(letters);
        if (letters.length === 0) {
          return "";
        }
        continue;
      }
    }
  });
  return letters.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight", "floo"]));
