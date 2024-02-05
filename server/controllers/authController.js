import { usermodel } from "../models/authSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const userController = async (req, res) => {
  try {
    const { name, email, phone , password }  =  req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).send({
        success:false,
        message: "All fields are required",
      });
    }
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success:false,
        message: "email already exists",
      });
    }

    const hashPassword = bcrypt.hashSync(password, 12);
    const user = await usermodel.create({
      name,
      email,
      phone,
      password: hashPassword,
      isAdmin:false
    });
 
    res.status(200).send({
      message: "User created successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(600).send({
      success:false,
      message: `Error while creating user ${error}`,
    });
  }
};



export const LoginController =async(req,res)=>{
 try {
  const { email, password } = req.body
  if(!email || !password){
   return res.status(400).send({
    message:'All fields are required'
   })
  }
  const user = await usermodel.findOne({email})
  if(!user){
    return res.status(400).send({
      message:"email doesn't exists"
    })
  }
  const matched =  bcrypt.compareSync(password,user.password)
  if(!matched){
    return res.status(400).send({
      message:"wrong password try again",
      success:false
    })
  }
  const JWTSECRET = 'De4268fgjk3684bkfdkdhs63839780'
  const token = jwt.sign({userId:user._id},JWTSECRET)
  return res.status(200).send({
    message:`user logged in successfully`,
    success:true,
    token
  })
 } catch (error) {
  console.log(error)
  return res.status(600).send({
    message:`error while logging user ${error}`,
    success:false
  })
 }

}

export const getUserController=async(req,res)=>{
   try {
    const userData = req.user;
    console.log(userData)
    res.status(200).json({
      success:true,
      userData
    })
   } catch (error) {
    console.log(error)
    return res.status(600).send({
      message:`error from the user route ${error}`,
      success:false
    })
   }
}

