const path = require('path')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
  if (req.query.msg === 'fail') {
    res.locals.msg =
      'Sorry, this username and password combination does not exist'
  } else {
    res.locals.msg = ''
  }
  console.log(res.locals.msg)
  next()
})

app.get('/', (req, res, next) => {
  res.send('Sanity Check')
})

app.get('/login', (req, res, next) => {
  console.log(req.query)
  res.render('login')
})

app.post('/process_login', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  if (password === 'x') {
    res.cookie('username', username)
    res.redirect('/welcome')
  } else {
    res.redirect('/login?msg=fail')
  }
})

app.get('/welcome', (req, res, next) => {
  res.render('welcome', {
    username: req.cookies.username,
  })
})

//Always look in the route has id, and mess with the req/res object if needed.

app.param('id', (req, res, next, id) => {
  console.log(`Params called ${id}`)
  if (id === 'blog') {
    res
  }
  next()
})

//Collon in front means wild card.
// Stored in req.params.storyID
// Cant run exactly the same links with a semicolon, like /story/:storyId/ and /story/:blogId, the first one will always run. Unless you add next().
app.get('/story/:id/', (req, res, next) => {
  res.send(`<h1>Story ${req.params.storyId}</h1>`)
})

app.get('/story/:storyId/:link', (req, res, next) => {
  res.send(`<h1>Story ${req.params.storyId} - ${req.params.link}</h1>`)
})

app.get('/statement', (req, res, next) => {
  // This will render the statement in the browser.
  //res.sendFile(path.join(__dirname, 'userStatements/BankStatementChequing.png'))
  // Download sets the headers. Content disposition is set to attachment.
  res.download(
    path.join(__dirname, 'userStatements/BankStatementChequing.png'),
    'JimsStatement.png',
    (error) => {
      if (error) {
        if (!res.headersSent) res.redirect('/download/error')
      }
    }
  )
})

app.get('/logout', (req, res, next) => {
  res.clearCookie('username')
  res.redirect('/login')
})

app.listen(3000)
