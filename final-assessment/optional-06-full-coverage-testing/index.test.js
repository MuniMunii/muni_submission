import sum from "../optional-06-full-coverage-testing/index.js";
import { describe, it } from "node:test";
import assert from "node:assert";
describe("Perhitungan awal", () => {
  it("Sum berhasil", () => {
    const value1 = 1;
    const value2 = 2;
    const actualValue = sum(value1, value2);
    const expectedValue = 3;
    assert.equal(actualValue, expectedValue);
  });
  it("Sum akan return 0 jika param 1 bukan number",()=>{
    const string1= '1';
    const value2 = 2;
    const actualValue = sum(string1, value2);
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  })
  it("Sum akan return 0 jika param 2 bukan number",()=>{
    const string1= 1;
    const value2 = '2';
    const actualValue = sum(string1, value2);
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  })
  it("Sum akan return 0 jika angka di param1 bawah 0 atau minus",()=>{
    const string1= -1;
    const value2 = 2;
    const actualValue = sum(string1, value2);
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  })
  it("Sum akan return 0 jika angka di param2 di bawah 0 atau minus",()=>{
    const string1= 1;
    const value2 = -2;
    const actualValue = sum(string1, value2);
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  })
});