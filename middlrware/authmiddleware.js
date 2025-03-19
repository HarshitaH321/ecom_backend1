const jwt = require('jsonwebtoken')

const authmiddleware = (req,res,next)=>{
    const authHeader = req.header("authorization")

    if (!authHeader)return res.status (401).json({message:"Invalid authorization"})
        const token = authHeader.split(" ")[1]
    if (!authHeader)return res.status (401).json({message:"no token provided"})
        try{
    const verified = jwt.verify(token,process.env.JWT_SECRET)
    req.user = verified
    next()
    }
    catch(err){
        return res.status(401).json({message:"Invalid token"})
    }
    
}
   module.exports = authmiddleware
    //authorization:Bearer,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdjNWZjYzZhZGUzYjViZWE1NTMyYyIsImlhdCI6MTc0MjE5NDE3OX0.XmJ5HB2vn571cR8fRcw7-HxIpwvVw72z3vIQsD9T4r8"