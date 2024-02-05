export const adminMiddleware =async(req,res,next)=>{
  try {
    console.log(req.user)
    const adminRole = req.user.isAdmin;
    if(!adminRole){
        res.status(403).json({error: "Access denied. User is not an admin"}) 
    }
    // res.status(200).json({msg:req.user.isAdmin})
    next() 
  } catch (error) {
    next(error)
  }
}