import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);




    useEffect(() => {
        setLoaded(false);
 }, [props.coordinates]);



    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }


// https://api.openweathermap.org/data/3.0/onecall?lat=74&lon=40.7&appid=1deefe5716d079b43ba8a49a72d134e2


    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-2"> <WeatherForecastDay data={forecast[1]} />
            </div>
            <div className="col-2"> <WeatherForecastDay data={forecast[2]} />
            </div>
            <div className="col-2"> <WeatherForecastDay data={forecast[3]} />
            </div>
            <div className="col-2"> <WeatherForecastDay data={forecast[4]} />
            </div>
            <div className="col-2"> <WeatherForecastDay data={forecast[5]} />
            </div>
            <div className="col-2"> <WeatherForecastDay data={forecast[6]} />
            </div>
           
            </div>
        </div>
    );
    
    } else {
        let apiKey = "73a00877081bd43422bdee0f3022beb5";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleResponse);

return null;

    }

}

