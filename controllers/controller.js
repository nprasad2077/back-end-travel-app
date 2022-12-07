const express = require('express');
const router = express.Router();

const City = require('../models/City');

router.get('/', async(req, res, next) => {
    try {
        const cities = await City.find({})
        res.json(cities);
    } catch (err) {
        next(err);
    }
})

