//From Talha Mehmood
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [4, 7, 2, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [4, 5, 0, 2, 7, 8, 8, 3, 7, 1, 0, 8, 1, 5, 9, 5];

const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [4, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An valid1ay of all the valid1ays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



// Add your functions below:

const Array = (arr) => {
    let oddSum = 0;
    let evenSum = 0;
    let doubleDigit = 0;
    let totalEvenSum = 0;
    let totalSum;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            oddSum += arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            if (arr[i] * 2 > 9) {
                doubleDigit += arr[i] * 2 - 9;
            }
            else {
                evenSum += arr[i] * 2;
            }
        }
        totalEvenSum = doubleDigit + evenSum
    }
    return totalSum = totalEvenSum + oddSum;

}
console.log("nested array of cards validity checker");
const validityCred = (cards, func) => {
    let checked = [];
    cards.forEach(card => {

        if (func(card) % 10 === 0) {
            checked.push([true])
        }
        else {
            checked.push([false])
        }
    })
    return checked;
}

console.log(validityCred(batch, Array));

const findInvalidCards = (cards, func) => {
    let invalidCards = [];
    cards.forEach(card => {
        if (func(card) % 10 !== 0) {
            invalidCards.push(card);
        }
    })
    return invalidCards;
}
console.log("Nested Array of all Invalid Cards")
console.log(findInvalidCards(batch, Array));
const idInvalidCardCompanies = (arr) => {
    let invalidCompanyArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 3) {
            invalidCompanyArray.push("Amex (American Express)")
        }
        else if (arr[i][0] === 4) {
            invalidCompanyArray.push("Visa");
        }
        else if (arr[i][0] === 5) {
            invalidCompanyArray.push("MasterCard")
        }
        else if (arr[i][0] === 6) {
            invalidCompanyArray.push("Discover");
        }
        else {
            invalidCompanyArray.push("Company not found")
        }
    }
    return invalidCompanyArray.filter((elem, index) => {
        if (elem === elem) {
            return invalidCompanyArray.indexOf(elem) === index;
        }
    });
}
console.log("Companies name of invalid cards")
console.log(idInvalidCardCompanies(findInvalidCards(batch, Array)));