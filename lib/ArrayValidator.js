"use strict";
/*
    Array Validator Contains the function to validates the Array
    List of function in this files as follows
    1. isArray(input:any)        -> Return true if the input is ("typeof input != "array")
*/
Object.defineProperty(exports, "__esModule", { value: true });
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isArray = isArray;
function isArrayEmpty(input) {
    if (isArray(input) && input.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.isArrayEmpty = isArrayEmpty;
//# sourceMappingURL=ArrayValidator.js.map