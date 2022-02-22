// setup environment variables
require('dotenv').config()

const breads = require('./models/bread.js')
const express = require('express')
const app = express()

// Engine
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')

// Used for POST data extraction
app.use(express.urlencoded({
    extended: true
}))
  
// Static
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

// Bread
app.use('/bread', require('./controller/bread_controller'))

// Bread route

// Listen
app.listen(process.env.PORT, () => {
    console.log(`App started at ${process.env.PORT}.`)
})

