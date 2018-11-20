function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let totalDistance = parseInt(endBlock) - parseInt(startBlock) // just like the trip you were originally passing in
    if (totalDistance > blockRange) {
      return `${totalDistance-blockRange} blocks out of range`
    } else if (totalDistance < blockRange) {
      return `within range by ${blockRange-totalDistance}`
    }
  }
}


function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare;
  }
}

// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
function createDriver() {
  let Driverid = 0;
  return class {
    constructor(name, id) {
      this.name = name;
      this.id = ++Driverid;
    }
  }

}
