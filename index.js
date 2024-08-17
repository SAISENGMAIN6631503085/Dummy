const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('Hello World v2')
  })

app.listen(3000)