//Uses OpenTriviaDB - https://opentdb.com
const API = 'https://opentdb.com/api.php?amount=10'
//const DEFAULT_QUESTIONS = require('../);

const axios = require('axios');

const getQuestions = () => {
    return axios.get(API)
        .then(({ data }) => {
            if(data.response_code != 0){
                console.error('API CALL FAILED')
                //return DEFAULT_QUESTIONS;
                return 'error'
            }
 
            return data.results;
        })
        .catch(err => console.error(err));
}

module.exports = {
    getQuestions
};