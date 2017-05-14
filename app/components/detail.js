import React from 'react';
import moment from 'moment';

import Header from './header';

function Detail(props) {
  const {match:{params:{city}}, location:{state}} = props;
  const title = city.split(',').map(_.capitalize).join(' ');

  return <div>
    <Header />
    <div>
      <img style={{display: 'block', margin: 'auto', width: '40px', height: '41px'}}
        src={`/app/images/weather-icons/${state.weather[0].icon}.svg`}
      />
      <div style={{marginTop: '0.5em', textAlign: 'center'}}>
        {moment.unix(state.dt).format('dddd, MMM D')}
      </div>
      <div style={{marginTop: '0.5em', textAlign: 'center'}}>{title}</div>
      <div style={{marginTop: '0.5em', textAlign: 'center'}}>{state.weather[0].description}</div>
      <div style={{marginTop: '0.5em', textAlign: 'center'}}>{`min temp: ${state.temp.min} degrees`}</div>
      <div style={{marginTop: '0.5em', textAlign: 'center'}}>{`max temp: ${state.temp.max} degrees`}</div>
      <div style={{marginTop: '0.5em', textAlign: 'center'}}>{`humidity: ${state.humidity}`}</div>
    </div>
  </div>;
}

export default Detail;
