const express = require('express')
const app = express()

// App object has a few methods.
// 1. get (READ) 2. post (CREATE) 3. delete (DELETE) 4. put (UPDATE)
// All these HTTP verbs ^ take two arguments. 1: The path , 2: The callback to execute if an HTTP request with THIS verb is made in the path.

// app.all('/', (req, res) => {
//   res.send(`<h1> Welcome to the homepage </h1>`)
// })

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the home GET page!</h1>`)
})
app.post('/', (req, res) => {
  res.send(`<h1>Welcome to the home POST page!</h1>`)
})

app.delete('/', (req, res) => {})

app.put('/', (req, res) => {})

app.listen(3000)
console.log('The server is running on port 3000...')
