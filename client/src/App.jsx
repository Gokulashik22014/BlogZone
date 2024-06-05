import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { UserContextProvider } from './components/context'

//Importing from the components
import Blog from './components/Blog'
import NavBar from './components/NavBar'

//Importing the pages
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import EditPage from './pages/EditPost'
const App=()=>{
  return(
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<BlogPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/edit/:id" element={<EditPage/>}/>

        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App