import { usermodel } from "../models/authSchema.js"
import { Contact } from "../models/contactSchema.js"
export const getAllUsers=async(req,res)=>{
  try {
    const users = await usermodel.find({}).select({
        password:0
    })
    // console.log(users)
   return res.status(200).send({
        success:true,
        users
    })
} catch (error) {
   console.log(error)  
   return res.status(500).send({
    success:false,
    message:'error while getting users',
    error
})  
  }
}

export const getContacts=async(req,res)=>{
  try {
    const contacts = await Contact.find({})
    return res.status(200).send({
        success:true,
        contacts
    })

  } catch (error) {
    console.log(error)  
    return res.status(500).send({
     success:false,
     message:'error while getting contact',
     error
 }) 
  }
}

export const userDelete=async(req,res)=>{
  try {
    const { id } = req.params
    await usermodel.deleteOne({_id:id})
    return res.status(200).json({
      success:true,
      message:'User Deleted Successfully'
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:'Error while deleting user',
      error
    })
  }
}


export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedata = await usermodel.findOne({ _id: id }, { password: 0 });


    return res.status(200).json({
      success: true,
      updatedata,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};


export const updateUserData=async(req,res)=>{
  try {
    const {id} = req.params
    const { updateData }= req.body

    const updatedUserData = await usermodel.updateOne({_id:id},{$set:updateData})

    return res.status(200).json({
      success: true,
      message:'user updated successfully',
      updatedUserData
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}


export const deleteContact=async(req,res)=>{
   try {
    const { id } = req.params
    await Contact.deleteOne({_id:id})
    return res.status(200).json({
      message:'user deleted successfully',
      success:true
    })    
   } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:'Error while deleting',
      success:false
    })  
   }
}