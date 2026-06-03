import Card from './components/card';
import Input from './components/input';
import Button from './components/button';
import { useEffect } from 'react';
import './App.css';

import { useWeather } from './context/weather';

function App() {
    const weather = useWeather();
    console.log(weather);
    useEffect(() => {
      //Get current location here..
      weather.fetchDataForCurrentLocation();
    }, []);
  return (
    <div className="App">
      <h1 className="app-title">
  🌦️ Weather Forecast
    </h1>

     <div className="search-container">
      <Input />
      <Button
       onClick={weather.fetchData}
       value="Search"
     />
     </div>
       <Card />
       <Button value="Refresh" />
    </div>
  );
}

export default App;
