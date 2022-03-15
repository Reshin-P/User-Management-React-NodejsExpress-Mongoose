import userSchema from '../DatabaseModel/UserModel.js'
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler'


const registerHandle = asyncHandler(async(req,res)=>{
    console.log("reached hand;ese");
    const {name , email, mob, password } = req.body
    const data = await userSchema.findOne({email})
    if(data){
      
        res.json({data:false,message:"Email Already Exists"})
        
    }else{
        const data =await userSchema.create({name:name ,mob:mob, email:email , password:password})
       res.json({data:{
           _id:data._id,
           name:data.name,
           email:data.email,
           mob:data.mob,
           token:generateToken(data)
           
       }})

      
        console.log("token created");
    }
    
  
})


const LoginCheck=asyncHandler(async(req,res)=>{
    console.log("reached login helper");
    const{email,password}=req.body
    const data=await userSchema.findOne({email})
    if(data){
        if(data.password === password){

            res.json({data,token:generateToken(data)})
        }else{
            res.json({data:false,message:"Invalid password"})
            throw new Error('Invalid Password')
        }
    }else{
        res.json({data:false,message:"Invalid Email "})
        throw new Error('Invalid User')
    }
    
})

export {registerHandle,LoginCheck}