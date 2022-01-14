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
  const [sate, dispatch] = useStateValue()

  const signIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentification, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        console.log(error)
      })
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
          <Carrousel />
          {/* <img
            className="name-logo"
            src={process.env.PUBLIC_URL + '/friendlybook.png'}
            alt=""
          /> */}
        </Grid>
      </Grid>
      <Grid
        xs={12}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <button type="submit" onClick={signIn} className="button">
          Sign Up
        </button>

        <button type="submit" onClick={signIn} className="button">
          Sign In
        </button>

        {/*  <Buttony /> */}
      </Grid>
    </Grid>
  )
}

export default Login
