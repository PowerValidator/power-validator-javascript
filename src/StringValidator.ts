/*
    String Validator this file contains function to validate the String Object
    List of function in this files as follows
    1. isString(input:any)       ->  Return true if the given input is string 'false' on the other types
    2. isStringNull(input:any)   -> Return true if the string is null or string null
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
    return input! === "null" ? true : false;
  }
}

export function isStringEmpty(input: any): boolean {
  if (isStringNull(input) === true) {
    return true;
  } else {
    return input.toString().trim().length === 0 ? true : false;
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
