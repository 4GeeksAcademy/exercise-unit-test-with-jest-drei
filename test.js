

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 150.69 yen", function(){

    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 150.69;

    expect(fromDollarToYen(3.5)).toBe(527.415);
})

test("One Yen should be 0,0052 pounds", function(){

    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected = 3.5 * 0.0052;

    expect(fromYenToPound(3.5)).toBe(0.0182);
})

