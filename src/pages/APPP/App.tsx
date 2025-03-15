import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./main.css"
import { LikedPostsProvider } from "../../context/LikedPostsContext"
import { AppRoutes } from "../../routes/Routes"
import { UserContextProvider } from "../../context/userContext"


export function App() {
  
  return (
    <UserContextProvider>
    <LikedPostsProvider>
      <Router>
        <AppRoutes/>
      </Router>
    </LikedPostsProvider>
    </UserContextProvider>
  )
}
