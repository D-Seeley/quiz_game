const axios = require('axios');
const uuid = require('uuid/v4')

//Uses OpenTriviaDB - https://opentdb.com
const API = 'https://opentdb.com/api.php?amount=10'

const Game = require('./Game');
const { getQuestions } = require('./getQuestions');

const createGame = (params)=> {
    const game = new Game(params);
    return getQuestions(game.length)
        .then (questions => {
            game.setId(uuid());
            game.setQuestions(questions);
            return game;
        })
        .catch(err => console.error(err))
}



module.exports = {
    createGame
}