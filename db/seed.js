const mongoose = require('../db/connection');
const City = require('../models/City');
const data = require('../db/cities.json');

City.deleteMany({}).then(() => {
    City.create(data).then(cities => {
    })
})