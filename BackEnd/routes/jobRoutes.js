//.........
//importing
//.........
const express = require('express');
const router = express.Router();
const {
 createJob,
 deleteJob,
 getAllJobs,
 updateJob,
 showStats
} = require('../Controllers/jobController.js')

//....
//app
//....
router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').delete(deleteJob).patch(updateJob)
router.route('/showStats').get(showStats)

//.........
//exporting
//.........
module.exports = router;