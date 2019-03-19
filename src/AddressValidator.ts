import { SSL_OP_LEGACY_SERVER_CONNECT } from "constants";

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
import { isStringValid } from "./StringValidator";

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9_]+\.)+[a-zA-Z]{2,}))$/;
export function isEmailAddress(input: any): boolean {
  if (isStringValid(input)) {
    return emailRegex.test(input);
  } else {
    return false;
  }
}
