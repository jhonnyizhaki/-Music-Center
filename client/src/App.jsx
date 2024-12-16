import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Layout from "./components/Layout.jsx"
import Login from "./pages/Login.jsx"
import Products from "./pages/Products.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import axios from "axios"

axios.defaults.withCredentials = true

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="products" element={<Products />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
