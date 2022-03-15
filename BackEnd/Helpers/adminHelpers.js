import userSchema from '../DatabaseModel/UserModel.js'
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler'


const getUserData=asyncHandler(async(req,res)=>{
    const usersData = await userSchema.find({})
    res.json(usersData)
})

const EditData=asyncHandler(async(req,res)=>{


    const userDetails = await userSchema.findById(req.params.id)
    res.json(userDetails)
})

const updateUser=asyncHandler(async(req,res)=>{
    const user = await userSchema.findById(req.params.id)
    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email
        user.mob=req.body.mob||user.mob
      const updatedUser = await user.save()
      res.json({messege:"userEdit Success"})
    }
})


const DeleteUser =asyncHandler(async(req,res)=>{
await userSchema.deleteOne({_id:req.params.id})
res.json({maessege:"User Deleted"})
})


const userSearch=asyncHandler(async(req,res)=>{

})
export {getUserData,EditData,updateUser,DeleteUser,userSearch}