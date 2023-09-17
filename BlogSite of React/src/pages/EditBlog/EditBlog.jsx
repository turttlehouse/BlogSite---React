import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


const EditBlog = () => {

  const {id} = useParams()
  // console.log(id)

  const [blog,setBlog] = useState({})
  // console.log(blog)

  const navigate = useNavigate()

  //aba ako data ma kehi change gare API lai pathaunu paro vane euta function banaune 
  const updateBlog=async(e)=>{
    e.preventDefault()
    const response = await axios.put("https://650508ffef808d3c66efb88c.mockapi.io/blogs/" + id,blog)
    // console.log(response)
    if (response.status == 200)
    {
      navigate("/singleBlog/" + id)
    }
    else 
    {
      alert("something went wrong")
    }
  }



  const fetchBlog = async()=>{
      const response = await axios.get("https://650508ffef808d3c66efb88c.mockapi.io/blogs/" +id)
        // console.log(response)
        if(response.status == 200)
        {
          setBlog(response.data);
          //console.log(blog)    //blog vanne container vitra hamro data haru baseko xa ki xaina

        }
        else
        {
          alert("something went wrong")
        }




  }

   
  //jaba pani user first choti you page ma landing garxa taba fetchBlogdata vanne function chala vaneko
  useEffect(()=>{
    fetchBlog()

  },[])

  return (
      <div className="container">
        <Navbar/>
      <h1 className="form-title">Add Blog</h1>
      
      <form onSubmit={updateBlog}>
          <input type="text" onChange={(e)=>setBlog({...blog,title:e.target.value})} id="title" placeholder="title" name="title" required value={blog.title}/>

          <textarea id="description" onChange={(e)=>setBlog({...blog,description:e.target.value})} placeholder="description" name="description" rows="4" required value={blog.description} ></textarea>

          <input type="text" id="image" onChange={(e)=>setBlog({...blog,avatar:e.target.value})} placeholder="image" name="avatar" accept="image/*" required value={blog.avatar} />

          <input type="submit" value="Update/Edit"/>
      </form>
  </div>
  )
}

export default EditBlog