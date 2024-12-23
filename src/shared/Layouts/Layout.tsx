import { ReactNode } from "react"
import { Outlet, Link } from "react-router-dom"
import "./Layout.css"

export function Layout() {
  return (
    <div className="Layout">
      <header className="header">
        <div className="logo">POSTSITENews</div>
            <button><Link to="/">Главная</Link></button>
            <button><Link to="/posts">Посты</Link></button>
      </header>
      <main><Outlet /></main>
    </div>
  )
}
