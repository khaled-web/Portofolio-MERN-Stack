//.........
//importing
//.........
const Contact = require('../models/contact.js')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors/index.js')
//....
//app
//....

//register
const messageClient = async (req, res) => {
 res.send('message from client')
 // //anyDataNotFound
 // const {
 //  name,
 //  email,
 //  message
 // } = req.body
 // if (!name || !email || !password) {
 //  throw new CustomError.BadRequestError('Please provide all values')
 // }
 // //emailExists
 // const emailAlreadyExists = await Contact.findOne({
 //  email
 // })
 // if (emailAlreadyExists) {
 //  throw new CustomError.BadRequestError('Email already exists')
 // }

 // //schema
 // const contact = await Contact.create({
 //  name,
 //  email,
 //  message
 // })
 // //jwt
 // const token = contact.createJWT()
 // //response
 // res.status(StatusCodes.CREATED).json({
 //  user: {
 //   name: contact.name,
 //   email: contact.email,
 //   message: contact.message
 //  },
 //  token
 // })
}


//login
const getClient = async (req, res) => {
 res.send('get clients')
}

//.........
//exporting
//.........
module.exports = {
 messageClient,
 getClient
}