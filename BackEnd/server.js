//..............
//importingData
//..............
//cors(fetchingData)
const cors = require('cors')
//express
const express = require('express');
const app = express()
//env
require('dotenv').config()
//express-async-errors instead of try-catch
require('express-async-errors')
//ConnectDB
const connectDB = require('./db/connect.js')
//morgan
const morgan = require('morgan')
//routes
const clientRouter = require('./routes/ContactRoutes.js')
//middleware
const notFoundMiddleware = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
//authenticateUser
const authenticateUser = require('./middleware/auth-JWT.js')


//.........
//AppData
//.........
//cors-fetchingDataFromBack-endToFront-End
app.use(cors())
//morgan..infoTheWarningMessageOnConsole
if (process.env.NODE_ENV !== 'production') {
 app.use(morgan('dev'))
}
//usingData.jsonInPostman
app.use(express.json())
//GeneralRoute
app.get('/', (req, res) => {
 // throw new Error('error')
 res.json({
  msg: "Welcome"
 })
})

app.get('/api/v1', (req, res) => {
 // throw new Error('error')
 res.json({
  msg: "api"
 })
})
//routes
app.use('/api/v1', clientRouter)

//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
 try {
  await connectDB(process.env.MONGO_URL)
  app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
  })
 } catch (error) {
  console.log(error)
 }
}

start()