import React from 'react';

import {
  Link
} from 'react-router-dom';

import ButtonLink from './button-link';

import {getWeather, getForcast} from '../apis/open-weather';

export default class GetWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({location: event.target.value});
  }

  handleClick(location) {
    getWeather(location).then(response => console.log(response));
    //getForcast(location).then(response => console.log(response));
  }

  render() {
    return <span className={this.props.className}>
      <span>enter a city and state</span>
      <input type="text" value={this.state.location}
        onChange={this.handleChange}></input>
      <ButtonLink label='get weather' to={{
        pathname: '/forecast',
        search: `?city=${this.state.location}`,
      }}></ButtonLink>
    </span>;
  }
}
