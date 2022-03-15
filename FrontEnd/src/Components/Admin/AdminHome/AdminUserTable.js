import axios from "axios";
import React,{useEffect,useState} from "react";
import {Table,Button, Container,FormControl,Form} from "react-bootstrap"
import {Link} from 'react-router-dom'




function AdminUserTable(){
  const [userData, setuserData]=useState([])
  const[userDel,setUserdel]=useState(false)
  const[search,setSearch]=useState("")

    useEffect(()=>{
        console.log("reached admin home useeffect");
        async function fetchData(){
            var { data } = await axios.get('/admin')
            console.log(data);

            data && setuserData(data)
            console.log(userData);
           
         
          
            }
            fetchData()
    },[userDel])

    const Deleteuser=async(id)=>{
      console.log("dddddd");
      await axios.get(`/admin/DeleteUser/${id}`)
      var set=true
      setUserdel(set)
    
    }


    // const searchUser=async()=>{
    //   console.log("000000000000000000000000000000000");

      
    //   var serchdata = userData.filter((user)=>{
    //     console.log(user.name);
    //     console.log(search);
    //     alert("fdf")
    //     if(user.name===search)
    //     {
    //       return true
    //     }
    //   })
    //   setuserData(serchdata)
    //   console.log("000000000000000000000000000000000");

    // }
    return(
     <Container style={{marginTop:"50px"}}>
       <Form style={{width:"500px",marginLeft:"800px"}} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>{setSearch(e.target.value)}}
        />
      
      </Form>

  
        <Table style={{marginTop:"20px"}} striped bordered hover>
          {console.log(userData,"userdata")}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mob No</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        {userData.filter((user)=>{
                    if(setSearch == ""){
                        return user
                    }
                    else if(user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) ){
                        return user
                    }
                }).map((user,index)=>{
          
          console.log(user);
return(
<tbody key={user._id}>
         
<tr>
  <td>{index+1}</td>
  <td>{user.name}</td>
  <td>{user.mob}</td>
  <td>{user.email}</td>
  <td>
  <Link to={`/admin/editUser/${user._id}`}>Edit</Link>
        
  </td>
  <td> <Button onClick={(e)=>{
           e.preventDefault()
           Deleteuser(user._id)
           }} variant="primary" size="sm">delete</Button></td>
</tr>

</tbody>
)
        })}
      </Table>
      </Container>
    )
}

export default AdminUserTable;