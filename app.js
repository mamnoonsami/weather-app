const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    console.log('Please privde an address')
} else {
    geocode(address, (error, geocodeData) => {
        if (error) {
            return console.log(error)
        }

        forecast(geocodeData.longitude, geocodeData.latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(geocodeData.location)
            console.log(forecastData.weather_description + ". It is Currently " + forecastData.temperature + " degrees out. It feels like " + forecastData.feels_like + " degrees.")
        })

    })
}