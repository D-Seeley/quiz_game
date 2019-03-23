const Sequelize = require('sequelize');
const conn = new Sequelize(
    'postgres://localhost/quiz_game',
    { logging: false }
);

module.exports = conn;