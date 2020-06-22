function getInput(i) {
    return process.argv[i + 2];
  }



const buyGold = function (purity,weight,price){


let meltValue = purity/24 * weight * price
let purchasePrice = meltValue - meltValue * .15

return console.log("I can offer " +purchasePrice, "for this piece")
}

buyGold(getInput(0),getInput(1),getInput(2))

