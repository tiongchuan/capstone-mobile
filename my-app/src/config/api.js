import axios from "axios";

// Heroku
const API = axios.create({
    baseURL: "https://student-database2022.herokuapp.com"
});

// // Localhost
// const API = axios.create({
//     baseURL: "http://localhost:3000"
// });

export default API;

