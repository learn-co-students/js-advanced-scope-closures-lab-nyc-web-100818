function produceDrivingRange(range) {
  return function (start, end) {
    let startInt = parseInt(start);
    let endInt = parseInt(end);
    if ((startInt + range) > endInt) {
      return `within range by ${(startInt + range) - endInt}`
    } else {
      return `${endInt - (startInt + range)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return percent * total
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.id = ++DriverId;
      this.name = name;
    }
  }
}
