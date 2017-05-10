import React from 'react';

export default function GetWeather({className}) {
  return <span className={className}>
    <span>enter a city and state</span>
    <input type="text"></input>
    <button>get weather</button>
  </span>;
}
