import React ,{useContext} from 'react'
import {Navigate,useLocation} from "react-router-dom";
import {AuthContext} from "../components/Context/AuthContext"

const RequiredAuth = ({children})=> {
  //const navigate=useNavigate();
  const {isAuth} = useContext(AuthContext);
  const {pathname} = useLocation();
    if(isAuth) {
      return children
    }
    else{
      return <Navigate to="./login" state={{from:pathname}} replace/>
    }
  
}

export default RequiredAuth
