let data;
const searchBox = document.getElementById('searchBox');
const countryName = document.getElementById('countryName');
const stateName = document.getElementById('stateName');
const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const temperature = document.getElementById('temperature');
const image = document.getElementById('image');
const overCaste = document.getElementById('overCaste');

console.log(searchBox , countryName , stateName , cityName , humidity , windspeed , temperature, image,overCaste)

const getData = async(event)=>{
    event.preventDefault();
    if(!searchBox.value){
        alert("please enter something")
        return
    }

    const city = searchBox.value;
    console.log(city)
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=134ce391cb8d45c6829150834251501&q=${city}`);
    const dataJson = await fetchData.json(); 
    data = dataJson;
    console.log(data)

    countryName.innerText = data.location.country
    stateName.innerText = data.location.region
    cityName.innerText = data.location.name
    humidity.innerText = data.current.humidity
    windspeed.innerText = data.current.wind_kph+'KPH'
    temperature.innerText = data.current.temp_c+'C'
    image.src =data.current.condition.icon
    overCaste.innerHTML = data.current.condition.text

}