import { expect } from "chai";
import * as NumberValidator from "../src/NumberValidator";

describe("Number Validaton", () => {
  describe("isString", () => {
    it("should return false on undefined", () => {
      expect(NumberValidator.isNumber(undefined)).to.equal(false);
    });
    it("should return false on null", () => {
      expect(NumberValidator.isNumber(null)).to.equal(false);
    });
    it("should return false on object", () => {
      expect(NumberValidator.isNumber({})).to.equal(false);
    });
    it("should return false on array", () => {
      expect(NumberValidator.isNumber([])).to.equal(false);
    });
    it("should return false on empty string", () => {
      expect(NumberValidator.isNumber("")).to.equal(false);
    });
    it("should return false on empty object string", () => {
      expect(NumberValidator.isNumber("{}")).to.equal(false);
    });
    it("should return true on zero as input", () => {
      expect(NumberValidator.isNumber(0)).to.equal(true);
    });
    it("should return true on postive as input", () => {
        expect(NumberValidator.isNumber(10000)).to.equal(true);
    });
    it("should return true on -negative number as input", () => {
        expect(NumberValidator.isNumber(-10000)).to.equal(true);
    });
    it("should return true on float number as input", () => {
        expect(NumberValidator.isNumber(1.0000000)).to.equal(true);
    });
    it("should return false on string number as input", () => {
        expect(NumberValidator.isNumber("1.0000000")).to.equal(false);
    });
    it("should return false on string number as input", () => {
        expect(NumberValidator.isNumber("1.0000.000")).to.equal(false);
    });
  });
});