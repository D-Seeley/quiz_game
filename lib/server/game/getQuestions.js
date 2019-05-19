//Uses OpenTriviaDB - https://opentdb.com
const API = 'https://opentdb.com/api.php?amount='
//const DEFAULT_QUESTIONS = require('../);

const axios = require('axios');

const getQuestions = (numberOfQues) => {
    console.log('api: ', API, 'num: ', numberOfQues);
    return axios.get(`https://opentdb.com/api.php?amount=${numberOfQues}`)
        .then(({ data }) => {
            if (data.response_code != 0) {
                console.error('API CALL FAILED');
                console.log(data)
                //return DEFAULT_QUESTIONS;
                return 'error';
            }
            return data.results;
        })
        .catch(err => console.error(err))
    }

module.exports = getQuestions;