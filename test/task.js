const chai = require('chai');

const {Task} = require('../Task');
const { expect } = chai;

let test;

describe("Task Class", () => {
    it("should create an array", (done) => {
        let numbers = [8, 1, 2, 1, 1, 1, 4];
        test = new Task(numbers);
        expect(test.getArray().length).to.equal(numbers.length);
        done()
    });

    it("should minimize the array", (done) => {
        test.getMinimum();
        expect(test.getArray().length).to.equal([ 8, 1, 4, 1, 4 ].length);
        done()
    });

    it("should an end", (done) => {
        expect(test.anEnd()).to.equal(true);
        done()
    })
});