var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const apiURLCurrent = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bc07e7e42f613427f563eb21cda2609d";
fetch(apiURLCurrent)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentWeather = jsObject;
        let current = document.createElement('div');
        let temperature = document.createElement('div');
        let wind_speed = document.createElement('div');
        let wind_chill = document.createElement('div');
        let humidity = document.createElement('div');


        current.textContent = currentWeather.weather[0].main;
        temperature.textContent = currentWeather.main.temp_max.toFixed(0) + "°F";
        wind_speed.textContent = currentWeather.wind.speed + "mph";;
        wind_chill.textContent = calculateWindChill(currentWeather.main.temp_max, currentWeather.wind.speed);
        humidity.textContent = currentWeather.main.humidity + "°%";;
      
        document.querySelector('div.summary-data').appendChild(current);
        document.querySelector('div.summary-data').appendChild(temperature);
        document.querySelector('div.summary-data').appendChild(wind_chill);
        document.querySelector('div.summary-data').appendChild(wind_speed);
        document.querySelector('div.summary-data').appendChild(humidity);
  

            
    });