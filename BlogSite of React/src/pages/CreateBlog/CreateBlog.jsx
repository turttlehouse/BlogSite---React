import React, { useState } from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()

  //First approach for form submission

  // const[title,setTitle] = useState("")
  // const[description,setDescription]=useState("")
  // const[image,setImage]=useState("")



  // console.log(title)

  const createBlog=async(e)=>{
    e.preventDefault()

    //Second Approach of Form submission
    //condition name input tag ma backend ko key ra value pair ma key j xa name ko value ni same hunu paro key sanga yo approach ma

    const formData = new FormData(e.currentTarget)
    // console.log([...formData.entries()])  //yesma form ko data json format ma thiyena
    const data = Object.fromEntries(formData)  //json format ma data send garnu parne hunxa yo line of code le json format ma banaidiyo
    console.log(data)

    // const data ={
    //   title: title,
    //   description : description,
    //   avatar  : image
    // }

    const response = await axios.post("https://650508ffef808d3c66efb88c.mockapi.io/blogs/",data)
     
    console.log(response)
    if(response.status==201){
      // console.log(response.data)
      // setBlogs(response.data)

      // window.location.href="/"    //yesle reload hunxa submit garera home page ma redirect garda tesaile useNavigate vanne hooks use gareko ho

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
        <input type="text" id="title" placeholder="title" name="title" required  />

        <textarea id="description" placeholder="description" name="description" rows="4" required ></textarea>

        <input type="text" id="image" placeholder="imageURL" name="avatar" accept="image/*" required />

        <input type="submit" value="Submit"/>
    </form>
</div>
  )
}
 {/*after required we use to track the field using useState if input field is less onChange={(e)=>setTitle(e.target.value)} */}

export default CreateBlog