var partition = function (s) {
  const partitions = [];
  const letterArray = Array.from(s);
  partitions.push(letterArray);

  if (letterArray.length === 1) {
    return partitions;
  }

  for (let i = 0; i < letterArray.length; i++) {
    const currentElement = letterArray[i];
    const holdingArray = [currentElement];
    for (let j = i + 1; j < letterArray.length; j++) {
      const nextElement = letterArray[j];
      holdingArray.push(nextElement);
    }
  }

  console.log(partitions);
};

partition("aaba");
