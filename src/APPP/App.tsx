import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "../Layouts/Layout"
import { PostList } from "../Postandanother/PostList"
import { PostPage } from "../Postandanother/Postpage"
import { NotFound } from "../Postandanother/NotFound"
import "./main.css"


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1 className="homepage-title">Сайт объявлений</h1>} />
          <Route path="posts" element={<PostList />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
