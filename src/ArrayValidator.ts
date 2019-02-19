/*
    Array Validator Contains the function to validates the Array
    List of function in this files as follows
    1. isArray(input:any)        -> Return true if the input is ("typeof input != "array")
*/

export function isArray(input: any): boolean {
  if (Array.isArray(input)) {
    return true;
  } else {
    return false;
  }
}
