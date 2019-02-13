/*
    String Validator this file contains function to validate the String Object
    List of function in this files as follows
    1. isStringNull(input:string)   -> Return true if the string is null or string null
    2. isStringEmpty(input:string)  -> Return true if the String is null or "null" and length is 0
    3. isS
*/
const lettersRegexp = /^[A-Za-z]+$/;
const numberRegexp = /^[0-9]+$/;
const capitalizeRegexp = /^[A-Z]/;

export function isStringNull(input: any): boolean {
  if (input === null || input === undefined) {
    return true;
  } else {
    return input! === "null" ? true : false;
  }
}
