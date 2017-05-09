import React from 'react';

export default function GetWeather({className}) {
  return <span className={className}>
    <div>
      <p>enter a city and this.state
      </p>
    </div>
    <div>
      <p>
        <input type='text'/>
      </p>
    </div>
    <div>
      <p>
        <input type='submit' value='get weather'/>
      </p>
    </div>
  </span>;
}
