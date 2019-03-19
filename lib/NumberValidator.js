"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Number Validator this file contains function to validate the Number and Float Object
    List of function in this files as follows
    1. isNumber(input:any)       -> Return true if the input is ("typeof number != "string")
    2. isInteger(input:any)      -> Return true if the inpus is (isNumber and Contains only integer)
    3. isFloat
    4. isPostiveNumber
    5. isNegativeNumber
    6. isHexaDecimal

*/
var hexaDecimalRegExp = "^0[xX][0-9a-fA-F]+$";
function isNumber(input) {
    if (typeof input === "number") {
        return true;
    }
    else {
        return false;
    }
}
exports.isNumber = isNumber;
function isZero(input) {
    if (isNumber(input)) {
        return input === 0;
    }
    else {
        return false;
    }
}
exports.isZero = isZero;
function isPostiveNumber(input) {
    if (isNumber(input)) {
        return input >= 0;
    }
    else {
        return false;
    }
}
exports.isPostiveNumber = isPostiveNumber;
function isNegativeNumber(input) {
    if (isNumber(input)) {
        return input < 0;
    }
    else {
        return false;
    }
}
exports.isNegativeNumber = isNegativeNumber;
//# sourceMappingURL=NumberValidator.js.map