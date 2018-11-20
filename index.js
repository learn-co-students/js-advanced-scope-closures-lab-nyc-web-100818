 function produceDrivingRange(num) {
   return function blockRange(a, b) {
     let range = parseInt(b.slice(0, 2) - a.slice(0, 2));
     return range < num ? `within range by ${num - range}` : `${range - num} blocks out of range`;
   }
 }

 function produceTipCalculator(percent) {
   return function calculateTip(total) {
     return total * percent;
   };
 }
//returns a Driver class.  The class has reference to a driverId that is incremented each time a new driver is created.  The rest of the code base does not have access to driverId
function createDriver() {
  let driverId = 0;
  //return driver class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId; // ooor ..id++ and set at 1
    }
  };
}
