/**
 * @function checks if the string ends by number and process the math on the number
 * @param {*} bizarreString 
 * @return Modified String
 */

function bizarreStringIncrementer(bizarreString) {

    let isNumberAtTheEnd = isNaN(bizarreString.slice(-1)) ? false : true;

    if (!isNumberAtTheEnd) {
        return bizarreString + '1';
    } else {
        let numbersInString = bizarreString.match(/\d+/g);
        let lastNumber = numbersInString ? numbersInString.pop() : null;
        let numberLength = lastNumber.length;
        let stringEndIndex = bizarreString.length - numberLength;
        lastNumber++;
        return bizarreString.slice(0, stringEndIndex) + pad(lastNumber, numberLength);
    }
}

/**
 * @function - utility function for padding the leading zeros
 * @param {*} number - number to be padded with leading 0 as a string
 * @param {*} length - target length with leading 0
 * @return - padded string
 */

function pad(number, length) {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}




console.log('foo -->', bizarreStringIncrementer('foo'));
console.log('foo23 -->', bizarreStringIncrementer('foo23'));
console.log('foo0041 -->', bizarreStringIncrementer('foo0041'));
console.log('foo9 -->', bizarreStringIncrementer('foo9'));
console.log('foo099 -->', bizarreStringIncrementer('foo099'));
console.log('f99oo -->', bizarreStringIncrementer('f99oo'));
console.log('f99oo23 -->', bizarreStringIncrementer('f99oo23'));
console.log('f99oo099 -->', bizarreStringIncrementer('f99oo099'));
console.log('f99oo0099 -->', bizarreStringIncrementer('f99oo0099'));