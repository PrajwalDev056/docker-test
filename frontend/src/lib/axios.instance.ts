import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://nginx',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
