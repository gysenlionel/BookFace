import Login from './pages/Login/Login'
import { useStateValue } from './components/StateProvider/StateProvider'
import MenuAppBar from './components/Header/Navbar'
import Chemin from './Routes'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import {
  Routes,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom'

function App() {
  // const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      <>
        <MenuAppBar />
        <Chemin />
      </>
    </div>
  )
}

export default App
