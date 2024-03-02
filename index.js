const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<body style="background-color:Gray;"><h1>bigus di</h1></body>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
