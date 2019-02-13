import { expect } from "chai";
import * as StringValidator from "../src/StringValidator";

describe("StringValidator", () => {
  it("can be initialized without an initializer", () => {
    expect(StringValidator.isStringNull("3")).to.equal(false);
  });
  it("can be initialized without an initializer", () => {
    expect(StringValidator.isStringNull(3)).to.equal(false);
  });
  it("can be initialized without an initializer", () => {
    expect(StringValidator.isStringNull("null")).to.equal(true);
  });
  it("can be initialized without an initializer", () => {
    expect(StringValidator.isStringNull(null)).to.equal(true);
  });
});
