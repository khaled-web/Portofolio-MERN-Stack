//.........
//importing
//.........
const User = require('../models/user.js')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors')
//....
//app
//....

//register
const registerUser = async (req, res) => {
 //anyDataNotFound
 const {
  name,
  email,
  password
 } = req.body
 if (!name || !email || !password) {
  throw new CustomError.BadRequestError('Please provide all values')
 }
 if (password.length < 6) {
  throw new CustomError.BadRequestError('Please increase the password')
 }
 //emailExists
 const emailAlreadyExists = await User.findOne({
  email
 })
 if (emailAlreadyExists) {
  throw new CustomError.BadRequestError('Email already exists')
 }

 //schema
 const user = await User.create({
  name,
  email,
  password
 })
 //jwt
 const token = user.createJWT()
 //response
 res.status(StatusCodes.CREATED).json({
  user: {
   name: user.name,
   email: user.email,
   lastName: user.lastName,
   location: user.location,
  },
  token,
  location: user.location
 })

}
//login
const loginUser = async (req, res) => {
 const {
  email,
  password
 } = req.body
 if (!email || !password) {
  throw new CustomError.BadRequestError('Please provide all values')
 }
 //checkIfEmailExists
 const user = await User.findOne({
  email
 }).select('+password')
 if (!user) {
  throw new CustomError.UnauthenticatedError('Invalid Credentials')
 }
 //checkPassword
 const isPasswordCorrect = await user.comparePassword(password)
 if (!isPasswordCorrect) {
  throw new CustomError.UnauthenticatedError('Invalid Credentials')
 }
 //createJWT
 const token = user.createJWT()
 //displayPassword
 user.password = undefined;
 res.status(StatusCodes.OK).json({
  user,
  token,
  location: user.location
 })
}
//updateUser
const updateUser = async (req, res) => {
 const {
  name,
  email,
  lastName,
  location
 } = req.body
 if (!name || !email || !lastName || !location) {
  throw new CustomError.BadRequestError('Please provide all values')
 }
 const user = await User.findOne({
  _id: req.user.userId
 })

 user.name = name
 user.email = email
 user.lastName = lastName
 user.location = location
 await user.save()

 const token = user.createJWT()

 res.status(StatusCodes.OK).json({
  user,
  token,
  location: user.location
 })
}

//.........
//exporting
//.........
module.exports = {
 registerUser,
 loginUser,
 updateUser
}