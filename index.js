function produceDrivingRange(num) {
  return function distance(block1, block2) {
    let carDistance = parseInt(block2) - parseInt(block1)
    if (carDistance < num) {
      return `within range by ${num - carDistance}`
    } else {
      return `${carDistance - num} blocks out of range`
    }
  }
}

function produceTipCalculator(tippercentage) {
  return function tip(amount) {
    let calculatedAmount = (amount * tippercentage)
    return calculatedAmount
  }
}
function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
