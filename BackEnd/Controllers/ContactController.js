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
 //message.length<3
 if (message.length < 5) {
  throw new CustomError.BadRequestError('Please Provide more details about message')
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


//deleteMessageClient
const deleteMessageClient = async (req, res) => {
 const {
  id: contactId
 } = req.params
 const contact = await Contact.findByIdAndRemove({
  _id: contactId
 })
 if (!contact) {
  throw new CustomError.NotFoundError(`No product with id : ${contactId}`)
 }
 res.status(StatusCodes.OK).json({
  msg: 'Success! Client Removed'
 })
}



//.........
//exporting
//.........
module.exports = {
 messageClient,
 getAllClient,
 deleteMessageClient
}