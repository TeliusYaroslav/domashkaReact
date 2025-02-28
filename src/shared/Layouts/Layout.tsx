// Импорт не используется, нужно убрать
import { ReactNode } from "react"
import { Outlet, Link } from "react-router-dom"
import "./Layout.css"

export function Layout() {
  return (
    <div className="Layout">
        {/* Это лучше вынести в компонент Header */}
      <header className="header">
        <div className="logo">POSTSITENews</div>
        {/* 4 табуляция, хотя везде 2 */}
            <button className="mainbutton"><Link to="/">Главная</Link></button>
            <button className="postbutton"><Link to="/posts">Посты</Link></button>
            <button className="liked"><Link to="/liked">Избранные</Link></button>
      </header>
      <main><Outlet /></main>
      {/* footer? */}
    </div>
  )
}
