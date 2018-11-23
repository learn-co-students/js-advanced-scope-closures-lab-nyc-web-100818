function produceDrivingRange(blocks){
  return function(pickUp, dropOff){
    let x = parseInt(pickUp,10);
    let y = parseInt(dropOff, 10)
    let blocksTraveled = Math.abs(x-y)

    if (blocksTraveled > blocks){
      return `${blocksTraveled - blocks} blocks out of range`
    }else {
      return `within range by ${Math.abs(blocksTraveled - blocks)}`
    }
  };
}

function produceTipCalculator(tipPercentage){
  return function(costOfMeal){
    return tipPercentage*costOfMeal
  };
}


function createDriver(){
  let id = 0;
  return class{
    constructor(name){
      this.name  = name;
      this.id = ++id;
    };
  }; 
}
