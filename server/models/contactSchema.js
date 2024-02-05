import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String
})


export const Contact = new mongoose.model('contacts',ContactSchema)