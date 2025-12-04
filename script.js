
const key = "3793cfbe19689eb5d0b4e0f611a943d0";
let  music = false;

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
    buttonPressedSound();
    
    const inputCity = document.querySelector(".city-input").value;
    
    if(inputCity == ""){
        document.querySelector(".city-title").innerHTML = "Type a location first!";
    }
    else{
        getCity(inputCity);
    }
}

function githubPressed(){
    buttonPressedSound();
    window.open("https://github.com/pierry-savio", "_blank");
}

function linkedinPressed(){
    buttonPressedSound();
    window.open("https://www.linkedin.com/in/pierry-dev/", "_blank");
}

function callPressed(){
    buttonPressedSound();

    const number = "5511986294195";

    window.open(`https://wa.me/${number}?text=Ol%C3%A1%21`, "_blank");
    
}

function musicButtonPressed(){
    buttonPressedSound();

    const audio = document.getElementById("bg-music");

    if (music == true){
        document.querySelector(".music-button").src = "./img/music-off.png";
        audio.pause(); // para música
        music = false;
    }
    else{
        document.querySelector(".music-button").src = "./img/music-on.png";
        audio.play(); // para música
        music = true;
    }
    console.log(music);
}

function buttonPressedSound(){
    let sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}
