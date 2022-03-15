import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'

function EditUser() {

  const params = useParams()
    const navigate =useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mob,setMob]=useState('')

    useEffect(async()=>{
       const EditData=await axios(`/admin/edituser/${params.id}`)
       console.log(EditData.data);
       setName(EditData.data.name)
       setEmail(EditData.data.email)
       setMob(EditData.data.mob)
       console.log(name);
       console.log(email);
    },[])
    const EdituserSubmit=async(e)=>{
        console.log(name);
        console.log("submiat fuction for edit");
        console.log(params);
        console.log(params.id);
        e.preventDefault()
        await axios.post(`/admin/EditUserPost/${params.id}`,{name,mob,email}).then(()=>{
            navigate('/adminhome')
        })
       

    }
  
  return (
    <div style={{marginTop:"60px"}} >
      <h3 style={{textAlign:"center"}}>Edit user</h3>

<div className="container">
  <form onSubmit={EdituserSubmit}>
    <label for="fname">Name</label>
    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>

    <label for="lname">Email</label>
    <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <label for="lname">mob</label>
    <input type="text" name="mob" value={mob} onChange={(e)=>{setMob(e.target.value)}}/>

    <input style={{height:"30px"}} type="submit" value="Submit"  />
  </form>
</div>
    </div>
  )
}

export default EditUser
