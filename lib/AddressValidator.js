"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Address Validator Contains the function to validates the Array
    List of function in this files as follows
    1. isEmailAddress(input:any)        -> Return true if the input is ("typeof input != "array")
    2. isPhoneNumber()
    3. isZipCode()
    4. isCity()
    5. isState()
    6. isCountry()
*/
var StringValidator_1 = require("./StringValidator");
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9_]+\.)+[a-zA-Z]{2,}))$/;
function isEmailAddress(input) {
    if (StringValidator_1.isStringValid(input)) {
        return emailRegex.test(input);
    }
    else {
        return false;
    }
}
exports.isEmailAddress = isEmailAddress;
//# sourceMappingURL=AddressValidator.js.map