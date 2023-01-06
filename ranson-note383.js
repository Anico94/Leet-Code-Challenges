var canConstruct = function (ransomNote, magazine) {
  // loop through and obtain of ransomNote

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];

    // look for the char in magazine

    if (magazine.includes(char)) {
      //remove the char from the string magazine

      const index = magazine.indexOf(char);

      // remove that element and piece together the remainder of the string

      if (index === 0) {
        magazine = magazine.substring(1);
      } else {
        magazine = `${magazine.substring(0, index)}${magazine.substring(
          index + 1
        )}`;
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  canConstruct(
    "bjaajgea",
    "affhiiicabhbdchbidghccijjbfjfhjeddgggbajhidhjchiedhdibgeaecffbbbefiabjdhggihccec"
  )
);
