import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllBlogs from './pages/AllBlogs/AllBlogs'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import EditBlog from './pages/EditBlog/EditBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllBlogs/>}  />
      <Route path='/singleBlog/:id' element={<SingleBlog/>} />
      <Route path = '/createBlog' element={<CreateBlog/>}  />
      <Route path= '/editBlog' element = {<EditBlog/>}  />

     
    </Routes>
    </BrowserRouter>
  )
}

export default App
