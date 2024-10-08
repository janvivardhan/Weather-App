import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="8e5d2f838d636fd83e5a215bf2cfc1a8";
   

    let wheatherInfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp: jsonResponse.main.temp,
            min_temp:jsonResponse.main.temp_min,
            max_temp:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err) {
        throw err;
    }
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit =async(event) =>{
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo= await wheatherInfo();
       updateInfo(newInfo); 
        } catch(err) {
            setError(true);
        }
    };
    return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField  id="city" label="city name" 
        onChange={handleChange}
        variant="filled" required/>
        <br></br>
        <br></br>
        <Button type='submit' variant="contained">Search</Button>
        {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
    </div>
    );
}