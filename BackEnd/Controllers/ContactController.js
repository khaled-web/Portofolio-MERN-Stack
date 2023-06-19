//.........
//importing
//.........
const Contact = require('../models/contact.js')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors/index.js')
//....
//app
//....

//MessageClient
const messageClient = async (req, res) => {
 //anyDataNotFound
 const {
  name,
  email,
  message
 } = req.body
 if (!name || !email || !message) {
  throw new CustomError.BadRequestError('Please provide all values')
 }
 //don't repeat email
 const emailAlreadyExists = await Contact.findOne({
  email
 })
 if (emailAlreadyExists) {
  throw new CustomError.BadRequestError('Email Already Exists')
 }
 //schema
 const contact = await Contact.create({
  name,
  email,
  message
 })
 //jwt
 const token = contact.createJWT()
 //response
 res.status(StatusCodes.CREATED).json({
  user: {
   name: contact.name,
   email: contact.email,
   message: contact.message
  },
  token
 })
}


//get all clients
const getAllClient = async (req, res) => {
 const contact = await Contact.find({})
 res.status(StatusCodes.OK).json({
  count: contact.length,
  contact
 })
}




//.........
//exporting
//.........
module.exports = {
 messageClient,
 getAllClient
}