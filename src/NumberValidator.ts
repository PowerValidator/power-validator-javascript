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
const hexaDecimalRegExp = "^0[xX][0-9a-fA-F]+$";

export function isNumber(input: any): boolean {
  if (typeof input === "number") {
    return true;
  } else {
    return false;
  }
}

export function isZero(input: any): boolean {
  if (isNumber(input)) {
    return input === 0;
  } else {
    return false;
  }
}

export function isPostiveNumber(input: any): boolean {
  if (isNumber(input)) {
    return input >= 0;
  } else {
    return false;
  }
}

export function isNegativeNumber(input: any): boolean {
  if (isNumber(input)) {
    return input < 0;
  } else {
    return false;
  }
}
