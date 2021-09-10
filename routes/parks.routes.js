const express = require('express')
const ParkModel = require('../models/Park.model')
const router = express.Router()

router.get('/new', (req, res) => res.render('./pages/parks/new-park'))

router.post('/new', (req, res) => {

    const { name, description } = req.body


    ParkModel
    .create({name,description})
    .then(() => res.redirect('/parks/new'))
    .catch(err => console.log(err))
         

})

module.exports = router
