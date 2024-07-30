// src/http.js
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/api', // API基础路径
  timeout: 10000, // 请求超时时间
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么，例如添加Token
    const token = localStorage.getItem('token'); // 假设Token存储在localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // 添加Token到请求头
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截
http.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response) {
      console.error('Response error:', error.response);
    }
    return Promise.reject(error);
  },
);

export default http;
