const express = require('express')
const app = express()
const roomrouter = require('./router/rooms')
const connectDB = require('./config/db')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
  res.send('Hello World! what happen??')
})

app.use(roomrouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})