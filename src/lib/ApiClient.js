import API_KEY from '../constants/apiKey';
import axios from 'axios';

function getProjects(query, cb) {

    axios.get(`projects?q=${query}&api_key=${API_KEY}`)
        .then(checkStatus)
        .then(cb)
        .catch(function (error) {
            console.log(error); // eslint-disable-line no-console
        });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    }

    const error = new Error(`HTTP Error ${response.statusText}`);

        error.status = response.statusText;
        error.response = response;

    throw error;
}

const ApiClient = { getProjects };

export default ApiClient;
