import { useState } from 'react';
import Search from "./SearchBox"
import Info from "./InfoBox"
export default function Weather(){
    let[weather,setWeather]=useState({
        
            city: "Delhi",
            temp: 26.41,
            humidity: 14,
            pressure: 1012,
            weather: "clear sky",
    
        
    })

    let updateweather=(result)=>{
        setWeather(result)
        
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <Search updateweather={updateweather}/>
            <br></br>
            <Info info={weather}/>
        </div>
    )
}