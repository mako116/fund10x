// axiosInstance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fund10x-app-kx5rv4za5a-uc.a.run.app/api/', // Replace this with your base URL
  timeout: 5000, // Set a timeout if needed
  headers: {
    'Content-Type': 'application/json', // Set default headers if needed
  },
});

export default instance;
