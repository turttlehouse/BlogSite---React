import React, { useState } from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()

  const[title,setTitle] = useState("")
  const[description,setDescription]=useState("")
  const[image,setImage]=useState("")

  // console.log(title)

  const createBlog=async(e)=>{
    e.preventDefault()

    const data ={
      title: title,
      description : description,
      avatar  : image
    }

    const response = await axios.post("https://650508ffef808d3c66efb88c.mockapi.io/blogs/",data)
     
    // console.log(response)
    if(response.status==201){
      // console.log(response.data)
      // setBlogs(response.data)

      //window.location.href="/"    //yesle reload hunxa submit garera home page ma redirect garda tesaile useNavigate vanne hooks use gareko ho

      navigate("/")
    }
    else{
      alert("something went wrong")
    }

  }


  return (
    <div className="container">
      <Navbar/>
    <h1 className="form-title">Add Blog</h1>
    
    <form onSubmit={createBlog}>
        <input type="text" id="title" placeholder="title" name="title" required onChange={(e)=>setTitle(e.target.value)} />

        <textarea id="description" placeholder="description" name="description" rows="4" required onChange={(e)=>setDescription(e.target.value)}></textarea>

        <input type="text" id="image" placeholder="image" name="image" accept="image/*" required onChange={(e)=>setImage(e.target.value)}/>

        <input type="submit" value="Submit"/>
    </form>
</div>
  )
}

export default CreateBlog