import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    estimated_time: String,
})

export const service = new mongoose.model('services',serviceSchema)