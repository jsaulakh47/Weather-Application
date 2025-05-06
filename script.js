const button = document.getElementById("search-button");
const input  = document.getElementById("city-name");

const cityName = document.getElementById("city-name1");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(cityName)
{
    const pro = await fetch(`http://api.weatherapi.com/v1/current.json?key=83c83b1f173c443e802193304250605&q=${cityName}&aqi=yes`);
    return await pro.json();
}

button.addEventListener("click", async ()=> {
    const val = input.value;
    const result = await getData(val);
    cityName.innerText = `${result.location.name}-${result.location.region},${result.location.country}`;
    cityTemp.innerText = `${result.current.temp_c} degree`;
    cityTime.innerText = `${result.current.last_updated}`;
    console.log(result);
});