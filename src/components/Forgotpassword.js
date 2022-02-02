import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export const Forgotpassword = () => {

    const [username, setUsername] = useState();

    const sentotp = (e) => {
        e.preventDefault();
        gotapi();
        nav();
    }
    const gotapi = async () => {
        var gotdata = await axios({
            method: 'get',
            url: 'https://immense-reef-69665.herokuapp.com/api/login/forgot',
            data: {
                userName:username
            }
        });
        console.log(gotdata);
    }



    const handleonchange = (e) => {
        setUsername(e.target.value);
    }
    const navigate = useNavigate();
    const nav = () => navigate("/home");
    return <>
        <div className="row mt-5 mx-5 container">
            <div className="col-4 mt-5">
                <div className="container my-5  bg-light shadow rounded-3 px-4 w-75">
                    <h2 className=' text-center my-1 '>Forgot Password</h2>
                    <p className='mt-3 blockquote text-center'>Your password has been sent to your registered email</p>
                    <form onSubmit={sentotp}>

                        <div className="form-group ">
                            <label htmlFor="username"></label>
                            <input type="phone" className="form-control border-0 border-bottom border-3 " autoComplete="off" placeholder=" Enter username" id="username" name='userName' aria-describedby="emailHelp" onChange={handleonchange} />
                        </div>



                        <div className='text-center mt-5'>
                            <button type="submit" className="btn btn-primary  w-75 rounded-pill  shadow border-0 mb-5  gradient" > redirect to login page </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </>;
};
