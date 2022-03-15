import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {
 
  

    const navigate=useNavigate()
    console.log(props);
    const user=props.data.data
    console.log(user);

    const logout = () => {
        console.log("logout Reached");
        localStorage.clear("userInfo");
        console.log("dddddddddddd");

        navigate('/login');
      };
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">User Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        
    
        
        
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
            <Nav.Link style={{color:"red", marginLeft:'700px'}} href="#link"> {user ? user.name : "" }</Nav.Link>
            <Nav.Link onClick={()=>{logout()}} to={"/"} >Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
