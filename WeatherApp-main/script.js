const apikey ="588edbaa3ea52e3e12e5c8d5250b1d0f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var icon = document.querySelector(".weather-icon");

// console.log(icon);


// console.log(apiurl +`&appid=${apikey}`==="https://api.openweathermap.org/data/2.5/weather?units=metric&q=hyderabad&appid=588edbaa3ea52e3e12e5c8d5250b1d0f");

async function checkWeather(val){
    const response =  await fetch(apiurl+val+`&appid=${apikey}`)
    var data =await response.json()
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";
    

    // icon.src="./images/clouds.png"
    if((data.weather[0].main).toLowerCase()==="clouds"){
        console.log("inside clouds");
        icon.src="./images/clouds.png"
    }
    else if(data.weather[0].main.toLowerCase()==="clear"){
        icon.src="./images/clear.png"
    }
    else if(data.weather[0].main.toLowerCase()==="drizzle"){
        icon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main.toLowerCase()==="mist"){
        icon.src="./images/mist.png"
    }
    else if(data.weather[0].main.toLowerCase()==="rain"){
        icon.src="./images/rain.png"
    }
    else if(data.weather[0].main.toLowerCase()==="snow"){
        icon.src="./images/snow.png"
    }
    else if(data.weather[0].main.toLowerCase()==="clear"){
        icon.src="./images/clear.png"
    }
    document.querySelector(".weather").style.display="block";
}

let searchinput=document.querySelector(".search input");
let searchbutton=document.querySelector(".search button");


searchbutton.addEventListener("click",()=>{
    console.log(searchinput.value);
    checkWeather(searchinput.value); 
})
// console.log(document.querySelector(".city"));