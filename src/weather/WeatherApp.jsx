import React, { useState } from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import axios from 'axios';
import '../App.css';

let WeatherClientId;

if (process.env.NODE_ENV !== 'production') {
  WeatherClientId = process.env.REACT_APP_WEATHER_CLIENT_ID;
} else {
  WeatherClientId = process.env.WEATHER_CLIENT_ID;
}

function WeatherApp() {
  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setIsLoading(false);
    setData('');
    setInput(e.target.value);
  };

  const showTemperature = () => {
    if (input !== '') {
      setIsLoading(true);
    }

    fetchData();
    setInput('');
  };

  const fetchData = async () => {
    const result = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${WeatherClientId}`
    );

    setData(result.data);
    setIsLoading(false);
  };

  return (
    <main className='container'>
      <h1 className='heading'>City Weather</h1>
      <SearchBox
        input={input}
        handleChange={handleChange}
        showTemp={showTemperature}
      />
      {data.cod === 200 ? (
        <SearchResult data={data} />
      ) : isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <></>
      )}
    </main>
  );
}

export default WeatherApp;
