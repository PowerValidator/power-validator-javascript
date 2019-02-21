import { expect } from "chai";
import * as ArrayValidator from "../src/ArrayValidator";

describe("Array Validaton", () => {
  describe("isArray", () => {
    it("should return false on undefined", () => {
      expect(ArrayValidator.isArray(undefined)).to.equal(false);
    });
    it("should return false on null", () => {
      expect(ArrayValidator.isArray(null)).to.equal(false);
    });
    it("should return false on string null", () => {
      expect(ArrayValidator.isArray("null")).to.equal(false);
    });
    it("should return false on string integer", () => {
      expect(ArrayValidator.isArray("1")).to.equal(false);
    });
    it("should return false on string float", () => {
      expect(ArrayValidator.isArray("10.0")).to.equal(false);
    });
    it("should return false on empty string", () => {
      expect(ArrayValidator.isArray(" ")).to.equal(false);
    });
    it("should return false on any string float", () => {
      expect(ArrayValidator.isArray("Power Validator")).to.equal(false);
    });
    it("should return false on float", () => {
      expect(ArrayValidator.isArray(10.0)).to.equal(false);
    });
    it("should return false on Integer", () => {
      expect(ArrayValidator.isArray(10)).to.equal(false);
    });
    it("should return false on empty object", () => {
      expect(ArrayValidator.isArray({})).to.equal(false);
    });
    it("should return true on empty Array", () => {
      expect(ArrayValidator.isArray([])).to.equal(true);
    });
    it("should return true on array of string", () => {
      expect(ArrayValidator.isArray(["p", "o", "w", "e", "r"])).to.equal(true);
    });
    it("should return true on array of numbers", () => {
      expect(ArrayValidator.isArray([1, 2, 4, 5, 6, 7, 1.1])).to.equal(true);
    });
  });
  describe("isArrayEmpty", () => {
    it("should return false on undefined", () => {
      expect(ArrayValidator.isArrayEmpty(undefined)).to.equal(false);
    });
    it("should return false on null", () => {
      expect(ArrayValidator.isArrayEmpty(null)).to.equal(false);
    });
    it("should return false on string null", () => {
      expect(ArrayValidator.isArrayEmpty("null")).to.equal(false);
    });
    it("should return false on string integer", () => {
      expect(ArrayValidator.isArrayEmpty("1")).to.equal(false);
    });
    it("should return false on string float", () => {
      expect(ArrayValidator.isArrayEmpty("10.0")).to.equal(false);
    });
    it("should return false on empty string", () => {
      expect(ArrayValidator.isArrayEmpty(" ")).to.equal(false);
    });
    it("should return false on any string float", () => {
      expect(ArrayValidator.isArrayEmpty("Power Validator")).to.equal(false);
    });
    it("should return false on float", () => {
      expect(ArrayValidator.isArrayEmpty(10.0)).to.equal(false);
    });
    it("should return false on Integer", () => {
      expect(ArrayValidator.isArrayEmpty(10)).to.equal(false);
    });
    it("should return false on empty object", () => {
      expect(ArrayValidator.isArrayEmpty({})).to.equal(false);
    });
    it("should return true on empty Array", () => {
      expect(ArrayValidator.isArrayEmpty([])).to.equal(true);
    });
    it("should return false on array of string", () => {
      expect(ArrayValidator.isArrayEmpty(["p", "o", "w", "e", "r"])).to.equal(
        false
      );
    });
    it("should return false on array of numbers", () => {
      expect(ArrayValidator.isArrayEmpty([1, 2, 4, 5, 6, 7, 1.1])).to.equal(
        false
      );
    });
  });
});
