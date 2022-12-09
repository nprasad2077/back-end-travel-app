const { Router } = require("express");

const { getCity, saveCity, deleteCity, updateCity } = require("../controllers/CityController");

const router = Router();

router.get("/", getCity);

router.post("/add", saveCity);

router.put("/update", updateCity);

router.delete("/delete", deleteCity); //changed delete to post , because axios is not making delete work !!!

module.exports = router;
