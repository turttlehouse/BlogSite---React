import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>  )
}

export default Navbar