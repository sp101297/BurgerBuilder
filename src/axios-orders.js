import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-466c5.firebaseio.com/'
});

export default instance;