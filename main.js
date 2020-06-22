const buyGold = require('./back-end.js')
const getInput =function(i) {
    return process.argv[i + 2];
  }

let purity= getInput(0)
let weight= getInput(1)
let price = getInput(2)

if (isNaN(purity) || isNaN(weight)){
    console.log("Input 3 numbers after node main.js a purity, a weight & the current spot price")}
else if (isNaN(weight) || isNaN(price)){
    console.log("Input 3 numbers after node main.js a purity, a weight & the current spot price")  
}
else if (purity === undefined || weight === undefined || price === undefined){
    console.log("Input 3 numbers after node main.js a purity, a weight & the current spot price")}
else if(purity < 0 || purity > 24){
     console.log("Not a valid purity")}

     else console.log(buyGold(purity,weight,price))

  