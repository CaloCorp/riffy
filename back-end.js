



const buyGold = function (purity,weight,price){


let meltValue = purity/24 * weight * price
let purchasePrice = meltValue - meltValue * .15



    return "I can offer " +purchasePrice + "for this piece"
}

module.exports = buyGold
