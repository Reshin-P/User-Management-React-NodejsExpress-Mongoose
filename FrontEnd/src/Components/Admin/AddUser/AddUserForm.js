import React,{useState} from 'react'
import axios from 'axios'
import  { useNavigate} from 'react-router-dom'
import {Avatar, Button, Grid,Paper, TextField, Typography} from '@material-ui/core'



function AddUserForm() {
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const[mob,setMob]=useState("")
  const[password,setPassword]=useState("")
  const[confirmPassword,setConfirmpassword]=useState("")
  const RegisterUser=async(e)=>{
    e.preventDefault()
   if(password===confirmPassword){
     console.log("password matched");
    const {data}= await axios.post('/',{name,email,mob,password})
    console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data))
    navigate('/adminhome')

   }else{
     console.log("password missmatch");
   }
  }
  return (

  <Grid>
      <Paper elevation={20} style={{padding:"30px 20px",width:"300px",margin:"20px auto"}}>
          
          <Grid align="center">
            <Avatar>
           
            </Avatar>
            <h2 style={{}}>Add User</h2>
            <Typography variant='caption'> Please fill the form to create account    </Typography>
          </Grid>
          <form onSubmit={RegisterUser} >
            <TextField  onChange={(e)=>{setName( e.target.value)}}  fullWidth label="Name" placeholder='Enter your name' />
            <TextField onChange={(e)=>setEmail(e.target.value)} fullWidth label="Email" placeholder='Enter your email'/>
            <TextField onChange={(e)=>setMob(e.target.value)} fullWidth label="Mob" placeholder='Enter your mob no'/>
            <TextField onChange={(e)=>setPassword(e.target.value)} fullWidth label="Password" type={'password'} placeholder='Enter the password' />
            <TextField onChange={(e)=>setConfirmpassword(e.target.value)} fullWidth label="ComfirmPassword" type={'password'} placeholder='Re enter the password'/>
            <div>
              
            <Button  style={{marginLeft:"10rem",marginTop:"9px"}} type='submit' variant='contained' color='primary'>Create User </Button>
            </div>
         
         
          </form>

      </Paper>
  </Grid>
  )
}

export default AddUserForm
