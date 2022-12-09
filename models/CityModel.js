const mongoose = require('mongoose')

// const citySchema = new mongoose.Schema({
//     name: {String,},
//     location: {String,}, 
//     population: {String,}, 
//     discover:{
//         name:{String,},
//         stars:{String,},
//         imageURL:{String,},
//     },
//     food:{
//         place:{String,},
//         stars:{String,},
//         description:{String,},
//     },
//     date: {String,}, 
//     weather: {String,}, 

// })

const citySchema = new mongoose.Schema({
    name: String,
    location: String, 
    population: Number, 
    discover:{
        name: String,
        stars: String,
        imageURL: String,
    },
    food:{
        place:String,
        stars: Number,
        description: String,
    },
    date: String, 
    weather: String, 

})

module.exports = mongoose.model('City', citySchema)