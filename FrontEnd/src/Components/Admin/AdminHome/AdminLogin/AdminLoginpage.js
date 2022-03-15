
import React, { useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Row, Container, Col, Form, Button } from "react-bootstrap"
import './AdminLoginpage.css'

const admin = {
  email: "admin@gmail.com",
  password: "12345678"
}
function AdminLoginpage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(()=>{
    const adminData = localStorage.getItem('adminInfo') ?
    JSON.stringify(localStorage.getItem('adminInfo')) : null
    if(adminData){
        navigate('/adminhome')
    }else{
      navigate('/adminlogin')
    }
    },[])


  const AdminLoginCheck =  (e) => {
    
    e.preventDefault()
    
    
    if(email===admin.email&&password===admin.password){
      localStorage.setItem('adminInfo',JSON.stringify(admin))
     const data=localStorage.getItem('adminInfo')

      navigate('/adminhome')
    }else{
      console.log("password error");
    }




  }

  return (
    <Container className='LoginPage'>
      <div className='form'>
        <h1 style={{ color: "green" }} className="text-sucess " >Admin Login</h1>
        <Row>
          <Col lg={5} md={6} sm={12} className="text-danger" >
            <Form onSubmit={AdminLoginCheck}>
              <Form.Group className="mb-3 inputs" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 inputs" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>
              <div className='bars'>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>

          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default AdminLoginpage
