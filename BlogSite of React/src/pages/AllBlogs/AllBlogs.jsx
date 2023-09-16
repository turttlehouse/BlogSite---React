import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AllBlogs.css'


const AllBlogs = () => {
  return (
    <div>
        <Navbar/>

         <div className="card">
             <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"  width="100%"/>
              <div className="container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
              </div>
          </div>
    </div>
  )
}

export default AllBlogs