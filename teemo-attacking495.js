var findPoisonedDuration = function (timeSeries, duration) {
  let totalTime = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (i === timeSeries.length - 1) {
      totalTime += duration;
      return totalTime;
    }
    const element1 = timeSeries[i];
    const elemnt2 = timeSeries[i + 1];

    if (elemnt2 - element1 < duration) {
      totalTime += elemnt2 - element1;
    } else {
      totalTime += duration;
    }
  }
};

console.log(findPoisonedDuration([1, 2], 2));
