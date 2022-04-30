var add = require("../code.js");
var expect = require("chai").expect;

describe("add function ", function () {
  context("with no arguments", function () {
    expect(add()).to.equal(0);
  });
});

describe("add function ", function () {
  context("with 1 valid number argument only", function () {
    expect(add("1")).to.equal(0);
  });
});

describe("add function ", function () {
  context("with 1 valid number argument only", function () {
    expect(add("1,")).to.equal(0);
  });
});

describe("add function ", function () {
  context("with 2 valid number and extra ,", function () {
    expect(add("1,2,")).to.equal(0);
  });
});

describe("add function ", function () {
  context("with 3 valid number argument only", function () {
    expect(add("1,2,3")).to.equal(6);
  });
});
