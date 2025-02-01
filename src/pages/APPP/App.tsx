import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./main.css"
import { LikedPostsProvider } from "../../context/LikedPostsContext"
import { AppRoutes } from "../../routes/Routes"


export function App() {
  
  return (
    <LikedPostsProvider>
      <Router>
        <AppRoutes/>
      </Router>
    </LikedPostsProvider>
  )
}
