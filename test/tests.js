let chai = require('chai');
let expect = chai.expect;
let main = require("../main");

let dataCompare = [
    {
        name: "Zoe",
        scores: [4, 5, 8]
    },
    {
        name: "Bob",
        scores: [2, 7, 9]
    },
    {
        name: "Sarah",
        scores: [10, 9, 8]
    },
    {
        name: "John",
        scores: [2, 5, 3]
    }
];


describe('a readDataFile', function() {
    it('can read player data in from a file to an object', function() {
        expect(main.readDataFile("./scores.txt")).to.deep.equal(dataCompare);
    });
});

describe('a sumScores', function() {
    it('can sum the total score of a player from multiple rounds', function() {
        expect(main.sumScores([6,9,3,22])).to.equal(40);
    });
});

describe('a getWinner', function() {
    it("can return the winning player's name", function() {
        expect(main.getWinner("./scores.txt")).to.equal("Sarah");
    });
});