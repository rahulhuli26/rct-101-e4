
import React,{useContext} from 'react'
import {Link,useNavigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";

const Navbar = () => {
  const{isAuth,logout} =useContext(AuthContext)
  
  const navigate= useNavigate();
  const handleLoginClick=()=>{
    if(isAuth){
      logout();
     
    }
    else{
      navigate("./login")
    }
    // navigate("/Login");
  }


  return (
    <div data-cy="navbar">
      <div style={{display: 'flex', padding:"20px", flexDirection: 'row' }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/product">Product</Link>
       
        {/* <a data-cy="navbar-home-link"></a> */}
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>{isAuth ? "Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
