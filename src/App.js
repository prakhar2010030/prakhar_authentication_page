import './App.css';
import OTP from './components/Otp';
import Login from './components/Login';
import  Signup from './components/Signup';
import { Forgotpassword } from './components/Forgotpassword';
import Homep from './components/Homep';
import {Route,Routes}  from "react-router-dom";


function App() {
  return (
    <>
<Routes>
     <Route exact path ='/' element={<Login/>}/ >
     
     <Route  path ='/signup' element={ <Signup/>}/ >
    
     <Route  path ='/otp' element={ <OTP/>}/>
    
     <Route  exact path ='/home'  element={  <Homep/>}/>
   
     <Route  path ='/forgotpassword'element={ <Forgotpassword/>}/>
  
     </Routes>
     </>
  );
}

export default App;
