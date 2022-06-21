const express = require('express')
const { italianWords } = require('./data')

const app = express()
app.use(express.json())

const port = 8081

app.get('/api/italianWords', function (req, res) {
  res.json(italianWords)
})

app.listen(port, function () {
  console.log(`Listening to requests on http://localhost:${port}`)
})
