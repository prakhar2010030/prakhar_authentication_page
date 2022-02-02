import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const Signup = () => {

  const [userdata, setUserdata] = useState({
    name: "",
    userName: "",
    password: "",
    year: "",
    branch: "",
    gender: "",
    address: "",
    email: "",
    phoneNo: ""
  })
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  let name, value;

  const handleOnchange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserdata({ ...userdata, [name]: value });
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userdata));
    setSubmit(true);
    api();
  }


  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submit) {
      console.log(userdata)
    }

  }, [errors]);




  const api = async () => {
    var pdata = await axios({
      method: 'post',
      url: 'https://immense-reef-69665.herokuapp.com/api/register',
      data: ({ name: userdata.name, userName: userdata.userName, password: userdata.password, year: userdata.year, branch: userdata.branch, gender: userdata.gender, address: userdata.address, email: userdata.email, phoneNo: userdata.phoneNo }),
    });

    // window.onunload = function () { debugger };
    if (!pdata) {
      console.log("invalid");
    } else {
      console.log(pdata);
      const cookie = pdata.data.info;
      const otpdata = pdata.data.otp;
      if (!cookie) {
        alert("already registered");
      }
      const store = window.localStorage.setItem("info", cookie);
      const opdata = window.localStorage.setItem("otp", otpdata);
      console.log(store);
      console.log(opdata);
      if (cookie) {
        nav();
      }

      //  const dis = localStorage.getItem('info');
      //  console.log(dis);
      //  console.log(cookie);

    }

  }


  const validate = (values) => {
    const errors = {};
    const passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9!@#$%&*]{8,16}$/;
    const emailcheck = /^[A-Za-z_0-9]{5,}@[a-z]{3,}.[a-z]{2,}$/;
    const phone = /^[6798]{1}[0-9]{9}$/;

    if (!values.phoneNo) {
      errors.phoneNo = "phone number is required";
    }
    else if (!phone.test(values.phoneNo)) {
      errors.phoneNo = "phone number is invalid";
    }
    if (!values.email) {
      errors.email = "enter your email!";
    }
    else if (!emailcheck.test(values.email)) {
      errors.email = "email is invalid";
    }
    if (!values.password) {
      errors.password = "enter your password!";
    }
    else if (!passwordcheck.test(values.password)) {
      errors.password = "format= '#1Aasdd'' password must be atleast 8 characters and contain atleast 1 special character and 1 number ";
    }

    return errors;
  }





  const navigate = useNavigate();
  const nav = () => navigate("/otp");

  return (
    <><div className="row container shadow rounded w-50 m-5 bg-white text-dark">
      <h1 className='text-center mt-3'>sign up</h1>
      <form onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-6">
            <div className="form-group ">
              <label htmlFor="name"></label>
              <input type="text" className="form-control border-0 border-bottom border-3 bg-light" placeholder="Name" id="name" name='name' required
                value={userdata.name}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="userName"></label>
              <input type="text" className="form-control bg- border-0 border-bottom border-3 bg-light" placeholder="User Name" id="userName" name="userName" required
                value={userdata.userName}
                onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label htmlFor="branch"></label>
              <select className="form-select bg-light" id="branch" name='branch' required
                value={userdata.branch}
                onChange={handleOnchange}>
                <option>branch</option>
                <option>CSE</option>
                <option>CSE(AI&ML)</option>
                <option>CSE(DS)</option>
                <option>CS</option>
                <option>CS&IT</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>ME</option>
                <option>civil Engineering</option>
              </select>
            </div>

            <div className="form-group ">
              <label htmlFor="email"></label>
              <input type="phone" className="form-control border-0 border-bottom border-3 bg-light " placeholder=" Email" id="email"
                name='email' required
                value={userdata.email}
                onChange={handleOnchange} />
            </div>
            <p className="error">{errors.email}</p>
            <div className="form-group ">
              <label htmlFor="address"></label>
              <input type="text" className="form-control border-0 border-bottom border-3 bg-light" placeholder=" Address" id="address" name="address" required
                value={userdata.address}
                onChange={handleOnchange} />
            </div>
            <div className="form-group ">
              <label htmlFor="password"></label>
              <input type="password" className="form-control border-0 border-bottom border-3 bg-light"
                autoComplete='off' placeholder="password" id="password" name="password" required
                value={userdata.password}
                onChange={handleOnchange} />
            </div>
            <p className="error">{errors.password}</p>
          </div>
          <div className="col-6">
            <div className="form-group ">
              <label htmlFor="year"></label>
              <select className="form-select bg-light" id="year" name='year' placeholder='year' required value={userdata.year}
                onChange={handleOnchange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div className="d-flex mt-3">
              <label className="form-check-label" htmlFor="gender">Gender</label>
              <div className="form-check mx-3">
                Male
                <input type="radio" className="form-check-input bg-dark " name="gender" required
                  value="male"
                  onChange={handleOnchange} />
              </div>

              <div className="form-check mx-3">
                Female
                <input type="radio" className="form-check-input bg-dark " name="gender" required
                  value="female"
                  onChange={handleOnchange} />

              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phoneNo"></label>
              <input type="phone" className="form-control border-0 border-bottom border-3 bg-light" placeholder="Contact" id="phoneNo" name='phoneNo' required
                value={userdata.phoneNo}
                onChange={handleOnchange} />
            </div>
            <p className="error">{errors.phoneNo}</p>


          </div>
        </div>
        <div className='text-center mt-4'>
          <button type="submit" className="btn btn-primary rounded-pill w-50  justify-content-center border-0  shadow mb-5 gradient" >Sign Up</button>
        </div>
      </form >
    </div >
    </>);
};



export default Signup;
