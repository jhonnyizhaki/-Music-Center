import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Login from "./components/Login"
import Products from "./components/Products.jsx"
import Register from "./components/Register.jsx"
import Layout from "./components/Layout.jsx"
import Home from './components/Home.jsx';

const App = () => {
  return (
    
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Home />
              }
            />
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
