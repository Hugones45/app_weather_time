const APIkey = "ub4rdc9RkF1u6wNVB0kfkBXGJXOeG7kJ"
const baseUrl = "https://dataservice.accuweather.com/"  // Changed to HTTPS

const getCityUrl = cityName => `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getWeatherUrl = cityKey => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIkey}`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Unable to retrieve the data.")
        }

        return response.json()
    } catch ({ name, message }) {
        alert(`${name}? ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))