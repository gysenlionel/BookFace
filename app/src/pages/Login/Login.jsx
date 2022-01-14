import React from 'react'
import '../../styles/Login.scss'
import { authentification } from '../../components/Firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { actionTypes } from '../../Reducer/Reducer'
import { useStateValue } from '../../components/StateProvider/StateProvider'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
/* import Button from '@mui/material/Button' */
import { purple } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Buttony from './../../components/Button/Button'
import Carrousel from './../../components/caroussel/carrousel'
import Connexion from '../../components/Connexion/Connexion'
import Formulaire from '../Form/Formulaire'
import { useState } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

const Login = () => {
  const [signupmodal, setsignupmodal] = useState(false)
  const [signinmodal, setsigninmodal] = useState(false)
  const [carrousel, setcarrousel] = useState(true)
  const handlemodal = (e) => {
    const { id } = e.target

    if (id == 'signin') {
      setsigninmodal((prevValue) => {
        return !prevValue
      })
      setsignupmodal(false)
      setcarrousel((prevValue) => {
        return !prevValue
      })
    }
    if (id == 'signup') {
      if (signupmodal == true) {
        setsignupmodal(false)
        setsigninmodal(false)
        setcarrousel(true)
      }
      if (signupmodal == false) {
        setsignupmodal(true)
        setcarrousel(false)
        setsigninmodal(false)
      }
    }
  }
  return (
    <Grid className="login" container spacing={2}>
      <Grid xs={12} container direction="column" alignItems="center">
        <Grid>
          <img
            className="react-logo"
            src={process.env.PUBLIC_URL + '/logo_transparentcenter.png'}
            alt="Friendlybook"
          />
        </Grid>
      </Grid>
      <Grid
        className="login_log"
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          {carrousel && <Carrousel />}
          {signinmodal && <Connexion />}
          {signupmodal && <Formulaire />}
        </Grid>
      </Grid>
      <Grid
        xs={12}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <button
          id="signup"
          type="submit"
          onClick={handlemodal}
          className="button"
        >
          Sign Up
        </button>

        <button
          id="signin"
          type="submit"
          onClick={handlemodal}
          className="button"
        >
          Sign In
        </button>

        {/*  <Buttony /> */}
      </Grid>
    </Grid>
  )
}

export default Login
