import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters APPID and units on each request
    config.params.APPID = '0fcfca40631380ed07008b6e3e0f1b42';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });