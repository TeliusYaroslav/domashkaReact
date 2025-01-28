import { createContext, useState, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./main.css"
import { Layout } from "../../shared/Layouts/Layout"
import { PostList } from "../PostListPage/PostList"
import { NotFound } from "../../shared/Postandanother/NotFound"
import { PostPage } from "../PostPage/Postpage"


const LikedPostsContext = createContext({likedPosts: [] as number[],switchLike: (id: number) => {},})

export const useLikedPosts = () => useContext(LikedPostsContext)
export function App() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const switchLike = (id: number) => {const isLiked = likedPosts.includes(id)
    if (isLiked) {
      const updated = likedPosts.filter((postId) => postId !== id)
      console.log( updated)
      setLikedPosts(updated)
    } else {
      const updated = [...likedPosts, id]
      console.log(updated)
      setLikedPosts(updated)
    }
  }

  return (
    <LikedPostsContext.Provider value={{ likedPosts, switchLike }}>
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
    </LikedPostsContext.Provider>
  )
}
