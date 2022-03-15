import express from 'express'
const router=express.Router()
import {getUserData,EditData,updateUser,DeleteUser,userSearch} from '../Helpers/adminHelpers.js'

router.route('/').get(getUserData)

router.route('/edituser/:id').get(EditData)
router.route('/EditUserPost/:id').post(updateUser)
router.route('/DeleteUser/:id').get(DeleteUser)
router.route('/search').post(userSearch)


export default router