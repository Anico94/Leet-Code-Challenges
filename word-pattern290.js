var wordPattern = function (pattern, s) {
  //break the pattern and string into an array

  const patternArray = pattern.split("");
  const sArray = s.split(" ");

  if (pattern.length > 1 && sArray.length === 1) {
    return false;
  }

  // create empty object to sort values in

  const patternString = {};

  // create a set to track all the words that have already been used

  const wordSet = new Set();

  //loop through based on the length of sArray

  for (let i = 0; i < sArray.length; i++) {
    // look up the pattern letter in the object and if it exists compare to string word
    if (patternArray[i] in patternString) {
      if (patternString[patternArray[i]] !== sArray[i]) {
        return false;
      }
    } else if (wordSet.has(sArray[i])) {
      return false;
    }
    //else we will add to the object
    else {
      patternString[patternArray[i]] = sArray[i];
    }
    wordSet.add(sArray[i]);
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));

// Jacks solution

// var wordPattern = function (pattern, s) {
//   const table = {};
//   const words = s.split(" ");

//   if (words.length !== pattern.length) return false;

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (!table[word]) {
//       if (pattern.slice(0, i).includes(pattern[i])) return false;
//       table[word] = pattern[i];
//     } else {
//       if (table[word] !== pattern[i]) {
//         return false;
//       }
//     }
//   }
//   console.log(table);
//   return true;
// };
