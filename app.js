// One euro is 
let oneEuroIs = {
    "JPY": 156.5, // japan yen 
    "USD": 1.07, // us dollar 
    "GPB": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    //convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    //convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 150.69;
    //return the yen value
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    //convert the given valueInYen to pounds
    let valueInPound = valueInYen * 0.0052;
    //return the pound value
    return valueInPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };