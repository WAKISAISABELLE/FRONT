import axios from 'axios';
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        'Content-Type': 'applicationn/json',
    },
});
export default apiClient;