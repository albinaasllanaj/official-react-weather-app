import React, { useState } from "react";


export default function WeatherTemperature(props) {
const [unit, setUnit] = useState('fahrenheit');
function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
}

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
}


if (unit === 'fahrenheit') {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">{props.fahrenheit}</span>
       <span className="unit">F° | {" "} 
       <a href="/" onClick={showCelcius}>
         C°
         </a>
         </span> 
        </div>
    );
} else {
    let celcius = (props.fahrenheit - 32 * 5) /9  
    return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(celcius)}</span>
       <span className="unit">C° | {" "} 
       <a href="/" onClick={showFahrenheit}>
         F°
         </a>
         </span> 
        </div>
    );
}
    
}