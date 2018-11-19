// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.
const parseBlock = function(blockText) {
  return parseInt(blockText.slice(0, 2))
}

const parseDistance = function(block1, block2) {
  return Math.abs(parseBlock(block1) - parseBlock(block2))
}

const produceDrivingRange = function(blockRange) {
  return function(b1, b2) {
    const distance = parseDistance(b1, b2)

    return (distance > blockRange) ? `${distance - blockRange} blocks out of range` : `within range by ${blockRange - distance}`
  }
}

// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

const produceTipCalculator = function(percent) {
  return function(fare) {
    return fare * percent
  }
}


// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

let currentId = 1

const createDriver = function() {
  return function Driver(name) {
    this.name = name
    this.id = currentId
    currentId++
  }
}
