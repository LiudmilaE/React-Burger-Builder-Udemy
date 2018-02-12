import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-f7a65.firebaseio.com/'
});

export default instance;