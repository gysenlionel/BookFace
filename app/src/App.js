import './App.css'
import Header from './components/Header/Header.jsx'
import Login from './pages/Login/Login'
import { useStateValue } from './components/StateProvider/StateProvider'
import Widgets from './components/Widget/Widgets'
import Home from './pages/Home/Home'
import Formulaire from './pages/Form/Formulaire'
function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
      {!user ? (
        // <Login />
        <Formulaire />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Home />
          </div>
        </>
      )}
    </div>
  )
}

export default App
