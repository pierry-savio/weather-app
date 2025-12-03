
const key = "3793cfbe19689eb5d0b4e0f611a943d0";

function setNewData(data){
    document.querySelector(".city-title").innerHTML = "Weather in " + data.name;
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".weather-description").innerHTML = data.weather[0].description + ".";
    document.querySelector(".weather-icon").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(data);
}

async function getCity(inputCity){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&units=metric`).then(response => response.json());

    if (data.name == null){
        document.querySelector(".city-title").innerHTML = "Location not found.";
    }
    else{
        setNewData(data);
    }    
}

function buttonPressed(){
    const inputCity = document.querySelector(".city-input").value;
    
    if(inputCity == ""){
        document.querySelector(".city-title").innerHTML = "Type a location first!";
    }
    else{
        getCity(inputCity);
    }
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function githubPressed(){
    window.open("https://github.com/pierry-savio", "_blank");
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function linkedinPressed(){
    window.open("https://www.linkedin.com/in/pierry-dev/", "_blank");
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function callPressed(){

    const number = "5511986294195";

    window.open(`https://wa.me/${number}?text=Ol%C3%A1%21`, "_blank");
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

window.onload = () => {
    const sound = document.getElementById("lofi-music");
    sound.currentTime = 0;
    sound.play();
}
