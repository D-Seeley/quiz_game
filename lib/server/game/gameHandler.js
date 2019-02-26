const axios = require('axios');
const uuid = require('uuid/v4');
const faker = require('faker');

//Uses OpenTriviaDB - https://opentdb.com
const API = 'https://opentdb.com/api.php?amount=10'

const Game = require('./Game');
const { getQuestions } = require('./getQuestions');

const createGame = (params)=> {
    const name = faker.hacker.abbreviation();
    console.log('faker.hacker name is: ', name);

    const game = new Game(params);
    return getQuestions(game.length)
        .then (questions => {
            game.setId(uuid());
            game.setJoinKey(name);
            game.setQuestions(questions);
            console.log('game sending: ', game)
            return game;
        })
        .catch(err => console.error(err))
}



module.exports = {
    createGame
}