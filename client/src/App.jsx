import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import Layout from "./components/Layout.jsx"
import Login from "./pages/Login.jsx"
import Instruments from "./pages/Instruments.jsx"
import ShopCart from "./components/ShopCart.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import axios from "axios"

axios.defaults.withCredentials = true

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/instruments" element={<Instruments />} />
              <Route path="/shopcart" element={<ShopCart />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
