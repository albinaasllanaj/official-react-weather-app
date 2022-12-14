import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";


export default function Weather(props) {
    const [city, setCity] = useState (props.defaultCity);
const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
            description: response.data.weather[0].description,
          icon: response.data.weather[0].icon
        })
    }

function search(){
    const apiKey = "1deefe5716d079b43ba8a49a72d134e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
        event.preventDefault();
       search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
            </div>
            <div className="col-3 submitButton"> 
            <input type="submit" value="Search" className="btn btn-warning w-100" />
            </div>
            </div>
            </form>
            
            <WeatherInfo data={weatherData}/> 
            <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
    );
    } else {
    search();
    return "Loading...";
    }

    
}