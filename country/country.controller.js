const express = require('express');
const router = express.Router();
const countryService = require('./country.service');

// routes

router.get('/country', getCountry);

module.exports = router;

function getCountry(req, res, next) {
    // console.log('getCountry===>>hit==>', res);
    countryService.getCountry()
        .then(country => {
            console.log('country  iteration===',country);
            res.json(country)
        })
        .catch(err => next(err));

        
}

