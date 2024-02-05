import mongoose from "mongoose";

const mongoUrl = 'mongodb://localhost:27017/new2024'
export const ConnectDb=async()=>{
   await mongoose.connect(mongoUrl).then(()=>{
    console.log('Database connected')
   }).catch((error)=>{
   console.log(error)
   })
}

