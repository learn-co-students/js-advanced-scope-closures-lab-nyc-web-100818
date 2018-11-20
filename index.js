const blockToInt = function(block) {
  return parseInt(block.substring(0, block.length - 2));
}

const produceDrivingRange = function(range) {
  return function(b1, b2) {
    const b1Int = blockToInt(b1);
    const b2Int = blockToInt(b2);
    const withinRange = range - Math.abs(b1Int - b2Int);
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
