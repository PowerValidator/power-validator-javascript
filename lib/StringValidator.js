"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    String Validator this file contains function to validate the String Object
    List of function in this files as follows
    1. isStringNull(input:string)   -> Return true if the string is null or string null
    2. isStringEmpty(input:string)  -> Return true if the String is null or "null" and length is 0
    3. isS
*/
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var capitalizeRegexp = /^[A-Z]/;
function isStringNull(input) {
    if (input === null || input === undefined) {
        return true;
    }
    else {
        return input === "null" ? true : false;
    }
}
exports.isStringNull = isStringNull;
//# sourceMappingURL=StringValidator.js.map