import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import axios from 'axios';
import '../App.css';

function WeatherApp() {
  const [input, setInput] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setIsLoading(false);
    setCity('');
    setData('');
    setInput(e.target.value);
  }

  const showTemperature = () => {
    { input !== '' && setIsLoading(true)};
    setCity(input);
    setInput('');
  }

  useEffect( () => {
    console.log('Effecting effect');
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_CLIENT_ID}`,
      );
 
      setData(result.data);
      setIsLoading(false);
    };
 
    fetchData();
  }, [city]);
 
  return (
    <main className='container'>
     <h1 className='heading'>City Weather</h1> 
     <SearchBox
     input={input}
     handleChange={handleChange}
     showTemp={showTemperature} 
     />
     { data.cod === 200 ? <SearchResult data={data}/> : isLoading ? <div className='loading'>Loading...</div> : <></> }
    </main>
  )
}

export default WeatherApp
