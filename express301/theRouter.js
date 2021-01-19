const express = require('express')
let router = express.Router()

// instead of app.get(...) we do router.get(...)

router.get('/', (req, res, next) => {
  res.json({
    msg: 'Router works!',
  })
})

module.exports = router
