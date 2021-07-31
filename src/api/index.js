import axios from 'axios';

export default axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/`,
    headers: {
        'x-auth': process.env.REACT_APP_API_URL,
        'Content-Type': 'application/json;charset=UTF-8',
    }
})