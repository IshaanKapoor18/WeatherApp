


function DateTimeHeader() {
            var today = new Date();
            var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() ;
            let day = today.getDay();
            document.getElementById("TimeDate").innerText = ''

            switch (day) {
                case 0:
                        day = "Sunday";
                    break;
                case 1:
                        day = "Monday";
                    break;
                case 2:
                        day = "Tuesday ";
                    break;
                case 3:
                        day = "Wednesday ";
                    break;
                case 4:
                        day = "Thursday  ";
                    break;
                case 5:
                        day = "Friday  ";
                    break;
                case 6:
                        day = "Saturday  ";
                    break;

                default:
                    break;
            }

            console.log(day+" "+date+" "+time);
            const DateDisplay = day+" "+date+" "+time
            document.getElementById("TimeDate").innerText = DateDisplay;
}

function PlaceItems(Datafetched) {
    const Temp = Datafetched.main.temp;
    console.log(Temp);
    const Feels = Datafetched.main.feels_like;
    const Temp_min = Datafetched.main.temp_min;
    const Temp_max = Datafetched.main.temp_max;
    const pressure = Datafetched.main.pressure;
    const humidity = Datafetched.main.humidity;
    const wind = Datafetched.wind.speed;
    const weather = Datafetched.weather[0].main;

    console.log(weather);
    var t = Temp+"°C";
    document.getElementById("temp").innerText = t;
    t = Feels + "°C";
    document.getElementById("FeelLike").innerText = t;
    const h = "Humidity: "+ humidity + "%";
    document.getElementById("Humidity").innerText = h;
    const w = "Wind: "+wind + "Km/hr";
    document.getElementById("wind").innerText = w;
    const p = "Pressure : "+pressure;
    document.getElementById("Pressure").innerText = p;
    const max = "Max temperature = "+Temp_max+"°C";
    document.getElementById("Max_temp").innerText = max;
    const min = "Min temperature = "+Temp_min+"°C";
    document.getElementById("Min_temp").innerText = min;
    
    var check = weather.toLowerCase();

    switch (check) {
        case "haze":
            document.getElementById("MainW").src = "./Functional-component/Working-component/haze.jpg";
        break;
        case "rain":
            document.getElementById("MainW").src = "./Functional-component/Working-component/rain.jpg";
        break;
        case "snow":
            document.getElementById("MainW").src = "./Functional-component/Working-component/snow.avif";
        break;
        case "thunderstorm":
            document.getElementById("MainW").src = "./Functional-component/Working-component/thunderstorm.jpg";
        break;
                

        default:
            document.getElementById("MainW").src = "./Functional-component/Working-component/sunny.webp";
    }

}

async function GenerateResponse(CityName) {
    const city = CityName;
    // city name to be searched for 
    const urlApi = "https://api.openweathermap.org/data/2.5/weather?appid=58a4c18e5bda85405653741b7fba160d&units=metric&q="; 
    const Searchedurl = urlApi + city;
    const Response = await fetch(Searchedurl);
    document.getElementById("city").innerText = CityName;
    const Datafetched  = await Response.json();
    console.log(Datafetched);

    PlaceItems(Datafetched)
}

function fetchDataFromText() {
    const stat = document.querySelector(".searchBar input");
    const dataStr = stat.value;
    console.log(`You entered ${dataStr}`);
    
    console.log(GenerateResponse(dataStr));

}


function SoundClick() {
    console.log("Clicked");

    // init the search for the data 
    fetchDataFromText();

}

// calling header current time and date 
DateTimeHeader();
