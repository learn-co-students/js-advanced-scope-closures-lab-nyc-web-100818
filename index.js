//produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.

const produceDrivingRange = function (blockRange) {
  return function (startBlock, endBlock) {

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let trip = Math.abs(end - start)

    if (trip > blockRange) {
      return `${trip - blockRange} blocks out of range`
    }
    else return `within range by ${blockRange - trip}`;
  }
}


//produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

const produceTipCalculator = function (tip_rate) {
  return function (fare) {
      return fare * (tip_rate)
  }
}

//createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

const createDriver = function () {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
