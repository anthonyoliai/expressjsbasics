const express = require('express')
let router = express.Router()

// instead of app.get(...) we do router.get(...)

function validateUser(req, res, next) {
  res.locals.validated = true
  console.log('validated')
  next()
}
// Only this router has access to validateUser.
router.use(validateUser)

// We can use '/' as the current directory which is passed in here is ./user. That's where we start from. So here it would just be /user/.
// There is chaining. So: app.get('/user',router) -> and then in router -> router.get('/') just means /user/

router.get('/', (req, res, next) => {
  res.json({
    msg: 'User Router',
  })
})

module.exports = router
