import Login from './pages/Login/Login'
import { useStateValue } from './components/StateProvider/StateProvider'
import MenuAppBar from './components/Header/Navbar'
import Chemin from './Routes'
import React, { useEffect, useState } from 'react'

import { UidContext } from './components/AppContext/AppContext'
import axios from 'axios'
import { async } from '@firebase/util'
import { useDispatch } from 'react-redux'
import { getUser } from './actions/user.actions'

function App() {
  // const [{ user }, dispatch] = useStateValue()
  const [uid, setUid] = useState(null)
  const dispatch = useDispatch()
  // useEffect va controlé automatiquement le token de l'user 
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log('No token'))
    }
    fetchToken()

    // on va chercher la data et on l'affiche dans le store
    if (uid) dispatch(getUser(uid))
  }, [uid])
  return (
    // context pour passer id dans toute l app!!
    <UidContext.Provider value={uid}>

      <Chemin />

    </UidContext.Provider>
  )
}

export default App
