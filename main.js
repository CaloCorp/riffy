const buyGold = require('./back-end.js')
const getInput =function(i) {
    return process.argv[i + 2];
  }

console.log(buyGold(getInput(0),getInput(1),getInput(2)))

