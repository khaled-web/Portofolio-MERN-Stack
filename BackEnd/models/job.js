//.............
//importing
//.............
const mongoose = require('mongoose')

//.............
//App.
//.............
const JobSchema = new mongoose.Schema({
 company: {
  type: String,
  required: [true, 'Please provide company name'],
  maxLength: 50
 },
 position: {
  type: String,
  required: [true, 'Please provide position'],
  maxLength: 100
 },
 status: {
  type: String,
  enum: ['interview', 'declined', 'pending'],
  default: 'pending'
 },
 jobType: {
  type: String,
  enum: ['full-time', 'part-time', 'remote', 'internship'],
  default: 'full-time'
 },
 jobLocation: {
  type: String,
  default: 'Cairo',
  required: true
 },
 createdBy: {
  type: mongoose.Types.ObjectId,
  ref: 'User',
  required: [true, 'Please provide user']
 },
}, {
 timestamps: true
})

//.............
//exporting
//.............
module.exports = mongoose.model('Job', JobSchema)