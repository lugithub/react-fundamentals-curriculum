import React from 'react';
import queryString from 'query-string';
import moment from 'moment';
import _ from 'lodash';

import Header from './header';
import {getWeather, getForcast} from '../apis/open-weather';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataList: [],
    }
  }

  componentDidMount() {
    this.setState(() => ({loading: true}));
    const {search} = this.props.location;
    this.fetchForecast(search);
  }

  componentDidUpdate({location}) {
    if (this.props.location.search !== location.search) {
      const {search} = this.props.location;
      this.fetchForecast(search);
    }
  }

  fetchForecast(search) {
    const searchObj = queryString.parse(search);
    getForcast(searchObj.city)
      .then(response => {
        console.log(response);
        this.setState(() => ({dataList: response.data.list}))
      })
      .then(() => setTimeout(() =>
        this.setState(() => ({loading: false})), 1000));
  }

  render() {
    const {search} = this.props.location;
    const searchObj = queryString.parse(search);

    return <div>
      <Header />
      {this.state.loading ? <span>loading...</span> :
        <ForecastList city={searchObj.city} dataList={this.state.dataList} />}
    </div>
  }
}

function ForecastList({city, dataList}) {
    const title = city.split(',').map(_.capitalize).join(' ');
    return <div>
      <div style={{textAlign: 'center'}}>{title}</div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>{
        dataList.map(dayWeather =>
          <div key={dayWeather.dt} style={{margin: '1em'}}>
            <img style={{display: 'block', margin: 'auto', width: '40px', height: '41px'}}
              src={`app/images/weather-icons/${dayWeather.weather[0].icon}.svg`}
            />
            <div style={{marginTop: '0.5em'}}>{moment.unix(dayWeather.dt).format('dddd, MMM D')}</div>
          </div>)
      }</div>
    </div>;
}

export default Forecast;
