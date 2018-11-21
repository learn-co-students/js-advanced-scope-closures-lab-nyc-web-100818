function produceDrivingRange(range) {
  return function(start, end) {
    const s = parseInt(start, 10)
    const e = parseInt(end, 10)

    if (e > s) {
      const trip = e - s

      if (trip < range) {
        const diff = range - trip
        return `within range by ${diff}`
      } else {
        const diff = trip - range
        return `${diff} blocks out of range`
      }
    } else {
      const trip = s - e

      if (trip < range) {
        const diff = range - trip
        return `within range by ${diff}`
      } else {
        const diff = trip - range
        return `${diff} blocks out of range`
      }
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return percent * fare
  }
}

function createDriver() {
  return function(name) {
    class Driver {
      constructor(name, id) {
        this.name = name;
        this.id = id++;
      }
    }
    return new Driver(name)
  }
}
