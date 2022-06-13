
import React,{useContext, useState} from 'react';
import {AuthContext} from "../components/Context/AuthContext"
const Login = () => {
  const [loginCreds, setLoginCreds]=useState({});

  const {login}=useContext(AuthContext)

  const handleonChange=(e)=>{
    const {name,value}= e.target;
    setLoginCreds({
      ...loginCreds,
      [name]:value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    login()
  }


  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column',margin:"auto",maxWidth:"200px",gap:"10px"}}>
        <input data-cy="login-email" onChange={handleonChange} />
        <input data-cy="login-password"  onChange={handleonChange}/>
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
