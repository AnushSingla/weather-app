import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
export default function Search({updateweather}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0be7b20615496500c0b9cedc89fa4e97";
    let getweather= async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse)
            let info={
                city:city,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
        
            }
            console.log(info)
            return info;
        }catch(err){
            throw err;
        }
      
    };

   
    
    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
   let handlesubmit = async (evt) => {
    try {
        evt.preventDefault();
        setCity("");
        let weatherinfo = await getweather();
        updateweather(weatherinfo);

        // Send data to backend
        await fetch("http://localhost:5000/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(weatherinfo)
        });

    } catch (err) {
        console.error("❌ Error saving weather:", err);
        setError(true);
    }
}

    return(
    <div className="SearchBox">
    
     <form onSubmit={handlesubmit}>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" required value={city} onChange={handleChange}/>
     <br></br>
     <br></br>
     <Button variant="contained" type="submit">Search</Button>
     {error && <p style={{color:"red"}}>No such Place exists</p>}
     </form>
    
    </div>
    )
};