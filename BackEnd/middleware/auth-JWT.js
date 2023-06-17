//..............
//importingData
//..............
const CustomError = require('../errors')
const jwt = require('jsonwebtoken')


//.........
//AppData
//.........
const auth = async (req, res, next) => {
 const headers = req.headers
 const authHeaders = req.headers.authorization
 if (!authHeaders || !authHeaders.startsWith('Bearer')) {
  throw new CustomError.UnauthenticatedError('Authentication Invalid')
 }
 const token = authHeaders.split(' ')[1]
 try {
  const payload = jwt.verify(token, process.env.JWT_SECRET)
  // console.log(payload)
  req.user = {
   userId: payload.userId
  }
  next()
 } catch (error) {
  throw new CustomError.UnauthenticatedError('Authentication Invalid')
 }
}


//..............
//exportingData
//..............

module.exports = auth