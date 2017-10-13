const fs = require('fs');
const Papa = require('papaparse');

function getWinner(filename) {
    const playerData = readDataFile(filename);
    if (playerData.length === 0) return null;
    let winner = playerData[0].name;
    let highScore = sumScores(playerData[0].scores);
    for (let i = 1; i < playerData.length; i++) {
        let score = sumScores(playerData[i].scores);
        if (score > highScore) {
            highScore = score;
            winner = playerData[i].name;
        }
    }
    return winner;
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
    // Return our array containing all players and their scores
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