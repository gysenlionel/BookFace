import './App.css'
/* import Header from './components/Header/Header.jsx' */
import Login from './pages/Login/Login'
import { useStateValue } from './components/StateProvider/StateProvider'
import Home from './pages/Home/Home'
import Formulaire from './pages/Form/Formulaire'
import MenuAppBar from './components/Header/Navbar'
import Chemin from './Routes'

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
