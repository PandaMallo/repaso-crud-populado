const express = require('express')
const { find } = require('../models/Coaster.model')
const router = express.Router()
const CoasterModel = require('../models/Coaster.model')
const ParkModel = require('../models/Park.model')

// Endpoints
router.get('/new', (req,res) => {

    ParkModel
    .find()
    .then(parks => res.render('./pages/coasters/new-coaster', {parks}))
    .catch(err => console.log(err))
})

router.post('/new', (req,res) => {

     const {name, description, inversions, length, park_id} = req.body

     CoasterModel
     .create({name, description, inversions, length, park_id})
     .then(() => res.redirect('/coasters/new'))
     .catch(err => console.log(err))
})


router.get('/', (req,res) => {

    CoasterModel
    .find()
    .populate('park_id')
    .then(coaster => res.render('./pages/coasters/coasters-index',{coaster}))
    .catch(err => console.log(err))
})


router.get('/:id', (req,res) => {
    
    const {id} = req.params

    CoasterModel
    .findById(id)
    .populate('park_id')
    .then(theCoaster => res.send('./pages/coasters/coaster-details', {theCoaster}))
    .catch(err => console.log(err))
})

module.exports = router
