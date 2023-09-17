import React, { useEffect } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()

  
  // Define a separate function for navigation
  const handleAddBlogClick = () => {
    navigate('/createBlog');
  };

 
  return (
    <nav className="navbar">
    <ul className="nav-list">
          {/* yesari navigation garda page reload hunxa */}
        {/* <li><a href="/">Home</a></li> */}  

        {/* so using hooks called useNavigate of react to navigate without page reload */}
        {/* you can do by anyways */}

        {/* inline */}
        <li onClick={()=>navigate("/")}>Home</li>

        {/* calling a function  */}
        <li onClick={handleAddBlogClick}>AddBlog</li>
        

        
    </ul>
</nav>  )
}

export default Navbar