class Player {
    constructor(params) {
        this.name = params.name;
        //this.rounds = params.gameLength;
        this.id = params.socketId;
        this.score = 0;
        this.type = 'player'; //player, host, venue
    }
}

module.exports = Player;