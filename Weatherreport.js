import React, { useState } from 'react'
import axios from 'axios'

function Weathers() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  //const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
 

  const searchLocation = (search) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=a7c4e2f81d238476de5016691511ebde&q=${search}`) // ✅ Used template string
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    setLocation('') 
  }
 

  const handlesubmit=(event)=>{
        event.preventDefault();
        searchLocation(location)
        

  }

 return(<>
 {console.log(data)}
  <div className="app">
    <div className='search'>
    <form onSubmit={handlesubmit}>
    <input 
    value={location} 
    onChange={event => setLocation(event.target.value)}
    type='text' placeholder='Enter the Location'></input> </form>   
    </div>  
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name ? data.name : null}</p>
          </div>
          {data.weather?.[0]?.icon && (
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather-icon"
            />
          )}
          <div className="temp">
            {data.main ?. temp ? <h1>{data.main.temp.toFixed(0)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ?.[0]?.main? <p>{data.weather[0].main}</p> : null }
          </div>
        </div>
        
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {console.log(data.main.feels_like)}
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
          
        



      </div>
   
      </div>
  
  
  </>)


}



export default Weathers
 
    
