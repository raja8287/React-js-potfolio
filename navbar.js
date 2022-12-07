import React from "react";
import { useState } from "react";
//import ct from "./nambagur";
import {Link,Route,Routes} from "react-router-dom";
import About from "./About";
const Nvbr=()=>{
   
  const [Hamburger,setHamburger]=useState(!true);
  const myArray = ['About', 'Contact', 'Help', 'Login'];  
    
    return (  
      <div className="container">     
          
    
          {myArray.map(name => (  
            <a href="/">
              {name}  
          </a>
          ))}  
          
          <div className="gg"> 
          <Link to='/'>About</Link>
          <Routes>
            <Route path="/" element={<About/>}/>
          </Routes>

            <p>Contact</p>
            <p>Help</p>
            <p>Login</p>

          </div>
          
          
          
          <div className="Search_bar">
          <input placeholder="Search"/>
          <button type="submit" className="s-btn">Search</button>
          
          </div>
          
          <span className="line"> <i className="fa fa-bars"  onClick={()=>setHamburger(!Hamburger)}></i></span>
      </div>  
    
    
 
    
    );  
  }  
       

     
 export default Nvbr;