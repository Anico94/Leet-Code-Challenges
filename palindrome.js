var isPalindrome = function (x) {
  // if negative it can't be palindrome
  if (x < 0) {
    return false;
  }

  // convert to string

  let string = String(x).split("");

  while (string.length > 1) {
    if (string.shift() !== string.pop()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(13131));
console.log(isPalindrome(44234234234));
