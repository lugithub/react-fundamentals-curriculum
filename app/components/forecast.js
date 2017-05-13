import React from 'react';
import queryString from 'query-string';

import Header from './header';
import {getWeather, getForcast} from '../apis/open-weather';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.setState(() => ({loading: true}));
    const {search} = this.props.location;
    const searchObj = queryString.parse(search);
    getForcast(searchObj.city)
      .then(response => console.log(response))
      .then(() => setTimeout(() =>
        this.setState(() => ({loading: false})), 3000));
  }

  render() {
    return <div>
      <Header />
      <span>{this.state.loading ? 'loading...' : 'forecast component'}</span>
    </div>
  }
}
export default Forecast;
