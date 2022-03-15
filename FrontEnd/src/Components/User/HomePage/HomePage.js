import React,{useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'
import {useNavigate} from 'react-router-dom'




function HomePage() {
  const [userdata,setUserdata]=useState("")
const navigate=useNavigate()
  useEffect(()=>{
    const token=localStorage.getItem('userInfo')
    const user=JSON.parse(token)
    setUserdata(user)
    
    console.log(user);
   if(!token){
     navigate('/login')
   }
    },[])

  
  return (
      <div>
          
<NavBar data={userdata} />
   <Cards/>
      </div>
   
  )
}

export default HomePage
