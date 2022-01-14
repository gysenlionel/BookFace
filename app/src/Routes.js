import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Routes } from 'react-router-dom'
import Profile from './pages/Profile/profile'
import Login from './pages/Login/Login'
import Formulaire from './pages/Form/Formulaire'
import Testform from './pages/Test/Testform'
import { Redirect } from 'react-router-dom'
import Connexion from './components/Connexion/Connexion'

const Chemin = () => {
  return (
    <>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Formulaire />} />
        <Route path="/test" element={<Testform />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </>
  )
}

export default Chemin
