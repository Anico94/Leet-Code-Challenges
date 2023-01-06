var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const element1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const element2 = nums[j];
      const sum = element1 + element2;
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
