import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
            description: response.data.weather[0].description,
          iconUrl: response.data.weather[0].icon
        })
    }
    if (weatherData.ready) {
return (
        <div className="Weather">
            <form>
                <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3"> 
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
            </div>
            </form>
            
            <h1>{weatherData.city}</h1>
<ul>
    <li>
    <FormattedDate date={weatherData.date} />
    </li>
    <li className="text-capitalize">
        {weatherData.description}
    </li>
</ul>
<div className="row mt-3">
    <div className="col-6">
        <div className="d-flex">
        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
        <div className="float-left">
        <span className="temperature">{weatherData.temperature}</span>
       <span className="unit">F°</span>  
</div>
       </div>
       </div>
    <div className="col-6">
        <ul>
            
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} kmh</li>
        </ul>
    </div>
</div>
        </div>
    );
    } else {
        const apiKey = "1deefe5716d079b43ba8a49a72d134e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";
    }

    
}