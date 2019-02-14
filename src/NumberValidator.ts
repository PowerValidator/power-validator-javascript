/*
    Nuber Validator this file contains function to validate the Number and Float Object
    List of function in this files as follows
    1. isNumber(input:any)       -> Return true if the input is ("typeof number != "string")
*/

export function isNumber(input: any): boolean {
  if (typeof input === "number") {
    return true;
  } else {
    return false;
  }
}
