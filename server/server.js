import express from'express'
import authRoute from './routes/authRout.js'
import { ConnectDb } from './config/db.js'
import { errorMiddleware } from './middlewares/error-middleware.js'
import adminRoute from './routes/admin-router.js'
import cors from "cors"
const PORT = 8000
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/admin',adminRoute)
app.use(errorMiddleware)

ConnectDb() 


app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})