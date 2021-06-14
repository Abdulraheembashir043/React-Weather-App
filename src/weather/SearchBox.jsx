import React from 'react'

function SearchBox( {input, handleChange, showTemp} ) {
  return (
    <>
      <input
      className='input'
      type="text"
      name='value'
      value={input}
      placeholder='Enter City Name'
      onChange={handleChange}
      />
      <button className='button' type="submit" onClick={showTemp}>Show temperature</button>
    </>
  )
}

export default SearchBox
