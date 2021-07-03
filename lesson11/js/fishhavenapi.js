const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0372&lon=-111.3960&appid=4d690f02017296e33407357d1be1a373&units=imperial&units=imperial';

fetch(apiURL)
.then ((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const currently = document.getElementById('current');
    currently.textContent = jsObject.weather[0].main;
    const temperature = document.getElementById('current-temp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const humidity = document.getElementById('humidity');
    humidity.textContent = jsObject.main.humidity;
    const WindSpeed = document.getElementById('speed');
    WindSpeed.textContent = jsObject.wind.speed.toFixed(0);

    const WindChill = document.getElementById('wind');
    if (temperature <= 50 && WindSpeed >= 3) {
        WindChill.textContent = (35.74 + 0.6215 * temperature - 35.75 * (Math.pow(WindSpeed, 0.16)) + 0.4275 * temperature * (Math.pow(WindSpeed, 0.16)) + "&deg;F");
    }
    else {
        WindChill.textContent = 'n/a';
    }
});

const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=-111.3960&appid=4d690f02017296e33407357d1be1a373&units=imperial';
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

    /*fivedayForecast.forEach( x => {
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[img].weather[0].icon}.png`;
        const desc = jsObject.list[img].weather[0].description;
        document.getElementById(`icon${img+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${img+1}`).setAttribute('alt', desc);
        img++
    })*/
});