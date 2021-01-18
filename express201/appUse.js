const express = require('express')
const app = express()

//Express is
//1 a router.
//2 middleware that compromises a web framework. A middleware function is ANY function that has access to the req, res and next object.

// 1. Request comes in
// 2. We need to validate the user sometimes
// 3. We need to store some things into the database
// 4. if there is data from the user, parse it and store it.
// 5. Respond with some JSON, etc.

function validateUser(req, res, next) {
  //Get info from request object
  //Do some stuff with the DB
  res.locals.validated = true
  console.log(res.locals.validated)
  next()
}

app.use('/admin', validateUser)

app.get('/', (req, res, next) => {
  res.send('<h1> Main Page </h1>')
})

app.get('/admin', (req, res, next) => {
  res.send('<h1> Admin page </h1>')
})

app.listen(3000)
