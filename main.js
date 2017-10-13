const fs = require('fs');
const Papa = require('papaparse');

function getWinner(filename) {
    let playerData = readDataFile(filename);
    playerData.forEach(function(player) {
        
    }, this);
}

function readDataFile(filename) {
    // Read raw data and convert to utf-8
    let rawContent = fs.readFileSync(filename, "utf-8");
    // Parse file with PapaParse
    const options = {
        header: false,
        dynamicTyping: true,
        skipEmptyLines: true
    }
    const parsedData = Papa.parse(rawContent, options).data;
    // Map to our object style
    const playerData = parsedData.map(element => {
        let [name, ...scores] = element;
        let player = {
            name,
            scores
        }
        return player;
    });
    return playerData;
}

function sumScores(scores) {
    return scores.reduce((sum, round) => sum + round, 0);
}

module.exports = {
    readDataFile,
    sumScores,
    getWinner
}