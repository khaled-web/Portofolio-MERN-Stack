//.........
//importing
//.........
const express = require('express')
const router = express.Router()
const {
 messageClient,
 getAllClient,
 deleteMessageClient
} = require('../Controllers/ContactController')

//....
//app
//....

router.post('/sendMessage', messageClient)
router.get('/users', getAllClient)
router.delete('/:id', deleteMessageClient)



//.........
//exporting
//.........
module.exports = router;