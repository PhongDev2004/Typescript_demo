import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Shop from './pages/Shop'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
