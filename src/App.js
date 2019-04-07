import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
