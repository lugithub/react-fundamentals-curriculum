import axios from 'axios';

function getWeather(location) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}
&appid=06f0b19597649bc0aa78a099de587edf`);
}

function getForcast(location) {
  return axios.get(`http://api.openweathermap.org/data/2.5
/forecast/daily?q=${location}&type=accurate
&APPID=06f0b19597649bc0aa78a099de587edf&cnt=5`);
}

export {getWeather, getForcast};
