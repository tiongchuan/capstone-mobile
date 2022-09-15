import axios from "axios";

// Heroku
// const API = axios.create({
//     baseURL: "https://quiet-river-74601.herokuapp.com"
// });

// Localhost
// const API = axios.create({
//     baseURL: "http://192.168.72.203:3000"
// });

const API = axios.create({
    baseURL: "http://192.168.18.8:3000"
});

export default API

