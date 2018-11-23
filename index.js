// JS Advanced Scope Closures Lab

// produceDrivingRange - returns a function, which takes an argument of blockRange which is then used to calculate if something is within range,returns when something is out of range
function produceDrivingRange(blockRange) {
  return function (startingBlock, endingBlock) {

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

// produceTipCalculator - Returns a function that then calculates a tip. For example, produceTipCalculator(0.10) - returns a function that calculates 10% tip on a fare.


const produceTipCalculator = function (percentage) {
  return function (fare) {
    return fare * percentage;
  };
};

// createDriver returns a class that let's you create a driver with a name attribute and incremenet the driverID each time
function createDriver() {
  let driverID = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverID;
    }
  }
}
