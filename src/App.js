import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom"
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return <div className="App">
    <Navbar/>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<RequiredAuth><Products/></RequiredAuth>}/>
      <Route path="/product" element={<RequiredAuth><Product/></RequiredAuth>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </div>;
}

export default App;
