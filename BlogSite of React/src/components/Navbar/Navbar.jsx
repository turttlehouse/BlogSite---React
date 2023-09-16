import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/createBlog">AddBlog</a></li>
        
    </ul>
</nav>  )
}

export default Navbar