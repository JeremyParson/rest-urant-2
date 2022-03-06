// setup environment variables
require('dotenv').config()

const express = require('express')
const app = express()

// Database
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`connected to MongoDB at: ${MONGO_URI}`)
})

// Engine
app.engine('jsx', require('express-react-views').createEngine())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')

// Used for POST data extraction
app.use(express.urlencoded({
    extended: true
}))

// Static
app.use('/static', express.static('public'))

// method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Routes
app.use('/breads', require('./controller/bread_controller'))
app.use('/bakers', require('./controller/baker_controller'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

// Listen
app.listen(process.env.PORT, () => {
    console.log(`App started at ${process.env.PORT}.`)
})
