const express = require('express');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get('/', (req, res) => {
//     res.redirect('/travel');
// });

const controller = require('./controllers/controller')
app.use('/travel', controller);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
});

app.listen(app.get('port'), () => {
    console.log(`App listening on ${app.get('port')}`)
})
