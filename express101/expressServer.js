const path = require('path')
const express = require('express')

// An app is the express function created inside the express node module. (createApplication()) invoked and is an express application.
// This application has a lot of objects and functions
const app = express()

app.use(express.static('public'))

//All is a method, and it takes 2 arguments:
// The route and the call back to run if the route is required
app.all('/', (req, res) => {
  //Express handles the basic headers
  //Express handles the end.
  //res.send('<h1> This is the homepage!<h1/>')
  res.sendFile(path.join(__dirname) + '/node.html')
})

app.all('*', (req, res) => {
  res.send('<h1> Sorry this page does not exist </h1>')
})

app.listen(3000)
console.log('The server is listening on port 3000..')
