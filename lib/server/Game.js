const Questions = require('./getQuestions')

class Game {
    constructor(params) {
        this.questions = {};
        //this.rounds = params.gameLength;
        this.gameLength = 5;
        this.round = 0;
        this.players = {};
        this.id = '';
    }

    setQuestions (questions) {this.questions = questions};
    getQuestions () {return this.questions};

    setPlayers (players) {this.players = players};
    getPlayers () {return this.players};

    setId (id) {this.id = id}
    getId () {return this.id}

}

module.exports = Game;