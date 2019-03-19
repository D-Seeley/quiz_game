const Questions = require('./getQuestions');

class Game {
    constructor(params) {
        this.questions = {};
        //this.rounds = params.gameLength;
        this.gameLength = 5;
        this.round = 0;
        //players is obj with player Id as key and player as value. 
        this.players = {};
        this.id = '';
        this.joinKey = '';
    }

    setQuestions (questions) {this.questions = questions};
    getQuestions () {return this.questions};

    setPlayers (players) {this.players = players};
    addPlayer (player) {this.players[player.id] = player};
    getPlayers () {return this.players};

    setId (id) {this.id = id};
    getId () {return this.id};

    setJoinKey (key) {this.joinKey = key};
    getJoinKey () {return this.joinKey};
}

module.exports = Game;