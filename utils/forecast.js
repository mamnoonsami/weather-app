const request = require('request')

/* the below function returns the weather forecast for 
the given longitude and latitude 
the url : http://api.weatherstack.com/current?access_key=c21bb0678df7916a8d46702a81125349&query=37.8267,-122.4233
if the weather has to be in farenheight http://api.weatherstack.com/current?access_key=c21bb0678df7916a8d46702a81125349&query=37.8267,-122.4233&units=f
*/

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c21bb0678df7916a8d46702a81125349&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Sorry! Unable to connect to weather service", undefined)
        } else if (response.body.error) {
            callback("Unable to find the location. Try again.", undefined)
        } else {
            callback(undefined, {
                weather_description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feels_like: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast