const request = require('request')

// the url : http://api.weatherstack.com/current?access_key=c21bb0678df7916a8d46702a81125349&query=37.8267,-122.4233
// if the weather has to be in farenheight http://api.weatherstack.com/current?access_key=c21bb0678df7916a8d46702a81125349&query=37.8267,-122.4233&units=f

const url_ws = 'http://api.weatherstack.com/current?access_key=c21bb0678df7916a8d46702a81125349&query=37.8267,-122.4233'

request({ url: url_ws, json: true }, (error, response) => { // "json: true" means the response will be automatically parsed as JSON, so that we do not need to parse by writing Json.parse() function
    //console.log(response.body.location) //doesnot work,because I am not premium member

    if (error) { // if the wifi is off or other low level errors occur
        console.log("Sorry! Unable to connect to weather service")
    } else if (response.body.error) { // if the longitude or lat or both are missing, the response has an error body 
        console.log("Unable to find the location")

    } else { // no errors
        console.log(response.body.current.weather_descriptions[0])
        console.log("It is " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees")
    }
})

/*
Geocoding
mapbox api is used to get the longitude and latitude to get the address
*/
const url_mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFtbm9vbjcyNjQiLCJhIjoiY2tzMTB1cjVuMGlqbDJ2bzNkNnNsZm95bSJ9.rY0cfMHJkOPOAze6KDoriw&limit=1'
request({ url: url_mapbox, json: true }, (error, response) => {
    if (error) {
        console.log("Sorry! Unable to connect to location service")
    } else if (response.body.features.length === 0) { //when the location spelling is not valid, the features array length is 0
        console.log("Unable to find the location. Try a different location")

    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log("Longitude is " + longitude)
        console.log("Latitude is " + latitude)
    }

})