//const axios = require('axios');
const database = require('./DB/index');
const { sync, Game, User, Venue, Question, GameRoom } = database;
const faker = require('faker');
//const Game = require('./game/Game');

//Game States
//const games = [];

//Room Handler must:
// Create a Room
// Add Players to a Game
// Update the Game State
////Score
////Round
////Players
//Get Score
//

//Actions
const createRoom = async (params)=> {
    let game, questions;

    try {
        const joinName = faker.hacker.abbreviation();
        room = await GameRoom.create({ joinName })
        // console.log('gameHandler - Game is: ', game.id);
        // console.log('Question are: ', questions)
        return room;
    }
    catch(err) {return console.error(err)}
}

const findRoom = async (joinName)=> {
    try {
        return GameRoom.findOne({ where: { joinName }})
    }
    catch(err) {
        return console.error(err)}
}

module.exports = {
    createRoom, findRoom
}