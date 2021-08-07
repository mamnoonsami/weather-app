const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


forecast('44.1545', -75.0788, (error, data) => {
    console.log(error)
    console.log(data)
})

geocode('sylhet', (error, data) => {
    console.log(error)
    console.log(data)
})