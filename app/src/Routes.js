import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Routes } from 'react-router-dom'
import Profile from './pages/Profile/profile'
import Login from './pages/Login/Login'

const Chemin = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Chemin
