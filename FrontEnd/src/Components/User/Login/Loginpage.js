import axios from 'axios'
import React,{useEffect, useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Row,Container,Col,Alert,Form,Button} from "react-bootstrap"
import './Loginpage.css'




function Loginpage() {
   
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [message,setMessage]=useState("")

  const navigate=useNavigate()

  
  const direct=useRef()

  useEffect(()=>{
    console.log("reached lohin second userf");
    const userData=localStorage.getItem("userInfo")
    console.log(userData);
    if(userData){
      navigate('/')
    }
    console.log("suer effect worked");
direct.current.focus()

  },[])


  
 
  console.log(direct);
  console.log("...............................................................");
 
const LoginCheck=async(e)=>{
  e.preventDefault()
  const {data}=await axios.post('/login',{email,password})
  
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(data)
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  if(data.data){
    localStorage.setItem('userInfo',JSON.stringify(data))
    navigate('/')
  }
  else{
    console.log(data.message);
    setMessage(data.message)
    console.log(message);
    console.log("errororooroororor");
  }

 

}

  return (
   <Container className='LoginPage'>
     
     <div className='form'>
     {message && <Alert variant="danger" style={{ width: "19rem" }}>
        <Alert.Heading>
          {message}
        </Alert.Heading>
      </Alert>}
       <h1 style={{color:"green"}} className="text-sucess " >User Login</h1>
       <Row>
           <Col lg={5} md={6} sm={12} className="text-danger" > 
           <Form onSubmit={LoginCheck}>
  <Form.Group className="mb-3 inputs" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={direct} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 inputs" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" />
  </Form.Group>
  <div className='bars'>
<Link to={'/signup'}>signup</Link>
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

export default Loginpage
