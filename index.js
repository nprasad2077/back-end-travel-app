const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const routes = require("./routes/route");
const app = express();
const PORT = process.env.PORT | 8080;

require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


app.use(routes);
app.listen(PORT, () => console.log("Server running on port " + PORT));

// app.get('/', (req, res) => {
//     res.redirect('/travel');
// });

// const controller = require('./controllers/controller')
// app.use('/travel', controller);
