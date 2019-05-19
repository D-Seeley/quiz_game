const conn = require('../conn');
const Sequelize = require('sequelize');

const Question = conn.define('question', {
    id: {
        type: Sequelize.UUID, 
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    type: {
        type: Sequelize.STRING
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
    incorrect_answers: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
    },
    correct_answer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    difficulty: {
        type: Sequelize.STRING
    }
});

Question.addFromJSON = (questions = [], game) => {
    questions.forEach(_question => {
        const { category, type, difficulty, question, correct_answer, incorrect_answers } = _question;

        return Question.create({ category, type, difficulty, question, correct_answer, incorrect_answers })
            .then(question => {
                question.addGame(game)
            })
    });
}

module.exports = Question;