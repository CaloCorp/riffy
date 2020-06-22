



const buyGold = function (purity,weight,price){


let meltValue = purity/24 * weight * price
let purchasePrice = meltValue - meltValue * .15

if (isNaN(purity) || isNaN(weight) || isNaN(price) === false )
return "Input 3 numbers after node main.js a purity, a weight & the current spot price "

else
return "I can offer " +purchasePrice + "for this piece"
}

module.exports = buyGold
