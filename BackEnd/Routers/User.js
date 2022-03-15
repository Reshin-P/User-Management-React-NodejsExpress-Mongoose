import express from 'express'
const router=express.Router()
import {registerHandle,LoginCheck} from '../Helpers/userHelpers.js'

router.get("/",(req,res)=>{
    console.log("reached here");
})



router.route('/').post(registerHandle)

router.route('/login').post(LoginCheck)
export default router