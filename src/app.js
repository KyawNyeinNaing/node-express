const express = require('express')
const sassConfig = require('./config')
const logger = require('./middleware/logger')
const path = require('path')
const memberRouter = require('./routes/member.router')

const app = express()

app.use(sassConfig)

// Init middleware
app.use(logger)

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, '../public')))

// Call api
app.use('/api/members', memberRouter)

require('dotenv').config()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started om port ${PORT}`))

