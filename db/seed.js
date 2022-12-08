const mongoose = require('./connection')
const City = require('../models/CityModel')

const cityData = require('./seeds.json')

City.deleteMany()
    .then(() => City.insertMany(cityData))
    .then(console.log)
    .catch(console.error)
    .finally(process.exit)


module.exports = mongoose