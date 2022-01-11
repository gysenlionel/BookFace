import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Routes } from 'react-router-dom'
import Profile from './pages/Profile/profile'
import Login from './pages/Login/Login'
import Formulaire from './pages/Form/Formulaire'

const Chemin = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Formulaire />} />
    </Routes>
  )
}

export default Chemin
