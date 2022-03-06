// setup express
const express = require('express');
const router = express.Router()
const breadSeedData = require('../seeds/bread')
// contains data about our bread
const Breads = require('../models/bread.js')
const Baker = require('../models/baker')

router.get('/data/seed', async (req, res) => {
    await Breads.insertMany(breadSeedData)
    .then(res.redirect('/breads'))
})

// send list of all bread
router.get('/', async (req, res) => {
    var all_breads = await Breads.find()
    var bakers = await Baker.find()
    res.render('index', {breads: all_breads, bakers})
})

// send bread creation form
router.get('/new', async (req, res) => {
    var bakers = await Baker.find()
    res.render('newBread', {bakers}) 
})

// handle new bread POST
router.post('/new', async (req, res) => {
    try {
        req.body.hasGluten = req.body.hasGluten == 'on'
        await Breads.create(req.body)
        res.status(201).redirect('/breads')
    } catch (err) {
        console.log(err)
    }
})

// return information a single loaf of bread
router.get('/:id', async (req, res) => {
    try {
        var bread = await Breads.findOne({_id: req.params.id}).populate('baker')
        res.render('breadDetail', {bread})
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Breads.deleteOne({_id: req.params.id})
        res.status(303).redirect('/breads')
    } catch (err) {
        console.log(err)
    }
})

// sends a bread editing form to client
router.get('/:id/edit', async (req, res) => {
    try {
        var bread = await Breads.findOne({_id: req.params.id})
        var bakers = await Baker.find()
        res.render('edit', {bread, bakers})
    } catch (err) {
        console.log(err)
    }
})

// changes bread data in database
router.post('/:id/edit', async (req, res) => {
    try {
        req.body.hasGluten = req.body.hasGluten == 'on'
        await Breads.updateOne({_id: req.params.id}, req.body)
        res.status(303).redirect(`/breads/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;