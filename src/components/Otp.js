import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import axios from "axios";

const OTP = () => {
  const [otp, setOtp] = useState();

  const [isVerified, setIsverified] = useState(false);

  const sendotp = (e) => {
    e.preventDefault();
    console.log(otpd);
    console.log(otp);
    console.log(isVerified);
    if (otpd === otp) {
      setIsverified(true);
    }
    otapi();
    homeapi();
  }


  // useEffect(()=>{
  //   sendotp()
  // },[]);


  const info1 = localStorage.getItem('info');
  const otpd = localStorage.getItem('otp');



  const otapi = async () => {
    var gdata = await axios({
      method: 'put',
      url: 'https://immense-reef-69665.herokuapp.com/api/register/otp/verify',
      data: {
        info: info1,
        isVerified: isVerified
      }
    });
    console.log(gdata);
  }
  const homeapi = async () => {

    var homedata = await axios({
      method: 'get',
      url: 'https://immense-reef-69665.herokuapp.com/api/home',
      data: {
        info: info1,
      }
    });
    console.log(homedata);

    // nav();
  }

  const resend = () => {
    resendapi();
  }
  const resendapi = async () => {

    var resdata = await axios({
      method: 'get',
      url: 'https://immense-reef-69665.herokuapp.com/api/register/resend',
      data: {
        info: info1,
      }
    });
    console.log(resdata);

  }






  const handleOnChange = (e) => {
    setOtp(e.target.value);
  }
  const navigate = useNavigate();
  const nav = () => navigate("/");

  return <>
    <div className="row mt-5 mx-5 container">
      <div className="col-4 mt-5 ">
        <div className="container m-5 bg-light shadow rounded-3 ">
          <div className="container ">
            <h2 className=' text-center'>OTP Verification</h2>
            <p className='mt-3 blockquote text-center'>Enter the OTP sent to your registered email</p>
          </div>

          <form onSubmit={sendotp}>

            <div className="form-group ">
              <label htmlFor="otp"></label>
              <input type="phone" className="form-control border-0 border-bottom border-3 " autoComplete="off" placeholder=" Enter OTP" id="otp" name='otp' onChange={handleOnChange} />
            </div>
            <div className="container-fluid mt-4 text-end">
              <a href='#' onClick={resend}>resend OTP</a>
            </div>

            <div className='text-center mt-5'>
              <button type="submit" className="btn btn-primary  w-75 rounded-pill  shadow border-0 mb-5  gradient" > verify & proceed </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </>;
};

export default OTP;