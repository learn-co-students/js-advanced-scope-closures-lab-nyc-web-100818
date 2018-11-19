const blockToInt = function(block) {
  return parseInt(block.substring(0, block.length - 2));
}

const produceDrivingRange = function(range) {
  return function(block1, block2) {
    const block1Int = blockToInt(block1);
    const block2Int = blockToInt(block2);
    const withinRange = range - Math.abs(block1Int - block2Int);
    if (withinRange >= 0) {
      return `within range by ${withinRange}`
    } else {
      return `${-withinRange} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percent) {
  return function(amount) {
    return amount * percent;
  }
}

const createDriver = function() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}