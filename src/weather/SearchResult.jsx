import React from 'react';

function SearchResult( {data} ) {
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const src = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <section>
      <h2 className='result-heading'>{data.name} Temperature</h2>
      <div className="output">
        <h3 className='description'>{description}</h3>
        <img className='image' src={src} alt="Temperature Icon" />
        <br />
      <span className='span span1'>{Math.floor(temp)} &deg;K </span>
      <span className=' span span2'>{Math.floor(9 / 5 * (temp - 273) + 32)} &deg;F </span>
      <span className=' span span3'>{Math.floor(temp - 273.15)} &deg;C</span>
      </div>
    </section>
  )
}

export default SearchResult
