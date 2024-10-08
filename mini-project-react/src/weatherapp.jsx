import SearchBox from "./searchbox"
import InfoBOX from "./infobox"
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState(
        {
            city:"Dehli",
            feelsLike:34.55,
            humidity:36,
            max_temp:34.05,
            min_temp:34.05,
            temp:34.05,   
            weather:"haze",          
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
  return (
    <div>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBOX info={weatherInfo}/>
    </div>
  );
}

