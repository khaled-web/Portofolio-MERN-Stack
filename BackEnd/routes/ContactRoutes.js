//.........
//importing
//.........
const express = require('express')
const router = express.Router()
const {
 messageClient,
 getClient
} = require('../Controllers/ContactController')

//....
//app
//....

router.post('/sendMessage', messageClient)
router.get('/users', getClient)



//.........
//exporting
//.........
module.exports = router;