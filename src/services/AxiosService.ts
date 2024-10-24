import axios from "axios";

/**
 * This is our Axios instance, that will be used for all axios requests in this app.
 * Adding the base url to axios, which will be used in this app. Here we say "Axios send all requests
 * to this base url".
 */
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});
