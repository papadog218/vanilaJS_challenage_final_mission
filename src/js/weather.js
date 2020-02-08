const OPEN_WEATHER_API_KEY = "3c4e54cb440265d800af9d3023a489f6";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
    // 제일 끝에 units = 온도표기방법설정
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
    .then((res) => {
        return res.json();
    }).then(function(json){
        // console.log(json)
        const temp= json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function geoSucces(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const coordsObj = {
        lati,
        longi
    };
    saveCoords(coordsObj);
    getWeather(lati, longi);
}

function geoError() {
    console.log("geo ERROR!")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSucces, geoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        //GET날씨
        const jsonCoords = JSON.parse(loadedCoords);
        // console.log(jsonCoords);
        getWeather(jsonCoords.lati, jsonCoords.longi);
    }
}

function init() {
    loadCoords();
}

init();