import React, { useEffect } from 'react'
import AdminUserTable from './AdminHome/AdminUserTable'
import AdminNavBar from './AdminNavbar/AdminNavbar.js'
import {useNavigate} from 'react-router-dom'



function AdminHome() {
  const navigate=useNavigate()
useEffect(()=>{

  var admindata=localStorage.getItem('adminInfo') ? localStorage.getItem('adminInfo'):null
  if(!admindata){
    navigate('/adminlogin')
  }


},[])


  return (
      <div>
        <AdminNavBar/>
      <AdminUserTable/>
      </div>
   
  )
}

export default AdminHome
