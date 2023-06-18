//.........
//importing
//.........
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//....
//app
//....
const ContactSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'Please provide name'],
  minLength: 3,
  maxLength: 50,
  trim: true,
 },
 email: {
  type: String,
  // unique: true,
  validate: {
   validator: validator.isEmail,
   message: 'Please provide valid email'
  }
 },
 message: {
  type: String,
  required: [true, 'Please provide message'],
  minLength: 3,
  MaxLength: 1000,
  trim: true
 },

})

//hashingPassword(register)
// ContactSchema.pre('save', async function () {

//  if (!this.isModified('password')) return
//  const salt = await bcrypt.genSalt(10)
//  this.password = await bcrypt.hash(this.password, salt)
// })

//CreatingJWT(register, login)
ContactSchema.methods.createJWT = function () {
 return jwt.sign({
  userId: this._id,
  name: this.name,
 }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME
 })
}

//comparePassword(login)
// ContactSchema.methods.comparePassword = async function (pass) {
//  const isMatch = await bcrypt.compare(pass, this.password);
//  return isMatch;
// }


//.........
//exporting
//.........
module.exports = mongoose.model('Client', ContactSchema)