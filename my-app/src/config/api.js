import axios from "axios";

// Heroku
const API = axios.create({
    baseURL: "https://quiet-river-74601.herokuapp.com"
});

// // Localhost
// const API = axios.create({
//     baseURL: "http://localhost:3000"
// });

export default API;

