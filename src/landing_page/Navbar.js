import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [selectMenu, setSelectMenu] = useState(0);

  const handleMenuClick = (index) =>{
    setSelectMenu(index);
  }

  useEffect(()=>{
    setSelectMenu(0);
  },[])

  const menuClass= "menu";
  const activeMenuClass = "menu selected"
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        <Link className="navbar-brand" to={"/"} onClick={()=>setSelectMenu(0)}>
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-2" style={{marginBottom: "-10px"}} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link onClick={()=>handleMenuClick(1)} className="nav-link active" aria-current="page" to={"/signup"}>
                <p className={selectMenu===1 ? activeMenuClass : menuClass}>Signup</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>handleMenuClick(2)} className="nav-link active" to={"/about"}>
              <p className={selectMenu===2 ? activeMenuClass : menuClass}>About</p>  
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>handleMenuClick(3)} className="nav-link active" to={"/product"}>
                <p className={selectMenu===3 ? activeMenuClass : menuClass}>Product</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>handleMenuClick(4)} className="nav-link active" to={"/pricing"}>
                <p className={selectMenu===4? activeMenuClass : menuClass}>Pricing</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={()=>handleMenuClick(5)} className="nav-link active" to={"/support"}>
                <p className={selectMenu===5? activeMenuClass : menuClass}>Support</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
