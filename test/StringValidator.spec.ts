import { expect } from "chai";
import * as StringValidator from "../src/StringValidator";

describe("String Validation", () => {
  describe("isString", () => {
    it("should return false on undefined", () => {
      expect(StringValidator.isString(undefined)).to.equal(false);
    });
    it("should return false on null", () => {
      expect(StringValidator.isString(null)).to.equal(false);
    });
    it("should return false on object", () => {
      expect(StringValidator.isString({})).to.equal(false);
    });
    it("should return false on array", () => {
      expect(StringValidator.isString([])).to.equal(false);
    });
    it("should return true on empty string", () => {
      expect(StringValidator.isString("")).to.equal(true);
    });
    it("should return true on empty", () => {
      expect(StringValidator.isString("{}")).to.equal(true);
    });
    it("should return true on valida input", () => {
      expect(StringValidator.isString("power validator")).to.equal(true);
    });
  });

  describe("isStringNull", () => {
    it("should return false on empty String", () => {
      expect(StringValidator.isStringNull("")).to.equal(false);
    });
    it("should return false on valid String", () => {
      expect(StringValidator.isStringNull("power validator")).to.equal(false);
    });
    it("should return false on number input", () => {
      expect(StringValidator.isStringNull(3)).to.equal(false);
    });
    it("should return false on float input", () => {
      expect(StringValidator.isStringNull(0.0)).to.equal(false);
    });
    it("should return true on string null", () => {
      expect(StringValidator.isStringNull("null")).to.equal(true);
    });
    it("should return ture on null", () => {
      expect(StringValidator.isStringNull(null)).to.equal(true);
    });
    it("should return false on undefined input", () => {
      expect(StringValidator.isStringNull(undefined)).to.equal(true);
    });
  });

  describe("isStringEmpty", () => {
    it("should return true on empty String", () => {
      expect(StringValidator.isStringEmpty("")).to.equal(true);
    });
    it("should return false on valid String", () => {
      expect(StringValidator.isStringEmpty("power validator")).to.equal(false);
    });
    it("should return false on number input", () => {
      expect(StringValidator.isStringEmpty(3)).to.equal(false);
    });
    it("should return false on float input", () => {
      expect(StringValidator.isStringEmpty(0.0)).to.equal(false);
    });
    it("should return true on string null", () => {
      expect(StringValidator.isStringEmpty("null")).to.equal(true);
    });
    it("should return true on null", () => {
      expect(StringValidator.isStringEmpty(null)).to.equal(true);
    });
    it("should return false on undefined input", () => {
      expect(StringValidator.isStringEmpty(undefined)).to.equal(true);
    });
  });

  describe("isStringValid", () => {
    it("should return false on empty String", () => {
      expect(StringValidator.isStringValid("")).to.equal(false);
    });
    it("should return true on valid String", () => {
      expect(StringValidator.isStringValid("power validator")).to.equal(true);
    });
    it("should return false on number input", () => {
      expect(StringValidator.isStringValid(3)).to.equal(false);
    });
    it("should return false on float input", () => {
      expect(StringValidator.isStringValid(0.0)).to.equal(false);
    });
    it("should return false on string null", () => {
      expect(StringValidator.isStringValid("null")).to.equal(false);
    });
    it("should return false on null", () => {
      expect(StringValidator.isStringValid(null)).to.equal(false);
    });
    it("should return false on undefined input", () => {
      expect(StringValidator.isStringValid(undefined)).to.equal(false);
    });
  });
});
