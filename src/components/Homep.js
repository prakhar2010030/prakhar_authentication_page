import React from 'react';
import { useNavigate } from 'react-router-dom';
const Homep = () => {


  const logout = () => {
    localStorage.removeItem("info");
    nav();
  }
  const navigate = useNavigate();
  const nav = ()=>navigate("/");
  return <  >

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CSI</a>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={logout}>logout</a>
            </li>


          </ul>

        </div>
      </div>

    </nav>
      <div className="container  m-5 bg-dark home">zoro</div>
  </>;
};

export default Homep;
