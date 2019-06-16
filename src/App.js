import React from 'react';
import AppContainer from './components/AppContainer';
import './App.css';

const config = Object.freeze({
  firstVisitResults: 'firstVisitResults',
  apiKey: '2331fa1c07dd986b1274210bf14812bb',
  hostName: 'https://api.openweathermap.org/data/2.5/forecast',
  tempUnits: {
    celsius: 'celsius',
    fahrenheit: 'fahrenheit',
  },
  searchHistoryLimit: 3,
  searchHistory: 'searchHistory',
});

// dont attempt to auto-query location if the browser doesnt support geolocation
const firstVisit = ("geolocation" in navigator) && !(localStorage.getItem(config.firstVisitResults));

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Weather Searcher</h1>
        <AppContainer
          config={config}
          firstVisit={firstVisit}
        />
      </div>
    </div>
  );
}

export default App;
