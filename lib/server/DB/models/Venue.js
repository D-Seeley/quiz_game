const conn = require('../conn');
const Sequelize = require('sequelize');

const Venue = conn.define('venue', {
    id: {
        type: Sequelize.UUID, 
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Venue;