//.........
//importing
//.........
const express = require('express')
const router = express.Router()
const {
 messageClient,
 getAllClient
} = require('../Controllers/ContactController')

//....
//app
//....

router.post('/sendMessage', messageClient)
router.get('/users', getAllClient)



//.........
//exporting
//.........
module.exports = router;