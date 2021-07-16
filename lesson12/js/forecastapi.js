const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=15.78&lon=-90.23&exclude=minutely,hourly&appid=4d690f02017296e33407357d1be1a373';

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

const apiURLforecast = 'https://api.openweathermap.org/data/2.5/onecall?lat=15.78&lon=-90.23&exclude=minutely,hourly&appid=4d690f02017296e33407357d1be1a373';
fetch(apiURLforecast)
.then ((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    let img = 0;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fivedayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fivedayForecast)

    fivedayForecast.forEach( x => {
        let d = new Date(x.dt_txt);
        console.log(d);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0);
        day++;  
        const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        const desc = x.weather[0].description;
        document.getElementById(`icon${img+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${img+1}`).setAttribute('alt', desc);
        img++;
    }); 
});