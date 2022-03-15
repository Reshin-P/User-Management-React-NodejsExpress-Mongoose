import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'



function SignUpPage() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mob, setMob] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmpassword] = useState("")
  const [error, setError] = useState("")


  const RegisterUser = async (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      var data = await axios.post('/', { name, email, mob, password })

      if (data.data) {


        localStorage.setItem('userInfo', JSON.stringify(data.data))
        navigate('/login')
      }
      else {
        setError(data.message)
      }


    } else {

    }
  }
  return (

    <Grid>
      <Paper elevation={20} style={{ padding: "30px 20px", width: "300px", margin: "20px auto" }}>

        <Grid align="center">
          <Avatar>

          </Avatar>
          <h2 >Signup</h2>
          <Typography variant='caption'> Please fill the form to create account    </Typography>
        </Grid>
        <form onSubmit={RegisterUser} >
          <TextField onChange={(e) => {setName(e.target.value) }} fullWidth label="Name" placeholder='Enter your name' />
          <TextField onChange={(e) => setEmail(e.target.value)} fullWidth label="Email" placeholder='Enter your email' />
          <TextField onChange={(e) => setMob(e.target.value)} fullWidth label="Mob" placeholder='Enter your mob no' />
          <TextField onChange={(e) => setPassword(e.target.value)} fullWidth label="Password" type={'password'} placeholder='Enter the password' />
          <TextField onChange={(e) => setConfirmpassword(e.target.value)} fullWidth label="ComfirmPassword" type={'password'} placeholder='Re enter the password' />
          <div>
            <div style={{ marginTop: "10px" }}>
              {/* <Link  >login page</Link> */}

            </div>
            <Button style={{ marginLeft: "10rem", marginTop: "9px" }} type='submit' variant='contained' color='primary'>Sign Up</Button>
          </div>


        </form>

      </Paper>
    </Grid>
  )
}

export default SignUpPage
