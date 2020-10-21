import axios from 'axios';

const api = axios.create({
    baseURl: 'http://127.0.0.1:3000/',
});

export default api;
