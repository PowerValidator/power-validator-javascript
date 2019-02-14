"use strict";
/*
    String Validator this file contains function to validate the String Object
    List of function in this files as follows
    1. isString(input:any)       ->  Return true if the given input is string 'false' on the other types
    2. isStringNull(input:any)   -> Return true if the string is null or string null
*/
Object.defineProperty(exports, "__esModule", { value: true });
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var capitalizeRegexp = /^[A-Z]/;
function isString(input) {
    if (typeof input === "string") {
        return true;
    }
    else {
        return false;
    }
}
exports.isString = isString;
function isStringNull(input) {
    if (input === null || input === undefined) {
        return true;
    }
    else {
        return input === "null" ? true : false;
    }
}
exports.isStringNull = isStringNull;
function isStringEmpty(input) {
    if (isStringNull(input) === true) {
        return true;
    }
    else {
        return input.toString().trim().length === 0 ? true : false;
    }
}
exports.isStringEmpty = isStringEmpty;
function isStringValid(input) {
    if (isString(input) === false ||
        isStringNull(input) === true ||
        isStringEmpty(input)) {
        return false;
    }
    else {
        return true;
    }
}
exports.isStringValid = isStringValid;
//# sourceMappingURL=StringValidator.js.map