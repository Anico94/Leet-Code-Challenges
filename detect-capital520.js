var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word) {
    return true;
  } else if (
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ===
    word
  ) {
    return true;
  } else if (word.toLowerCase() === word) {
    return true;
  } else return false;
};

console.log(detectCapitalUse("FLaG"));
