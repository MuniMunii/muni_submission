import { describe, it } from 'node:test';
import { sum } from '../03-writing-test/index.js';
import assert from 'node:assert';
// test
describe('Sum Function',()=>{
    it('adding Number',()=>{
        const num1=1
        const num2=2
        const actualValue=sum(num1,num2)
        const expectedValue=3
        assert.equal(actualValue,expectedValue)
    })
})
// console log
console.log(sum(1,2))