const apikey = "1fe526715b91d9730241cde4cb432bef"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serachbox =document.querySelector("#search input")
const serachbutton =document.querySelector("#search button")
const weathericon = document.querySelector(".weathericon")
const weatherpage = document.querySelector("#weather")
const body = document.body;

async function checkWeather (city) {
    const rensponce = await fetch (apiurl + city + `&appid=${apikey}`);
    if(rensponce.status==404){
        weatherpage.style.display="none"
       document.querySelector(".error").style.display="block"
    }
    else{
    var data = await rensponce.json();

    weatherpage.style.display="flex"
    document.querySelector(".error").style.display="none"

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
       weathericon.src = "images/clouds.png"
       body.style.backgroundImage="url(images/istockphoto-1328689113-170667a.webp)"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png"
        body.style.backgroundImage="url(images/istockphoto-508544168-612x612.jpg)"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
        body.style.backgroundImage="url(images/istockphoto-498063665-612x612.jpg)"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png"
        body.style.backgroundImage="url(images/istockphoto-108329641-612x612.jpg)"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
        body.style.backgroundImage="url(images/istockphoto-1322717990-612x612.jpg)"
    }
    else if(data.weather[0].main == "Humidity"){
        weathericon.src = "images/humidity.png"
        body.style.backgroundImage="url(images/istockphoto-1328689113-170667a.webp)"
    }
}
}

serachbutton.addEventListener("click",function(){
    checkWeather(serachbox.value)
})



  
  