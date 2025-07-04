import React from 'react';// Optional: if you want to add styling

const Header = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
     <img src="/images/sbilogo.png"  style={{width: "50px"}} alt="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "center", alignItems: "center"}}>
        <ul className="navbar-nav" style={{justifyContent: "center", alignItems: "center"}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Add New User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/getAllUser">Get All User</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
};

export default Header;
