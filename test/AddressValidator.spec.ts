import { expect } from "chai";
import * as AddressValidator from "../src/AddressValidator";

describe("Address Validation", () => {
  describe("isEmailAddress", () => {
    it("should return false on empty or undefined or null or string null", () => {
      expect(AddressValidator.isEmailAddress(undefined)).to.equal(false);
      expect(AddressValidator.isEmailAddress(null)).to.equal(false);
      expect(AddressValidator.isEmailAddress("null")).to.equal(false);
      expect(AddressValidator.isEmailAddress("")).to.equal(false);
    });

    it("should return false on aravinth@powervalidor", () => {
      expect(AddressValidator.isEmailAddress("aravinth@powervalidor")).to.equal(
        false
      );
    });

    it("should return false on @powervalidor", () => {
      expect(AddressValidator.isEmailAddress("@powervalidor")).to.equal(false);
    });

    it("should return false on 123@powervalidor", () => {
      expect(AddressValidator.isEmailAddress("123@powervalidor")).to.equal(
        false
      );
    });

    it("should return false on ara123@powervalidor", () => {
      expect(AddressValidator.isEmailAddress("ara123@powervalidor")).to.equal(
        false
      );
    });
    it("should return false on []ara]@powervalidor.com", () => {
      expect(
        AddressValidator.isEmailAddress("[]ara]@powervalidor.io")
      ).to.equal(false);
    });

    it("should return false on []a!@#$%&(*)ra]@powervalidor.com", () => {
      expect(
        AddressValidator.isEmailAddress("[]ara]@powervalidor.com")
      ).to.equal(false);
    });

    it("should return false on aravinth-raja@@powervalidor.io", () => {
      expect(
        AddressValidator.isEmailAddress("aravinth-raja@@powervalidor.io")
      ).to.equal(false);
    });

    it("should return true on aravinth-raja@powervalidor.io.io", () => {
      expect(
        AddressValidator.isEmailAddress("aravinth-raja@powervalidor.io.io")
      ).to.equal(true);
    });

    it("should return true on aravinth-raja@powervalidor.io", () => {
      expect(
        AddressValidator.isEmailAddress("aravinth-raja@powervalidor.io")
      ).to.equal(true);
    });

    it("should return true on aravinth_raja@powervalidor.com", () => {
      expect(
        AddressValidator.isEmailAddress("aravinth_raja@powervalidor.io")
      ).to.equal(true);
    });

    it("should return true on aravinth@powervalidor.com", () => {
      expect(
        AddressValidator.isEmailAddress("aravinth@powervalidor.io")
      ).to.equal(true);
    });
  });
});
