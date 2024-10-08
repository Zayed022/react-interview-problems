import React, { useEffect, useState } from 'react'

const Fourteen = () => {
    const [weather,setWeather] = useState(null);
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4b5d2d6c09bd81f1a4b37062014b9481`)
                .then((response)=>response.json())
                .then((data)=>setWeather(data));
            })
        }
    },[])
  return (
    <div>
        {weather?(
            <div>
                <h2>Current Weather</h2>
                <p>Weather:{weather.main.temp}</p>
                <p>Conditions:{weather.weather[0].description}</p>
            </div>
        ):(
            <p>Loading...</p>
        )}
      
    </div>
  )
}

export default Fourteen
