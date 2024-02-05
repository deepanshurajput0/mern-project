import jwt from "jsonwebtoken"
import { usermodel } from "../models/authSchema.js"


export const authMiddleware=async(req,res,next)=>{
    const token = req.header('Authorization')

    if(!token){
        return res.status(401).json({message:'token not provided'})
    }
    const jwtToken = token.replace('Bearer','').trim()
    console.log(jwtToken)

  

    try {
        const isVerified = jwt.verify(jwtToken,'De4268fgjk3684bkfdkdhs63839780')
        const userData = await usermodel.findById(isVerified.userId).select({
            password:0
        })
        req.user = userData;
        req.token = token;
        req.userID = userData._id; 
        console.log(userData)
        next()
    } catch (error) {
        return res.status(401).json({message:'Unauthorized. Invalid Token'})
    }
}

























// import jwt from 'jsonwebtoken'
// import { usermodel } from '../models/authSchema.js';

// export const authMiddleware=async(req,res,next)=>{
//     const token = req.header('Authorization')

//     if(!token){
//         return res.status(401).json({message:'Unauthorized HTTP, Token not provided'})
//     }
//     // console.log(token)

//     const jwtToken = token.replace('Bearer','').trim();
//     console.log(jwtToken)
//     try {
//         const isVerified = jwt.verify(jwtToken,'De4268fgjk3684bkfdkdhs63839780')
//         console.log(isVerified)
//         const userData = await usermodel.findById(isVerified.userId).select({
//             password:0
//         })
//         req.user = userData;
//         req.token = token;
//         req.userID = userData._id; 
//         console.log(userData)
//         next()
//     } catch (error) {
//         return res.status(401).json({message:'Unauthorized. Invalid Token'})
//     }

// }