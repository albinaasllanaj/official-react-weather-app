import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {

    function handleResponse(response){
        console.log(response.data);
    }

let apiKey = "1deefe5716d079b43ba8a49a72d134e2";
let longitude = 40.7;
let latitude = 74;
let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

axios.get(apiUrl).then(handleResponse);
    
return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                   <div className="WeatherForecast-day">Thu</div> 
                   <div className="icon">
                      <WeatherIcon code="01d" size={36}/>
                   </div>
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForecast-temp-max">19°</span>
                        <span className="WeatherForecast-temp-min">10°</span>
                          </div>
                </div>
            </div>
        </div>
    );
}

