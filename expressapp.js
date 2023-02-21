const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Avirup!')
})
app.get('/about', (req, res) => {
    res.send('Hi!!! This is Avirup')
    //res.send('<h1>I am learning NodeJS</h1><br><p>I am preparing for future Software Interviews</p>');
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})