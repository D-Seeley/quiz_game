//const axios = require('axios');
const uuid = require('uuid/v4');
const faker = require('faker');
const Game = require('./game/Game');
const { getQuestions } = require('./game/getQuestions');

//Game States
const games = [];

//Game Handler must:
// Create a Game
// Add Players to a Game
// Update the Game State
////Score
////Round
////Players
//Get Score
//

//Actions
const createGame = (params)=> {
    const name = faker.hacker.abbreviation();
    console.log('faker.hacker name is: ', name);

    const game = new Game(params);
    return getQuestions(game.length)
        .then (questions => {
            game.setId(uuid());
            game.setJoinKey(name);
            game.setQuestions(questions);
            console.log('game settings: ', game)
            games.push(game);
            return game;
        })
        .catch(err => console.error(err))
}

module.exports = {
    createGame
}