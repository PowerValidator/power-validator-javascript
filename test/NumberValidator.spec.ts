import { expect } from "chai";
import * as NumberValidator from "../src/NumberValidator";

describe("Number Validaton", () => {
  describe("isNumber", () => {
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
      expect(NumberValidator.isNumber(1.0)).to.equal(true);
    });
    it("should return false on string number as input", () => {
      expect(NumberValidator.isNumber("1.0000000")).to.equal(false);
    });
    it("should return false on string number as input", () => {
      expect(NumberValidator.isNumber("1.0000.000")).to.equal(false);
    });
  });

  describe("isPostiveNumber", () => {
    it("should return true on Postive Number", () => {
      expect(NumberValidator.isPostiveNumber(1)).to.equal(true);
    });
    it("should return true on Zero Number", () => {
      expect(NumberValidator.isPostiveNumber(0)).to.equal(true);
    });

    it("should return false on negative Number", () => {
      expect(NumberValidator.isPostiveNumber(-30)).to.equal(false);
    });

    it("should return false on  {} isPostiveNumber", () => {
      expect(NumberValidator.isPostiveNumber({})).to.equal(false);
    });
  });

  describe("isNegativeNumber", () => {
    it("should return true on the negative number", () => {
      expect(NumberValidator.isNegativeNumber(-30)).to.equal(true);
    });

    it("should return false on the zero", () => {
      expect(NumberValidator.isNegativeNumber(0)).to.equal(false);
    });

    it("should return false on the postive number", () => {
      expect(NumberValidator.isNegativeNumber(30)).to.equal(false);
    });

    it("should return false on  {}", () => {
      expect(NumberValidator.isNegativeNumber({})).to.equal(false);
    });
  });

  describe("isZero", () => {
    it("should return true on zero", () => {
      expect(NumberValidator.isZero(0)).to.equal(true);
    });
    it("should return false on negative", () => {
      expect(NumberValidator.isZero(-1)).to.equal(false);
    });

    it("should return false on postive number", () => {
      expect(NumberValidator.isZero(10)).to.equal(false);
    });

    it("should return false on  {}", () => {
      expect(NumberValidator.isZero({})).to.equal(false);
    });
  });
});
