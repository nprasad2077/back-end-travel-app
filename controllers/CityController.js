const CityModel = require("../models/CityModel");

module.exports.getCity = async (req, res) => {
    const city = await CityModel.find();
    res.send(city);
}

module.exports.saveCity = (req, res) => {
    const { name,location,population,discover,food,date,weather } = req.body;

    CityModel
        .create({ name,location,population,discover,food,date,weather })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteCity = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    CityModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateCity = (req, res) => {
    const { _id,name,location,population,discover,food,date,weather} = req.body;

    CityModel
        .findByIdAndUpdate(_id, { name,location,population,discover,food,date,weather})
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}


