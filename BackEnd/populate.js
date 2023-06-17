//........
//import
//........

require('dotenv').config()
const mockData = require('./mock-data.json')
// const Job = require('./models/job.js')
const connectDB = require('./db/connect.js')

//........
//APP..
//........
const start = async () => {
 try {
  await connectDB(process.env.MONGO_URL)
  await Job.create(mockData)
  console.log('Success....')
  process.exit(0)
 } catch (error) {
  console.log(error)
  process.exit(1)
 }
}

start()