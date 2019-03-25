/*
    String Validator this file contains function to validate the String Object
    List of function in this files as follows
    1. isString(input:any)       -> Return true if the input is ("typeof string != "string")
    2. isStringNull(input:any)   -> Return true if the input is (null | undefind | "null")
    3. isStringEmpty(input:any)  -> Return true if the input is (null | undefind | "" | "null")
    4. isStringValid(input:any)  -> Return false if the input is (null | undefind | "null" | "typeof string != "string" | "" )
    5. isCapitalized(input:any)  -> Return true if first charcer are capitlized
    6. isHasOnlyAlphabet()
    7. isHasOnlyNumber()
*/

const lettersRegexp = /^[A-Za-z]+$/;
const numberRegexp = /^[0-9]+$/;
const capitalizeRegexp = /^[A-Z]/;

export function isString(input: any): boolean {
  if (typeof input === "string") {
    return true;
  } else {
    return false;
  }
}

export function isStringNull(input: any): boolean {
  if (input === null || input === undefined) {
    return true;
  } else {
    if (input === "null") {
      return true;
    } else {
      return false;
    }
  }
}

export function isStringEmpty(input: any): boolean {
  if (isStringNull(input) === true) {
    return true;
  } else {
    if (input.toString().trim().length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export function isStringValid(input: any): boolean {
  if (
    isString(input) === false ||
    isStringNull(input) === true ||
    isStringEmpty(input)
  ) {
    return false;
  } else {
    return true;
  }
}

export function isCapitalized(input: any): boolean {
  if (isStringValid(input) === true) {
    return capitalizeRegexp.test(input);
  } else {
    return false;
  }
}
