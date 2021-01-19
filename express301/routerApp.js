const express = require('express')
const app = express()
const helmet = require('helmet')
const router = require('./theRouter')
const userRouter = require('./userRouter')

app.use(helmet())
app.use(express.urlencoded())
app.use(express.static('public'))

//Different routers for each directory. More structurized / organized.
app.use('/', router)
app.use('/user', userRouter)

app.listen(3000)
