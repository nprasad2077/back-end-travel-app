const mongoose = require(`../db/connection`);
const Schema = mongoose.Schema;

const City = new Schema({
    name: String, 
    location: String, 
    population: Number, 
    discover: [{
        name: String, 
        description: String, 
        imageURL: String 
    }], 
    food: [{
        place: String, 
        stars: Number, 
        description: String 
    }], 
    date: Date, 
    weather: String 
})

module.exports = mongoose.model('City', City)

