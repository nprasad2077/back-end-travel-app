const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/CityRoute");
const app = express();
const PORT = process.env.PORT | 8080;
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(routes);


mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


app.listen(PORT, () => console.log("Server running on port " + PORT));