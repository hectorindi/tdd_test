var add = require("../code.js");
var expect = require("chai").expect;

describe("add function ", function () {
  context("with no arguments", function () {
    expect(add()).to.equal(0);
  });
});

describe("add function ", function () {
  context("with 2 arguments", function () {
    expect(add("1, 2")).to.equal(3);
  });
});
