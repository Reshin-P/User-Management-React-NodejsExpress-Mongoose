import axios from 'axios';
import React, { useState } from 'react'
import {Navbar,Button,Nav,NavDropdown,Container,FormControl,Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
function AdminNavBar() {
  const [search,setSearch]=useState("")
    const navigate=useNavigate()
    const logout = () => {
        localStorage.clear("adminInfo");

        navigate('/adminlogin');
      };
const searchUser=async(e)=>{
  e.preventDefault()
  const userdata=await  axios.post('/admin/search')

}



  return (
    <div>
      <Navbar style={{marginLeft:"70px",marginRight:"70px"}} bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href='#' onClick={()=>{navigate('/adminhome')}} >Admin Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Button  onClick={()=>{
          navigate('/adduser')
        }} >Add</Button>
      </Nav>
     
      
      <Button variant="danger" onClick={()=>{logout()}} to={"/adminlogin"} >Logout</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
      {/* <Navbar style={{marginLeft:"70px",marginRight:"70px"}} bg="light" expand="lg">
  
    <Navbar.Brand href="#home" onClick={()=>{
      navigate('/adminho')
    }} >Admin Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link onClick={()=>{logout()}} to={"/adminlogin"} >Logout</Nav.Link>
        <Button style={{marginLeft:"600px"}} onClick={()=>{
          navigate('/adduser')
        }} >Add</Button>
        
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
</Navbar> */}
    </div>
  )
}

export default   AdminNavBar
