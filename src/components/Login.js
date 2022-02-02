// import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const info = localStorage.getItem("info");

    const loginapi = async () => {
        console.log(info);
        var logdata = await axios({
            method: 'post',
            url: 'https://immense-reef-69665.herokuapp.com/api/login',
            body: {

                info: info,
                userName: userName,
                password: password
            }
        });
        console.log(logdata);
    }

    const sublogin = (e) => {
        e.preventDefault();
        loginapi();
        nav();

    }


    const handle = (event) => {
        setUserName(event.target.value);
        setPassword(event.target.value);
    }

    const navigate = useNavigate();
    const nav =()=> navigate("/home");


    return <>
        <div className="row mt-5 mx-5 container">
            <div className="col-4 mt-5">
                <div className=" container my-5  bg-light shadow rounded-3 px-4 w-75">
                    <h1 className='form-title text-center my-1 h-50'>Login</h1>
                    <form onSubmit={sublogin} >
                        <div >
                            <span  >userName</span>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="userName"></label>
                            <input type="text" className="form-control border-0 border-bottom border-3 " autoComplete="off" placeholder=" Enter Username" id="userName" name="userName"

                            />
                        </div>
                        <div className="mt-4 mb-0`">
                            <span >Password</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="password" className="form-control border-0 border-bottom border-3" placeholder=" Enter password"
                                name='password'
                                id="password" />
                        </div>
                        <div className='mt-2'>
                            <NavLink to='/forgotpassword' className="float-end  my-2">forgot password?</NavLink>
                        </div>

                        <div className='text-center mt-5'>
                            <button type="submit" className="btn btn-primary  w-75 rounded-pill  shadow border-0 my-3   gradient" >Login</button>
                        </div>
                        <div className='text-center mt-4'>
                            <button type="button" className="btn btn-primary rounded-pill w-75  justify-content-center border-0  shadow mb-5 gradient" onClick={() => navigate("/signup")}>Sign Up</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>
};

export default Login;
