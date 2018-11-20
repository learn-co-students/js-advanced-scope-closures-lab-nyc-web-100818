function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let sBlock = parseInt(startingBlock);
    let eBlock = parseInt(endingBlock);
    let range = Math.abs(eBlock - sBlock);
    let inOrOutOfRange = blockRange - range;

    if (inOrOutOfRange > 0){
      return `within range by ${inOrOutOfRange}`;
    } else {
      return `${Math.abs(inOrOutOfRange)} blocks out of range`
    }
  };
};


function produceTipCalculator(percent){
  return function(fare){
    return fare * percent;
  };
};

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};
