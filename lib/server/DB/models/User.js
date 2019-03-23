const conn = require('../conn');
const Sequelize = require('sequelize');

const User = conn.define('user', {
    id: {
        type: Sequelize.UUID, 
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    role: {
        type: Sequelize.ENUM('player', 'host')
    }

});

module.exports = User;