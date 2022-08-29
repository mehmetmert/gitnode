const express = require('express')
const mongoose = require('express')
const path = require('path')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const router = require('./server/routes/router')
const morgan = require('morgan')

const app = express()

//dotenv path
dotenv.config({path:'config.env'})


//view engine select
app.set("view engine", "ejs")


//use router
app.use(router)

// use body parser
app.use(bodyParser.urlencoded({extended:true}))

app.set("/css", express.static(path.resolve(__dirname, "assets/css")))
app.set("/js", express.static(path.resolve(__dirname, "assets/js")))
app.set("/img", express.static(path.resolve(__dirname, "aassets/img")))

// use morgan 
app.use(morgan('tiny'))

//PORT connect 
const PORT = process.env.PORT || 8080
app.listen(PORT)