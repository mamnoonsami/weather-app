const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
    console.log('Please privde an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(longitude, latitude, (error, { weather_description, temperature, feels_like }) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(weather_description + ". It is Currently " + temperature + " degrees out. It feels like " + feels_like + " degrees.")
        })

    })
}