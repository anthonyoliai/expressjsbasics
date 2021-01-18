const express = require('express')
const app = express()

//Use takes 1 argument. The middleware you want to run.
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('<h1>Hi</h1>')
})

app.listen(3000)
console.log('Listening on port 3000...')
