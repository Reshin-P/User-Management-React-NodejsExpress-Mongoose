import Loginpage from "./Components/User/Login/Loginpage"
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import SignUpPage from "./Components/User/SignUp/SignUpPage";
import HomePage from "./Components/User/HomePage/HomePage";
import AdminHome from "./Components/Admin/AdminHome";
import EditUser from "./Components/Admin/AdminHome/EditUser/EditUser";
import AdminLoginpage from "./Components/Admin/AdminHome/AdminLogin/AdminLoginpage";
import AddUser from "./Components/Admin/AddUser/AddUser";

function App() {
  return (
 <Routers>
   <Routes>
   <Route element={<AddUser/>} path='/adduser'/>
     <Route element={<AdminHome/>} path='/adminhome'/>
     <Route element={<AdminLoginpage/>} path='/adminlogin'/>
     <Route element={<Loginpage/>} path='/login' />
     <Route element={<SignUpPage/>} path='/signup' />
     <Route element={<EditUser />} path="/admin/editUser/:id" />
     <Route element={<HomePage/>} path='/' />
   </Routes>
   
 </Routers>
    
  );
}

export default App;
