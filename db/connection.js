const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/traveldata`, { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose 