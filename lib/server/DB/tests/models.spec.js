const Sequelize = require('sequelize');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const { sync, Game, User } = require('../index');
chai.use(chaiAsPromised);

//Sample data used in testing
const sample_game_config = {
    length: 10,
    currentRound: 1, 
    scores: { playerOne: 1, playerTwo: 2 }
};

const sample_user_config = {
    name: 'Rick',
    role: 'player'
}


describe('PostgreSQL Database', ()=> {
    beforeEach(()=> sync());

    it('sync exports a function', ()=> {
        expect(sync).to.be.ok;
    });
    
    describe('Game model', ()=> {
        it('exists', ()=> {
            expect(Game).to.be.ok;
        });

        it('automatically creates an ID', ()=> {
            Game.create(sample_game_config)
                .then(game_one => {
                    // console.log('game.id is: ', game_one.id);
                    expect(game_one.id).to.be.a('string');
                    expect(game_one.id).to.be.ok;
                }) ;
        });

        it('has a length that must be a positive integer', ()=> {
            Game.create(sample_game_config)
                .then( game_one => {
                    // console.log('game.length is: ', game_one.length);
                    expect(game_one.length).to.be.a('number');
                    expect(game_one.length > -1).to.be.ok;   
                }).then(()=> {
                    expect
                })
        });

        it('has a current round', ()=> {
            Game.create(sample_game_config)
                .then( game_one => {
                    // console.log('Game.currentRound is: ', game_one.currentRound);
                    expect(game_one.currentRound).to.be.a('number');
                    expect(game_one.currentRound > -1).to.be.ok;
                }) ;
        });

        it('keeps score in a key/value pair, using player ID as key', ()=> {
            Game.create(sample_game_config)
                .then( game_one => {
                    // console.log('game.scores is: ', game_one.scores);
                    expect(game_one.scores).to.be.ok;
                })
        })

    });

    describe.only('User model', ()=> {
        it('exists', ()=> {
            expect(User).to.be.ok;
        });

        it('has an id that is a string with default value', ()=> {
            User.create(sample_user_config)
                .then(user_one => {
                    expect(user_one.id).to.be.a('STRING');
                })
        });

        it('has a name that is a string', ()=> {
            User.create(sample_user_config)
                .then(user_one => {
                    expect(user_one.name).to.be.a('STRING');
                })
        });

        it('has a role, which is enumarable including "player" or "host"', ()=> {
            User.create(sample_user_config)
                .then(user_one => {
                    expect(user_one.role).to.be.ok;
                })
                // .then(()=> {
                //     return expect(Promise.reject(
                //         User.create({ name: 'morty', role: 'player' })
                //     )).to.be.rejected;
                // })
        })
    });

    // describe('Venu', ()=> {

    // })
});
