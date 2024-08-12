import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1e81e26292ac4e068e48b6e573fb4935'
    }
})