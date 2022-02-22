// setup express
const express = require('express');
const bread = require('../models/bread.js');
const router = express.Router()
// contains data about our bread
const breads = require('../models/bread.js')

// send list of all bread
router.get('/', (req, res) => {
    res.render('index', breads)
})

// send bread creation form
router.get('/new', (req, res) => {
    res.render('newBread')
})

// handle new bread POST
router.post('/new', (req, res) => {
    const bread_name = req.body.breadName
    const bread_image = req.body.breadImage
    const gluten_free = req.body.glutenFree
    let new_bread = {
        name: bread_name,
        image: bread_image,
        gluten_free: gluten_free
    }
    breads.bread.push (new_bread)
    res.status(201).render('index', breads)
})

// return information a single loaf of bread
router.get('/:id', (req, res) => {
    const id = req.params.id;        
    const selectedBread = breads.bread[id]
    res.render('breadDetail', {bread: selectedBread})
})

router.get('/:id/edit', (req, res) => {

})

module.exports = router;