import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AllBlogs.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


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
                     <p onClick={() => navigate('/singleBlog/' + blog.id)} className="see-more"> See More</p>

                </div>
            </div>

              )
               
              
            })
          }

        </div>

         
    </div>
  )
}

export default AllBlogs