import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="my-header">
          
          <h2>Earthquakes!</h2>
        </div>
        <p className="App-intro">
         
        </p>
        <EarthquakeList />
      </div>
    );
  }
}

export default App
