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
const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'Please provide name'],
  minLength: 3,
  maxLength: 50,
  trim: true,
 },
 email: {
  type: String,
  unique: true,
  validate: {
   validator: validator.isEmail,
   message: 'Please provide valid email'
  },
  unique: true
 },
 password: {
  type: String,
  required: [true, 'Please provide password'],
  minLength: 6,
  select: false //toDisAppearThePasswordFromData
 },
 lastName: {
  type: String,
  required: [true, 'Please provide last name'],
  trim: true,
  maxLength: 20,
  default: 'eissa'
 },
 location: {
  type: String,
  required: [true, 'Please provide location'],
  maxLength: 20,
  default: 'Cairo'
 }
})

//hashingPassword(register)
UserSchema.pre('save', async function () {

 if (!this.isModified('password')) return
 const salt = await bcrypt.genSalt(10)
 this.password = await bcrypt.hash(this.password, salt)
})

//CreatingJWT(register, login)
UserSchema.methods.createJWT = function () {
 return jwt.sign({
  userId: this._id,
  name: this.name,
 }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME
 })
}

//comparePassword(login)
UserSchema.methods.comparePassword = async function (pass) {
 const isMatch = await bcrypt.compare(pass, this.password);
 return isMatch;
}


//.........
//exporting
//.........
module.exports = mongoose.model('User', UserSchema)