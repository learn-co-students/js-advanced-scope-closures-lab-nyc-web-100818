function produceDrivingRange(blockRange) {
  return function isInRange (start, end) {

    let firstNum = parseInt(start, 10);
    let secondNum = parseInt(end, 10);

    if ((secondNum - firstNum) > blockRange) {
      let maxxedBy = (secondNum - firstNum) - blockRange;
      return `${maxxedBy} blocks out of range`;
    }

    else {
      let fineBy = blockRange - (secondNum - firstNum);
      return `within range by ${fineBy}`;
    }
  }
}

function produceTipCalculator(number) {
  return function theCheck (bill) {
    return bill * number;
  }
}

function createDriver () {
  let driverId = 0;

  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
