// import React, { useEffect } from "react"
// import { Link } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"
// import Studios from "./Studios"

// const Navbar = () => {
//   const { user, logout } = useAuth()
//   useEffect(() => {
//     console.log(user)
//   }, [user])
//   return (
//     <nav className="navbar">
     
//       <div>
//         <Link to="/">Home</Link>
        
//         <Link to="/instruments">Products</Link>
//         <Link to="/studios">Studios</Link>
//         <Link to="/shopcart" className="cart-icon"></Link>
//       </div>
      
//       <div>
//         {user ? (
//           <>
//             <span className="email">{user.email}</span>
//             <button className="logoutBtn" onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"  // השתמש בקונטקסט של העגלה

const Navbar = () => {
  const { user, logout } = useAuth()
  const { cartItems } = useCart()  // נוודא שאנחנו משתמשים בסטייט של העגלה
  
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/instruments">Products</Link>
        <Link to="/studios">Studios</Link>
        {/* אייקון עגלה עם מספר המוצרים */}
        <Link to="/shopcart" className="cart-icon">
          <img src="cart-icon.svg" alt="Cart" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
      </div>
      
      <div>
        {user ? (
          <>
            <span className="email">{user.email}</span>
            <button className="logoutBtn" onClick={logout}>Logout</button>
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
