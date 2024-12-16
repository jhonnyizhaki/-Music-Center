import React from "react"
import { Link, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Layout = () => {
  const { user, logout } = useAuth()

  return (
    <div className="page-layout">
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          {user ? (
            <>
              <span
                className="username"
                onClick={() => (window.location.href = "/login")}
              >
                {user.email}
              </span>
              <a onClick={logout}>Log out</a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
      <main className="page-content">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Center Music. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
