const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=15.78&lon=-90.23&exclude=minutely,hourly&appid=4d690f02017296e33407357d1be1a373&units=imperial';

fetch(apiURL)
.then ((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const currently = document.getElementById('current');
    currently.textContent = jsObject.current.weather[0].main;
    const temperature = document.getElementById('current-temp');
    temperature.textContent = jsObject.current.temp.toFixed(0);
    const humidity = document.getElementById('humidity');
    humidity.textContent = jsObject.current.humidity;
});

const apiURLforecast = 'https://api.openweathermap.org/data/2.5/onecall?lat=15.78&lon=-90.23&exclude=minutely,hourly&appid=4d690f02017296e33407357d1be1a373&units=imperial';
fetch(apiURLforecast)
.then ((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    let img = 0;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    document.getElementById("dayofweek1").textContent = dayofweek[6];
    document.getElementById("dayofweek2").textContent = dayofweek[0];
    document.getElementById("dayofweek3").textContent = dayofweek[1];
    
    document.getElementById("forecast1").textContent = jsObject.daily[0].temp.day;
    document.getElementById("forecast2").textContent = jsObject.daily[1].temp.day;
    document.getElementById("forecast3").textContent = jsObject.daily[2].temp.day;
});