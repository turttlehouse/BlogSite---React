import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AllBlogs.css'

// API hit hanna lai axios third party package ko use gareko ho
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


const AllBlogs = () => {
  const navigate = useNavigate()


  const [blogs,setBlogs] = useState([])


  const fetchBlogs=async()=>{
    const response = await axios.get("https://650508ffef808d3c66efb88c.mockapi.io/blogs")
    // console.log(response)
    // console.log(response.data)
    if(response.status==200)
    {
      console.log(response.data)
      setBlogs(response.data)
    }

    



  }


//First time users page ma auda yo function chalxa
  useEffect(()=>{
    // console.log("hello")
    fetchBlogs()


  },[])



  return (
    <div>
        <Navbar/>

        <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
          {
            blogs.map((blog)=>{
              return(
                <div className="card" key={blog.id}>

                <img src={blog.avatar} alt="Avatar"  width="100%"/>
                
                <div className="container">
                     <h4><b>{blog.title}</b></h4> 
                     <p style={{color:"red"}}>{blog.description.slice(0,100)}</p> 

                     
                     <p>{blog.createdAt}</p>
                     {/* see More lai anchor tag ma halera singleBlog page ma redirect garda pani hunthyo tara page reload hunxa tesaile useNavigate hooks use gareko */}
                     {/* <p onClick={()=>navigate("/singleBlog/"+ blog.id)} style={{textAlign:"center"}} className='seemore'>See More</p>   */}
                     <p onClick={() => navigate('/singleBlog/' + blog.id)} className="read-more"> Read More</p>

                </div>
            </div>

              )
               
              
            })
          }

        </div>
      

        <Footer/>

    </div>
  )
}

export default AllBlogs