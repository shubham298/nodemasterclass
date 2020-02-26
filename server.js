const express = require("express")
const dotenv = require("dotenv")
const logger = require('./middleware/logger.js')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler=require('./middleware/error.js')
const app = express();

//Body parser //use for req.body
app.use(express.json())

//Load env vars
dotenv.config({
    path: './config/config.env'
})
//Connect to database
connectDB()

//Route files
const bootcamps = require('./routes/bootcamps.js')


//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// app.use(logger)
//Mount routers
app.use('/api/v1/bootcamps', bootcamps)

//Error Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

//Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error :${err.message}`.red.bold);
    //Close Server & exit process
    server.close(() => process.exit(1));
});