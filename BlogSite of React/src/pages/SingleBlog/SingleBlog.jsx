import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

const SingleBlog = () => {

  const {id} = useParams();
  console.log(id)

  const [blog,setBlog] = useState();

  const fetchBlog = async()=>{

      const response = await axios.get(`https://650508ffef808d3c66efb88c.mockapi.io/blogs/${id}`) //use params le single blog ma click garepaxi capture gareko id send gardeko mockapi ma
      
      console.log(response)

      if(response.status==200){
        setBlog(response.data)
        console.log(blog) 
      }
  
    }

  useEffect(()=>{
    fetchBlog()

  },[])


  return (
    <>
          <Navbar />
          <div className="blog-post">
          <div className="avatar">
              <img src={blog?.avatar} alt="Author Avatar" />
          </div>
          <div className="post-content">
              <h1 className="post-title">{blog?.title}</h1>
              <p className="post-description">{blog?.description}</p>
          </div>
      </div>
    </>
    
  )
}

export default SingleBlog