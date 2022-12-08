const { Router } = require("express");
const { getTravel, saveTravel, deleteTravel, updateTravel } = require("../controllers/TravelController");
const router = Router();

router.get("/", getTravel);

router.post("/add", saveTravel);

router.put("/update", updateTravel);

router.post("/delete", deleteTravel); //changed delete to post , because axios is not making delete work !!!

module.exports = router;