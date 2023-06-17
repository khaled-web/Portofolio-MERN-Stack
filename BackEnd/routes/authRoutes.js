//.........
//importing
//.........
const express = require('express')
const router = express.Router()
const {
 registerUser,
 loginUser,
 updateUser
} = require('../Controllers/authController.js')
const authenticateUser = require('../middleware/auth-JWT.js')

//....
//app
//....

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/updateUser').patch(authenticateUser, updateUser)

//.........
//exporting
//.........
module.exports = router;