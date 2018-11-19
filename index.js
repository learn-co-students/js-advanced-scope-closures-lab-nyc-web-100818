function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = parseBlock(end) - parseBlock(start);
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    };
  };
}

function parseBlock(block) {
  return parseInt(block);
}

function produceTipCalculator(tip) {
  return function(amount) {
    return amount * tip;
  };
}

function createDriver() {
  let i = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = i++
    }
  }
}

// console.log(produceDrivingRange(123))
