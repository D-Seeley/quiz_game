const Sequelize = require('sequelize');
const conn = require('./conn');
const getQuestions = require('../game/getQuestions')

//Import Sequelize Models
const Game = require('./models/Game');
const User = require('./models/User');
const Venue = require('./models/Venue');
const Question = require('./models/Question');

//Assign Model Relationships to create Join Tables
const GameRoom = conn.define('GameRoom', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    joinName: {
        type: Sequelize.STRING
    }
})

const GameRound = conn.define('GameRound', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    round: {
        type: Sequelize.INTEGER
    },
    responses: {
        type: Sequelize.HSTORE
    }
})

User.belongsToMany(Game, {  through: 'GameRoom' });
Venue.belongsToMany(Game, { through: 'GameRoom' });
Game.belongsToMany(User, { through: 'GameRoom' });

GameRound.belongsTo(Game, { through: "GameRound" });
Question.belongsToMany(Game, { through: "GameRound" });



const seed = async () => {
    try {
        let earth, moon, ques1, ques2, game2;

        await User.bulkCreate([
            { name: 'Rick', role: 'host' },
            { name: 'Morty', role: 'player' },
            { name: 'Summer', role: 'player' }
        ])

        await Game.create({ length: 15, currentRound: 1 });
        await Venue.create({ name: 'KR' });

        const [rick, morty, summer] = await User.findAll();
        const game1 = await Game.findOne({});

        const questions = await getQuestions(1);
        Question.addFromJSON(questions, game1);

        game1.setUsers(rick);

        //////////////////////////Continue building sample relationships///////


    } catch (err) {
        console.log(err)
    }
}

const sync = () => conn.sync({ force: true }).then(()=> seed());

module.exports = { sync, Game, User, Venue, Question, GameRoom, GameRound }