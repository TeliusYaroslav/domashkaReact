import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "../shared/Layouts/Layout"
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage"
import { PostList } from "../pages/PostListPage/PostList"
import { PostPage } from "../pages/PostPage/Postpage"
import { NotFound } from "../shared/Postandanother/NotFound"
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"

export function AppRoutes() {
  
  return (
      
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<h1 className="homepage-title">Сайт объявлений</h1>}/>
            <Route path="posts" element={<PostList/>}/>
            <Route path="post/:id" element={<PostPage/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="liked" element={<LikedPostsPage/>}/> 
            <Route path="registration" element={<RegistrationPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
          </Route>
        </Routes> 
      
  )
}
