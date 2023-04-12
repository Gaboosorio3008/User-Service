import userRouter from '../routes/routes_user.js'
import express from 'express'

const expressApp = express()


//Middlewares
expressApp.use(express.json())

//routes
expressApp.use('/user', userRouter)

export default expressApp