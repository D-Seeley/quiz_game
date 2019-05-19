const conn = require('../conn');
const Sequelize = require('sequelize');
const hstore = require('pg-hstore');

const Game = conn.define('game', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    length: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    currentRound: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    scores: {
        type: Sequelize.HSTORE,
    }
    // previousRounds : {
    //     type: Sequelize.ARRAY,
    // }
})

module.exports = Game;