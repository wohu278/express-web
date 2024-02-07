const express = require('express')
const morgan = require('morgan')
const path = require('path')
const ejs = require('ejs')
const BooksRoute = require('./routes/books.js')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(BooksRoute)
app.use("/static", express.static(path.join(__dirname, "static")));

app.listen(3000)
console.log("Escuchando en puerto 3000");