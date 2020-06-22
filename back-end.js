



const buyGold = function (purity,weight,price){


let meltValue = purity/24 * weight * price
let purchasePrice = meltValue - meltValue * .15

if (isNaN(purity) || isNaN(weight)){
    return "Input 3 numbers after node main.js a purity, a weight & the current spot price"}
else if (isNaN(weight) || isNaN(price)){
return  "Input 3 numbers after node main.js a purity, a weight & the current spot price"  
}
else if (purity === undefined || weight === undefined || price === undefined){
    return "Input 3 numbers after node main.js a purity, a weight & the current spot price"}
else if(purity < 0 || purity > 24){
    return "Not a valid purity"
}   
else
    return "I can offer " +purchasePrice + "for this piece"
}

module.exports = buyGold
