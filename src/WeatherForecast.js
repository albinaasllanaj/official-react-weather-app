import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }

    console.log(props);

let apiKey = "73a00877081bd43422bdee0f3022beb5";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;


// https://api.openweathermap.org/data/3.0/onecall?lat=74&lon=40.7&appid=1deefe5716d079b43ba8a49a72d134e2

axios.get(apiUrl).then(handleResponse);
    
return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                   <div className="WeatherForecast-day">Thursday</div> 
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

