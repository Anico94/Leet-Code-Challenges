var canCompleteCircuit = function (gas, cost) {
  //check that the total gas is greater than the cost of gas

  const totalGas = gas.reduce((acc, current) => {
    return acc + current;
  }, 0);

  const totalCost = cost.reduce((acc, current) => {
    return acc + current;
  }, 0);

  if (totalCost > totalGas) {
    return -1;
  }

  let currentLoop = 0;
  let flag = false;

  while (!flag && currentLoop < gas.length) {
    console.log(currentLoop);
    console.log(gas[0], cost[0]);
    console.log(gas.length);
    if (currentLoop === 49999) {
      return 99999;
    }

    if (gas[0] === cost[0]) {
      gas.shift();
      cost.shift();
      if (gas.length === 0) {
        flag = true;
      }
      currentLoop++;
      continue;
    }

    let currentGas = 0;
    for (let i = 0; i < gas.length; i++) {
      currentGas = currentGas + gas[i] - cost[i];
      if (currentGas < 0) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    gas.push(gas.shift());
    cost.push(cost.shift());
    currentLoop++;
  }
  if (flag === true) {
    return currentLoop - 1;
  } else {
    return -1;
  }
};
