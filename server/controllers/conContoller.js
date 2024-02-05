import { services } from "../config/ServiceApi.js"
import { Contact } from "../models/contactSchema.js"
import { service } from "../models/serviceSchema.js"
import fs from 'fs'
export const ContactController=async(req,res)=>{
  try {
    const { name, email, message } = req.body
    const info =  await Contact.create({
        name,
        email,
        message
    })
  return res.status(200).send({
    info,
    message:'message sented successfully',
    success:true
  })

  } catch (error) {
    console.log(error)
  return res.status(500).send({
    error,
    message:'error while sending message'
  })
  }
}


export const ServiceDataController=async(req,res)=>{
  try {
    const serviceData =  services
    const serviceJson= await service.insertMany(serviceData)
    return res.status(200).json({
      message:'services created',
      serviceJson
    })

  } catch (error) {
    console.log(error)
  }
}


export const getServicesDataController=async(req,res)=>{
  try {
    const serviceData = await service.find({})
    return res.status(200).json({
      message:'Services fetched successfully',
      success:true,
      serviceData
    })
  } catch (error) {
    console.log(error)
  }

}