const API_KEY = "97f1afaa2ec18123ed46cec7f4fec180";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      const temp = Math.round(data.main.temp - 273);
      weather.innerHTML = `${data.weather[0].main} / ${temp}도`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
