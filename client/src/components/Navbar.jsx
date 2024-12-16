import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const { user, logout } = useAuth()
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div>
        {user ? (
          <>
            <span>{currentUser.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
