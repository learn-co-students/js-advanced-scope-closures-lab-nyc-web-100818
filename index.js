// const produceDrivingRange = function(range) {
//   return function somethingElse (params1, params2) {
//   if (somethingwithparams > range)
//   }
// }
// let tenBlockRange = produceDrivingRange(10)
//
// tenBlockRange('19th', '47th') => false

const produceDrivingRange = function(range){
  return function testFunction (params1, params2) {
    let start = parseInt(params1, 10);
    let end = parseInt(params2, 10);
  // debugger
      if (end - start > range) {
        // debugger
        return `${(end - start)-range} blocks out of range`
      } else {
        return `within range by ${-((end - start) - range)}`
      }
    }
}

const produceTipCalculator = function(percentage) {
  return function totalMeal (total) {
    return (total * percentage)
  }
}

const createDriver = function() {
    nextId = 1
    return function Driver(name) {
       this.name = name;
       this.id = nextId++;
    }
}
