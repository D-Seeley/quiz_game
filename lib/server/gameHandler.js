//const axios = require('axios');
const database = require('./DB/index');
const { sync, Game, User, Venue, Question } = database;
const uuid = require('uuid/v4');
const faker = require('faker');
//const Game = require('./game/Game');
const getQuestions = require('./game/getQuestions');

//Game States
//const games = [];

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
const createGame = async (params)=> {
    let game, questions;

    try {
        const numOfQues = 1;
        const joinName = faker.hacker.abbreviation();
        game = await Game.create({ length: params.rounds, joinName })
        questions  = await getQuestions(numOfQues);
        Question.addFromJSON(questions, game);
        // console.log('gameHandler - Game is: ', game.id);
        // console.log('Question are: ', questions)
        return game;
    }
    catch(err) {return console.error(err)}
}

const findGame = async (joinName)=> {
    try {
    return Game.findOne({ where: { joinName }})
        .then(game => game)
    }
    catch(err) {
        return console.error(err)}
}

module.exports = {
    createGame, findGame
}