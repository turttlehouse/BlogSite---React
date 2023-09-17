import React, {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import './SingleBlog.css'


const SingleBlog = () => {

  const navigate = useNavigate();

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

 

  //deleteBlog
  const deleteBlog =async()=>{
        const response = await axios.delete("https://650508ffef808d3c66efb88c.mockapi.io/blogs/" + id)

        if(response.status==200)
        {
          navigate("/")
        }
        else{
          alert("something went wrong")
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
              <p className="created-at">Created at: {blog?.createdAt}</p>
          </div>
          <button onClick={deleteBlog}>Delete</button>
          <button onClick={()=>navigate("/editBlog/"+ blog.id)}>Edit</button>
          
      </div>
    </>
    
  )
}

export default SingleBlog