var add = require("../code.js");
var expect = require("chai").expect;

describe("add function ", function () {
  it("with no arguments", function () {
    expect(add()).to.equal(0);
  });
  it("with 1 valid number argument only", function () {
    expect(add("1")).to.equal(0);
  });
  it("with 1 valid number argument only", function () {
    expect(add("1,")).to.equal(0);
  });
  it("with 2 valid number and extra ,", function () {
    expect(add("1,2,")).to.equal(0);
  });
  it("with 3 valid number argument only", function () {
    expect(add("1,2,3")).to.equal(6);
  });
  it("with 3 valid number argument with \n", function () {
    expect(add("1\n2,3")).to.equal(6);
  });
  it("with 2 valid number argument with \n and invalid ,", function () {
    expect(add("1\n2,")).to.equal(0);
  });
  it("with only 1 valid number argument with \n", function () {
    expect(add("1\n")).to.equal(0);
  });
  it("with only 1 valid number argument with \n and invalid ,", function () {
    expect(add("1,\n")).to.equal(0);
  });
  it("with only 2 valid number argument with \n and custom delimdelimiter ;", function () {
    expect(add("//;\n1;2")).to.equal(3);
  });
  it("with only 2 valid number argument with \n and custom delimdelimiter ^", function () {
    expect(add("//^\n1^2\n3^4")).to.equal(10);
  });
});
