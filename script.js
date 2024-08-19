function convertToCelsius(temp){
    let celsius = (temp - 32) * 5/9;
    console.log(temp + "°F es igual a " + celsius.toFixed(1) + "°C");
}


function convertToFahrenheit(temp)
{
    let fahrenheit = (temp * 9/5) + 32;
    console.log(temp + "°C es igual a " + fahrenheit.toFixed(1) + "°F");
}

convertToCelsius(100);
convertToCelsius(32);
convertToFahrenheit(37.8);
convertToFahrenheit(0);